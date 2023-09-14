<script setup lang="ts">
definePageMeta({
  layout: "default",
});
</script>

<template>
  <div class="grow flex items-center justify-center">
    <div
      class="flex flex-col h-full w-full max-w-xl bg-gray-100 dark:bg-gray-900 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-20 dark:bg-opacity-20 border border-primary-100 dark:border-gray-500 text-primary-900 dark:text-primary-300 lg:px-2 lg:py-4"
    >
      <div class="flex items-center lg:items-start w-full">
        <img src="/stickers/Welcome!.png" class="w-24 h-24 md:w-36 md:h-36" />
        <div>
          <p class="text-xl font-bold md:text-2xl">Hi, Administrator!</p>
          <p class="mt-2 tracking-wide leading-relaxed hidden lg:block">
            Gaea Archive is a database of all the characters, functors, enemies,
            and sigils in the game Aether Gazer. You can use the search button
            at bottom right to find what you're looking for.
          </p>
        </div>
      </div>
      <p
        class="mt-2 px-1 md:px-3 pb-3 tracking-wide leading-relaxed md:text-lg lg:hidden"
      >
        Gaea Archive is a database of all the characters, functors, enemies, and
        sigils in the game Aether Gazer. You can use the search button at bottom
        right to find what you're looking for.
      </p>
    </div>
  </div>
</template>
