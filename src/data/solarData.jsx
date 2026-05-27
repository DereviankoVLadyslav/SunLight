const S = (props) => (
  <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" {...props} />
)

export const solarData = {
  crumb: 'Solar Energy Systems',
  hero: {
    kicker: 'Commercial solar and energy infrastructure',
    titleHtml: 'Solar Energy<br />Systems',
    subtitle: 'Sun Light Industries provides business-focused solar solutions for commercial, industrial and project-led applications. From module and inverter selection to storage integration and procurement support, we help clients build efficient, scalable energy systems that reduce operating costs and strengthen long-term resilience.',
    ctaLabel: 'REQUEST CONSULTATION',
    chips: [
      { strong: 'Scalable system planning', text: 'Solar configurations aligned with site conditions, load profiles and long-term growth targets.' },
      { strong: 'Tier-1 technology focus', text: 'Reliable components selected for performance, durability and dependable project outcomes.' },
      { strong: 'Business-ready delivery', text: 'Structured support across procurement, documentation, coordination and implementation planning.' },
    ],
    visualCards: [
      {
        tall: true,
        svg: <S><rect x="10" y="24" width="22" height="16" rx="2"/><path d="M14 29h14M14 35h14M21 24v16"/><path d="M44 14v22M51 8v28M58 18v18"/><circle cx="46" cy="46" r="8"/><path d="M46 34v4M46 50v4M34 46h4M50 46h4M38.5 38.5l2.8 2.8M50.7 50.7l2.8 2.8M53.5 38.5l-2.8 2.8M41.3 50.7l-2.8 2.8"/></S>,
        strong: 'PV systems for commercial and industrial use',
        text: 'A structured supply approach for rooftop, ground-mounted and hybrid energy projects where efficiency, uptime and lifecycle value are key.',
      },
      {
        svg: <S><rect x="12" y="14" width="16" height="36" rx="2"/><path d="M20 20v24M15 26h10M15 34h10"/><rect x="36" y="18" width="16" height="28" rx="2"/><path d="M40 24h8M40 32h8M40 40h8"/></S>,
        strong: 'Storage & inverter integration',
        text: 'Balanced system architecture for generation, conversion and energy management across different operational needs.',
      },
      {
        svg: <S><path d="M12 46h40"/><path d="M16 46V24l16-8 16 8v22"/><path d="M24 30h16M24 38h10"/><path d="M50 14h8v8"/></S>,
        strong: 'Project readiness',
        text: 'Support for technical selection, documentation flow and procurement coordination from planning to delivery.',
      },
    ],
  },
  pillars: {
    kicker: 'Core capabilities',
    title: 'Solar solutions designed for performance, scalability and long-term operational value',
    text: 'We present solar as a complete business solution rather than a single product category. The page is structured to show technical confidence, commercial relevance and dependable execution for clients seeking clean energy systems with clear ROI potential.',
    items: [
      { title: 'PV Modules', text: 'High-efficiency module solutions selected for commercial rooftops, industrial sites and larger-scale project applications.', svg: <S><rect x="10" y="20" width="26" height="18" rx="2"/><path d="M14 26h18M14 32h18M19 20v18M27 20v18"/><path d="M44 12v12M50 8v16M56 14v10"/></S> },
      { title: 'Inverters & BOS', text: 'Conversion, protection and balance-of-system components chosen to support stable performance and efficient installation.', svg: <S><rect x="16" y="12" width="18" height="40" rx="2"/><path d="M22 20h6M22 28h6M22 36h6"/><rect x="40" y="18" width="10" height="28" rx="2"/><path d="M43 24h4M43 32h4M43 40h4"/></S> },
      { title: 'Energy Storage', text: 'Battery integration options that improve energy flexibility, backup readiness and optimization of on-site consumption.', svg: <S><rect x="12" y="18" width="18" height="28" rx="2"/><path d="M18 24h6M18 32h6M18 40h6"/><rect x="34" y="14" width="18" height="36" rx="2"/><path d="M40 20h6M40 28h6M40 36h6"/></S> },
      { title: 'System Design Support', text: 'Early-stage guidance for sizing, component matching and configuration planning based on site and consumption realities.', svg: <S><path d="M10 46h44"/><path d="M16 46V24l16-8 16 8v22"/><path d="M24 30h16M24 38h10"/><circle cx="50" cy="16" r="4"/></S> },
      { title: 'Procurement & Documentation', text: 'Organized support across quotations, product documentation, supply coordination and project-facing paperwork.', svg: <S><path d="M16 12h24l8 8v32H16z"/><path d="M40 12v8h8"/><path d="M22 30h20M22 38h20M22 46h12"/></S> },
      { title: 'Commissioning Pathways', text: 'A project-oriented view from supply to implementation, helping clients move toward commissioning with clarity and control.', svg: <S><path d="M8 46h48"/><path d="M16 46V24l12-8 12 8v22"/><path d="M28 16v30"/><path d="M40 20h12v22H40z"/><path d="M44 28h4M44 36h4"/></S> },
    ],
  },
  highlights: [
    {
      reverse: false,
      placeholder: {
        tag: 'Energy planning insight',
        svg: <S><rect x="10" y="22" width="22" height="16" rx="2"/><path d="M14 28h14M14 34h14M21 22v16"/><path d="M44 14v18M50 10v22M56 16v16"/><circle cx="46" cy="46" r="6"/></S>,
        title: 'Solar project planning workflow',
        text: 'A visual block that supports the story of load review, technology matching, commercial planning and structured transition into delivery.',
      },
      copy: {
        kicker: 'Solar expertise',
        title: 'An energy offer positioned around efficiency, bankability and real operational fit',
        text: 'Our solar page is designed to speak to businesses that need more than attractive hardware lists. It communicates a solution mindset: the right components, the right configuration and the right project structure.',
        list: [
          'Commercial and industrial solar solutions aligned with site realities, energy targets and investment logic.',
          'Component selection that prioritizes reliable output, durability and long-term service confidence.',
          'A premium presentation style that balances technical credibility with business-focused clarity.',
        ],
      },
    },
    {
      reverse: true,
      placeholder: {
        tag: 'Implementation overview',
        svg: <S><path d="M10 18h44v28H10z"/><path d="M10 28h44M24 18v28M40 18v28"/><path d="M18 52h28"/><path d="M52 10h6v6"/></S>,
        title: 'Procurement and delivery framework',
        text: 'A clean visual section for supply coordination, project milestones and implementation flow that reinforces the delivery strength of the service.',
      },
      copy: {
        kicker: 'Project execution',
        title: 'From system concept to coordinated delivery, every stage is built for controlled implementation',
        text: 'The operational side of the offer is framed around preparation, procurement alignment and practical execution support.',
        list: [
          'Support for technical evaluation, product selection and procurement planning.',
          'Structured communication across specification, ordering, logistics and project milestones.',
          'A delivery approach that supports predictable implementation and stronger client confidence.',
        ],
      },
    },
  ],
  cta: {
    title: 'Looking for a structured partner for commercial solar solutions?',
    text: 'We help clients build solar projects with better clarity from the start: stronger technology selection, organized procurement and dependable coordination through each project phase.',
  },
}
