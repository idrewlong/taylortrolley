<template>
  <div
    class="relative h-[60vh] min-h-[400px] bg-cover bg-center flex items-center justify-start text-white"
    style="background-image: url('/images/trolley.webp')"
  >
    <div class="absolute inset-0 bg-black/60" aria-hidden="true"></div>
    <div class="relative max-w-3xl z-10 px-8 sm:px-12 lg:px-16 text-left">
      <h1 class="text-4xl md:text-6xl font-light mb-2">
        Experience Taylor, MS
      </h1>
      <p
        class="text-xl md:text-2xl font-extrabold uppercase tracking-wider mb-6"
      >
        with The Best Seats Around
      </p>
      <NuxtLink
        to="/tickets"
        class="bg-red text-white hover:bg-red/80 transition-colors duration-300 font-semibold py-3 px-8 rounded-md shadow-lg transform hover:scale-105"
      >
        Learn More
      </NuxtLink>
    </div>
    <!-- <NuxtImg
      src="/logo/trolleylogo.png"
      alt="Taylor Trolley Tours Logo"
      class="h-24 w-auto mx-auto mb-6 absolute bottom-0 right-0 -translate-x-1/2"
      width="150"
      height="150"
    /> -->
  </div>
</template>

<style scoped>
/* Scoped styles can be added here if needed */
</style>
