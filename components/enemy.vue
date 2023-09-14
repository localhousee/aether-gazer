<script setup lang="ts">
interface Enemy {
  name: string;
  image: string;
  type: "Visbanes" | "AGI Mecha" | "Humanoid";
  risk: "I" | "II" | "III";
  description: string;
  intel: Array<string>;
  skills: Array<{ name: string; description: string }>;
}

const props = defineProps<Enemy>();

const imagePath = ref(props.image);
const isOpen = ref(false);

const items = [
  {
    slot: "intel",
    label: "Intel",
  },
  {
    slot: "skills",
    label: "Skiils",
  },
];
</script>
<template>
  <UContainer
    class="grow w-full flex flex-col lg:flex-row lg:items-center lg:justify-center"
  >
    <div class="w-48 h-48 mx-auto flex justify-center items-center my-4">
      <img
        :src="imagePath"
        @error="imagePath = '/stickers/Soon....png'"
        class="w-full h-full"
      />
    </div>
    <div
      class="w-full max-w-xl mx-auto bg-white dark:bg-gray-900 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-50 dark:bg-opacity-10 shadow-lg shadow-gray-300 dark:shadow-gray-700 p-4"
    >
      <div class="flex items-center justify-between mb-6">
        <div class="flex">
          <div
            class="flex items-center justify-center w-12 h-12 text-xl bg-primary-500 rounded-xl"
          >
            <p class="font-bold text-primary-100" v-text="risk" />
          </div>
          <div class="ml-2">
            <p class="text-xl" v-text="name" />
            <p class="text-sm font-semibold tracking-wide" v-text="type" />
          </div>
        </div>
        <UButton
          icon="i-heroicons-book-open-20-solid"
          @click="isOpen = true"
          title="Appearance Description"
          color="white"
          variant="solid"
          :ui="{
            color: {
              white: {
                solid:
                  'shadow-sm ring-1 ring-inset ring-primary-300 dark:ring-primary-700 text-white bg-primary-500 hover:bg-primary-700 dark:bg-primary-900 dark:hover:bg-primary-800/50 focus-visible:ring-2 focus-visible:ring-primary-500 dark:focus-visible:ring-primary-400',
              },
            },
          }"
        />
        <UModal v-model="isOpen">
          <UCard
            :ui="{ divide: 'divide-y divide-gray-100 dark:divide-gray-800' }"
          >
            <template #header> Appearance Description </template>

            <p v-text="description" />
          </UCard>
        </UModal>
      </div>
      <UTabs
        :items="items"
        class="w-full"
        :ui="{ tab: { base: 'active:font-semibold' } }"
      >
        <template #intel="{ item }">
          <UCard
            class="h-96 overflow-y-auto"
            :ui="{ background: 'bg-transparent' }"
          >
            <div class="mb-4 space-y-4">
              <div v-for="(i, index) in intel" :key="i">
                <p class="text-lg font-semibold underline">
                  Opponent Intel {{ index + 1 }}
                </p>
                <p v-text="i" />
              </div>
            </div>
          </UCard>
        </template>
        <template #skills="{ item }">
          <UCard
            class="h-96 overflow-y-auto"
            :ui="{ background: 'bg-transparent' }"
          >
            <div class="space-y-4">
              <div v-for="i in skills" :key="i.name">
                <p class="text-lg font-semibold underline" v-text="i.name" />
                <p v-text="i.description" />
              </div>
            </div>
          </UCard>
        </template>
      </UTabs>
    </div>
  </UContainer>
</template>
