import heroImage from "../../storage/Sylvester/RearDeckDetailHR.jpeg";
import logoBlack from "../assets/logo-black.png";

export function Hero() {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url(${heroImage})`,
        }}
      >
        <div className="absolute inset-0 bg-black/40" />
      </div>

      <div className="relative h-full flex items-center justify-center">
        <div className="text-center" style={{ padding: '0 2rem' }}>
          <img
            src={logoBlack}
            alt="Square & Plumb"
            style={{
              height: 'auto',
              width: '70%',
              maxWidth: '400px',
              maxHeight: '15vh',
              margin: '0 auto',
              display: 'block',
              objectFit: 'contain',
              filter: 'brightness(0) invert(1) drop-shadow(0 4px 12px rgba(0, 0, 0, 0.5)) drop-shadow(0 2px 6px rgba(0, 0, 0, 0.3))',
            }}
          />
        </div>
      </div>
    </section>
  );
}
