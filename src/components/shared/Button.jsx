export default function Button({ children }) {
  return (
    <button className="px-5 py-2.5 rounded-full bg-linear-to-r from-(--primary) to-(--secondary) text-white font-semibold hover:opacity-90 transition">
      {children}
    </button>
  );
}
