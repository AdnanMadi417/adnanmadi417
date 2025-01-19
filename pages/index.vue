<script setup lang="ts">

import LandingSec from "~/component/LandingSec.vue";
import HeaderSec from "~/component/HeaderSec.vue";
import AboutSec from "~/component/AboutSec.vue";
import SkillsSec from "~/component/SkillsSec.vue";
import ProjectsSec from "~/component/ProjectsSec.vue";
import EducationSec from "~/component/EducationSec.vue";
import CertificatesSec from "~/component/CertificatesSec.vue";
import FooterSec from "~/component/FooterSec.vue";
</script>

<template>
  <HeaderSec />
  <LandingSec/>
  <AboutSec/>
  <ProjectsSec/>
  <EducationSec/>
  <SkillsSec/>
  <CertificatesSec/>
  <FooterSec/>
</template>

<style scoped>
html {
  scroll-behavior: smooth;
}
</style>