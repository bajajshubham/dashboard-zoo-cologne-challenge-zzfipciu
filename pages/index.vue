<script setup lang="ts">

const { animals } = useAnimals();
const {setAnimalWithAgeAndRequiedFood} = useAnimalWithAgeAndRequiedFood();

const animalsWithAgeAndRequiredFood = computed(()=>animals.value.slice().map((animal) => ({
      ...animal,
      age: useCalculateAgeInYears(new Date(animal.birthdate)),
    })).map((animal) => ({
      ...animal,
      monthlyFoodRequired: (
        useCalculateRequiredFood(animal, animal.age) * 31
      ).toFixed(2),
    })))
console.log(animalsWithAgeAndRequiredFood.value)
setAnimalWithAgeAndRequiedFood(animalsWithAgeAndRequiredFood)

</script>

<template>
  <div class="my-10 container mx-auto">
    <h1 class="text-4xl">Cologne Zoo</h1>
    <div class="my-2">
      <p>
        This is the overview board of the Cologne Zoo. It can be used by
        zookeepers to get an overview of the animals and their relevant health
        data.
      </p>
      <p>
        Please contact the zoo admin at "admin@zoo-cologne.de" for support with
        the dashboard. Cyber-Attacks from the Duisburg Zoo have become more
        frequent on the past, so be on the lookout.
      </p>
    </div>
    <div class="mt-6 py-4 border-t border-gray-300">
      <h2 class="text-2xl">Our (lovely) Animals:</h2>
    </div>
    <the-animal-table v-if="animals" :animals="animalsWithAgeAndRequiredFood" />
  </div>
</template>
