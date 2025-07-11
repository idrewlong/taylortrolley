<script setup>
import { ref } from 'vue';
import { useRoute } from 'vue-router';

const articles = ref([
  {
    title: 'New Trolley Route Announced for Fall',
    date: 'October 1, 2023',
    excerpt:
      'We are excited to announce a new scenic route that will be available starting this fall. Get ready to experience the beauty of Taylor, MS like never before.',
    image: '/images/trolley2.webp',
    slug: 'new-trolley-route-fall',
    content: `
      <p class="mb-4">Get ready to embark on an unforgettable journey through the heart of Taylor, Mississippi. Starting this October, we are thrilled to introduce a new trolley route designed to showcase the stunning autumn colors and hidden gems of our charming town.</p>
      <p class="mb-4">The new route will take you through historic downtown, along the scenic backroads, and to some of our most beloved local landmarks. We've partnered with local historians to provide engaging commentary, sharing stories and insights that bring the history of Taylor to life.</p>
      <h3 class="text-2xl font-serif text-charcoal mt-6 mb-4">Route Highlights:</h3>
      <ul class="list-disc list-inside mb-4">
        <li>Historic Oxford Square</li>
        <li>The Plein Air neighborhood</li>
        <li>Stunning views of the Mississippi countryside</li>
        <li>Exclusive stops at local artisan shops</li>
      </ul>
      <p>We can't wait for you to experience the magic of autumn in Taylor. Tickets for the new route are available now. Be sure to book in advance, as we expect tickets to sell out quickly!</p>
    `,
  },
  {
    title: 'Community Spotlight: The Art of Taylor',
    date: 'September 15, 2023',
    excerpt:
      'Discover the vibrant local art scene in Taylor. We are shining a spotlight on the talented artists that make our community so special.',
    image: '/images/people.webp',
    slug: 'community-spotlight-art',
    content: `
      <p class="mb-4">Taylor, Mississippi, is more than just a charming town; it's a hub of creativity and artistic expression. In this community spotlight, we're celebrating the local artists who contribute to our town's vibrant culture.</p>
      <p class="mb-4">From painters and sculptors to musicians and writers, Taylor is home to a diverse group of talented individuals. We recently had the pleasure of sitting down with a few of them to learn more about their craft and what makes Taylor a source of inspiration.</p>
       <h3 class="text-2xl font-serif text-charcoal mt-6 mb-4">Featured Artists:</h3>
      <ul class="list-disc list-inside mb-4">
        <li>John Doe, Painter</li>
        <li>Jane Smith, Sculptor</li>
        <li>Local Band, The Trolley Tones</li>
      </ul>
      <p>Join us in supporting our local artists by visiting their galleries, attending their shows, and celebrating the creativity that makes Taylor so unique.</p>
    `,
  },
  {
    title: 'Summer Events Recap',
    date: 'September 5, 2023',
    excerpt:
      'From music festivals to food fairs, this summer was one for the books. Check out the highlights from our most popular events.',
    image: '/images/people2.webp',
    slug: 'summer-events-recap',
    content: `
      <p class="mb-4">This summer was a whirlwind of excitement in Taylor, MS! We hosted a variety of events that brought our community together and created lasting memories.</p>
      <p class="mb-4">Our annual Summer Music Festival was a massive success, with performances from local and regional bands. The Food Truck Fair was a culinary delight, offering a wide array of delicious eats. And who could forget the spectacular Fourth of July fireworks display?</p>
      <h3 class="text-2xl font-serif text-charcoal mt-6 mb-4">Summer Highlights:</h3>
      <ul class="list-disc list-inside mb-4">
        <li>Over 10,000 attendees at the Summer Music Festival</li>
        <li>20+ unique food vendors at the Food Truck Fair</li>
        <li>A record-breaking fireworks show</li>
      </ul>
      <p>Thank you to everyone who participated and made this summer one to remember. We're already planning for next year and can't wait to see you there!</p>
    `,
  },
  {
    title: 'New Trolley Route Announced for Fall',
    date: 'October 1, 2023',
    excerpt:
      'We are excited to announce a new scenic route that will be available starting this fall. Get ready to experience the beauty of Taylor, MS like never before.',
    image: '/images/trolley2.webp',
    slug: 'new-trolley-route-fall-2',
    content: `
      <p class="mb-4">Get ready to embark on an unforgettable journey through the heart of Taylor, Mississippi. Starting this October, we are thrilled to introduce a new trolley route designed to showcase the stunning autumn colors and hidden gems of our charming town.</p>
      <p class="mb-4">The new route will take you through historic downtown, along the scenic backroads, and to some of our most beloved local landmarks. We've partnered with local historians to provide engaging commentary, sharing stories and insights that bring the history of Taylor to life.</p>
      <h3 class="text-2xl font-serif text-charcoal mt-6 mb-4">Route Highlights:</h3>
      <ul class="list-disc list-inside mb-4">
        <li>Historic Oxford Square</li>
        <li>The Plein Air neighborhood</li>
        <li>Stunning views of the Mississippi countryside</li>
        <li>Exclusive stops at local artisan shops</li>
      </ul>
      <p>We can't wait for you to experience the magic of autumn in Taylor. Tickets for the new route are available now. Be sure to book in advance, as we expect tickets to sell out quickly!</p>
    `,
  },
  {
    title: 'Community Spotlight: The Art of Taylor',
    date: 'September 15, 2023',
    excerpt:
      'Discover the vibrant local art scene in Taylor. We are shining a spotlight on the talented artists that make our community so special.',
    image: '/images/people.webp',
    slug: 'community-spotlight-art-2',
    content: `
      <p class="mb-4">Taylor, Mississippi, is more than just a charming town; it's a hub of creativity and artistic expression. In this community spotlight, we're celebrating the local artists who contribute to our town's vibrant culture.</p>
      <p class="mb-4">From painters and sculptors to musicians and writers, Taylor is home to a diverse group of talented individuals. We recently had the pleasure of sitting down with a few of them to learn more about their craft and what makes Taylor a source of inspiration.</p>
       <h3 class="text-2xl font-serif text-charcoal mt-6 mb-4">Featured Artists:</h3>
      <ul class="list-disc list-inside mb-4">
        <li>John Doe, Painter</li>
        <li>Jane Smith, Sculptor</li>
        <li>Local Band, The Trolley Tones</li>
      </ul>
      <p>Join us in supporting our local artists by visiting their galleries, attending their shows, and celebrating the creativity that makes Taylor so unique.</p>
    `,
  },
  {
    title: 'Summer Events Recap',
    date: 'September 5, 2023',
    excerpt:
      'From music festivals to food fairs, this summer was one for the books. Check out the highlights from our most popular events.',
    image: '/images/people2.webp',
    slug: 'summer-events-recap-2',
    content: `
      <p class="mb-4">This summer was a whirlwind of excitement in Taylor, MS! We hosted a variety of events that brought our community together and created lasting memories.</p>
      <p class="mb-4">Our annual Summer Music Festival was a massive success, with performances from local and regional bands. The Food Truck Fair was a culinary delight, offering a wide array of delicious eats. And who could forget the spectacular Fourth of July fireworks display?</p>
      <h3 class="text-2xl font-serif text-charcoal mt-6 mb-4">Summer Highlights:</h3>
      <ul class="list-disc list-inside mb-4">
        <li>Over 10,000 attendees at the Summer Music Festival</li>
        <li>20+ unique food vendors at the Food Truck Fair</li>
        <li>A record-breaking fireworks show</li>
      </ul>
      <p>Thank you to everyone who participated and made this summer one to remember. We're already planning for next year and can't wait to see you there!</p>
    `,
  },
]);

const route = useRoute();
const article = computed(() => {
  return articles.value.find((a) => a.slug === route.params.slug);
});
</script>

<template>
  <div class="bg-vintage py-16 sm:py-24">
    <div v-if="article" class="container mx-auto px-4">
      <div class="max-w-4xl mx-auto">
        <NuxtLink
          to="/news"
          class="text-red hover:text-red/80 transition-colors duration-300 mb-8 inline-block"
        >
          &larr; Back to News
        </NuxtLink>

        <h1 class="text-4xl md:text-5xl font-serif text-charcoal mb-4">
          {{ article.title }}
        </h1>
        <p class="text-softgray mb-8">{{ article.date }}</p>

        <NuxtImg
          :src="article.image"
          :alt="article.title"
          class="w-full h-auto md:h-[400px] object-cover rounded-lg mb-8"
        />

        <div
          class="prose max-w-none text-charcoal"
          v-html="article.content"
        ></div>
      </div>
    </div>
    <div v-else class="text-center">
      <h1 class="text-4xl md:text-5xl font-serif text-charcoal mb-4">
        Article not found
      </h1>
      <p class="text-softgray mb-8">
        The article you are looking for does not exist.
      </p>
      <NuxtLink
        to="/news"
        class="text-red hover:text-red/80 transition-colors duration-300"
      >
        &larr; Back to News
      </NuxtLink>
    </div>
  </div>
</template>

<style>
.prose h3 {
  font-family: 'Bourbon Grotesque', sans-serif;
}
</style>
