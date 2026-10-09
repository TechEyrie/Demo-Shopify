import Icon from "./Icon";

/**
 * Stays mounted so the live region persists; visibility is a class toggle.
 * The original only flipped opacity, so screen readers never heard it.
 */
export default function CartToast({
  visible = false,
  title = "Added to Cart!",
  desc = "Your items are reserved for 15 mins.",
}) {
  return (
    <div
      role="status"
      aria-live="polite"
      className={`pointer-events-none fixed bottom-6 right-6 z-50 flex items-center gap-3 rounded-2xl bg-inverse-surface px-5 py-3.5 text-white shadow-2xl transition-all duration-300 ${
        visible ? "translate-y-0 opacity-100" : "-translate-y-4 opacity-0"
      }`}
    >
      <Icon name="check_circle" className="text-badge-sale text-[22px]" />
      <div>
        <p className="text-label-md font-bold">{title}</p>
        <p className="text-body-sm text-surface-dim">{desc}</p>
      </div>
    </div>
  );
}
