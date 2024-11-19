<script setup lang="ts">
const contactInfo = [
  {
    platformName: "Email",
    platformIcon: "mdi:email",
    platformAddress: "mailto:adnanmadi417@gmail.com",
    displayText: "Email Address"
  },
  {
    platformName: "LinkedIn",
    platformIcon: "mdi:linkedin",
    platformAddress: "https://www.linkedin.com/in/adnan-madi417",
    displayText: "LinkedIn"
  },
  {
    platformName: "GitHub",
    platformIcon: "mdi:github",
    platformAddress: "https://github.com/Adnanmadi417",
    displayText: "GitHub Profile"
  },
  {
    platformName: "Phone",
    platformIcon: "mdi:phone",
    platformAddress: "https://wa.me/+601170064361",
    displayText: "WhatsApp "
  }
];
</script>

<template>
  <div class="footer-sec">
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
.footer-sec {
  background-image: linear-gradient(-225deg, rgba(7, 25, 82, 1)0%, #074173 51%, #074173 100%);
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
  color: var(--font-hovor-color);
}

.contact-list {
  list-style-type: none;
  padding: 0;
}

.contact-list li{
  color: var(--main-font-color);
}

.contact-list li:hover{
  color: var(--font-hovor-color);
  transition: .3s ease-in-out;
}

.contact-item {
  display: flex;
  align-items: center;
  font-size: 1.2rem;
  text-decoration: none;
  margin: 0.5rem 0;
}

.icon {
  font-size: 1.5rem;
  margin-right: 0.5rem;
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
