import { css, html, nothing, type TemplateResult } from "lit";

/**
 * Home Assistant's own form controls for the card editors, each with a
 * fallback, because the frontend keeps replacing them: 2026.4 removed
 * `<ha-textfield>` for `<ha-input>` (frontend PR #30349 - an undefined
 * element renders nothing, which silently emptied the Librus cards' editor),
 * and `<ha-formfield>` is on its way out (PR #54200). Whatever exists is
 * used; a plain element is the last resort, so a field never disappears.
 */

export interface SelectOption {
  value: string;
  label: string;
}

/**
 * A text/number field. The value is committed when the field is left, on
 * Enter, or on `change` - not on every keystroke, so a number's clamp does
 * not fight the typing.
 */
export function haInput(
  label: string,
  value: string,
  commit: (value: string) => void,
  opts: { type?: "number"; min?: number; max?: number; step?: number } = {},
  end?: TemplateResult
): TemplateResult {
  let last = value;
  const done = (ev: Event): void => {
    const next = String((ev.currentTarget as { value?: unknown } | null)?.value ?? "");
    if (next === last) return;
    last = next;
    commit(next);
  };
  const onKey = (ev: KeyboardEvent): void => {
    if (ev.key === "Enter") done(ev);
  };
  if (customElements.get("ha-input")) {
    return html`
      <ha-input
        .label=${label}
        .value=${value}
        .type=${opts.type ?? "text"}
        .min=${opts.min}
        .max=${opts.max}
        .step=${opts.step}
        ?without-spin-buttons=${opts.type === "number"}
        @change=${done}
        @focusout=${done}
        @keydown=${onKey}
        >${end ? html`<span slot="end">${end}</span>` : nothing}</ha-input
      >
    `;
  }
  if (customElements.get("ha-textfield")) {
    return html`
      <ha-textfield
        label=${label}
        .value=${value}
        type=${opts.type ?? "text"}
        ?no-spinner=${opts.type === "number"}
        min=${opts.min ?? ""}
        max=${opts.max ?? ""}
        step=${opts.step ?? ""}
        @change=${done}
        @focusout=${done}
        @keydown=${onKey}
      ></ha-textfield>
      ${end ? html`<span class="end-outside">${end}</span>` : nothing}
    `;
  }
  return html`
    <label class="plain">
      <span>${label}</span>
      <input
        .value=${value}
        type=${opts.type ?? "text"}
        min=${opts.min ?? ""}
        max=${opts.max ?? ""}
        step=${opts.step ?? ""}
        @change=${done}
        @keydown=${onKey}
      />
      ${end ? html`<span class="end-outside">${end}</span>` : nothing}
    </label>
  `;
}

/**
 * Read the picked value from either shape `<ha-select>` hands over: the
 * current (`.options`-driven) one carries it as `ev.detail.value`; the
 * older MWC one sends a bare `{index}` and fires `closed`, so fall back to
 * the element's own `.value`, which is already updated by then.
 */
function selectValue(ev: Event): string {
  const detail = (ev as CustomEvent<{ value?: string | number }>).detail;
  if (detail && detail.value !== undefined) return String(detail.value);
  const el = ev.currentTarget as (Element & { value?: string }) | null;
  return el?.value ?? "";
}

/** A dropdown. `pick` runs only when the value actually changes. */
export function haSelect(
  label: string,
  value: string,
  options: SelectOption[],
  pick: (value: string) => void
): TemplateResult {
  const onPick = (ev: Event): void => {
    const next = selectValue(ev);
    if (next && next !== value) pick(next);
  };
  if (!customElements.get("ha-select")) {
    return html`
      <label class="plain">
        <span>${label}</span>
        <select @change=${(ev: Event) => onPick(ev)}>
          ${options.map((o) => html`<option value=${o.value} ?selected=${o.value === value}>${o.label}</option>`)}
        </select>
      </label>
    `;
  }
  return html`
    <ha-select
      label=${label}
      .value=${value}
      .options=${options}
      naturalMenuWidth
      fixedMenuPosition
      @selected=${onPick}
      @closed=${(ev: Event) => {
        // The editor dialog closes on a bubbling `closed`.
        ev.stopPropagation();
        onPick(ev);
      }}
    >
      ${options.map((o) => html`<ha-list-item .value=${o.value}>${o.label}</ha-list-item>`)}
    </ha-select>
  `;
}

/** An on/off switch with its label. */
export function haSwitch(label: string, checked: boolean, change: (checked: boolean) => void): TemplateResult {
  const onChange = (ev: Event): void => change((ev.target as HTMLInputElement).checked);
  if (!customElements.get("ha-switch")) {
    return html`
      <label class="plain check">
        <input type="checkbox" .checked=${checked} @change=${onChange} />
        <span>${label}</span>
      </label>
    `;
  }
  // Without <ha-formfield> the switch takes its label as content.
  if (!customElements.get("ha-formfield")) {
    return html`<ha-switch .checked=${checked} @change=${onChange}>${label}</ha-switch>`;
  }
  return html`
    <ha-formfield label=${label}>
      <ha-switch .checked=${checked} @change=${onChange}></ha-switch>
    </ha-formfield>
  `;
}

/** Layout for every editor built from these controls. */
export const editorStyles = css`
  .form {
    display: flex;
    flex-direction: column;
    gap: 12px;
    padding: 4px 0;
  }
  ha-select,
  ha-input,
  ha-textfield,
  ha-device-picker {
    display: block;
    width: 100%;
  }
  .hint {
    font-size: 0.85rem;
    color: var(--secondary-text-color);
    margin-top: -6px;
    padding: 0 2px;
  }
  .group-label {
    font-size: 0.72rem;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.06em;
    color: var(--secondary-text-color);
  }
  hr.sep {
    border: none;
    border-top: 1px solid var(--divider-color);
    margin: 4px 0;
    width: 100%;
  }
  label.plain {
    display: flex;
    flex-direction: column;
    gap: 4px;
    font-size: 0.85rem;
    color: var(--secondary-text-color);
  }
  label.plain.check {
    flex-direction: row;
    align-items: center;
    gap: 8px;
    color: var(--primary-text-color);
  }
  .color-field {
    display: flex;
    flex-direction: column;
    gap: 8px;
  }
  .preview {
    display: inline-block;
    width: 18px;
    height: 18px;
    border-radius: 50%;
    margin-inline-end: 4px;
    vertical-align: middle;
    box-shadow: inset 0 0 0 1px rgba(0, 0, 0, 0.15);
  }
  .preview.none {
    background: repeating-conic-gradient(var(--divider-color) 0 25%, transparent 0 50%) 50% / 8px 8px;
  }
  .end-outside {
    align-self: flex-end;
  }
  .swatches {
    display: flex;
    gap: 8px;
    flex-wrap: wrap;
  }
  .swatch {
    width: 24px;
    height: 24px;
    border-radius: 50%;
    border: none;
    padding: 0;
    cursor: pointer;
    box-shadow: inset 0 0 0 1px rgba(0, 0, 0, 0.15);
  }
  .swatch.selected {
    outline: 2px solid var(--primary-text-color);
    outline-offset: 2px;
  }
  .swatch:focus-visible {
    outline: 2px solid var(--primary-color);
    outline-offset: 2px;
  }
  label.plain input:not([type="checkbox"]),
  label.plain select {
    font: inherit;
    color: var(--primary-text-color);
    background: var(--card-background-color, transparent);
    border: 1px solid var(--divider-color);
    border-radius: 6px;
    padding: 8px 10px;
  }
`;
