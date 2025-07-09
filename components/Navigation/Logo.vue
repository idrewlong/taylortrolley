<template>
  <NuxtLink
    to="/"
    :class="containerClass"
    aria-label="Go to homepage"
    @click="$emit('click')"
  >
    <NuxtImg
      src="/logo/trolleylogo.png"
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
  imageClassOverride: {
    type: String,
    default: '',
  },
});

const imageClass = computed(() => {
  if (props.imageClassOverride) {
    return props.imageClassOverride;
  }

  const sizeClasses = {
    small: 'h-10 w-auto',
    medium: 'h-14 w-auto',
  };

  return sizeClasses[props.size] || sizeClasses.medium;
});
</script>
