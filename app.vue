<template>
  <NuxtPage/>
</template>


<style>
:root {
  --main-color: #141d57;
  --main-hovor-color: #1439e1;
  --main-font-color: #f5f5f5;
  --font-hovor-color: #eeeeee;
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
