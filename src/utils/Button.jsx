export default function Button({
  children,
  onClick,
  className,
  type,
  disabled,
}) {
  return (
    <button
      type={type || "button"}
      disabled={disabled}
      className={`px-5 flex items-center gap-2 py-2 mt-2 rounded-full bg-linear-to-r from-(--primary) to-(--secondary) text-white font-semibold w-fit cursor-pointer ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
