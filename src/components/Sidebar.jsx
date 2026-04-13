const sidebarPatients = [
  { name: 'Emily Williams', meta: 'Female, 18', image: '/assets/Layer 8.png' },
  { name: 'Ryan Johnson', meta: 'Male, 45', image: '/assets/Layer 3.png' },
  { name: 'Brandon Mitchell', meta: 'Male, 36', image: '/assets/Layer 1.png' },
  { name: 'Jessica Taylor', meta: 'Female, 28', image: '/assets/Layer 2.png', active: true },
  { name: 'Samantha Johnson', meta: 'Female, 56', image: '/assets/Layer 9.png' },
  { name: 'Ashley Martinez', meta: 'Female, 54', image: '/assets/Layer 10.png' },
  { name: 'Olivia Brown', meta: 'Female, 32', image: '/assets/Layer 4.png' },
  { name: 'Tyler Davis', meta: 'Male, 19', image: '/assets/Layer 5.png' },
];

function Sidebar() {
  return (
    <aside className="w-full rounded-2xl bg-app-white p-5 shadow-card xl:h-[1015px] xl:w-[367px]">
      <div className="mb-6 flex items-center justify-between">
        <h2 className="text-[32px] font-bold">Patients</h2>
        <img src="/assets/search_FILL0_wght300_GRAD0_opsz24.svg" alt="search" className="h-[18px] w-[18px]" />
      </div>

      <div className="h-[900px] space-y-2 overflow-y-auto pr-1">
        {sidebarPatients.map((patient) => (
          <div
            key={patient.name}
            className={`flex items-center gap-3 rounded-lg px-4 py-4 ${patient.active ? 'bg-app-mintSoft' : ''}`}
          >
            <img src={patient.image} alt={patient.name} className="h-12 w-12 rounded-full" />
            <div className="flex-1">
              <p className="font-bold">{patient.name}</p>
              <p className="text-sm text-app-textMuted">{patient.meta}</p>
            </div>
            <img src="/assets/more_horiz_FILL0_wght300_GRAD0_opsz24.svg" alt="more" className="h-[18px] w-[18px]" />
          </div>
        ))}
      </div>
    </aside>
  );
}

export default Sidebar;
