<template>
  <div ref="section" class="py-9 sm:py-12">
    <div class="container mx-auto px-4">
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        <div
          v-for="(card, index) in cards"
          :key="card.title"
          :ref="
            (el) => {
              if (el) cardElements[index] = el;
            }
          "
          class="opacity-0"
        >
          <div
            class="relative h-64 sm:h-96 rounded-lg shadow-lg overflow-hidden flex items-center justify-center text-white bg-cover bg-center group"
            :style="{ backgroundImage: `url(${card.image})` }"
          >
            <div
              class="absolute inset-0 bg-black/50 group-hover:bg-black/70 transition-all duration-300"
            ></div>
            <div class="relative text-center p-4">
              <h3
                class="text-3xl font-serif uppercase tracking-wider transition-transform duration-300 group-hover:-translate-y-4"
              >
                {{ card.title }}
              </h3>
              <div
                class="mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              >
                <NuxtLink
                  :to="card.link"
                  class="inline-block tracking-widest text-white font-semibold py-2 border-t border-b border-white/70 hover:border-white transition-colors duration-300"
                >
                  Learn More
                </NuxtLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
const { $gsap } = useNuxtApp();

const section = ref(null);
const cardElements = ref([]);

const cards = ref([
  {
    title: 'Taylor MISS.',
    image: '/images/trolley2.webp',
    link: '/taylor-ms',
  },
  {
    title: 'Wedding Charters',
    image: '/images/people.webp',
    link: '/events',
  },
  {
    title: 'Private Events',
    image: '/images/people2.webp',
    link: '/events',
  },
]);

onMounted(() => {
  if (cardElements.value.length === 0) return;

  $gsap.set(cardElements.value, { y: 50 });

  $gsap.to(cardElements.value, {
    opacity: 1,
    y: 0,
    duration: 0.8,
    ease: 'power3.out',
    stagger: 0.2,
    scrollTrigger: {
      trigger: section.value,
      start: 'top 80%',
      toggleActions: 'play none none reverse',
    },
  });
});
</script>

<style scoped>
.scrollbar-hide::-webkit-scrollbar {
  display: none;
}
.scrollbar-hide {
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
}
</style>
