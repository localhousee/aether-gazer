<script setup lang="ts">
interface Functor {
  name: string;
  image: string;
  faction: string;
  story: Array<string>;
  rank: number;
  buff: Record<string, string>;
  bonus: Record<string, string>;
  power: string;
  description: string;
}

const props = defineProps<Functor>();

const imagePath = ref(props.image);

const items = [
  {
    slot: "detail",
    label: "Detail",
  },
  {
    slot: "story",
    label: "Story",
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
      <div class="flex items-center mb-4">
        <img
          :src="`/factions/${faction.toLowerCase()}.png`"
          :alt="faction"
          class="w-12 h-12 mr-2 bg-gray-900 rounded-lg"
        />
        <div>
          <p v-text="name" />
          <div class="flex ml-2">
            <UIcon
              v-for="i in rank"
              :key="i"
              name="i-heroicons-star-20-solid"
              class="w-6 h-6 -rotate-12 -ml-2 text-gray-800 dark:text-gray-100"
            />
          </div>
        </div>
      </div>
      <UTabs
        :items="items"
        class="w-full"
        :ui="{ tab: { base: 'active:font-semibold' } }"
      >
        <template #detail="{ item }">
          <UCard
            class="h-96 overflow-y-auto"
            :ui="{ background: 'bg-transparent' }"
          >
            <div class="mb-4">
              <div
                v-for="(i, index) in buff"
                :key="index"
                class="flex justify-between items-center"
              >
                <p class="text-xl" v-text="index" />
                <p v-text="i" />
              </div>
              <p class="text-sm mt-4">Stat Bonuses</p>
              <div
                v-for="(i, index) in bonus"
                :key="index"
                class="flex justify-between items-center"
              >
                <p v-text="index" />
                <p v-text="i" />
              </div>
            </div>
            <div>
              <p
                class="text-sm text-gray-600 dark:text-gray-400 font-semibold tracking-wide"
              >
                Functor Power
              </p>
              <p v-html="power" />
            </div>
            <div
              class="text-sm text-gray-600 dark:text-gray-300 tracking-wide leading-relaxed mt-4"
              v-html="description"
            />
          </UCard>
        </template>
        <template #story="{ item }">
          <UCard
            class="h-96 overflow-y-auto"
            :ui="{ background: 'bg-transparent' }"
          >
            <p v-for="i in story" :key="i" v-text="i" class="md:py-1" />
          </UCard>
        </template>
      </UTabs>
    </div>
  </UContainer>
</template>
