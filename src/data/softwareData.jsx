const S = (props) => (
  <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" {...props} />
)

export const softwareData = {
  crumb: 'Software Development & Update',
  hero: {
    kicker: 'Custom software, modernization and platform improvement',
    titleHtml: 'Software Development<br />&amp; Update',
    subtitle: 'Sun Light Industries supports businesses that need tailored digital products, structured platform upgrades and dependable software improvement cycles. From new web-based solutions and operational systems to legacy modernization, UI refreshes and performance updates, we help clients build, refine and maintain software that stays aligned with changing business demands.',
    ctaLabel: 'REQUEST CONSULTATION',
    chips: [
      { strong: 'Custom build and modernization', text: 'Solutions developed around workflows, business logic and long-term adaptability rather than one-size-fits-all tools.' },
      { strong: 'Continuous update support', text: 'Structured release cycles, enhancement planning and controlled updates that reduce disruption and protect usability.' },
      { strong: 'Integration-ready delivery', text: 'Software designed to connect with internal systems, external platforms and evolving operational requirements.' },
    ],
    visualCards: [
      {
        tall: true,
        svg: <S><rect x="10" y="12" width="28" height="22" rx="3"/><path d="M18 22l-4 4 4 4M30 22l4 4-4 4M24 20l-2 12"/><path d="M12 42h24"/><path d="M44 14h10v10"/><path d="M54 14 42 26"/><path d="M44 50h10V40"/><path d="M54 50 42 38"/></S>,
        strong: 'Product build and modernization roadmap',
        text: 'A service model for custom application delivery, platform renewal and controlled technical updates that keep software useful over time.',
      },
      {
        svg: <S><rect x="10" y="16" width="20" height="28" rx="3"/><rect x="34" y="20" width="20" height="20" rx="3"/><path d="M30 30h4M18 24h4M18 32h8"/><path d="M44 26h6M44 34h4"/></S>,
        strong: 'Business system integration',
        text: 'Applications and updates planned to work cleanly with operational tools, data flows and existing digital environments.',
      },
      {
        svg: <S><path d="M18 18h28v10H18z"/><path d="M18 36h18v10H18z"/><path d="M42 36h4"/><path d="M50 18c4 0 6 2 6 6s-2 6-6 6"/><path d="M40 46c6 0 10-4 10-10"/></S>,
        strong: 'Release and improvement cycle',
        text: 'Enhancements, fixes and version updates coordinated through a stable process that supports continuity and measurable progress.',
      },
    ],
  },
  pillars: {
    kicker: 'Core capabilities',
    title: 'Software services built around usability, scalability and disciplined long-term improvement',
    text: 'We present software development as a practical business service rather than a purely technical offer. The page is structured to communicate delivery confidence, upgrade readiness and the ability to support products throughout their lifecycle.',
    items: [
      { title: 'Custom Web Applications', text: 'Tailored platforms and internal tools developed around specific workflows, user roles and operational goals.', svg: <S><rect x="12" y="14" width="26" height="18" rx="3"/><path d="M20 22l-4 4 4 4M30 22l4 4-4 4M24 20l-2 12"/><path d="M16 42h20"/></S> },
      { title: 'Platform Updates & Upgrades', text: 'Version improvements, feature expansion and structured modernization for software that needs to remain current and competitive.', svg: <S><path d="M20 16h24v12H20z"/><path d="M20 36h24v12H20z"/><path d="M50 20c3 0 6 3 6 6s-3 6-6 6"/><path d="M14 44c0-6 4-10 10-10"/></S> },
      { title: 'UI & UX Renewal', text: 'Interface refinement that improves clarity, user adoption and the overall quality of the digital experience.', svg: <S><rect x="14" y="16" width="36" height="24" rx="3"/><path d="M20 24h16M20 30h10"/><path d="M24 48h16"/></S> },
      { title: 'API Integration', text: 'Reliable connection between software products, third-party platforms and internal systems to keep information moving smoothly.', svg: <S><rect x="10" y="18" width="16" height="20" rx="3"/><rect x="38" y="18" width="16" height="20" rx="3"/><path d="M26 28h12"/><path d="M20 46h24"/></S> },
      { title: 'QA & Release Support', text: 'Testing, validation and structured deployment steps that help reduce update risk and support more stable releases.', svg: <S><path d="M14 22h36v20H14z"/><path d="M22 30h8M34 30h8"/><path d="M20 50h24"/><path d="M48 14h6v6"/></S> },
      { title: 'Ongoing Maintenance', text: 'Continuous support for bug resolution, optimization and performance tuning after launch or upgrade completion.', svg: <S><circle cx="24" cy="26" r="8"/><path d="M24 18v-4M24 34v4M16 26h-4M32 26h4"/><path d="M40 18h12v28H40z"/><path d="M44 26h4M44 34h4"/></S> },
    ],
  },
  highlights: [
    {
      reverse: false,
      placeholder: {
        tag: 'Product architecture',
        svg: <S><rect x="10" y="16" width="16" height="16" rx="2"/><rect x="38" y="16" width="16" height="16" rx="2"/><rect x="24" y="40" width="16" height="12" rx="2"/><path d="M18 32v6h14M46 32v6H32"/></S>,
        title: 'Development planning framework',
        text: 'A visual block for feature mapping, architecture logic, integration points and staged delivery across custom software initiatives.',
      },
      copy: {
        kicker: 'Development expertise',
        title: 'A delivery model designed to turn business needs into stable, usable and expandable software',
        text: 'Effective software development depends on more than writing code. Our approach positions the service around discovery, fit, usability and long-term maintainability so that the final product supports real operations.',
        list: [
          'Solutions shaped around process clarity, user needs and practical business outcomes.',
          'Development structured to support future enhancements rather than short-lived delivery.',
          'A premium service presentation that combines technical depth with commercial credibility.',
        ],
      },
    },
    {
      reverse: true,
      placeholder: {
        tag: 'Release overview',
        svg: <S><path d="M14 18h36v12H14z"/><path d="M14 38h24v10H14z"/><path d="M46 18c4 0 6 2 6 6s-2 6-6 6"/><path d="M38 48c8 0 12-4 12-12"/></S>,
        title: 'Upgrade and deployment workflow',
        text: 'A clean visual area for release sequencing, validation checkpoints, update communication and post-launch support across software products.',
      },
      copy: {
        kicker: 'Update lifecycle',
        title: 'Update support that keeps platforms secure, current and aligned with new requirements',
        text: 'Strong software value comes from the ability to improve continuously without losing control. We support this through disciplined update planning, testing and rollout coordination.',
        list: [
          'Structured improvement cycles for features, interface refreshes and performance enhancements.',
          'Controlled release support designed to reduce disruption and protect service continuity.',
          'Maintenance and modernization work that extends the useful life of existing digital assets.',
        ],
      },
    },
  ],
  cta: {
    title: 'Need a software partner to build, modernize or improve a digital platform?',
    text: 'We work with clients who need structured software delivery, dependable updates and a practical approach to digital improvement. Whether the requirement is a custom application, a platform refresh or a long-term upgrade path, we help shape software that is stable, relevant and ready to support business growth.',
  },
}
