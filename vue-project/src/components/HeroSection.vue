// src/components/HeroSection.vue
<script setup>
// Import your profile picture from the assets folder
import profilePhoto from '@/assets/profile.jpg'; // <-- Make sure your image is named profile.jpg or update the path

// Function to trigger the browser's print dialog
const printPage = () => {
  window.print();
};
</script>

<template>
  <section class="bg-white dark:bg-gray-800">
    <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">

      <!-- Profile Picture -->
      <img :src="profilePhoto" alt="Profile Photo" class="w-32 h-32 mx-auto rounded-full object-cover border-4 border-gray-200 dark:border-gray-600 shadow-lg">


      <!-- Name and Title -->
      <h1 class="text-4xl font-extrabold tracking-tight text-gray-900 dark:text-white sm:text-5xl mt-6">
        Yathish Sadashivareddy
      </h1>
      <p class="mt-2 text-lg text-gray-500 dark:text-gray-400">
        Python Developer | Gen AI & NLP
      </p>

      <!-- Contact Icons -->
        <div class="mt-6 flex justify-center space-x-6">
        <a href="mailto:yathishsadashivareddy@gmail.com" class="text-gray-400 hover:text-gray-600 dark:hover:text-white" aria-label="Email">
            <font-awesome-icon icon="envelope" class="text-xl" />
        </a>
        <a href="https://www.linkedin.com/in/yathish-sadashivareddy/" target="_blank" rel="noopener noreferrer" class="text-gray-400 hover:text-gray-600 dark:hover:text-white" aria-label="LinkedIn">
            <font-awesome-icon :icon="['fab', 'linkedin-in']" class="text-xl" />
        </a>
        <a href="https://github.com/Yathish-007" target="_blank" rel="noopener noreferrer" class="text-gray-400 hover:text-gray-600 dark:hover:text-white" aria-label="GitHub">
            <!-- The GitHub icon from your resume is also a brand icon -->
            <font-awesome-icon :icon="['fab', 'github']" class="text-xl" />
        </a>
        </div>

       <!-- Action Buttons -->
        <div class="mt-8 flex justify-center space-x-4">
        <a href="/Yathish_Resume.pdf" download="Yathish_Sadashivareddy_Resume.pdf" class="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
            <font-awesome-icon icon="download" class="mr-2" />
            Download CV
        </a>
        <button @click="printPage" class="inline-flex items-center px-6 py-3 border border-gray-300 text-base font-medium rounded-md shadow-sm text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
            <font-awesome-icon icon="print" class="mr-2" />
            Print
        </button>
        </div>


    </div>
  </section>
</template>
