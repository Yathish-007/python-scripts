// src/views/HomeView.vue
<script setup>
import { ref } from 'vue'
import Navbar from '@/components/Navbar.vue'
import HeroSection from '@/components/HeroSection.vue'
import ExperienceSection from '@/components/ExperienceSection.vue'
import EducationSection from '@/components/EducationSection.vue'
import ProjectsSection from '@/components/ProjectsSection.vue'
import InterestsSection from '@/components/InterestsSection.vue'
import CertificationsSection from '@/components/CertificationsSection.vue'

const activeTab = ref('Experience')
const setTab = (tab) => activeTab.value = tab
</script>

<template>
  <HeroSection />
  <Navbar :activeTab="activeTab" @tab-click="setTab" />

  <div class="max-w-7xl mx-auto px-4 pt-8">
    <!-- Transition wrapper for the sections -->
    <transition name="fade" mode="out-in">
      <div :key="activeTab"> <!-- The key is essential for Vue to detect the change -->
        <ExperienceSection v-if="activeTab === 'Experience'" />
        <EducationSection v-if="activeTab === 'Education'" />
        <ProjectsSection v-if="activeTab === 'Projects'" />
        <CertificationsSection v-if="activeTab === 'Certifications'" />
        <InterestsSection v-if="activeTab === 'Interests'" />
      </div>
    </transition>
  </div>
</template>

<style scoped>
/* CSS for the fade transition */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
