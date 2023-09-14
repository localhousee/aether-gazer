<script setup lang="ts">
const colorMode = useColorMode();

const isDark = computed({
  get() {
    return colorMode.value === "dark";
  },
  set() {
    colorMode.preference = colorMode.value === "dark" ? "light" : "dark";
  },
});
</script>
<template>
  <div
    class="w-full px-4 py-2 bg-gray-400 dark:bg-gray-900 bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-10 dark:bg-opacity-10"
  >
    <div class="flex justify-between w-full max-w-5xl mx-auto">
      <NuxtLink to="/" class="flex items-center">
        <UIcon
          name="i-heroicons-home-modern"
          class="w-8 h-8 text-primary-800 dark:text-primary-200"
        />
      </NuxtLink>
      <ClientOnly>
        <UButton
          variant="ghost"
          class="text-primary-800 dark:text-primary-200"
          aria-label="Theme"
          @click="isDark = !isDark"
        >
          <UIcon
            :name="isDark ? 'i-heroicons-sun-solid' : 'i-heroicons-moon-solid'"
            class="w-6 h-6"
            :class="{ 'text-primary-700': !isDark }"
          />
        </UButton>
        <template #fallback>
          <div class="w-8 h-8" />
        </template>
      </ClientOnly>
    </div>
  </div>
</template>
