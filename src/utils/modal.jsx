export default function Modal({ children }) {
  return (
    <div className="absolute inset-0 w-screen h-screen bg-[#00000000] flex items-center justify-center">
      {children}
    </div>
  );
}
