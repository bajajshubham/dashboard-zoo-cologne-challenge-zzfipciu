<script lang="ts" setup>
import { computed } from 'vue'
import type { Animal } from '~/types'

const router = useRouter()

const props = defineProps<{
  animals: Animal[]
}>()

const animalsSortedByName = computed(() =>
  props.animals
    .slice()
    .sort((animalA, animalB) => {
      const nameA = animalA.name.toUpperCase()
      const nameB = animalB.name.toUpperCase()
      if (nameA < nameB) return -1
      if (nameA > nameB) return 1
      return 0
    })
)
</script>

<template>
  <table>
    <thead>
      <tr>
        <th>Index</th>
        <th>Species</th>
        <th>Name</th>
        <th>Gender</th>
        <th>Weight (kg)</th>
        <th>Height (m)</th>
        <th>Favourite Fruit</th>
      </tr>
    </thead>
    <tbody>
      <tr
        v-for="(
          {
            species,
            gender,
            name,
            weight,
            height,
            favouriteFruit,
            id
          },
          animalIndex
        ) in animalsSortedByName"
        :key="id"
        class="cursor-pointer hover:bg-gray-200"
        @click="router.push(`/animals/${id}`)"

      >
        <td>{{ animalIndex + 1 }}</td>
        <td>{{ species }}</td>
        <td>{{ name }}</td>
        <td>{{ gender }}</td>
        <td>{{ weight }}</td>
        <td>{{ height }}</td>
        <td>{{ favouriteFruit }}</td>
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
