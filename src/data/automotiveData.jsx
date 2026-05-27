const S = (props) => (
  <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" {...props} />
)

export const automotiveData = {
  crumb: 'Automotive & Logistics',
  hero: {
    kicker: 'Integrated automotive & logistics solutions',
    titleHtml: 'Automotive &amp;<br />Logistics',
    subtitle: 'Sun Light Industries supports vehicle sourcing, fleet procurement, parts supply and international logistics with a structured, business-focused approach. We help clients move from inquiry to delivery with reliable coordination, transparent communication and practical execution across every stage of the process.',
    ctaLabel: 'REQUEST CONSULTATION',
    chips: [
      { strong: 'End-to-end sourcing', text: 'From vehicle selection to supplier coordination, every step is organized around speed, clarity and fit.' },
      { strong: 'Flexible delivery model', text: 'Road, multimodal and cross-border flows can be aligned with the needs of each project and market.' },
      { strong: 'Business-ready support', text: 'Documentation, coordination and ongoing communication help keep shipments and procurement on track.' },
    ],
    visualCards: [
      {
        tall: true,
        svg: <S><path d="M10 38h30l8 8v8h-4a6 6 0 0 1-12 0H24a6 6 0 0 1-12 0H8V42h8l4-4Z"/><circle cx="18" cy="54" r="6"/><circle cx="38" cy="54" r="6"/><path d="M22 38V24h14l12 14"/><path d="M12 24h10M10 30h12"/></S>,
        strong: 'Fleet sourcing & transport coordination',
        text: 'A dedicated supply structure for passenger vehicles, commercial fleets and transport-led projects where timing, condition and consistency matter.',
      },
      {
        svg: <S><path d="M12 20h40v24H12z"/><path d="M12 28h40M24 20v24M40 20v24"/><path d="M18 50h28"/></S>,
        strong: 'Supplier network',
        text: 'Built for reliable sourcing across trusted markets, long-term partners and project-driven procurement needs.',
      },
      {
        svg: <S><path d="M12 46c8-12 16-18 24-18s16 6 16 18"/><path d="M20 22 32 10l12 12"/><circle cx="32" cy="30" r="4"/></S>,
        strong: 'Delivery coverage',
        text: 'Structured logistics support for regional and international delivery with clear coordination at every handover point.',
      },
    ],
  },
  pillars: {
    kicker: 'Core capabilities',
    title: 'Automotive supply and logistics built around reliability, timing and control',
    text: 'We combine sourcing, procurement and logistics coordination into one clear service model. The result is a page that presents your offer as practical, premium and execution-ready for clients who value structure, responsiveness and dependable delivery.',
    items: [
      { title: 'Vehicle Sourcing', text: 'Passenger cars, commercial vehicles and specialized transport assets sourced according to project goals, budget and technical requirements.', svg: <S><path d="M8 40h32l8 8v8h-4a6 6 0 0 1-12 0H24a6 6 0 0 1-12 0H8V40Z"/><circle cx="18" cy="56" r="6"/><circle cx="38" cy="56" r="6"/><path d="M18 18h18v14H18zM24 18V8"/></S> },
      { title: 'Fleet Procurement', text: 'Support for multi-unit orders, replacement cycles and project-led procurement where consistency and availability are critical.', svg: <S><path d="M12 18h26v16H12z"/><path d="M18 34v16M32 34v16M8 50h34"/><path d="M44 16h8v34h-8"/></S> },
      { title: 'Parts & Components', text: 'Supply of spare parts, components and aftermarket solutions that help keep fleets, equipment and operations moving without disruption.', svg: <S><path d="M12 20h22v24H12z"/><path d="M18 28h10M18 36h10"/><path d="M40 16h12v32H40z"/><path d="M40 26h12M40 38h12"/></S> },
      { title: 'Cross-Border Logistics', text: 'Road and cross-border logistics planning with close coordination of routing, timing and shipment visibility from dispatch to delivery.', svg: <S><path d="M10 44c7-11 15-17 23-17s16 6 21 17"/><path d="M22 22 33 11l11 11"/><circle cx="33" cy="29" r="4"/><path d="M33 33v14"/></S> },
      { title: 'Customs & Documentation', text: 'Preparation and coordination of shipment paperwork, export documentation and customs-facing processes to reduce delays and friction.', svg: <S><path d="M16 12h24l8 8v32H16z"/><path d="M40 12v8h8"/><path d="M22 30h20M22 38h20M22 46h12"/></S> },
      { title: 'Project Cargo', text: 'Execution support for oversized cargo, industrial transport and custom logistics cases that require tailored handling and planning.', svg: <S><path d="M8 46h48"/><path d="M16 46V24l16-8 16 8v22"/><path d="M24 30h16M24 38h10"/></S> },
    ],
  },
  highlights: [
    {
      reverse: false,
      placeholder: {
        tag: 'Supply chain insight',
        svg: <S><path d="M8 42h30l8 8v6h-4a5 5 0 0 1-10 0H24a5 5 0 0 1-10 0H8V42Z"/><circle cx="18" cy="56" r="5"/><circle cx="38" cy="56" r="5"/><path d="M18 20h20v14H18z"/><path d="M48 18h8M52 14v8"/></S>,
        title: 'Automotive sourcing workflow',
        text: 'A visual space that supports the sourcing story: evaluation, supplier matching, vehicle readiness and coordinated release for onward delivery.',
      },
      copy: {
        kicker: 'Automotive expertise',
        title: 'A sourcing model designed for quality decisions and dependable execution',
        text: 'Our automotive service is positioned around careful sourcing, aligned expectations and smooth coordination between supplier, transport and client.',
        list: [
          'Structured sourcing for passenger vehicles, commercial units and project-specific transport equipment.',
          'Clear communication across inquiry, selection, confirmation, release and dispatch stages.',
          'A premium client experience built on responsiveness, transparency and practical follow-through.',
        ],
      },
    },
    {
      reverse: true,
      placeholder: {
        tag: 'Operations overview',
        svg: <S><path d="M10 18h44v28H10z"/><path d="M10 28h44M24 18v28M40 18v28"/><path d="M18 52h28"/><path d="M50 10h8v8"/></S>,
        title: 'Logistics coordination framework',
        text: 'A visual block for transport planning, warehouse flow, route control and shipment coordination that reinforces the operational side of the service.',
      },
      copy: {
        kicker: 'Logistics operations',
        title: 'Logistics support that keeps procurement, movement and documentation aligned',
        text: 'The logistics side of the service is built to support controlled delivery, organized handovers and reduced operational friction.',
        list: [
          'Coordinated transport planning for local, regional and international delivery requirements.',
          'Support across shipment paperwork, customs-facing preparation and communication checkpoints.',
          'Execution that balances delivery speed, cargo visibility and operational reliability.',
        ],
      },
    },
  ],
  cta: {
    title: 'Need a dependable partner for automotive sourcing and logistics?',
    text: 'We support clients who value organized procurement, responsive communication and disciplined delivery coordination. Whether the need is a single vehicle, a fleet requirement or a logistics-led supply project, the goal remains the same: reliable execution with premium service standards.',
  },
}
