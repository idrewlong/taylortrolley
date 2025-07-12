<template>
  <div class="overflow-x-hidden">
    <!-- Main Content Section with Background -->
    <div
      class="relative bg-cover bg-center text-white"
      style="background-image: url('/images/trolley3.webp')"
    >
      <div class="absolute inset-0 bg-navyblue/80 backdrop-blur-sm"></div>

      <div class="relative container mx-auto px-4 py-16 sm:py-24">
        <div ref="contactContent" class="max-w-3xl mx-auto text-center">
          <!-- Header -->
          <h1 class="text-4xl md:text-5xl font-serif mb-4">
            Let's Get in Touch
          </h1>
          <p class="text-lg text-white/80 mb-12">
            Whether you have a question or are ready to book an event, we'd love
            to hear from you.
          </p>

          <!-- Form -->
          <form @submit.prevent="handleSubmit" class="text-left">
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label
                  for="first-name"
                  class="block text-sm font-semibold text-white/90 mb-2"
                  >First Name</label
                >
                <input
                  type="text"
                  id="first-name"
                  v-model="form.firstName"
                  class="block w-full px-4 py-3 bg-white/10 border border-white/20 rounded-md shadow-sm text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-red/50 focus:border-red transition"
                  required
                />
              </div>
              <div>
                <label
                  for="last-name"
                  class="block text-sm font-semibold text-white/90 mb-2"
                  >Last Name</label
                >
                <input
                  type="text"
                  id="last-name"
                  v-model="form.lastName"
                  class="block w-full px-4 py-3 bg-white/10 border border-white/20 rounded-md shadow-sm text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-red/50 focus:border-red transition"
                  required
                />
              </div>
              <div>
                <label
                  for="email"
                  class="block text-sm font-semibold text-white/90 mb-2"
                  >Email</label
                >
                <input
                  type="email"
                  id="email"
                  v-model="form.email"
                  class="block w-full px-4 py-3 bg-white/10 border border-white/20 rounded-md shadow-sm text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-red/50 focus:border-red transition"
                  required
                />
              </div>
              <div>
                <label
                  for="phone"
                  class="block text-sm font-semibold text-white/90 mb-2"
                  >Phone Number</label
                >
                <input
                  type="tel"
                  id="phone"
                  v-model="form.phone"
                  class="block w-full px-4 py-3 bg-white/10 border border-white/20 rounded-md shadow-sm text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-red/50 focus:border-red transition"
                  required
                />
              </div>
              <div class="md:col-span-2">
                <label
                  for="request-type"
                  class="block text-sm font-semibold text-white/90 mb-2"
                  >Type of Request</label
                >
                <select
                  id="request-type"
                  v-model="form.requestType"
                  class="block w-full px-4 py-3 bg-white/10 border border-white/20 rounded-md shadow-sm text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-red/50 focus:border-red transition"
                  required
                >
                  <option disabled value="">Please select one</option>
                  <option>General Inquiry</option>
                  <option>Wedding Charter</option>
                  <option>Private Party</option>
                  <option>Community Event</option>
                  <option>Other</option>
                </select>
              </div>
              <div class="md:col-span-2">
                <label
                  for="description"
                  class="block text-sm font-semibold text-white/90 mb-2"
                  >Description</label
                >
                <textarea
                  id="description"
                  v-model="form.description"
                  rows="6"
                  class="block w-full px-4 py-3 bg-white/10 border border-white/20 rounded-md shadow-sm text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-red/50 focus:border-red transition"
                  placeholder="Tell us a little more about your event or question..."
                  required
                ></textarea>
              </div>
            </div>
            <div class="mt-8 text-right">
              <button
                type="submit"
                class="bg-red text-white hover:bg-red/80 transition-colors duration-300 font-semibold py-3 px-10 rounded-md shadow-lg transform hover:scale-105 text-lg"
              >
                Submit
              </button>
            </div>
          </form>

          <!-- Contact Info -->
          <div class="mt-16 text-center">
            <div
              class="flex flex-col sm:flex-row justify-center items-center gap-6 sm:gap-10"
            >
              <div class="flex items-center gap-3">
                <Icon name="heroicons:phone" class="w-6 h-6 text-red" />
                <span class="text-lg text-white/90">(555) 123-4567</span>
              </div>
              <div class="flex items-center gap-3">
                <Icon name="heroicons:envelope" class="w-6 h-6 text-red" />
                <span class="text-lg text-white/90"
                  >hello@taylortrolley.com</span
                >
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, reactive } from 'vue';

const { $gsap } = useNuxtApp();

const contactContent = ref(null);

const form = reactive({
  firstName: '',
  lastName: '',
  email: '',
  phone: '',
  requestType: '',
  description: '',
});

const handleSubmit = () => {
  // Handle form submission logic here
  console.log('Form submitted:', form);
  alert('Thank you for your message! We will get back to you soon.');
  // Reset form
  Object.assign(form, {
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    requestType: '',
    description: '',
  });
};

onMounted(() => {
  // Animate content
  if (contactContent.value) {
    $gsap.from(contactContent.value.children, {
      opacity: 0,
      y: 40,
      duration: 1,
      ease: 'power3.out',
      stagger: 0.2,
    });
  }
});

definePageMeta({
  layout: 'default',
});
</script>
