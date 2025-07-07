<template>
  <footer class="relative pt-8 pb-6 border-t-2 border-amber-800">
    <div class="md:container mx-auto px-4">
      <div class="flex flex-wrap text-left lg:text-left">
        <div class="w-full lg:w-6/12 px-4">
          <h4 class="md:text-3xl text-2xl font-semibold text-gray-700">
            Let's keep in touch!
          </h4>
          <h5 class="md:text-lg text-base mt-0 mb-2">
            Follow us on social media for updates!
          </h5>

          <!-- Contact Information Section -->
          <div class="mt-4 mb-6">
            <h6 class="text-lg font-semibold text-gray-700 mb-3">Contact Us</h6>

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
                <Icon
                  name="heroicons:phone"
                  class="text-blueGray-600 mr-3"
                  size="20px"
                />
                <a
                  href="tel:+16625550149"
                  class="transition-colors duration-300"
                >
                  (662) 555-0149
                </a>
              </div>
            </div>
          </div>

          <div class="mt-6 lg:mb-0 mb-6">
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
          <div class="flex flex-wrap items-top mb-6">
            <!-- Footer Links Section -->
            <div class="w-1/2 lg:w-6/12 px-4 ml-auto">
              <span class="block uppercase text-sm font-semibold mb-2"
                >More Info</span
              >
              <ul class="list-unstyled">
                <li v-for="link in footerLinks" :key="link.to">
                  <NuxtLink
                    :to="link.to"
                    class="font-semibold block pb-2 text-sm"
                  >
                    {{ link.label }}
                  </NuxtLink>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <hr class="my-6 border-amber-800" />
      <div
        class="flex flex-wrap items-center md:justify-between justify-center"
      >
        <div class="w-full md:w-4/12 px-4 mx-auto text-center">
          <div class="text-sm font-semibold py-1">
            <p>© {{ new Date().getFullYear() }} Taylor Trolley LLC.</p>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { useNavigation } from '~/composables/useNavigation';

const { footerLinks } = useNavigation();
</script>
