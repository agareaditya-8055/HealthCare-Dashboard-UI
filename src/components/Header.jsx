const navItems = [
  { icon: '/assets/home_FILL0_wght300_GRAD0_opsz24.svg', label: 'Overview' },
  { icon: '/assets/group_FILL0_wght300_GRAD0_opsz24.svg', label: 'Patients', active: true },
  { icon: '/assets/calendar_today_FILL0_wght300_GRAD0_opsz24.svg', label: 'Schedule' },
  { icon: '/assets/chat_bubble_FILL0_wght300_GRAD0_opsz24.svg', label: 'Message' },
  { icon: '/assets/credit_card_FILL0_wght300_GRAD0_opsz24.svg', label: 'Transactions' },
];

function Header() {
  return (
    <header className="mb-6 flex items-center justify-between rounded-[70px] border border-app-border bg-app-white px-8 py-3 shadow-card">
      <div className="flex items-center gap-10">
        <img src="/assets/TestLogo.svg" alt="Tech Care" className="h-10 w-[211px]" />
        <nav className="flex items-center gap-3">
          {navItems.map((item) => (
            <div
              key={item.label}
              className={`flex items-center gap-2 rounded-[41px] px-4 py-3 text-sm font-semibold ${
                item.active ? 'bg-app-mint text-app-navy' : 'text-app-navy'
              }`}
            >
              <img src={item.icon} alt="" className="h-4 w-4" aria-hidden />
              <span>{item.label}</span>
            </div>
          ))}
        </nav>
      </div>

      <div className="flex items-center gap-3">
        <img src="/assets/senior-woman-doctor-and-portrait-smile-for-health-2023-11-27-05-18-16-utc.png" alt="Dr. Jose Simmons" className="h-11 w-11 rounded-full object-cover" />
        <div className="mr-2">
          <p className="text-sm font-bold leading-4">Dr. Jose Simmons</p>
          <p className="text-sm leading-4 text-app-textMuted">General Practitioner</p>
        </div>
        <img src="/assets/settings_FILL0_wght300_GRAD0_opsz24.svg" alt="settings" className="h-[18px] w-[18px]" />
        <img src="/assets/more_vert_FILL0_wght300_GRAD0_opsz24.svg" alt="more" className="h-[18px] w-[18px]" />
      </div>
    </header>
  );
}

export default Header;
