<script lang="ts" setup>
import { computed } from 'vue';
import type { Animal } from '~/types';
import useCalculateRequiredFood from '~/utils/useCalculateRequiredFood'

const props = defineProps<{
  animals: Animal[];
}>();

const animalsSortedByName = computed(() =>
  props.animals
    .slice()
    .map((animal) => ({
      ...animal,
      age: useCalculateAgeInYears(new Date(animal.birthdate)),
    }))
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
    .map((animal) => ({
      ...animal,
      monthlyFoodRequired: (
        useCalculateRequiredFood(animal, animal.age) * 31
      ).toFixed(2),
    }))
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
            species,
            gender,
            name,
            age,
            birthdate,
            weight,
            height,
            favouriteFruit,
            monthlyFoodRequired,
          },
          animalIndex
        ) in animalsSortedByName"
        :key="animalIndex"
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
