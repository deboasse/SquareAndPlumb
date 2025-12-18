export function Hero() {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1729837149098-1e173e7b96fb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBjb25zdHJ1Y3Rpb24lMjBpbnRlcmlvcnxlbnwxfHx8fDE3NjI0MDkyOTd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral')",
        }}
      >
        <div className="absolute inset-0 bg-black/40" />
      </div>

      <div className="relative h-full flex items-center justify-center">
        <div className="text-center text-white">
          <h1 className="text-6xl mb-4">
            Square <span className="text-[#ED1C24]">&</span> Plumb
          </h1>
          <div className="w-16 h-0.5 bg-[#ED1C24] mx-auto"></div>
        </div>
      </div>
    </section>
  );
}
