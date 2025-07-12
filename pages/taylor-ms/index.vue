<template>
  <div class="text-gray-800">
    <!-- Hero Section -->
    <div
      class="relative h-screen flex items-center justify-center text-white overflow-hidden"
    >
      <div class="absolute inset-0 z-0">
        <video
          autoplay
          loop
          muted
          playsinline
          class="w-full h-full object-cover"
          poster="/images/trolley3.webp"
        >
          <!-- Replace with actual video source -->
          <!-- <source src="/videos/taylor-showcase.mp4" type="video/mp4" /> -->
        </video>
      </div>
      <div class="absolute inset-0 bg-black/60"></div>
      <div class="relative z-10 text-center px-4">
        <div class="font-serif text-5xl md:text-7xl mb-4 overflow-hidden">
          <h1 ref="heroTitle" class="translate-y-full">Discover Taylor, MS</h1>
        </div>
        <div class="text-lg md:text-xl text-white/90 overflow-hidden">
          <p ref="heroSubtitle" class="translate-y-full">
            Just a scenic trolley ride away from Oxford Square.
          </p>
        </div>
        <div ref="heroCta" class="mt-8 opacity-0">
          <NuxtLink
            to="/tickets"
            class="bg-red text-white hover:bg-red/80 transition-colors duration-300 font-semibold py-3 px-8 rounded-md shadow-lg transform hover:scale-105 text-lg"
          >
            Book Your Ride
          </NuxtLink>
        </div>
      </div>
    </div>

    <!-- Introduction Section -->
    <div class="container mx-auto px-4 py-20 text-center">
      <div ref="introSection">
        <h2 class="text-4xl font-serif mb-6">A Hidden Gem of Mississippi</h2>
        <p class="text-lg text-gray-700 max-w-3xl mx-auto">
          Escape the everyday and discover the artistic soul of Taylor,
          Mississippi. Known for its world-class dining, unique artisan shops,
          and serene Southern landscapes, Taylor offers an unforgettable
          experience. Whether you're visiting for an Ole Miss game or seeking a
          peaceful day trip from Oxford, our trolley service provides the
          perfect connection to this charming town.
        </p>
      </div>
    </div>

    <!-- Business Grid Section -->
    <div class="container mx-auto px-4 pb-20">
      <h2 class="text-4xl font-serif text-center mb-12">
        Explore Local Favorites
      </h2>
      <div
        ref="businessGrid"
        class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
      >
        <div
          v-for="business in businesses"
          :key="business.name"
          class="relative h-96 rounded-lg shadow-lg overflow-hidden group"
        >
          <div
            class="absolute inset-0 bg-cover bg-center transition-transform duration-500 ease-in-out group-hover:scale-110"
            :style="{ backgroundImage: `url(${business.image})` }"
          ></div>
          <div
            class="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"
          ></div>
          <div class="relative h-full flex flex-col justify-end p-6 text-white">
            <h3 class="text-3xl font-serif tracking-wider mb-2">
              {{ business.name }}
            </h3>
            <div
              class="max-h-0 opacity-0 group-hover:max-h-screen group-hover:opacity-100 transition-all duration-500 ease-in-out"
            >
              <p class="mb-4 text-white/90">
                {{ business.description }}
              </p>
              <a
                :href="business.website"
                target="_blank"
                rel="noopener noreferrer"
                class="inline-block bg-red hover:bg-red/80 transition-colors duration-300 font-semibold py-2 px-6 rounded-md shadow-lg text-sm"
              >
                Visit Website
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- CTA Section -->
    <div class="">
      <div ref="ctaSection" class="container mx-auto px-4 py-20 text-center">
        <h2 class="text-4xl font-serif mb-4">Ready to Explore Taylor?</h2>
        <p class="text-lg text-gray-700 max-w-2xl mx-auto mb-8">
          The trolley picks up from Oxford Square, making your trip to Taylor
          effortless and enjoyable. Book your tickets today and experience the
          best of Mississippi.
        </p>
        <NuxtLink
          to="/contact"
          class="bg-red text-white hover:bg-red/80 transition-colors duration-300 font-semibold py-4 px-10 rounded-md shadow-lg transform hover:scale-105 text-lg"
        >
          Book Now
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';

const { $gsap } = useNuxtApp();

const heroTitle = ref(null);
const heroSubtitle = ref(null);
const heroCta = ref(null);
const introSection = ref(null);
const businessGrid = ref(null);
const ctaSection = ref(null);

const businesses = ref([
  {
    name: 'Plein Air',
    image: '/images/pleinair.webp',
    description:
      'A beautifully designed community featuring stunning architecture, art galleries, and a tranquil atmosphere.',
    website: '#',
  },
  {
    name: "Lusco's",
    image: '/images/shrimp.webp',
    description:
      "An iconic Mississippi Delta institution, Lusco's brings its legendary seafood and steaks to the heart of Taylor.",
    website: '#',
  },
  {
    name: 'Grit',
    image: '/images/grit.webp',
    description:
      'A true taste of the South, GRIT is a celebration of culinary tradition and locally sourced ingredients.',
    website: 'https://www.grittaylor.com/',
  },
  {
    name: 'Taylor Grocery',
    image: '/images/taylorgrocery.webp',
    description:
      "World-famous catfish and an authentic, laid-back atmosphere. A true Mississippi landmark that's been serving the community for decades.",
    website: '#',
  },
  {
    name: 'Offbeat',
    image: '/images/offbeat.webp',
    description:
      'Offbeat In General & The Blind Pig Deli supplies a selection of general goods, groceries, deli meats and cheeses, bread, gifts and more. An off-shoot of The Blind Pig Pub on the Oxford Square, the Blind Pig Deli makes toasted, made-to-order sandwiches, as well as salads and snack boxes.',
    website: 'https://www.offbeatgeneralstore.com/',
  },
  {
    name: 'Lost Dog Coffee',
    image: '/images/lostdog.webp',
    description:
      'A cozy spot for your daily caffeine fix, offering a wide range of specialty coffees, teas, and delicious pastries.',
    website: '#',
  },
]);

onMounted(() => {
  // Hero Animation
  $gsap.to(heroTitle.value, { y: 0, duration: 1.2, ease: 'power4.out' });
  $gsap.to(heroSubtitle.value, {
    y: 0,
    duration: 1.2,
    ease: 'power4.out',
    delay: 0.2,
  });
  $gsap.to(heroCta.value, {
    opacity: 1,
    duration: 1,
    ease: 'power2.out',
    delay: 0.8,
  });

  // Intro Section Animation
  $gsap.from(introSection.value.children, {
    opacity: 0,
    y: 50,
    stagger: 0.2,
    duration: 1,
    ease: 'power3.out',
    scrollTrigger: {
      trigger: introSection.value,
      start: 'top 85%',
    },
  });

  // Business Grid Animation
  $gsap.from(businessGrid.value.children, {
    opacity: 0,
    y: 50,
    scale: 0.95,
    stagger: 0.1,
    duration: 0.8,
    ease: 'power3.out',
    scrollTrigger: {
      trigger: businessGrid.value,
      start: 'top 80%',
    },
  });

  // CTA Section Animation
  $gsap.from(ctaSection.value.children, {
    opacity: 0,
    y: 50,
    stagger: 0.2,
    duration: 1,
    ease: 'power3.out',
    scrollTrigger: {
      trigger: ctaSection.value,
      start: 'top 85%',
    },
  });
});

definePageMeta({
  layout: 'default',
});
</script>
