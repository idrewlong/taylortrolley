<template>
  <footer
    class="relative pt-8 pb-6 border-t-2 border-[var(--color-brass)] bg-[var(--color-vintage)] font-serif"
  >
    <div class="container mx-auto px-4">
      <div class="flex flex-wrap text-left lg:text-left">
        <div class="w-full lg:w-4/12 px-4 mb-8 lg:mb-0">
          <h4
            class="text-3xl font-semibold text-gray-700 font-['Bourbon_Grotesque']"
          >
            Let's keep in touch!
          </h4>
          <h5 class="text-lg mt-0 mb-2">
            Follow us on social media for updates!
          </h5>

          <!-- Contact Information Section -->
          <div class="mt-6">
            <h6
              class="text-lg font-semibold text-gray-700 mb-3 font-['Bourbon_Grotesque']"
            >
              Contact Us
            </h6>

            <div class="flex flex-col space-y-2">
              <div class="flex items-center">
                <Icon name="heroicons:envelope" class="mr-3" size="20px" />
                <a
                  href="mailto:contact@taylortrolley.com"
                  class="transition-colors duration-300"
                >
                  contact@taylortrolley.com
                </a>
              </div>
              <div class="flex items-center">
                <Icon name="heroicons:phone" class="mr-3" size="20px" />
                <a
                  href="tel:+1234567890"
                  class="transition-colors duration-300"
                >
                  (123) 456-7890
                </a>
              </div>
            </div>
          </div>

          <div class="mt-6">
            <a
              href="https://facebook.com/taylortrolley"
              class="items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
              aria-label="Follow us on Facebook"
            >
              <Icon
                name="mdi:facebook"
                class="duration-500 hover:text-royalblue ease-in-out"
                size="24px"
              />
            </a>
            <a
              href="https://instagram.com/taylortrolley"
              class="items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
              aria-label="Follow us on Instagram"
            >
              <Icon
                name="mdi:instagram"
                class="duration-500 hover:text-royalblue ease-in-out"
                size="24px"
              />
            </a>
          </div>
        </div>

        <div class="w-full lg:w-6/12 px-4">
          <div class="flex flex-wrap items-top justify-end">
            <!-- Quick Links Section -->
            <div class="w-full lg:w-4/12 px-4 ml-auto mb-8 lg:mb-0">
              <span
                class="block uppercase text-sm font-semibold mb-2 font-['Bourbon_Grotesque']"
                >Quick Links</span
              >
              <ul class="list-unstyled">
                <li v-for="link in footerQuickLinks" :key="link.to">
                  <NuxtLink
                    :to="link.to"
                    class="block pb-2 text-sm transition-colors duration-300 hover:text-gray-900"
                  >
                    {{ link.label }}
                  </NuxtLink>
                </li>
              </ul>
            </div>
            <!-- More Info Section -->
            <div class="w-full lg:w-4/12 px-4">
              <span
                class="block uppercase text-sm font-semibold mb-2 font-['Bourbon_Grotesque']"
                >More Info</span
              >
              <ul class="list-unstyled">
                <li v-for="link in footerMoreInfo" :key="link.to">
                  <NuxtLink
                    :to="link.to"
                    class="block pb-2 text-sm transition-colors duration-300 hover:text-gray-900"
                  >
                    {{ link.label }}
                  </NuxtLink>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <hr class="my-6 border-[var(--color-brass)]" />
      <div
        class="flex flex-wrap items-center md:justify-between justify-center"
      >
        <div class="w-full md:w-8/12 px-4 mx-auto text-center">
          <div class="text-sm py-1">
            <p>
              © {{ new Date().getFullYear() }} Taylor Trolley LLC. All rights
              reserved.
            </p>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { useNavigation } from '~/composables/useNavigation';

const { footerQuickLinks, footerMoreInfo } = useNavigation();
</script>
