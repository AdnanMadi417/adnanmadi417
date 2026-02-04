<script setup lang="ts">

import About from "~/component/About.vue";
import Skills from "~/component/Skills.vue";
import Projects from "~/component/Projects.vue";
import Footer from "~/component/Footer.vue";
import TimeLineWorkingExperience from "~/component/TimeLineWorkingExperience.vue";
import Header from "~/component/Header.vue";
import Landing from "~/component/Landing.vue";
import Services from "~/component/Services.vue";

</script>

<template>
  <Header/>
  <Landing/>
  <About/>
  <Skills/>
  <Services/>
  <Projects/>
  <TimeLineWorkingExperience/>
  <Footer/>
</template>

<style scoped>
html {
  scroll-behavior: smooth;
}
</style>