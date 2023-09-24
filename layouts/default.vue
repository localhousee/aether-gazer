<script setup lang="ts">
import enemies from "../data/enemies";
const search = ref("");
const isOpen = ref(false);

const filteredEnemies = computed(() =>
  search.value === ""
    ? enemies
    : enemies.filter((i) =>
        i.toLowerCase().includes(search.value.toLowerCase())
      )
);

const links = ref([
  {
    label: "Enemies",
    children: filteredEnemies,
  },
]);

function parseUrl(item: string) {
  return item                   // Some Random <Name - Type>
    .toLowerCase()              // some random <name - type>
    .replace(/[^\w\s-]/g, "")   // some random name - type
    .replace(/\s+/g, "-")       // some-random-name---type
    .replace("---", "-");       // some-random-name-type
}
</script>
<template>
  <div
    class="min-h-screen bg-[url('/light.jpg')] dark:bg-[url('/dark.jpg')] bg-cover bg-center flex flex-col"
  >
    <Navbar />
    <slot />
  </div>

  <UButton
    @click="isOpen = true"
    class="fixed bottom-4 right-4 p-3 md:p-4 dark:text-white dark:bg-primary-900"
    :padded="false"
    :ui="{ rounded: 'rounded-full' }"
  >
    <UIcon name="i-heroicons-magnifying-glass-20-solid" class="w-6 h-6" />
  </UButton>

  <USlideover v-model="isOpen" :ui="{ background: 'bg-transparent' }">
    <UCard
      class="flex flex-col flex-1"
      :ui="{
        body: { base: 'flex-1 overflow-y-auto' },
        ring: '',
        divide: 'divide-y divide-gray-100 dark:divide-gray-600',
        background:
          'bg-primary-200 dark:bg-gray-900 bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-20 dark:bg-opacity-10',
      }"
    >
      <template #header>
        <div class="flex justify-between mb-4">
          <h2
            class="font-semibold uppercase tracking-wider text-primary-900 dark:text-primary-300"
          >
            main menu
          </h2>
          <UButton
            @click="isOpen = false"
            icon="i-heroicons-x-mark"
            variant="ghost"
            :padded="false"
          />
        </div>
        <UInput
          v-model="search"
          icon="i-heroicons-magnifying-glass-20-solid"
          placeholder="Search anything .."
          id="search"
          :ui="{ icon: { trailing: { pointer: '' } }, width: 'full' }"
        >
          <template #trailing>
            <UButton
              v-show="search"
              color="gray"
              variant="link"
              icon="i-heroicons-x-mark-20-solid"
              :padded="false"
              @click="search = ''"
            />
          </template>
        </UInput>
      </template>
      <div class="space-y-4">
        <div v-for="item in links" :key="item.label">
          <div v-show="item.children.length > 0">
            <p
              class="mb-1 font-bold uppercase tracking-wider text-primary-900 dark:text-primary-400"
              v-text="item.label"
            />
            <div class="flex flex-col w-full">
              <NuxtLink
                v-for="i in item.children"
                @click="isOpen = false"
                :key="i"
                :to="`/${item.label.toLowerCase()}/${parseUrl(i)}`"
                class="w-full py-1 px-2 tracking-wide text-primary-900 hover:bg-primary-100 hover:text-primary-800 dark:text-primary-200 dark:hover:text-primary-100 dark:hover:bg-primary-500 rounded-md"
                v-text="i"
              />
            </div>
          </div>
        </div>
      </div>

      <template #footer> </template>
    </UCard>
  </USlideover>
</template>
