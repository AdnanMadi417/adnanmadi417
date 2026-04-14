<script setup>
import { ref } from 'vue'

const form = ref({
  name: '',
  email: '',
  message: ''
})

const status = ref(null); // 'success' | 'error' | null
const isLoading = ref(false);

const sendMessage = async () => {
  isLoading.value = true;
  status.value = null;

  try {
    const response = await fetch('/api/send-email', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(form.value)
    })

    if (response.ok) {
      status.value = 'success';
      form.value = { name: '', email: '', message: '' };
    } else {
      status.value = 'error';
    }
  } catch {
    status.value = 'error';
  } finally {
    isLoading.value = false;
  }
}
</script>

<template>
  <div class="contact-form-container" data-aos="zoom-in">
    <h2>Contact Me</h2>

    <div v-if="status === 'success'" class="status-msg success">
      Message sent successfully! I'll get back to you soon.
    </div>
    <div v-if="status === 'error'" class="status-msg error">
      Something went wrong. Please try again or reach out via WhatsApp.
    </div>

    <form @submit.prevent="sendMessage" class="contact-form">
      <div class="form-group">
        <label for="name">Name</label>
        <input id="name" type="text" v-model="form.name" required placeholder="Your name" />
      </div>
      <div class="form-group">
        <label for="email">Email</label>
        <input id="email" type="email" v-model="form.email" required placeholder="Your email" />
      </div>
      <div class="form-group">
        <label for="message">Message</label>
        <textarea id="message" v-model="form.message" required placeholder="Your message"></textarea>
      </div>
      <button type="submit" class="submit-btn" :disabled="isLoading">
        {{ isLoading ? 'Sending…' : 'Send Message' }}
      </button>
    </form>
  </div>
</template>

<style scoped>
.contact-form-container {
  width: 100%;
  max-width: 700px;
  margin: 0 auto;
  padding: 20px;
  background-color: var(--section-bg-color);
  border-radius: 12px;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.06);
}

.contact-form-container h2 {
  text-align: center;
  font-size: 2rem;
  color: var(--main-color);
  margin-bottom: 20px;
}

.status-msg {
  padding: 0.85rem 1.2rem;
  border-radius: 8px;
  font-size: 0.95rem;
  margin-bottom: 1.2rem;
}

.status-msg.success {
  background: #dcfce7;
  color: #166534;
  border: 1px solid #bbf7d0;
}

.status-msg.error {
  background: #fee2e2;
  color: #991b1b;
  border: 1px solid #fecaca;
}

.contact-form {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.form-group {
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
}

label {
  font-size: 0.95rem;
  font-weight: 500;
  color: var(--font-color);
}

input, textarea {
  padding: 10px 14px;
  font-size: 14px;
  border: 1px solid var(--border-color);
  border-radius: 8px;
  width: 100%;
  background: var(--body-bg-color);
  color: var(--font-color);
  transition: border-color 0.2s ease;
}

input:focus, textarea:focus {
  outline: none;
  border-color: var(--accent-color);
}

textarea {
  resize: vertical;
  min-height: 150px;
}

.submit-btn {
  padding: 0.75rem 1.5rem;
  font-size: 1rem;
  background: linear-gradient(135deg, var(--accent-color) 0%, var(--accent-hover-color) 100%);
  color: white;
  border: none;
  border-radius: 999px;
  cursor: pointer;
  transition: all 0.3s ease;
  font-weight: 500;
}

.submit-btn:hover:not(:disabled) {
  transform: translateY(-2px);
}

.submit-btn:disabled {
  opacity: 0.6;
  cursor: not-allowed;
}
</style>
