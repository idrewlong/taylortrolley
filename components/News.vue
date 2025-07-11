<script setup lang="ts">
const newsArticles = ref([
  {
    id: 1,
    title: 'New Trolley Route Announced for Fall',
    date: 'October 1, 2023',
    category: 'Announcements',
    image: '/images/trolley2.webp',
    slug: 'new-trolley-route-fall',
  },
  {
    id: 2,
    title: 'Community Spotlight: The Art of Taylor',
    date: 'September 15, 2023',
    category: 'Community',
    image: '/images/people.webp',
    slug: 'community-spotlight-art',
  },
  {
    id: 3,
    title: 'Summer Events Recap',
    date: 'September 5, 2023',
    category: 'Events',
    image: '/images/people2.webp',
    slug: 'summer-events-recap',
  },
]);
</script>

<template>
  <section class="container mx-auto px-4 py-16 sm:py-24">
    <h2 class="text-4xl md:text-5xl font-serif text-gray-800 mb-12 text-center">
      Trolley News
    </h2>
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      <NuxtLink
        v-for="article in newsArticles"
        :key="article.id"
        :to="`/news/${article.slug}`"
        class="group block"
      >
        <div class="overflow-hidden rounded-lg">
          <img
            :src="article.image"
            :alt="article.title"
            class="w-full h-56 object-cover transform group-hover:scale-105 transition-transform duration-300"
          />
        </div>
        <div class="py-4">
          <div class="flex items-center text-sm text-gray-500 mb-2">
            <span>{{ article.date }}</span>
            <span class="mx-2">|</span>
            <span>{{ article.category }}</span>
          </div>
          <h3
            class="text-lg font-semibold text-gray-800 group-hover:text-primary transition-colors duration-300"
          >
            {{ article.title }}
          </h3>
        </div>
      </NuxtLink>
    </div>
    <div class="text-center mt-12">
      <NuxtLink
        to="/news"
        class="inline-block tracking-widest text-gray-700 font-semibold py-2 border-t border-b border-gray-400 hover:text-gray-900 hover:border-gray-600 transition-colors duration-300"
      >
        View All
      </NuxtLink>
    </div>
  </section>
</template>
