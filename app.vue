<template>
  <NuxtPage/>
</template>


<style>
:root {

  --header-bg-color: #f0f0f0;
  --card-bg-color: #eeeef1;
  --main-color: #000000;
  --secondary-color: #1d1d1f;
  --body-bg-color: #ffffff;
  --section-bg-color: #f5f5f7;
  --font-color: #1d1d1f;
  --font-light-color: #6e6e73;
  --accent-color: #0071e3;
  --accent-hover-color: #0077ed;
  --button-hover-bg: #f0f0f0;


  --font-size-base: 0.95rem;
  --font-size-sm: 0.8rem;
  --font-size-md: 1rem;
  --font-size-lg: 1.2rem;

  --transition: all 0.2s ease-in-out;

}
</style>

<script setup>
onMounted(() => {
  const theme = localStorage.getItem('theme') || 'light';
  if (theme === 'dark') {
    document.documentElement.classList.add('dark');
  } else {
    document.documentElement.classList.remove('dark');
  }
});
</script>
