function DiagnosticList({ items }) {
  return (
    <section className="rounded-2xl bg-app-white p-5 shadow-card">
      <h2 className="mb-4 text-[30px] font-bold">Diagnostic List</h2>

      <div className="overflow-hidden rounded-2xl border border-app-border">
        <div className="grid grid-cols-[1.1fr_1.8fr_1fr] bg-app-gray px-4 py-3 text-sm font-bold">
          <span>Problem/Diagnosis</span>
          <span>Description</span>
          <span>Status</span>
        </div>

        <div>
          {items.map((item) => (
            <div key={item.name} className="grid grid-cols-[1.1fr_1.8fr_1fr] border-t border-app-border px-4 py-4 text-sm">
              <span>{item.name}</span>
              <span>{item.description}</span>
              <span>{item.status}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default DiagnosticList;
