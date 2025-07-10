import { ref, computed } from 'vue';

interface NavLink {
  label: string;
  to: string;
  isButton?: boolean;
  children?: NavLink[];
}

const primaryNav: NavLink[] = [
  // { label: 'Schedule', to: '/schedule' },
  { label: 'About', to: '/about' },
  { label: 'Events', to: '/events' },
  { label: 'Taylor', to: '/taylor-ms' },
  { label: 'News', to: '/news' },
  { label: 'Contact', to: '/contact' },
  {
    label: 'Tickets',
    to: 'https://www.eventbrite.com/d/ms--taylor/taylor-trolley/', // Actual Eventbrite link
    isButton: true,
  },
];

const footerQuickLinksList: NavLink[] = [
  { label: 'About', to: '/about' },
  { label: 'Events', to: '/events' },
  { label: 'Taylor', to: '/taylor-ms' },
  { label: 'News', to: '/news' },
  // { label: 'Gallery', to: '/gallery' },
  { label: 'Contact', to: '/contact' },
];

const footerMoreInfoList: NavLink[] = [
  { label: 'FAQ', to: '/faq' },
  { label: 'Privacy Policy', to: '/privacy-policy' },
  { label: 'Terms of Service', to: '/terms-of-service' },
];

export const useNavigation = () => {
  const navigationLinks = computed(() => primaryNav);
  const footerQuickLinks = computed(() => footerQuickLinksList);
  const footerMoreInfo = computed(() => footerMoreInfoList);
  return {
    navigationLinks,
    footerQuickLinks,
    footerMoreInfo,
  };
};
