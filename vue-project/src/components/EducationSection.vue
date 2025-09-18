// src/components/EducationSection.vue
<script setup>
const education = [
  {
    degree: "MS.c in Applied Computer Science",
    university: "SRH Heidelberg University - Heidelberg, Germany",
    period: "2024 - Present"
  },
  {
    degree: "Bachelor of Engineering (Computer Science And Engineering)",
    university: "Gitam University - Bangalore, India",
    period: "2016 - 2020"
  }
];
</script>

<template>
  <section id="education" class="py-16 bg-gray-50 dark:bg-gray-900">
    <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <h2 class="text-3xl font-extrabold text-center mb-12 text-gray-900 dark:text-white">
        Education
      </h2>
      <div class="space-y-8">
        <div v-for="edu in education" :key="edu.degree" class="p-6 bg-white dark:bg-gray-800 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
          <div class="flex justify-between items-start">
            <div class="flex-grow">
              <h3 class="text-2xl font-bold text-gray-900 dark:text-white">{{ edu.degree }}</h3>
              
              <!-- Updated university and period display -->
              <div class="mt-2 flex items-center flex-wrap">
                <span class="px-3 py-1 text-xs font-semibold text-green-800 bg-indigo-100 rounded-full mr-3">
                  {{ edu.university }}
                </span>
                <span class="text-sm text-gray-500 dark:text-gray-400">{{ edu.period }}</span>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
