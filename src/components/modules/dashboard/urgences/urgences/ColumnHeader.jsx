export default function ColumnHeader({ senior, interne, as, brancardier }) {
  return (
    <div className="p-3 text-sm text-white border-b">
      <p className="font-semibold">Senior : {senior}</p>
      <p>Interne : {interne}</p>
      <p>AS : {as}</p>
      <p>Brancardier : {brancardier}</p>
    </div>
  );
}
