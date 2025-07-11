<script setup>
import { ref } from 'vue';

const faqs = ref([
  {
    question: 'How do I book Taylor Trolley for a wedding or private event?',
    answer:
      "We'd love to be a part of your special day! For private charters, including weddings, corporate events, and other private gatherings, please visit our <a href='/contact' class='text-red hover:underline'>Contact Us</a> page to send us an inquiry. We'll get back to you with availability and pricing information.",
    open: false,
  },
  {
    question: 'How do I buy a ticket for a trolley ride from Oxford to Taylor?',
    answer:
      'Information about ticket sales for our regular routes will be available soon. Please check back on our website or follow us on social media for the latest updates on schedules and ticket purchasing options.',
    open: false,
  },
  {
    question: 'What is the route, schedule, and drop-off information?',
    answer:
      'Our main route runs from the historic Oxford Square to the heart of Taylor, MS. We are currently finalizing our detailed schedule and list of drop-off points. This information will be posted on our website shortly.',
    open: false,
  },
  {
    question: 'How far is Taylor, MS from Oxford, MS?',
    answer:
      'Taylor is a short and scenic drive from Oxford, located about 9 miles south of the Oxford Square. Our trolley ride provides a charming and relaxing way to travel between these two unique locations.',
    open: false,
  },
  {
    question: 'Why should I visit Taylor, MS?',
    answer:
      "Taylor is a hub of art, culture, and Southern hospitality. From renowned art galleries and studios to delicious dining experiences and unique shops, Taylor offers a memorable escape. It's a place where you can discover the vibrant local scene and enjoy the charm of a small Mississippi town.",
    open: false,
  },
  {
    question: 'Are food and drinks allowed on the trolley?',
    answer:
      'For our public tours, we kindly ask that you refrain from consuming food and drinks on the trolley to ensure a clean and pleasant experience for everyone. For private charters, please discuss your needs with us during the booking process.',
    open: false,
  },
  {
    question: 'Is the trolley accessible for people with disabilities?',
    answer:
      'We are committed to providing an enjoyable experience for all our guests. Please contact us with any specific accessibility questions, and we will do our best to accommodate your needs.',
    open: false,
  },
]);

const toggleAccordion = (index) => {
  faqs.value[index].open = !faqs.value[index].open;
};

definePageMeta({
  layout: 'default',
});
</script>

<template>
  <div class="bg-vintage">
    <div class="container mx-auto px-4 py-16 sm:py-24">
      <div class="text-center mb-16">
        <h1 class="text-4xl md:text-5xl font-serif text-charcoal mb-4">
          Frequently Asked Questions
        </h1>
        <p class="text-lg text-softgray max-w-2xl mx-auto">
          Your questions, answered. Here is some information to help you plan
          your Taylor Trolley experience.
        </p>
      </div>

      <div class="max-w-3xl mx-auto">
        <div
          v-for="(faq, index) in faqs"
          :key="index"
          class="border-b border-gray-300 py-4"
        >
          <button
            @click="toggleAccordion(index)"
            class="w-full text-left flex justify-between items-center focus:outline-none"
          >
            <span class="text-xl font-serif text-charcoal">{{
              faq.question
            }}</span>
            <span
              class="text-2xl text-red transform transition-transform duration-300"
              :class="{ 'rotate-45': faq.open }"
              >+</span
            >
          </button>
          <div
            v-show="faq.open"
            class="mt-4 text-charcoal"
            v-html="faq.answer"
          ></div>
        </div>
      </div>
    </div>
  </div>
</template>
