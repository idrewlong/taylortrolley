<template>
  <div
    class="relative h-[60vh] min-h-[400px] bg-cover bg-center flex items-center justify-start text-white"
    style="background-image: url('/images/trolley.webp')"
  >
    <div class="absolute inset-0 bg-black/60" aria-hidden="true"></div>
    <div class="relative max-w-3xl z-10 px-8 sm:px-12 lg:px-16 text-left">
      <div class="overflow-hidden py-1">
        <h1
          ref="heroTitle"
          class="text-4xl md:text-6xl uppercase mb-2 opacity-0"
        >
          Experience Taylor, MS
        </h1>
      </div>
      <div class="overflow-hidden py-1">
        <p
          ref="heroSubtitle"
          class="text-xl md:text-2xl font-light tracking-wider mb-6 opacity-0"
        >
          with The Best Seats Around
        </p>
      </div>
      <div
        ref="heroButtons"
        class="flex items-center flex-wrap gap-4 opacity-0"
      >
        <a
          href="https://www.eventbrite.com/"
          target="_blank"
          rel="noopener noreferrer"
          class="inline-block bg-red text-white hover:bg-red/80 transition-colors duration-300 font-semibold py-3 px-8 rounded-md shadow-lg"
        >
          Book Your Trip
        </a>
        <NuxtLink
          to="/about"
          class="inline-block text-white hover:underline transition-colors duration-300 font-semibold py-3 px-4"
        >
          Learn More
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
const heroButtons = ref(null);

onMounted(() => {
  $gsap.set(heroTitle.value, { yPercent: 100 });
  $gsap.set(heroSubtitle.value, { yPercent: 100 });

  const tl = $gsap.timeline({ delay: 0.2 });
  tl.to(heroTitle.value, {
    yPercent: 0,
    opacity: 1,
    duration: 1.2,
    ease: 'power4.out',
  })
    .to(
      heroSubtitle.value,
      {
        yPercent: 0,
        opacity: 1,
        duration: 1,
        ease: 'power4.out',
      },
      '-=1'
    )
    .to(
      heroButtons.value,
      {
        opacity: 1,
        duration: 0.8,
        ease: 'power2.out',
      },
      '-=0.5'
    );
});
</script>

<style scoped>
/* Scoped styles can be added here if needed */
</style>
