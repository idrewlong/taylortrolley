<template>
  <div class="hidden lg:flex lg:items-center lg:w-full max-w-7xl mx-auto px-4">
    <!-- Logo on the left -->
    <div class="flex-shrink-0">
      <NavigationLogo
        container-class="flex items-center justify-center group"
      />
    </div>

    <!-- Navigation links -->
    <div
      class="flex items-center justify-end flex-grow gap-8 uppercase ml-auto"
    >
      <template v-for="link in navItems" :key="link.to">
        <div
          v-if="link.children && link.children.length > 0"
          class="relative group"
          @mouseenter="handleMouseEnter(link.label)"
          @mouseleave="handleMouseLeave"
        >
          <!-- Dropdown link rendering -->
          <div class="flex items-center gap-1 nav-item">
            <NuxtLink
              :to="link.to"
              class="text-white transition-all duration-300 py-3 px-2 text-sm tracking-wider font-light relative"
              :class="{ 'font-medium': $route.path.startsWith(link.to) }"
            >
              {{ link.label }}
              <span
                class="absolute bottom-1 left-0 w-0 h-0.5 bg-luscored transition-all duration-300 group-hover:w-full"
              ></span>
            </NuxtLink>
            <button
              class="flex items-center text-white transition-all duration-300 py-3 px-1"
              :aria-expanded="openDropdown === link.label"
              :aria-controls="`${link.label}-dropdown`"
              @click="toggleDropdown(link.label)"
            >
              <Icon
                name="heroicons:chevron-down"
                class="w-4 h-4 transition-transform duration-300"
                :class="{
                  'rotate-180':
                    openDropdown === link.label ||
                    hoveredDropdown === link.label,
                }"
              />
            </button>
          </div>
          <div
            v-show="
              openDropdown === link.label || hoveredDropdown === link.label
            "
            :id="`${link.label}-dropdown`"
            class="absolute top-full left-0 min-w-64 bg-white/95 backdrop-blur-md rounded-lg shadow-2xl py-3 mt-2 border border-amber-200/30 z-50 opacity-0 transform translate-y-2 transition-all duration-300"
            :class="{
              'opacity-100 translate-y-0':
                openDropdown === link.label || hoveredDropdown === link.label,
            }"
          >
            <!-- Dropdown content -->
            <div class="py-1">
              <NuxtLink
                v-for="child in link.children"
                :key="child.to"
                :to="child.to"
                class="block px-6 py-3 transition-all duration-200 font-light tracking-wide border-l-3 border-transparent hover:border-luscored nav-item"
                @click="closeDropdown"
              >
                {{ child.label }}
              </NuxtLink>
            </div>
          </div>
        </div>
        <NuxtLink
          v-else
          :to="link.to"
          class="relative text-white transition-all duration-300 group py-3 px-2 text-base tracking-wider font-bold nav-item"
          :class="{ 'font-medium': $route.path === link.to }"
        >
          {{ link.label }}
          <span
            class="absolute bottom-1 left-0 w-0 h-0.5 bg-luscored transition-all duration-300 group-hover:w-full"
            :class="{ 'w-full bg-luscored': $route.path === link.to }"
          />
        </NuxtLink>
      </template>
    </div>

    <!-- CTA Button -->
    <div class="ml-8">
      <NuxtLink
        v-if="ctaItem"
        :to="ctaItem.to"
        target="_blank"
        rel="noopener noreferrer"
        class="bg-red text-white hover:bg-red/80 transition-colors duration-300 font-semibold py-3 px-6 rounded-md shadow-lg transform hover:scale-105 nav-item uppercase"
      >
        {{ ctaItem.label }}
        <!-- <Icon
          name="material-symbols:trolley-cable-car"
          size="24"
          class="align-middle"
        /> -->
      </NuxtLink>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onUnmounted } from 'vue';

const props = defineProps({
  navigationLinks: {
    type: Array,
    required: true,
  },
});

const navItems = computed(() =>
  props.navigationLinks.filter((link) => !link.isButton)
);
const ctaItem = computed(() =>
  props.navigationLinks.find((link) => link.isButton)
);

const openDropdown = ref(null);
const hoveredDropdown = ref(null);
let hoverTimeout = null;

const handleMouseEnter = (label) => {
  if (hoverTimeout) {
    clearTimeout(hoverTimeout);
    hoverTimeout = null;
  }
  hoveredDropdown.value = label;
};

const handleMouseLeave = () => {
  hoverTimeout = setTimeout(() => {
    hoveredDropdown.value = null;
  }, 150);
};

const toggleDropdown = (label) => {
  openDropdown.value = openDropdown.value === label ? null : label;
  hoveredDropdown.value = null;
};

const closeDropdown = () => {
  openDropdown.value = null;
  hoveredDropdown.value = null;
};

onUnmounted(() => {
  if (hoverTimeout) {
    clearTimeout(hoverTimeout);
  }
});

defineExpose({
  closeDropdown,
});
</script>

<style scoped>
/* Enhanced hover effects */
.group:hover .hover\\:w-full {
  width: 100%;
}

/* Smooth dropdown animations */
.group:hover [aria-hidden='false'] {
  opacity: 1;
  transform: translateY(0);
}

/* Border accent for hover states */
.border-l-3 {
  border-left-width: 3px;
}

/* Improved backdrop blur */
.backdrop-blur-md {
  backdrop-filter: blur(12px);
}

/* Add smooth hover effect for nav items */
a,
button {
  position: relative;
  transition: all 0.3s ease;
}

/* Add subtle hover animation */
.group:hover span {
  transform: scaleX(1);
  opacity: 1;
}
</style>
