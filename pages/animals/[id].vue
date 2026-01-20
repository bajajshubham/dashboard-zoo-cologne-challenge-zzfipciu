<script lang="ts" setup>
import { useRoute, useRouter } from 'vue-router';
import useCalculateRequiredFood from '~/utils/useCalculateRequiredFood';
import useCalculateAgeInYears from '~/utils/useCalculateAgeInYears';
import useAnimals from '~/composables/useAnimals';

const route = useRoute();
const router = useRouter();
const id = route.params.id as string;

const { animals, fetch } = useAnimals();

onMounted(fetch);

const animalDetails = computed(() => {
  const animal = animals.value.find((animal) => animal.id === id);
  if (!animal) return null;

  const age = useCalculateAgeInYears(new Date(animal.birthdate));
  const monthlyFoodRequired = (
    useCalculateRequiredFood(animal, age) * 31
  ).toFixed(2);

  return {
    ...animal,
    age,
    monthlyFoodRequired,
  };
});

const goBack = () => {
  if (window.history.length > 1) {
    router.back();
  } else {
    router.push('/');
  }
};
</script>

<template>
  <div class="md:container mx-auto">
    <div class="px-10 pt-5 h-full rounded-lg">
      <button @click="goBack" class="py-2 text-[#00c16a] hover:text-[#16a34a]">
        ← Go back
      </button>
    </div>
    <div
      v-if="animalDetails"
      class="min-w-xl mx-10 p-10 mb-20 bg-gradient-to-br to-10% border border-[#00c16a]/10 shadow rounded-lg mt-6"
    >
      <h1 class="text-2xl font-bold mb-4">{{ animalDetails.name }}</h1>
      <div class="flex gap-x-8">
        <img src="https://placehold.co/400?font=roboto&text=animal+photo" />
        <ul class="space-y-2">
          <li><strong>Species:</strong> {{ animalDetails.species }}</li>
          <li><strong>Gender:</strong> {{ animalDetails.gender }}</li>
          <li><strong>Birthdate:</strong> {{ animalDetails.birthdate }}</li>
          <li><strong>Age (yrs):</strong> {{ animalDetails.age }}</li>
          <li><strong>Weight (kg):</strong> {{ animalDetails.weight }}</li>
          <li><strong>Height (m):</strong> {{ animalDetails.height }}</li>
          <li>
            <strong>Favourite Fruit:</strong> {{ animalDetails.favouriteFruit }}
          </li>
          <li>
            <strong>Food required next month (kg):</strong>
            {{ animalDetails.monthlyFoodRequired }}
          </li>
        </ul>
      </div>
    </div>
    <div v-else class="text-center mt-10">
      <p>Loading animal details...</p>
    </div>
  </div>
</template>
