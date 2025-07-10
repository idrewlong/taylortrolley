<script setup lang="ts">
import { onMounted, ref } from 'vue';

const { $gsap } = useNuxtApp();

const collage = ref(null);
const image1 = ref(null);
const image2 = ref(null);
const image3 = ref(null);
const text1 = ref(null);
const text2 = ref(null);
const frameTop = ref(null);
const frameRight = ref(null);
const frameBottom = ref(null);
const frameLeft = ref(null);

onMounted(() => {
  // --- TIMELINE FOR IMAGE PARALLAX ---
  const imageTl = $gsap.timeline({
    scrollTrigger: {
      trigger: collage.value,
      start: 'top bottom',
      end: 'bottom top',
      scrub: 1,
    },
  });

  imageTl
    .to(image1.value, { yPercent: -15, ease: 'none' }, 0)
    .to(image2.value, { yPercent: 15, ease: 'none' }, 0)
    .to(image3.value, { yPercent: -10, ease: 'none' }, 0);

  // --- INDEPENDENT TRIGGERS FOR TEXT MARQUEE ---
  $gsap.to(text1.value, {
    xPercent: -50,
    ease: 'none',
    scrollTrigger: {
      trigger: collage.value,
      start: 'top bottom',
      end: 'bottom top',
      scrub: 8,
    },
  });

  $gsap.fromTo(
    text2.value,
    { xPercent: -50 },
    {
      xPercent: 0,
      ease: 'none',
      scrollTrigger: {
        trigger: collage.value,
        start: 'top bottom',
        end: 'bottom top',
        scrub: 8,
      },
    }
  );

  // --- TIMELINE FOR FRAME ANIMATION ---
  $gsap.set([frameTop.value, frameBottom.value], { scaleX: 0 });
  $gsap.set([frameRight.value, frameLeft.value], { scaleY: 0 });

  const frameTl = $gsap.timeline({
    scrollTrigger: {
      trigger: collage.value,
      start: 'top center',
      toggleActions: 'play none none none',
    },
  });

  frameTl
    .to(frameTop.value, { scaleX: 1, duration: 0.4, ease: 'none' })
    .to(frameRight.value, { scaleY: 1, duration: 0.4, ease: 'none' })
    .to(frameBottom.value, { scaleX: 1, duration: 0.4, ease: 'none' })
    .to(frameLeft.value, { scaleY: 1, duration: 0.4, ease: 'none' });
});
</script>

<template>
  <section ref="collage" class="relative py-24 overflow-hidden bg-cream">
    <div class="grid h-[70vh] w-full grid-cols-12 grid-rows-6 gap-4">
      <!-- Images -->
      <div
        ref="image1"
        class="relative z-10 col-span-5 col-start-1 row-span-4 row-start-1"
      >
        <img
          src="/images/people.webp"
          alt="Men working on a farm"
          class="object-cover w-full h-full"
        />
        <div class="absolute inset-0 bg-black/50"></div>
      </div>
      <div
        ref="image2"
        class="relative z-10 col-span-4 col-start-5 row-span-5 row-start-2"
      >
        <img
          src="/images/trolley.webp"
          alt="An aerial view of a trolley"
          class="object-cover w-full h-full"
        />
        <div class="absolute inset-0 bg-black/50"></div>
      </div>
      <div
        ref="image3"
        class="relative z-10 col-span-5 col-start-8 row-span-4 row-start-1"
      >
        <img
          src="/images/people2.webp"
          alt="A person walking on a farm"
          class="object-cover w-full h-full"
        />
        <div class="absolute inset-0 bg-black/50"></div>
      </div>

      <!-- Text Overlay -->
      <div
        class="absolute inset-0 z-20 flex flex-col items-center justify-center overflow-hidden text-center text-white drop-shadow-md"
      >
        <div ref="text1" class="flex items-center whitespace-nowrap">
          <h2 class="text-[12vw] font-serif uppercase shrink-0">
            Explore Taylor Mississippi&nbsp;&mdash;&nbsp;
          </h2>
          <h2 class="text-[12vw] font-serif uppercase shrink-0">
            Explore Taylor Mississippi&nbsp;&mdash;&nbsp;
          </h2>
        </div>
        <div ref="text2" class="flex items-center whitespace-nowrap">
          <h2 class="text-[12vw] font-serif uppercase shrink-0">
            Shop Local&nbsp;&mdash;&nbsp;
          </h2>
          <h2 class="text-[12vw] font-serif uppercase shrink-0">
            Shop Local&nbsp;&mdash;&nbsp;
          </h2>
        </div>
      </div>

      <!-- Decorative Frame -->
      <div class="absolute inset-0 z-20 flex items-center justify-center">
        <div class="relative w-3/4 h-3/4">
          <div
            ref="frameTop"
            class="absolute top-0 left-0 h-0.5 w-full origin-left bg-brass"
          ></div>
          <div
            ref="frameRight"
            class="absolute top-0 right-0 h-full w-0.5 origin-top bg-brass"
          ></div>
          <div
            ref="frameBottom"
            class="absolute bottom-0 right-0 h-0.5 w-full origin-right bg-brass"
          ></div>
          <div
            ref="frameLeft"
            class="absolute bottom-0 left-0 h-full w-0.5 origin-bottom bg-brass"
          ></div>
        </div>
      </div>
    </div>
  </section>
</template>
