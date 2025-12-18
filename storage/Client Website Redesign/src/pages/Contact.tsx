import { ContactSection } from "../components/ContactSection";

export function Contact() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative h-[350px] w-full overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1759150712360-6d48015e4f86?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjByZW5vdmF0aW9uJTIwaG9tZXxlbnwxfHx8fDE3NjI0MDkyOTd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral')",
          }}
        >
          <div className="absolute inset-0 bg-black/40" />
        </div>

        <div className="relative h-full flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-5xl mb-4">Build With Us</h1>
            <div className="w-16 h-0.5 bg-[#ED1C24] mx-auto"></div>
          </div>
        </div>
      </section>

      <ContactSection />
    </>
  );
}
