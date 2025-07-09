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
  { label: 'FAQ', to: '/faq' },
  { label: 'Gallery', to: '/gallery' },
  { label: 'Contact', to: '/contact' },
  {
    label: 'Tickets',
    to: 'https://www.eventbrite.com/d/ms--taylor/taylor-trolley/', // Actual Eventbrite link
    isButton: true,
  },
];

const footerLinksList: NavLink[] = [
  { label: 'FAQ', to: '/faq' },
  { label: 'Group Events', to: '/group-events' },
  { label: 'Gallery', to: '/gallery' },
  { label: 'Taylor, MS', to: '/taylor-ms' },
  { label: 'Contact', to: '/contact' },
];

export const useNavigation = () => {
  const navigationLinks = computed(() => primaryNav);
  const footerLinks = computed(() => footerLinksList);

  return {
    navigationLinks,
    footerLinks,
  };
};
