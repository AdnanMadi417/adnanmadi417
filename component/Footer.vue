<script setup lang="ts">

</script>

<template>
  <footer>
    <p>
      <a href="https://adnanmadi417.vercel.app">
        © 2025 Adnan Madi.
      </a>
      All rights reserved.
    </p>
  </footer>
</template>

<style scoped>
footer {
  background-image: linear-gradient(-45deg, var(--main-color) 0%, var(--main-hovor-color));
  padding: 1rem;
  align-items: center;
  text-align: center;
  font-size: 1.25rem;
  color: var(--main-font-color);

  a {
    text-decoration: none;
    transition: all 0.2s ease-in-out;
  }

  p:hover {
    color: var(--font-hovor-color);
  }

  a:hover {
    text-decoration: underline;
    color: var(--font-hovor-color);
  }
}


</style>
