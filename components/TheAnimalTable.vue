<script lang="ts" setup>
import { computed } from 'vue';
import type { Animal } from '~/types';

const router = useRouter();

const props = defineProps<{
  animals: Animal[];
}>();

const animalsSortedByName = computed(() =>
  props.animals.slice().sort((animalA, animalB) => {
    const nameA = animalA.name.toUpperCase();
    const nameB = animalB.name.toUpperCase();
    if (nameA < nameB) return -1;
    if (nameA > nameB) return 1;
    return 0;
  })
);
</script>

<template>
  <table class="border border-[#00c16a]/30">
    <thead class="bg-[#00c16a]/30">
      <tr>
        <th>Index</th>
        <th>Species</th>
        <th>Name</th>
        <th>Gender</th>
        <th>Favourite Fruit</th>
      </tr>
    </thead>
    <tbody>
      <tr
        v-for="(
          { species, gender, name, favouriteFruit, id }, animalIndex
        ) in animalsSortedByName"
        :key="id"
        class="cursor-pointer hover:bg-gray-200"
        @click="router.push(`/animals/${id}`)"
      >
        <td>{{ animalIndex + 1 }}</td>
        <td>{{ species }}</td>
        <td>{{ name }}</td>
        <td>{{ gender }}</td>
        <td>{{ favouriteFruit }}</td>
      </tr>
    </tbody>
  </table>
</template>

<style scoped>
table {
  @apply table-auto w-full text-left mb-10;
}
th {
  @apply py-2 px-4 w-40 font-semibold border-b-2 border-slate-300/30;
}
td {
  @apply py-2 px-4 w-40 border-t border-slate-300/30;
}
tr {
  @apply border-t;
}
tbody tr {
  @apply hover:bg-[#00c16a]/10;
}
</style>
