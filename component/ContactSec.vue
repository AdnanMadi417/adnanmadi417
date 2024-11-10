<script setup lang="ts">
const contactInfo = [
  {
    platformName: "Email",
    platformIcon: "mdi:email",
    platformAddress: "mailto:your.email@example.com",
    displayText: "your.email@example.com"
  },
  {
    platformName: "LinkedIn",
    platformIcon: "mdi:linkedin",
    platformAddress: "https://www.linkedin.com/in/yourprofile",
    displayText: "LinkedIn Profile"
  },
  {
    platformName: "GitHub",
    platformIcon: "mdi:github",
    platformAddress: "https://github.com/yourusername",
    displayText: "GitHub Profile"
  },
  {
    platformName: "Phone",
    platformIcon: "mdi:phone",
    platformAddress: "tel:+123456789",
    displayText: "+123 456 789"
  }
];
</script>

<template>
  <div class="contact-sec">
    <div class="container">
      <div class="contact-info">
        <h1>Feel free to contact me</h1>
        <ul class="contact-list">
          <li v-for="(contact, index) in contactInfo" :key="index">
            <a :href="contact.platformAddress" target="_blank" class="contact-item">
              <UIcon :name="contact.platformIcon" class="icon"/>
              {{ contact.displayText }}
            </a>
          </li>
        </ul>
      </div>
      <div class="image-content">
        <img src="/images/web-dev.avif" alt="web">
      </div>
    </div>
  </div>
</template>

<style scoped>
.contact-sec {
  background-image: linear-gradient(120deg, var(--main-color) 50%, var(--main-hovor-color) 100%);
  padding: 2rem 1rem;
  margin-top: 5rem;
}

.container {
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  max-width: 1200px;
  margin: 0 auto;
  gap: 2rem;
  align-items: center;
}

.contact-info {
  flex: 1 1 45%;
  text-align: left;
  padding: 1rem;
}

.contact-info h1 {
  font-size: 2.5rem;
  margin-bottom: 1rem;
  color: #fff;
}

.contact-list {
  list-style-type: none;
  padding: 0;
}

.contact-item {
  display: flex;
  align-items: center;
  font-size: 1.2rem;
  color: var(--font-hovor-color);
  text-decoration: none;
  margin: 0.5rem 0;
}

.icon {
  font-size: 1.5rem;
  margin-right: 0.5rem;
  color: var(--font-hovor-color);
}

.image-content {
  flex: 1 1 50%;
  display: flex;
  justify-content: center;
}

.image-content img {
  width: 100%;
  max-width: 300px;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

@media (max-width: 768px) {
  .container {
    flex-direction: column;
    text-align: center;
  }

  .contact-info, .image-content {
    flex: 1 1 100%;
  }

  .contact-info h1 {
    font-size: 2rem;
  }
}
</style>
