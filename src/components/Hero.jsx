export default function Hero() {
  return (
    <div className="flex flex-col" style={{ paddingTop: '8px' }}>
      {/* Title block */}
      <section className="text-center">
        <h1
          className="font-serif font-bold"
          style={{
            fontSize: 'clamp(30px, 4.6vw, 86px)',
            lineHeight: 1.05,
            color: '#171717',
            letterSpacing: '0.12px',
          }}
        >
          DRIVING GLOBAL TRADE.<br />
          EMPOWERING SMART ENERGY.
        </h1>

        <p
          className="mx-auto font-semibold"
          style={{
            marginTop: '16px',
            fontSize: 'clamp(15px, 1.45vw, 28px)',
            lineHeight: 1.4,
            color: '#2c2c2c',
            maxWidth: '980px',
          }}
        >
          International trade experts since 2018. Your premium partner in vehicles,
          industrial tools, and intelligent solar energy systems.
        </p>

        <div className="flex justify-center flex-wrap gap-3" style={{ marginTop: '22px' }}>
          <a
            href="#specializations"
            className="btn-shine relative overflow-hidden inline-flex items-center justify-center rounded-full font-bold transition-all duration-300 hover:-translate-y-1"
            style={{
              minHeight: '50px',
              padding: '0 clamp(20px, 3vw, 42px)',
              fontSize: 'clamp(13px, 1.1vw, 20px)',
              background: '#e4d68d',
              color: '#4a4a2d',
            }}
          >
            EXPLORE CATALOGUE
          </a>
          <a
            href="#about"
            className="btn-shine relative overflow-hidden inline-flex items-center justify-center rounded-full font-bold transition-all duration-300 hover:-translate-y-1"
            style={{
              minHeight: '50px',
              padding: '0 clamp(20px, 3vw, 42px)',
              fontSize: 'clamp(13px, 1.1vw, 20px)',
              border: '2px solid #6a7c41',
              color: '#4b5d2d',
              background: 'rgba(255,255,255,0.3)',
            }}
          >
            OUR MISSION
          </a>
        </div>
      </section>

      {/* Hero image + intro text */}
      <section
        id="intro"
        className="flex flex-col md:flex-row md:items-start md:justify-between"
        style={{ gap: '32px', paddingTop: '24px' }}
      >
        <div className="w-full md:flex-[0_1_58%] min-w-0">
          <img
            src="/images/hero-truck-solar.png"
            alt="Truck and solar panels"
            className="w-full"
            style={{ maxHeight: '56vh', objectFit: 'cover', borderRadius: '24px' }}
          />
        </div>

        <div
          className="w-full md:flex-[0_1_42%] min-w-0 flex flex-col justify-center"
          style={{ maxWidth: '680px' }}
        >
          <h2
            className="font-serif font-bold"
            style={{ fontSize: 'clamp(26px, 3.2vw, 62px)', lineHeight: 1.05, color: '#4b4a24' }}
          >
            DEFINING THE FUTURE OF TRADE
          </h2>
          <p style={{ marginTop: '16px', fontSize: 'clamp(14px, 1.2vw, 24px)', lineHeight: 1.5, color: '#222' }}>
            SUN LIGHT LTD is more a solution, independewds and global logistics. By
            our premium success of expertise in the Automotive sector with innovative
            solar technologies, and provide business in tools for sustainable growth.
          </p>
          <p style={{ marginTop: '12px', fontSize: 'clamp(14px, 1.2vw, 24px)', lineHeight: 1.5, color: '#222' }}>
            Our mission is bring the light of technology and transparency project,
            presents using impeccability and transparency at every stage of cooperation.
          </p>
        </div>
      </section>
    </div>
  )
}
