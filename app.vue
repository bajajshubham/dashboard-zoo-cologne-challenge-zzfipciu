<template>
  <div class="font-Roboto">
    <nav class="py-3 mb-14 bg-white shadow-md">
      <div
        class="md:container md:mx-auto px-10 py-0.5 flex justify-between items-center"
      >
        <h1 class="text-4xl font-semibold">COLOGNE ZOO</h1>
        <p class="text-[#00c16a] hover:cursor-pointer">Dummy sign in</p>
      </div>
    </nav>
    <NuxtPage />
  </div>
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100..900;1,100..900&display=swap');

html {
  @apply bg-gradient-to-b from-[#00c16a]/10 from-5% to-10% to-white text-black min-h-screen;
  font-family: 'Roboto';
}
</style>
