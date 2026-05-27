import { S } from '../components/Icon.jsx'

export const projectData = {
  crumb: 'Project Development',
  hero: {
    kicker: 'From concept to commissioned delivery',
    titleHtml: 'Project<br />Development',
    subtitle: 'Sun Light Industries supports complex projects with a structured development model that covers feasibility, planning, supplier coordination, procurement strategy and execution readiness. We help transform early-stage ideas into bankable, buildable and operational projects with clear milestones and disciplined oversight.',
    ctaLabel: 'START A PROJECT',
    chips: [
      { strong: 'Feasibility to execution', text: 'Projects are shaped around technical viability, commercial logic and practical delivery requirements from the start.' },
      { strong: 'Integrated coordination', text: 'Engineering inputs, supplier alignment and procurement planning are connected in one clear workflow.' },
      { strong: 'Long-term project value', text: 'Each development phase is built to reduce uncertainty, accelerate decisions and support durable operational outcomes.' },
    ],
    visualCards: [
      {
        tall: true,
        svg: <S><path d="M12 12h24v30H12z"/><path d="M20 20h8M20 28h14M20 36h10"/><path d="M44 18v28M44 18h10M44 18l-4 4"/><path d="M44 46h10M44 46l-4-4"/><path d="M50 22v20"/></S>,
        strong: 'Development roadmap & delivery planning',
        text: 'A clear framework for feasibility, design alignment, procurement preparation and project launch with the right operational sequence.',
      },
      {
        svg: <S><path d="M12 48h40"/><path d="M18 48V22l14-8 14 8v26"/><path d="M26 28h12M26 36h8"/></S>,
        strong: 'Execution model',
        text: 'One service structure connecting engineering, supplier engagement and commercial control throughout the project lifecycle.',
      },
      {
        svg: <S><circle cx="20" cy="20" r="8"/><circle cx="44" cy="20" r="8"/><circle cx="32" cy="44" r="8"/><path d="M27 24l5 12M37 24l-5 12M28 44H16M48 44H36"/></S>,
        strong: 'Stakeholder alignment',
        text: 'Coordinated communication between technical, commercial and delivery partners to keep momentum and reduce friction.',
      },
    ],
  },
  pillars: {
    kicker: 'Core capabilities',
    title: 'Project development built around planning discipline, technical clarity and execution readiness',
    text: 'We support projects through the critical steps that determine whether an idea becomes a viable asset. The page is structured to present a full-cycle development offer with premium positioning, operational clarity and strong business credibility.',
    items: [
      { title: 'Feasibility Studies', text: 'Early-stage analysis covering project scope, technical fit, cost logic and development pathways before major commitments are made.', svg: <S><path d="M14 14h24v30H14z"/><path d="M22 22h8M22 30h14M22 38h10"/><path d="M42 18h8v24h-8"/></S> },
      { title: 'Concept & Design Coordination', text: 'Structured alignment of design inputs, technical requirements and project objectives to create a strong foundation for execution.', svg: <S><path d="M10 48h44"/><path d="M18 48V20l14-8 14 8v28"/><path d="M26 28h12M26 36h8"/></S> },
      { title: 'Procurement Strategy', text: 'Supplier mapping, package planning and sourcing strategy built to improve timing, commercial control and delivery reliability.', svg: <S><path d="M12 18h20v28H12z"/><path d="M18 26h8M18 34h8"/><path d="M38 16h14v32H38z"/><path d="M38 26h14M38 38h14"/></S> },
      { title: 'Engineering Support', text: 'Technical review and coordination that help ensure the project can move from concept to implementation without costly misalignment.', svg: <S><path d="M12 32h14l6-8 6 8h14"/><path d="M20 32v18M44 32v18"/><path d="M20 50h24"/><path d="M32 10v10"/></S> },
      { title: 'Project Documentation', text: 'Organized documentation flows for approvals, supplier engagement, execution planning and handover preparation across the project cycle.', svg: <S><rect x="14" y="16" width="36" height="28" rx="3"/><path d="M22 24h20M22 32h12"/><path d="M22 50h20"/></S> },
      { title: 'Commissioning & Handover', text: 'Final-stage support that connects delivery, testing, launch readiness and operational transition with a controlled closeout process.', svg: <S><path d="M12 46h40"/><circle cx="20" cy="30" r="6"/><circle cx="32" cy="22" r="6"/><circle cx="44" cy="34" r="6"/><path d="M25 28l3-2M36 24l4 6M25 33l13 0"/></S> },
    ],
  },
  highlights: [
    {
      reverse: false,
      placeholder: {
        tag: 'Development strategy',
        svg: <S><path d="M14 14h24v30H14z"/><path d="M22 22h8M22 30h14M22 38h10"/><path d="M44 18v28M44 18h10M44 18l-4 4"/><path d="M44 46h10M44 46l-4-4"/></S>,
        title: 'Project planning architecture',
        text: 'A visual block for development sequencing, design checkpoints, procurement phasing and execution readiness across major workstreams.',
      },
      copy: {
        kicker: 'Development expertise',
        title: "A project model that turns early ideas into structured, decision-ready opportunities",
        text: 'Strong development work reduces uncertainty before construction, procurement or rollout begins. Our approach supports smarter decisions by connecting feasibility, concept planning and execution logic into one coherent process.',
        list: [
          'Early-stage structuring that improves project clarity, scope definition and delivery logic.',
          'Commercial and technical alignment that supports better decisions before capital is deployed.',
          'A premium advisory-to-execution model suitable for infrastructure, energy and industrial initiatives.',
        ],
      },
    },
    {
      reverse: true,
      placeholder: {
        tag: 'Execution overview',
        svg: <S><path d="M10 48h44"/><path d="M18 48V20l14-8 14 8v28"/><path d="M26 28h12M26 36h8"/><path d="M50 12h6v6"/></S>,
        title: 'Delivery coordination framework',
        text: 'A visual area for stakeholder management, procurement phasing, launch preparation and final delivery coordination across complex projects.',
      },
      copy: {
        kicker: 'Execution readiness',
        title: 'Development support that keeps planning, procurement and launch preparation moving together',
        text: 'Projects move faster and perform better when planning is connected to real delivery conditions. We support this transition by organizing stakeholders, supplier inputs and documentation flows.',
        list: [
          'Supplier and package coordination shaped around buildability, availability and project timing.',
          'Documentation and communication workflows designed to reduce friction during implementation.',
          'Support through handover and operational launch to help projects move from planning into real use.',
        ],
      },
    },
  ],
  cta: {
    title: 'Planning a project that needs structure, clarity and execution support?',
    text: 'We work with clients who need a development partner capable of moving from concept through planning and into delivery readiness with discipline and transparency.',
  },
}
