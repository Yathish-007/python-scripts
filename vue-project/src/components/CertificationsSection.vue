// src/components/CertificationsSection.vue
<script setup>
// Automatically import all images from the certifications folder
const certificateImages = import.meta.glob('@/assets/certifications/cert*.jpg', { eager: true, as: 'url' });
const certificates = Object.values(certificateImages);
</script>

<template>
  <section id="certifications" class="py-16 bg-gray-50 dark:bg-gray-900">
    <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <h2 class="text-3xl font-extrabold text-center mb-12 text-gray-900 dark:text-white">
        Certifications
      </h2>
      <!-- Responsive grid for the certificates -->
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        <div v-for="(cert, index) in certificates" :key="index" class="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300">
          <img :src="cert" :alt="'Certificate ' + (index + 1)" class="w-full h-auto object-cover">
        </div>
      </div>
    </div>
  </section>
</template>
