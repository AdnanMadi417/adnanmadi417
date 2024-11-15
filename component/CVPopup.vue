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
  background-color: rgba(0, 0, 0, 0.8);
  animation: fadeIn 0.3s ease forwards;
  z-index: 1000;
}

.popup-content {
  background-color: var(--main-font-color);
  width: 80%;
  max-width: 800px;
  position: relative;
  padding: 5px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2);
  transform: translateY(-20px);
  animation: slideUp 0.4s ease forwards;
  opacity: 0;
}

.close {
  position: absolute;
  top: 10px;
  right: 10px;
  font-size: 1.5rem;
  font-weight: bold;
  color: #333;
  cursor: pointer;
  transition: color 0.3s;
}

.close:hover {
  color: #ff6b6b;
}

@media (max-width: 1200px) {
  .popup-content {
    width: 90%;
  }
}

@media (max-width: 768px) {
  .popup-content {
    width: 95%;
    padding: 0.5rem;
  }

  iframe {
    height: 400px;
  }

  .close {
    font-size: 1.2rem;
  }
}

@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}

@keyframes slideUp {
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
}
</style>
