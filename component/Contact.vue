<script setup>
import { ref } from 'vue'

const form = ref({
  name: '',
  email: '',
  message: ''
})

const sendMessage = async () => {
  try {
    const response = await fetch('/api/send-email', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(form.value)
    })

    if (response.ok) {
      alert('Message sent successfully!')

      form.value.name = ''
      form.value.email = ''
      form.value.message = ''
    } else {
      alert('There was an error sending your message.')
    }
  } catch (error) {
    alert('Something went wrong. Please try again later.')
  }
}
</script>


<template>
  <div class="contact-form-container">
    <h2>Contact Me</h2>
    <form @submit.prevent="sendMessage" class="contact-form">
      <div class="form-group">
        <label for="name">Name:</label>
        <input type="text" v-model="form.name" required placeholder="Your name" />
      </div>
      <div class="form-group">
        <label for="email">Email:</label>
        <input type="email" v-model="form.email" required placeholder="Your email" />
      </div>
      <div class="form-group">
        <label for="message">Message:</label>
        <textarea v-model="form.message" required placeholder="Your message"></textarea>
      </div>
      <button type="submit" class="submit-btn">Submit</button>
    </form>
  </div>
</template>

<style scoped>
.contact-form-container {
  width: 100%;
  max-width: 700px;
  margin: 0 auto;
  padding: 20px;
  background-color: var(--font-hovor-color);
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

h2 {
  text-align: center;
  font-size: 2rem;
  color: var(--main-color);
  margin-bottom: 20px;
}

.contact-form {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.form-group {
  display: flex;
  flex-direction: column;
}

label {
  font-size: 1.2em;
  color: var(--main-color);
  margin-bottom: 5px;
}

input, textarea {
  padding: 10px;
  font-size: 14px;
  border: 1px solid #ddd;
  border-radius: 4px;
  width: 100%;
}

textarea {
  resize: vertical;
  min-height: 150px;
}

button.submit-btn {
  padding: 10px 15px;
  font-size: 16px;
  background-color: var(--main-color);
  color: var(--font-hovor-color);
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s;
}

button.submit-btn:hover {
  background-color: var(--main-hovor-color);
  color: var(--main-font-color);
  transition: .3s ease-in-out;
}

button:disabled {
  background-color: #ccc;
  cursor: not-allowed;
}
</style>
