<template>
  <div v-if="isVisible" class="popup" @click.self="closePopup">
    <div class="popup-content">
      <span class="close" @click.prevent="closePopup">&times;</span>
      <iframe src="/images/Adnan%20CV.pdf" width="100%" height="500px"></iframe>
    </div>
  </div>
</template>

<script setup>
import { ref, defineProps, watch } from 'vue';

const props = defineProps({
  show: Boolean,
});

const isVisible = ref(props.show);

watch(
    () => props.show,
    (newVal) => {
      isVisible.value = newVal;
    }
);

function closePopup() {
  isVisible.value = false;
  emit('update:show', false);
}
</script>

<style scoped>
.popup {
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.9);
}

.popup-content {
  background-color: var(--main-font-color);
  width: 80%;
  max-width: 900px;
  position: relative;
  padding: .5rem;
  border-radius: 1rem;
}

@media (max-width: 1200px) {
  .popup-content {
    width: 90%;
  }
}

@media (max-width: 768px) {
  .popup-content {
    width: 95%;
    max-width: 100%;
  }
  iframe {
    height: 400px;
  }
}

.close {
  position: absolute;
  top: 10px;
  right: 10px;
  font-size: 24px;
  cursor: pointer;
}
</style>
