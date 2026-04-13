function LabResults({ items }) {
  return (
    <section className="rounded-2xl bg-app-white p-5 shadow-card">
      <h2 className="mb-4 text-[30px] font-bold">Lab Results</h2>
      <div className="space-y-1">
        {items.map((item) => (
          <div key={item} className="flex items-center justify-between rounded-lg px-4 py-3 hover:bg-app-gray">
            <span>{item}</span>
            <img src="/assets/download_FILL0_wght300_GRAD0_opsz24 (1).svg" alt="download" className="h-4 w-4" />
          </div>
        ))}
      </div>
    </section>
  );
}

export default LabResults;
