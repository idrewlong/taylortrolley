<script setup lang="ts">
import { ref, onMounted, nextTick } from 'vue';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const businesses = ref([
  {
    name: 'Taylor, MS',
    image: '/images/trolley.webp',
    description: 'Experience the historic charm of our beloved town.',
  },
  {
    name: 'Plein Air',
    image: '/images/pleinair.webp',
    description: 'A unique community with beautiful architecture and art.',
  },
  {
    name: "Lusco's",
    image: '/images/shrimp.webp',
    description:
      "An iconic Mississippi Delta institution, Lusco's brings its legendary seafood and steaks to the heart of Taylor.",
  },
  {
    name: 'Taylor Grocery',
    image: '/images/taylorgrocery.webp',
    description: 'Home of the finest catfish in Mississippi.',
  },
  {
    name: 'Grit',
    image: '/images/grit.webp',
    description: 'Locally sourced ingredients, Southern-inspired cuisine.',
  },
  {
    name: 'Lost Dog Coffee',
    image: '/images/lostdog.webp',
    description: 'Your cozy spot for artisanal coffee and pastries.',
  },
  {
    name: 'Offbeat',
    image: '/images/offbeat.webp',
    description: 'A quirky and cool destination for unique finds.',
  },
  // {
  //   name: 'Taylor Inn',
  //   image: '/images/taylorinn.webp',
  //   description: 'Charming accommodations in the heart of Taylor.',
  // },
]);

const mainContainer = ref<HTMLElement | null>(null);
const track = ref<HTMLElement | null>(null);

onMounted(() => {
  nextTick(() => {
    gsap.registerPlugin(ScrollTrigger);
    const sections = gsap.utils.toArray('.panel');
    const pinContainer = (mainContainer.value as HTMLElement).querySelector(
      '.pin-container'
    );

    const scrollTween = gsap.to(sections, {
      xPercent: -100 * (sections.length - 1),
      ease: 'none',
      scrollTrigger: {
        trigger: mainContainer.value,
        pin: true,
        start: 'center center',
        scrub: 2,
        snap: 1 / (sections.length - 1),
        end: '+=5000',
        // markers: true,
      },
    });

    // Animate content for the first panel on load
    gsap.from((sections[0] as HTMLElement).querySelector('.panel-content'), {
      y: 50,
      autoAlpha: 0,
      duration: 0.6,
      ease: 'power2.out',
    });

    // Animate content for subsequent panels on scroll
    sections.slice(1).forEach((section) => {
      const content = (section as HTMLElement).querySelector('.panel-content');
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: section as HTMLElement,
          containerAnimation: scrollTween,
          start: 'left 60%',
          toggleActions: 'play none none reverse',
        },
      });

      if (content) {
        tl.from(content, {
          y: 50,
          autoAlpha: 0,
          duration: 0.6,
          ease: 'power2.out',
        });
      }
    });
  });
});
</script>

<template>
  <div
    ref="mainContainer"
    class="horizontal-scroll-section relative bg-vintage py-24"
  >
    <div class="pin-container h-[85vh] overflow-hidden">
      <div ref="track" class="track flex h-full">
        <section
          v-for="business in businesses"
          :key="business.name"
          class="panel w-screen h-full flex-shrink-0 flex items-center justify-center"
        >
          <div class="relative w-11/12 h-full shadow-2xl">
            <NuxtImg
              :src="business.image"
              :alt="business.name"
              class="absolute inset-0 w-full h-full object-cover"
              style="will-change: transform; transform: translateZ(0)"
              loading="eager"
            />
            <div
              class="absolute inset-0 bg-gray-800/40 flex items-center justify-center p-8"
            >
              <div class="panel-content text-center text-white">
                <h3 class="text-4xl md:text-6xl font-serif uppercase">
                  {{ business.name }}
                </h3>
                <p class="mt-4 text-xl md:text-2xl max-w-lg mx-auto">
                  {{ business.description }}
                </p>
                <NuxtLink
                  to="/taylor-ms"
                  class="inline-block mt-8 tracking-widest text-white font-semibold py-2 border-t border-b border-white/70 hover:border-white transition-colors duration-300"
                >
                  Learn More
                </NuxtLink>
              </div>
            </div>
            <!-- Decorative Frame -->
            <div
              class="frame-top absolute top-8 left-8 right-8 h-0.5 origin-left bg-brass"
            ></div>
            <div
              class="frame-right absolute top-8 bottom-8 right-8 w-0.5 origin-top bg-brass"
            ></div>
            <div
              class="frame-bottom absolute bottom-8 left-8 right-8 h-0.5 origin-right bg-brass"
            ></div>
            <div
              class="frame-left absolute top-8 bottom-8 left-8 w-0.5 origin-bottom bg-brass"
            ></div>
          </div>
        </section>
      </div>
    </div>
  </div>
</template>

<style scoped>
.track {
  width: 700%; /* 100% * number of businesses */
}
</style>
