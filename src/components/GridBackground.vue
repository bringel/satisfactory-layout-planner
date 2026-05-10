<template>
  <pattern id="grid-pattern" patternUnits="userSpaceOnUse" x="0" y="0" :width="gridSize" :height="gridSize">
    <template v-if="gridStyle === 'dot'">
      <circle v-for="i in 3" :key="i" :cx="i * subGridSize - 2" :cy="subGridSize - 2" r="4" class="fill-gray-200" />
      <circle v-for="i in 3" :key="i" :cx="i * subGridSize - 2" :cy="2 * subGridSize - 2" r="4" class="fill-gray-200" />
      <circle v-for="i in 3" :key="i" :cx="i * subGridSize - 2" :cy="3 * subGridSize - 2" r="4" class="fill-gray-200" />
    </template>
    <template v-else>
      <line
        v-for="i in subGridLines - 1"
        :key="i"
        x1="0"
        :x2="gridSize"
        :y1="i * subGridSize"
        :y2="i * subGridSize"
        class="stroke-gray-200"
      ></line>
      <line
        v-for="i in subGridLines"
        :key="i"
        :x1="i * subGridSize"
        :x2="i * subGridSize"
        y1="0"
        :y2="gridSize"
        class="stroke-gray-200"
      ></line>
    </template>
    <line x1="0" y1="0" x2="144" y2="0" opacity="1" class="stroke-gray-500"></line>
    <line x1="0" y1="0" x2="0" y2="144" opacity="1" class="stroke-gray-500"></line>
  </pattern>

  <rect fill="url(#grid-pattern)" width="100%" height="100%"></rect>
</template>

<script setup lang="ts">
import { computed } from 'vue';

const props = defineProps<{
  gridStyle: 'line' | 'dot';
  gridSize: number;
  subGridLines: number;
}>();

const subGridSize = computed(() => props.gridSize / props.subGridLines);
</script>
