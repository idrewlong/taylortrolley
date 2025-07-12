<template>
  <div class="bg-cream">
    <!-- Hero Section -->
    <div
      class="relative h-[50vh] min-h-[300px] bg-cover bg-center flex items-center justify-center text-white"
      style="background-image: url('/images/trolley.webp')"
    >
      <div class="absolute inset-0 bg-black/60" aria-hidden="true"></div>
      <div class="relative z-10 text-center px-4">
        <h1 ref="heroTitle" class="text-4xl md:text-5xl font-serif mb-4">
          About Taylor Trolley
        </h1>
        <p ref="heroSubtitle" class="text-lg text-gray-200 max-w-2xl mx-auto">
          Discover more about our trolley service connecting Oxford and Taylor,
          Mississippi.
        </p>
      </div>
    </div>

    <div class="container mx-auto px-4 py-16 sm:py-24">
      <div class="flex flex-col lg:flex-row gap-12">
        <!-- Sticky Sidebar -->
        <aside class="lg:w-1/4 self-start lg:sticky top-36">
          <nav class="space-y-4 text-lg">
            <a
              href="#what-is"
              class="block font-semibold text-gray-700 hover:text-gray-900 border-l-4 border-transparent hover:border-red transition-all duration-300 pl-4"
              >What is Taylor Trolley?</a
            >
            <a
              href="#routes"
              class="block font-semibold text-gray-700 hover:text-gray-900 border-l-4 border-transparent hover:border-red transition-all duration-300 pl-4"
              >Our Route</a
            >
            <a
              href="#services"
              class="block font-semibold text-gray-700 hover:text-gray-900 border-l-4 border-transparent hover:border-red transition-all duration-300 pl-4"
              >Services & Events</a
            >
          </nav>
        </aside>

        <!-- Main Content -->
        <main class="lg:w-3/4 space-y-20">
          <section id="what-is" class="prose max-w-none prose-lg scroll-m-16">
            <h2 class="text-3xl text-gray-800">What is Taylor Trolley?</h2>
            <p>
              From the historic Oxford Square to the charming backroads, Taylor
              Trolley offers a unique experience to the heart of Taylor,
              Mississippi. We are more than just a ride; we are your connection
              to the vibrant culture, rich history, and unique local businesses
              that make our community special. Whether you're a local looking
              for a convenient way to travel or a visitor eager to explore, our
              trolley provides a scenic and memorable journey.
            </p>
            <img
              src="/images/trolley3.webp"
              alt="The Taylor Trolley on a street."
              class="rounded-lg shadow-xl"
            />
          </section>

          <section id="routes" class="prose max-w-none prose-lg scroll-m-16">
            <h2 class="text-3xl text-gray-800">Our Route</h2>
            <p>
              Our primary route is a scenic journey connecting the bustling city
              of Oxford with the artistic enclave of Taylor. The ride itself is
              an experience, winding through beautiful Mississippi landscapes.
              We offer multiple stops along the way, ensuring you can easily
              access key destinations in both locations. The full round trip is
              designed to give you ample time to explore, dine, and shop at your
              leisure.
            </p>
            <p>
              Please check our <NuxtLink to="/#schedule">schedule</NuxtLink> for
              the latest departure times and stop locations. We strive to be
              punctual and reliable, making your trip planning as smooth as
              possible.
            </p>
            <img
              src="/images/trolley2.webp"
              alt="The Taylor Inn."
              class="rounded-lg shadow-xl"
            />
          </section>

          <section id="services" class="prose max-w-none prose-lg scroll-m-16">
            <h2 class="text-3xl text-gray-800">Services & Events</h2>
            <p>
              Beyond our daily routes, the Taylor Trolley is available for
              private charters, making it a unique venue for any occasion.
              Consider us for:
            </p>
            <ul>
              <li>
                <strong>Wedding Charters:</strong> Add a touch of vintage charm
                to your special day. Our trolley is a beautiful backdrop for
                photos and a fun way to transport your wedding party and guests.
              </li>
              <br />
              <li>
                <strong>Private Events:</strong> Host a memorable birthday
                party, corporate outing, or a special gathering with friends.
                Customize the route and create a unique experience for your
                guests.
              </li>
              <br />
              <li>
                <strong>Community Events:</strong> We love being a part of local
                festivals and events. Look for us around town, or partner with
                us for your next community gathering.
              </li>
            </ul>
            <p>
              Interested in booking the trolley?
              <NuxtLink to="/contact">Contact us</NuxtLink> for availability and
              rates.
            </p>
            <img
              src="/images/people.webp"
              alt="People celebrating on the trolley."
              class="rounded-lg shadow-xl"
            />
          </section>
        </main>
      </div>

      <!-- CTA Section -->
      <div ref="ctaSection" class="text-center mt-20 py-16">
        <h2 class="text-3xl font-serif mb-4 text-gray-800">Ready to Book?</h2>
        <p class="text-lg text-gray-600 max-w-xl mx-auto mb-8">
          We'd love to be a part of your next event. Contact us today to check
          availability and discuss your plans with our team.
        </p>
        <NuxtLink
          to="/contact"
          class="bg-red text-white hover:bg-red/80 transition-colors duration-300 font-semibold py-4 px-10 rounded-md shadow-lg transform hover:scale-105 text-lg"
        >
          Inquire Now
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted, onUnmounted, ref } from 'vue';

const { $gsap } = useNuxtApp();

const heroTitle = ref(null);
const heroSubtitle = ref(null);
const observer = ref(null);
const ctaSection = ref(null);

onMounted(() => {
  // Animate Hero
  $gsap.from([heroTitle.value, heroSubtitle.value], {
    opacity: 0,
    y: 20,
    duration: 0.8,
    ease: 'power3.out',
    stagger: 0.2,
  });

  // Animate sections on scroll
  const sections = $gsap.utils.toArray('section');
  sections.forEach((section) => {
    $gsap.from(section, {
      opacity: 0,
      y: 50,
      duration: 1,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: section,
        start: 'top 80%',
        toggleActions: 'play none none none',
      },
    });
  });

  // Animate CTA
  if (ctaSection.value) {
    $gsap.from(ctaSection.value.children, {
      opacity: 0,
      y: 40,
      duration: 1,
      ease: 'power3.out',
      stagger: 0.2,
      scrollTrigger: {
        trigger: ctaSection.value,
        start: 'top 85%',
        toggleActions: 'play none none none',
      },
    });
  }

  // Active link highlighting on scroll
  const navLinks = $gsap.utils.toArray('aside nav a');
  const sectionElements = sections.map((section) =>
    document.querySelector(`#${section.id}`)
  );

  function highlightLink(id) {
    navLinks.forEach((link) => {
      if (link.getAttribute('href') === `#${id}`) {
        link.classList.add('active-link');
      } else {
        link.classList.remove('active-link');
      }
    });
  }

  // Set initial active link on page load
  highlightLink('what-is');

  observer.value = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          highlightLink(entry.target.id);
        }
      });
    },
    { rootMargin: '-50% 0px -50% 0px' }
  );

  sectionElements.forEach((section) => {
    if (section) {
      observer.value.observe(section);
    }
  });
});

onUnmounted(() => {
  if (observer.value) {
    observer.value.disconnect();
  }
});

definePageMeta({
  layout: 'default',
});
</script>

<style>
.prose-lg img {
  margin-top: 2em;
  margin-bottom: 2em;
}

.prose-lg p {
  line-height: 1.8;
}

.prose-lg p,
.prose-lg ul {
  margin-top: 1.5em;
  margin-bottom: 1.5em;
}

.active-link {
  --tw-border-opacity: 1;
  border-color: rgb(
    239 68 68 / var(--tw-border-opacity)
  ); /* Corresponds to border-red */
  color: #1f2937; /* Corresponds to text-gray-800 */
}
</style>
