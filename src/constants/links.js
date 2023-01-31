import slugify from 'slugify';

const getAnchor = (str) => slugify(str).toLocaleLowerCase();

export default {
  // Pages and sections
  home: {
    to: '/',
  },
  schedule: {
    to: `/#${getAnchor('Schedule')}`,
    id: getAnchor('Schedule'),
  },
  sponsors: {
    to: `/#${getAnchor('Sponsors')}`,
    id: getAnchor('Sponsors'),
  },
  speakers: {
    to: `/#${getAnchor('Speakers')}`,
    id: getAnchor('Speakers'),
  },
  tickets: {
    to: 'https://tickets.kcdzurich.ch/',
    target: '_blank',
  },
  proposal: {
    to: `/#${getAnchor('Call for Proposal')}`,
    id: getAnchor('Call for Proposal'),
  },
  workshops: {
    to: '/workshops',
    id: getAnchor('Workshops'),
  },
  mission: {
    to: '/mission-statement',
    target: '_blank',
  },
  privacy: {
    to: '/data-privacy',
    target: '_blank',
  },
  conduct: {
    to: 'https://events.linuxfoundation.org/about/code-of-conduct/',
    target: '_blank',
  },

  // Social-links
  linkedin: {
    to: 'https://www.linkedin.com/company/kubernetes-community-days-zurich/',
    target: '_blank',
  },
  twitter: {
    to: 'https://twitter.com/KcdZurich?s=20&t=2K7fxHFqThcgycuBzO_rSw',
    target: '_blank',
  },
  slack: {
    to: '/',
    target: '_blank',
  },
};