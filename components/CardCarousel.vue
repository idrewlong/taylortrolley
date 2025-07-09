<template>
  <div class="py-9 sm:py-12">
    <div class="container mx-auto px-4">
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        <div v-for="card in cards" :key="card.title">
          <div
            class="relative h-96 rounded-lg shadow-lg overflow-hidden flex items-center justify-center text-white bg-cover bg-center group"
            :style="{ backgroundImage: `url(${card.image})` }"
          >
            <div
              class="absolute inset-0 bg-black/50 group-hover:bg-black/60 transition-colors duration-300"
            ></div>
            <h3
              class="relative text-3xl font-serif text-center uppercase tracking-wider"
            >
              {{ card.title }}
            </h3>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const cards = ref([
  {
    title: 'Taylor MISS.',
    image: '/images/trolley2.webp',
  },
  {
    title: 'Wedding Charters',
    image: '/images/people.webp',
  },
  {
    title: 'Private Events',
    image: '/images/people2.webp',
  },
]);
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
