<template>
  <div
    ref="section"
    class="container mx-auto px-4 py-16 sm:py-24 text-center overflow-hidden"
  >
    <svg width="0" height="0" class="absolute">
      <defs>
        <clipPath
          ref="clipPathEl"
          id="about-clip"
          clipPathUnits="objectBoundingBox"
        ></clipPath>
      </defs>
    </svg>

    <div class="relative inline-block mb-8">
      <img
        src="/images/Union.svg"
        alt="An illustration of the storefronts in Taylor, Mississippi with a trolley car."
        class="mx-auto"
        style="clip-path: url(#about-clip)"
      />
    </div>

    <div ref="textContent">
      <p
        class="text-2xl md:text-3xl font-serif text-gray-800 max-w-3xl mx-auto mb-8"
      >
        From the historic Oxford Square to the charming backroads, Taylor
        Trolley offers a unique experience to the heart of Taylor, Mississippi.
        From shopping to dining, come see what makes Taylor special.
      </p>

      <NuxtLink
        to="/about"
        class="inline-block tracking-widest text-gray-700 font-semibold py-2 border-t border-b border-gray-400 hover:text-gray-900 hover:border-gray-600 transition-colors duration-300"
      >
        Learn More About Us
      </NuxtLink>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
const { $gsap } = useNuxtApp();

const section = ref(null);
const textContent = ref(null);
const clipPathEl = ref(null);

onMounted(() => {
  $gsap.set(textContent.value, { y: 40, opacity: 0 });

  const numPuddles = 20;
  const puddles = [];
  const clipPath = clipPathEl.value;

  if (clipPath) {
    for (let i = 0; i < numPuddles; i++) {
      const puddle = document.createElementNS(
        'http://www.w3.org/2000/svg',
        'circle'
      );
      $gsap.set(puddle, {
        attr: {
          cx: $gsap.utils.random(0, 1, 0.01),
          cy: $gsap.utils.random(0, 1, 0.01),
          r: 0,
        },
      });
      clipPath.appendChild(puddle);
      puddles.push(puddle);
    }
  }

  const tl = $gsap.timeline({
    scrollTrigger: {
      trigger: section.value,
      start: 'top 85%',
      toggleActions: 'play none none reverse',
    },
  });

  if (puddles.length > 0) {
    tl.to(
      puddles,
      {
        attr: { r: 0.4 },
        duration: 3,
        stagger: {
          each: 0.1,
          from: 'random',
        },
        ease: 'power2.inOut',
      },
      0
    );
  }

  tl.to(
    textContent.value,
    {
      y: 0,
      opacity: 1,
      duration: 1.2,
      ease: 'power3.out',
    },
    '>-2.8'
  );
});
</script>
