<script setup lang="ts">

import Landing from "~/component/Landing.vue";
import About from "~/component/About.vue";
import Skills from "~/component/Skills.vue";
import Projects from "~/component/Projects.vue";
import Education from "~/component/Education.vue";
import Certificates from "~/component/Certificates.vue";
import Footer from "~/component/Footer.vue";
import ContactHeader from "~/component/ContactHeader.vue";
import WPProjects from "~/component/WPProjects.vue";
</script>

<template>
  <ContactHeader/>
  <Landing/>
  <Education/>
  <About/>
  <Projects/>
  <WPProjects/>
  <Skills/>
  <Certificates/>
  <Footer/>
</template>

<style scoped>
html {
  scroll-behavior: smooth;
}
</style>