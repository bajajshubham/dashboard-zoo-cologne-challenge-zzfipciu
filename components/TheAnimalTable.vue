<script lang="ts" setup>
import { computed } from 'vue';
import type { AnimalWithAgeAndRequiedFood } from '~/types';
import { navigateTo } from '#app';

const props = defineProps<{
  animals: AnimalWithAgeAndRequiedFood[];
}>();

const animalsSortedByName = computed(() =>
  props.animals
    .slice()
    .sort((animalA, animalB) => {
      const nameA = animalA.name.toUpperCase();
      const nameB = animalB.name.toUpperCase();
      if (nameA < nameB) {
        return -1;
      }
      if (nameA > nameB) {
        return 1;
      }
      return 0;
    })
);
</script>

<template>
  <table>
    <thead>
      <tr>
        <th>Index</th>
        <th>Species</th>
        <th>Name</th>
        <th>Gender</th>
        <th>Age (yrs)</th>
        <th>Weight (kg)</th>
        <th>Height (m)</th>
        <th>Favourite Fruit</th>
        <th>Food required for next month (kg)</th>
      </tr>
    </thead>
    <tbody>
      <tr
        v-for="(
          {
            id,
            species,
            gender,
            name,
            age,
            weight,
            height,
            favouriteFruit,
            monthlyFoodRequired,
          },
          animalIndex
        ) in animalsSortedByName"
        :key="id"
        class="cursor-pointer"
        @click="navigateTo(`/animal/${id}`)"
      >
        <td>{{ animalIndex + 1 }}</td>
        <td>{{ species }}</td>
        <td>{{ name }}</td>
        <td>{{ gender }}</td>
        <td>{{ age }}</td>
        <td>{{ weight }}</td>
        <td>{{ height }}</td>
        <td>{{ favouriteFruit }}</td>
        <td>{{ monthlyFoodRequired }}</td>
      </tr>
    </tbody>
  </table>
</template>

<style scoped>
table {
  @apply table-auto w-full text-left;
}
td {
  @apply w-40;
}
tr {
  @apply border-b-2;
}
tbody tr {
  @apply hover:bg-gray-200;
}
</style>
