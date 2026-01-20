<script setup lang="ts">
const { animals } = useAnimals();
</script>

<template>
  <div>
    <div class="my-2 md:container px-10 md:mx-auto text-lg">
      <p class="mb-4">
        This is the overview board of the Cologne Zoo. It can be used by
        zookeepers to get an overview of the animals and their relevant health
        data.
      </p>
      <p>
        Please contact the zoo admin at "<span class="text-[#00c16a]"
          >admin@zoo-cologne.de</span
        >" for support with the dashboard. Cyber-Attacks from the Duisburg Zoo
        have become more frequent on the past, so be on the lookout.
      </p>
    </div>
    <div class="mt-6 py-4 md:container md:mx-auto px-10">
      <h2 class="text-2xl">Our (lovely) Animals:</h2>
    </div>
    <div class="md:container md:mx-auto px-10">
      <the-animal-table v-if="animals" :animals="animals" />
    </div>
  </div>
</template>