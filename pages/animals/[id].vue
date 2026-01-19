<script lang="ts" setup>
import { useRoute } from 'vue-router'
import useCalculateRequiredFood from '~/utils/useCalculateRequiredFood'
import useCalculateAgeInYears from '~/utils/useCalculateAgeInYears'
import useAnimals from '~/composables/useAnimals'

const route = useRoute()
const id = route.params.id as string

const { animals, fetch } = useAnimals()

onMounted(fetch)

const animalDetails = computed(() => {
  const animal = animals.value.find((animal) => animal.id === id)
  if (!animal) return null

  const age = useCalculateAgeInYears(new Date(animal.birthdate))
  const monthlyFoodRequired = (
    useCalculateRequiredFood(animal, age) * 31
  ).toFixed(2)

  return {
    ...animal,
    age,
    monthlyFoodRequired,
  }
})
</script>

<template>
  <div v-if="animalDetails" class="max-w-xl mx-auto p-4 bg-white shadow rounded-lg mt-6">
    <h1 class="text-2xl font-bold mb-4">{{ animalDetails.name }} Details</h1>
    <ul class="space-y-2">
      <li><strong>Species:</strong> {{ animalDetails.species }}</li>
      <li><strong>Gender:</strong> {{ animalDetails.gender }}</li>
      <li><strong>Birthdate:</strong> {{ animalDetails.birthdate }}</li>
      <li><strong>Age (yrs):</strong> {{ animalDetails.age }}</li>
      <li><strong>Weight (kg):</strong> {{ animalDetails.weight }}</li>
      <li><strong>Height (m):</strong> {{ animalDetails.height }}</li>
      <li><strong>Favourite Fruit:</strong> {{ animalDetails.favouriteFruit }}</li>
      <li><strong>Food required next month (kg):</strong> {{ animalDetails.monthlyFoodRequired }}</li>
    </ul>
  </div>
  <div v-else class="text-center mt-10">
    <p>Loading animal details...</p>
  </div>
</template>
