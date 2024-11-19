<template>
  <NuxtPage/>
</template>


<style>
:root {
  --main-color: #16423C;
  --main-hovor-color: #6A9C89;
  --main-font-color: #EEEEEE;
  --font-hovor-color: #E9EFEC;
}
</style>

<script setup>
onMounted(() => {
  // Ensure the light mode is the default when no theme is set
  const theme = localStorage.getItem('theme') || 'light';
  if (theme === 'dark') {
    document.documentElement.classList.add('dark');
  } else {
    document.documentElement.classList.remove('dark');
  }
});
</script>
