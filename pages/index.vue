<script setup lang="ts">

import About from "~/component/About.vue";
import Skills from "~/component/Skills.vue";
import Projects from "~/component/Projects.vue";
import Education from "~/component/Education.vue";
import Certificates from "~/component/Certificates.vue";
import Footer from "~/component/Footer.vue";
import TimeLineWorkingExperience from "~/component/TimeLineWorkingExperience.vue";
import Header from "~/component/Header.vue";
import Landing from "~/component/Landing.vue";

</script>

<template>
  <Header/>
  <Landing/>
  <TimeLineWorkingExperience/>
  <Education/>
  <About/>
  <Projects/>
  <Skills/>
  <Certificates/>


  <Footer/>
</template>

<style scoped>
html {
  scroll-behavior: smooth;
  background: var(--body-bg-color);
}
</style>