<script setup>
const articles = ref([
  {
    title: 'New Trolley Route Announced for Fall',
    date: 'October 1, 2023',
    excerpt:
      'We are excited to announce a new scenic route that will be available starting this fall. Get ready to experience the beauty of Taylor, MS like never before.',
    image: '/images/trolley2.webp',
    slug: 'new-trolley-route-fall',
  },
  {
    title: 'Community Spotlight: The Art of Taylor',
    date: 'September 15, 2023',
    excerpt:
      'Discover the vibrant local art scene in Taylor. We are shining a spotlight on the talented artists that make our community so special.',
    image: '/images/people.webp',
    slug: 'community-spotlight-art',
  },
  {
    title: 'Summer Events Recap',
    date: 'September 5, 2023',
    excerpt:
      'From music festivals to food fairs, this summer was one for the books. Check out the highlights from our most popular events.',
    image: '/images/people2.webp',
    slug: 'summer-events-recap',
  },
  {
    title: 'New Trolley Route Announced for Fall',
    date: 'October 1, 2023',
    excerpt:
      'We are excited to announce a new scenic route that will be available starting this fall. Get ready to experience the beauty of Taylor, MS like never before.',
    image: '/images/trolley2.webp',
    slug: 'new-trolley-route-fall-2',
  },
  {
    title: 'Community Spotlight: The Art of Taylor',
    date: 'September 15, 2023',
    excerpt:
      'Discover the vibrant local art scene in Taylor. We are shining a spotlight on the talented artists that make our community so special.',
    image: '/images/people.webp',
    slug: 'community-spotlight-art-2',
  },
  {
    title: 'Summer Events Recap',
    date: 'September 5, 2023',
    excerpt:
      'From music festivals to food fairs, this summer was one for the books. Check out the highlights from our most popular events.',
    image: '/images/people2.webp',
    slug: 'summer-events-recap-2',
  },
]);
</script>

<template>
  <div class="bg-vintage">
    <div class="container mx-auto px-4 py-16 sm:py-24">
      <div class="text-center mb-16">
        <h1 class="text-4xl md:text-5xl font-serif text-charcoal mb-4">
          Trolley News
        </h1>
        <p class="text-lg text-softgray max-w-2xl mx-auto">
          Stay up-to-date with the latest announcements, events, and stories
          from Taylor Trolley.
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div
          v-for="article in articles"
          :key="article.slug"
          class="bg-white rounded-lg shadow-md overflow-hidden transform hover:-translate-y-2 transition-transform duration-300"
        >
          <NuxtLink :to="`/news/${article.slug}`">
            <NuxtImg
              :src="article.image"
              :alt="article.title"
              class="w-full h-48 object-cover"
            />
            <div class="p-6">
              <p class="text-sm text-softgray mb-2">{{ article.date }}</p>
              <h2 class="text-xl font-serif text-charcoal mb-2">
                {{ article.title }}
              </h2>
              <p class="text-charcoal mb-4">{{ article.excerpt }}</p>
              <span
                class="font-semibold text-red hover:text-red/80 transition-colors duration-300"
                >Read More</span
              >
            </div>
          </NuxtLink>
        </div>
      </div>
    </div>
  </div>
</template>
