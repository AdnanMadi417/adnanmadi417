<script setup lang="ts">

import Landing from "~/component/Landing.vue";
import Header from "~/component/Header.vue";
import About from "~/component/About.vue";
import Skills from "~/component/Skills.vue";
import Projects from "~/component/Projects.vue";
import Education from "~/component/Education.vue";
import Certificates from "~/component/Certificates.vue";
import Footer from "~/component/Footer.vue";
</script>

<template>
  <Header />
  <Landing/>
  <About/>
  <Projects/>
  <Education/>
  <Skills/>
  <Certificates/>
  <Footer/>
</template>

<style scoped>
html {
  scroll-behavior: smooth;
}
</style>