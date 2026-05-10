<template>
  <div class="grid grid-cols-3 gap-2 auto-rows-min">
    <div
      v-for="(buildable, key) in buildables"
      :key="key"
      class="p-2 flex flex-col items-center cursor-pointer"
      @click="emit('click', key)"
    >
      <img :src="buildable.imagePath" />
      <div class="mt-1 font-bold">{{ buildable.name }}</div>
    </div>
  </div>
</template>

<script setup lang="ts">
import buildables from '../buildables.json';
import { BuildableType } from '@/stores/layoutStore';

const emit = defineEmits<{
  click: [type: keyof typeof BuildableType];
}>();
</script>
