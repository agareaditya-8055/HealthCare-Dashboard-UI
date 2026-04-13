function Sidebar() {
  return (
    <aside className="w-full rounded-2xl bg-app-white p-5 shadow-card xl:w-[367px]">
      <div className="mb-6 flex items-center justify-between">
        <h2 className="text-[32px] font-bold">Patients</h2>
        <img src="/assets/search_FILL0_wght300_GRAD0_opsz24.svg" alt="search" className="h-[18px] w-[18px]" />
      </div>

      <div className="space-y-2">
        <div className="flex items-center gap-3 rounded-lg px-4 py-4">
          <img src="/assets/Layer 8.png" alt="Emily Williams" className="h-12 w-12 rounded-full" />
          <div className="flex-1">
            <p className="font-bold">Emily Williams</p>
            <p className="text-sm text-app-textMuted">Female, 18</p>
          </div>
          <img src="/assets/more_horiz_FILL0_wght300_GRAD0_opsz24.svg" alt="more" className="h-[18px] w-[18px]" />
        </div>

        <div className="flex items-center gap-3 rounded-lg bg-app-mintSoft px-4 py-4">
          <img src="/assets/Layer 2.png" alt="Jessica Taylor" className="h-12 w-12 rounded-full" />
          <div className="flex-1">
            <p className="font-bold">Jessica Taylor</p>
            <p className="text-sm text-app-textMuted">Female, 28</p>
          </div>
          <img src="/assets/more_horiz_FILL0_wght300_GRAD0_opsz24.svg" alt="more" className="h-[18px] w-[18px]" />
        </div>
      </div>
    </aside>
  );
}

export default Sidebar;
