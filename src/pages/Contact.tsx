import { ContactSection } from "../components/ContactSection";
import heroImage from "../../storage/FotoparaourservicesOutdoorShowerarea1HR.jpeg";

export function Contact() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative h-[350px] w-full overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url(${heroImage})`,
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
