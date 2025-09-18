// src/components/InterestsSection.vue
<script setup>
const interests = [
  { 
    name: "Chess", 
    description: "Competitive player with a strategic mindset." 
  },
  { 
    name: "Cryptocurrency", 
    description: "Passionate about blockchain tech & crypto market trends." 
  },
  { 
    name: "Horse Riding", 
    description: "Enjoys recreational and competitive horse riding." 
  }
];
</script>

<template>
  <section id="interests" class="py-16 bg-gray-50 dark:bg-gray-900">
    <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <h2 class="text-3xl font-extrabold text-center mb-12 text-gray-900 dark:text-white">
        Interests
      </h2>
      <div class="flex flex-wrap justify-center gap-6">
        <!-- Loop through each interest to create a tile -->
        <div v-for="interest in interests" :key="interest.name" class="p-6 bg-indigo-600 dark:bg-indigo-800 rounded-xl shadow-lg text-white text-center w-64">
          <h3 class="text-xl font-bold">{{ interest.name }}</h3>
          <p class="mt-2 text-sm text-purple-200">{{ interest.description }}</p>
        </div>
      </div>
    </div>
  </section>
</template>
