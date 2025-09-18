<script setup>
import { defineProps, defineEmits } from 'vue'
const props = defineProps({ activeTab: String })
const emit = defineEmits(['tab-click'])

const tabs = [
  'Experience',
  'Education',
  'Projects',
  'Certifications',
  'Interests'
]
</script>

<template>
  <nav class="border-b border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 flex justify-center">
    <button
      v-for="tab in tabs"
      :key="tab"
      @click="$emit('tab-click', tab)"
      :class="[
        'px-4 py-2 -mb-px border-b-2 font-medium focus:outline-none transition-colors',
        activeTab === tab
          ? 'border-indigo-500 text-indigo-600 dark:text-indigo-400'
          : 'border-transparent text-gray-600 hover:text-indigo-600 dark:text-gray-400 dark:hover:text-indigo-300'
      ]"
    >
      {{ tab }}
    </button>
  </nav>
</template>
