<template>
  <div class="text-gray-800">
    <!-- Hero Section -->
    <div
      class="relative h-[50vh] min-h-[300px] bg-cover bg-center flex items-center justify-center text-white"
      style="background-image: url('/images/people.webp')"
    >
      <div class="absolute inset-0 bg-black/60" aria-hidden="true"></div>
      <div class="relative z-10 text-center px-4">
        <h1 ref="heroTitle" class="text-4xl md:text-6xl font-serif mb-2">
          Unforgettable Events
        </h1>
        <p
          ref="heroSubtitle"
          class="text-xl md:text-2xl font-light tracking-wider"
        >
          Host your next gathering with Taylor Trolley.
        </p>
      </div>
    </div>

    <!-- Main Content -->
    <div class="container mx-auto px-4 py-16 sm:py-24">
      <div ref="introSection" class="max-w-3xl mx-auto text-center mb-16">
        <h2 class="text-3xl md:text-4xl font-serif mb-4">
          A Unique Venue for Any Occasion
        </h2>
        <p class="text-lg text-gray-600">
          The Taylor Trolley is more than just a ride—it's a moving celebration.
          Available for private charters, our charming trolley offers a
          memorable backdrop for weddings, parties, and special events.
        </p>
      </div>

      <!-- Event Type Sections -->
      <div class="space-y-20">
        <!-- Wedding Charters -->
        <section
          ref="weddingSection"
          class="flex flex-col md:flex-row items-center gap-8 md:gap-12"
        >
          <div class="md:w-1/2">
            <img
              src="/images/people.webp"
              alt="A happy couple on their wedding day with the trolley."
              class="rounded-lg shadow-2xl w-full h-full object-cover"
            />
          </div>
          <div class="md:w-1/2">
            <h3 class="text-3xl font-serif text-gray-800 mb-4">
              Wedding Charters
            </h3>
            <p class="text-lg mb-4">
              Add a touch of vintage charm to your special day. Our trolley is a
              beautiful backdrop for photos and a fun, unique way to transport
              your wedding party and guests between the ceremony, reception, and
              photo locations.
            </p>
            <p class="text-lg">
              Let us handle the driving so you can focus on making memories.
            </p>
          </div>
        </section>

        <!-- Private Parties -->
        <section
          ref="partySection"
          class="flex flex-col md:flex-row-reverse items-center gap-8 md:gap-12"
        >
          <div class="md:w-1/2">
            <img
              src="/images/people2.webp"
              alt="Friends celebrating a private party."
              class="rounded-lg shadow-2xl w-full h-full object-cover"
            />
          </div>
          <div class="md:w-1/2">
            <h3 class="text-3xl font-serif text-gray-800 mb-4">
              Private Parties
            </h3>
            <p class="text-lg mb-4">
              Host a memorable birthday party, corporate outing, or a special
              gathering with friends. Customize the route, bring your own music,
              and create a one-of-a-kind experience for your guests as you tour
              the scenic route between Taylor and Oxford.
            </p>
          </div>
        </section>

        <!-- Corporate & Community -->
        <section
          ref="communitySection"
          class="flex flex-col md:flex-row items-center gap-8 md:gap-12"
        >
          <div class="md:w-1/2">
            <img
              src="/images/trolley3.webp"
              alt="The Taylor Trolley ready for a community event."
              class="rounded-lg shadow-2xl w-full h-full object-cover"
            />
          </div>
          <div class="md:w-1/2">
            <h3 class="text-3xl font-serif text-gray-800 mb-4">
              Corporate & Community Events
            </h3>
            <p class="text-lg mb-4">
              Looking for a creative way to host a team-building event or treat
              your employees? Or perhaps you're organizing a local festival? The
              Taylor Trolley is a versatile option that adds a special touch to
              any event.
            </p>
          </div>
        </section>
      </div>

      <!-- CTA Section -->
      <div ref="ctaSection" class="text-center mt-20">
        <h2 class="text-3xl font-serif mb-4">Ready to Book?</h2>
        <p class="text-lg text-gray-600 max-w-xl mx-auto mb-8">
          We'd love to be a part of your next event. Contact us today to check
          availability and discuss your plans with our team.
        </p>
        <NuxtLink
          to="/contact"
          class="bg-red text-white hover:bg-red/80 transition-colors duration-300 font-semibold py-4 px-10 rounded-md shadow-lg transform hover:scale-105 text-lg"
        >
          Inquire Now
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
const introSection = ref(null);
const weddingSection = ref(null);
const partySection = ref(null);
const communitySection = ref(null);
const ctaSection = ref(null);

onMounted(() => {
  // Animate Hero on load
  $gsap.from([heroTitle.value, heroSubtitle.value], {
    opacity: 0,
    y: 20,
    duration: 0.8,
    ease: 'power3.out',
    stagger: 0.2,
  });

  // Animate Intro and CTA sections on scroll
  const simpleFadeInSections = [introSection.value, ctaSection.value];
  simpleFadeInSections.forEach((section) => {
    if (section) {
      $gsap.from(section.children, {
        opacity: 0,
        y: 40,
        duration: 1,
        ease: 'power3.out',
        stagger: 0.2,
        scrollTrigger: {
          trigger: section,
          start: 'top 85%',
          toggleActions: 'play none none none',
        },
      });
    }
  });

  // Animate alternating event sections
  const alternatingSections = [
    weddingSection.value,
    partySection.value,
    communitySection.value,
  ];

  alternatingSections.forEach((section, index) => {
    if (section) {
      const elements = section.children;
      const image = elements[0];
      const text = elements[1];

      // Animate image
      $gsap.from(image, {
        opacity: 0,
        x: index % 2 === 0 ? -100 : 100,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: section,
          start: 'top 80%',
          toggleActions: 'play none none none',
        },
      });

      // Animate text content
      $gsap.from(text, {
        opacity: 0,
        y: 50,
        duration: 1,
        ease: 'power3.out',
        delay: 0.2,
        scrollTrigger: {
          trigger: section,
          start: 'top 80%',
          toggleActions: 'play none none none',
        },
      });
    }
  });
});

definePageMeta({
  layout: 'default',
});
</script>
