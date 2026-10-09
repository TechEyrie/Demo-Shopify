/**
 * Material Symbols glyph. Always decorative — every icon in this page sits next
 * to a real text label or on a button that carries its own aria-label, so the
 * glyph is hidden from screen readers.
 */
export default function Icon({ name, className = "", ...props }) {
  return (
    <span aria-hidden="true" className={`material-symbols-outlined ${className}`} {...props}>
      {name}
    </span>
  );
}
