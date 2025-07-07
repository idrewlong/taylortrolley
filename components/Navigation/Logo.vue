<template>
  <NuxtLink
    to="/"
    :class="containerClass"
    aria-label="Go to homepage"
    @click="$emit('click')"
  >
    <img
      src="/logo/taylor_logo.svg"
      alt="Taylor Trolley Logo"
      :class="imageClass"
    />
  </NuxtLink>
</template>

<script setup>
defineEmits(['click']);

const props = defineProps({
  size: {
    type: String,
    default: 'medium',
    validator: (value) => ['small', 'medium'].includes(value),
  },
  containerClass: {
    type: String,
    default: 'flex items-center',
  },
});

const imageClass = computed(() => {
  const sizeClasses = {
    small: 'h-10 w-auto',
    medium: 'h-14 w-auto',
  };

  return sizeClasses[props.size] || sizeClasses.medium;
});
</script>
