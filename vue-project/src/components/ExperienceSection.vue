// src/components/ExperienceSection.vue
<script setup>
import { experiences } from '@/data/experience.js';
</script>

<template>
  <section id="experience" class="py-16 bg-gray-50 dark:bg-gray-900">
    <!-- Change max-w-4xl to max-w-6xl here -->
    <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <h2 class="text-3xl font-extrabold text-center mb-12 text-gray-900 dark:text-white">
        Experience
      </h2>
      <div class="space-y-8">
        <div v-for="job in experiences" :key="job.role + job.company" class="p-6 bg-white dark:bg-gray-800 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
          <div class="flex justify-between items-start">
            <!-- Left side: Job Details -->
            <div class="flex-grow">
              <h3 class="text-2xl font-bold text-gray-900 dark:text-white">{{ job.company }}</h3>
              <div class="mt-2 flex items-center flex-wrap">
                <span class="px-3 py-1 text-xs font-semibold text-indigo-800 bg-indigo-100 rounded-full mr-3">
                  {{ job.role }}
                </span>
                <span class="text-sm text-gray-500 dark:text-gray-400">{{ job.period }}</span>
              </div>
              <ul class="mt-4 list-disc list-inside text-gray-600 dark:text-gray-300 space-y-2">
                <li v-for="item in job.description" :key="item">{{ item }}</li>
              </ul>
            </div>
            <!-- Right side: Company Logo -->
            <div class="ml-6 flex-shrink-0">
              <img v-if="job.logo" :src="job.logo" :alt="job.company + ' logo'" class="h-5 w-auto object-contain">
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
