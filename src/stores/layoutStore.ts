import { acceptHMRUpdate, defineStore } from 'pinia';
import { ref } from 'vue';

export enum BuildableType {
  constructor,
  assembler,
  manufacturer,
  smelter,
  foundry,
  splitter,
  merger,
  conveyorLift,
  biomassBurner,
  coalGenerator,
  fuelGenerator,
}

interface Buildable {
  id: string;
  type: BuildableType;
  x: number;
  y: number;
}

export const useLayoutStore = defineStore('layout', () => {
  const buildables = ref<Array<Buildable>>([]);

  function addBuildable(type: keyof typeof BuildableType, x: number, y: number) {
    const id = window.crypto.randomUUID();

    buildables.value.push({
      id,
      type: BuildableType[type],
      x,
      y,
    });
  }

  return {
    buildables,
    addBuildable,
  };
});

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useLayoutStore, import.meta.hot));
}
