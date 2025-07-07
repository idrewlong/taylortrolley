<template>
  <div class="min-h-screen bg-vintage">
    <!-- Navigation Menu - Always at the top -->
    <header class="sticky top-0 z-50">
      <Header />
    </header>

    <!-- Main content area -->
    <main class="flex-1">
      <slot />
    </main>

    <Footer />
  </div>
</template>
