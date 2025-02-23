<template>
  <NuxtPage/>
</template>


<style>
:root {
  --main-color: #071952;
  --main-hovor-color: #088395;
  --main-font-color: #EEEEEE;
  --font-hovor-color: #E9EFEC;
  --background: #e0e0e0;
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
