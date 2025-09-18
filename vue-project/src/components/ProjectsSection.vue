// src/components/ProjectsSection.vue
<script setup>
const projects = [
  {
    name: "AI-Powered HR Chatbot",
    description: "Developed a conversational AI chatbot using Google's PaLM and vector embeddings that streamlines HR support, providing accurate, context-aware responses 24/7.",
    techStack: ["Google PaLM", "Vector Embeddings", "Python", "FastAPI", "React"]
  },
  {
    name: "SynthDataCraft",
    description: "An innovative platform leveraging Generative Adversarial Networks (GANs) to generate high-quality synthetic data for privacy-preserving data sharing and analysis.",
    techStack: ["GANs", "Data Science", "Python"]
  },
  {
    name: "HRQueryBot",
    description: "Built a chatbot system integrating Dolly 2.0 LLM with a React frontend and FastAPI backend, enhancing HR query resolution with improved accuracy and user experience.",
    techStack: ["Dolly 2.0", "React", "FastAPI", "Python"]
  },
  {
    name: "Bias Detection & Mitigation Tool",
    description: "Engineered a novel tool for real-time bias detection in LLM outputs, enhancing fairness and transparency with explainable AI techniques.",
    techStack: ["Explainable AI", "Bias Detection", "Large Language Models", "Python"]
  },
  {
    name: "Agentic AI Coding Agent",
    description: "Contributed to research-grade AI agents with an emphasis on causal analysis and interpretability for automated code generation.",
    techStack: ["Agentic AI", "Machine Learning", "Python"]
  }
];
</script>

<template>
  <section id="projects" class="py-16 bg-gray-50 dark:bg-gray-900">
    <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <h2 class="text-3xl font-extrabold text-center mb-12 text-gray-900 dark:text-white">
        Projects
      </h2>
      <div class="space-y-8">
        <div v-for="project in projects" :key="project.name" class="p-6 bg-white dark:bg-gray-800 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
          <h3 class="text-2xl font-bold text-gray-900 dark:text-white">{{ project.name }}</h3>
          <p class="mt-2 text-gray-600 dark:text-gray-300">{{ project.description }}</p>
          <!-- Tech Stack Pills -->
          <div class="mt-4 flex flex-wrap">
            <span v-for="tech in project.techStack" :key="tech" class="inline-block mr-2 mt-2 px-3 py-1 text-sm font-semibold text-purple-800 bg-purple-100 rounded-full">
              {{ tech }}
            </span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
