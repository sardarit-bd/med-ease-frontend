export default function RightSidebar() {
  return (
    <div className="w-60 p-4 flex flex-col gap-4 bg-gradient-to-b from-[var(--primary)] to-[var(--secondary)]">

      <RightCard title="Administration">
        <p>Chef de Garde : Stéphanie Chopard</p>
        <p>Cadre : Daniela Nol</p>
      </RightCard>

      <RightCard title="Soins Intensifs">
        <p>Réanimation : B003</p>
        <p>ICU : B018</p>
      </RightCard>

      <RightCard title="Médecine / Cardiologie">
        <p>Senior : B002</p>
        <p>Paramed : B013</p>
      </RightCard>

      <button className="mt-2 bg-gradient-to-r from-[#3074B5] to-[#61D0BF] text-white px-5 py-2 rounded-full text-sm">
        Voir Plus
      </button>

    </div>
  );
}

function RightCard({ title, children }) {
  return (
    <div className="bg-white p-4 shadow-md rounded-xl text-sm text-gray-700">
      <h3 className="font-semibold mb-3">{title}</h3>
      {children}
    </div>
  );
}
