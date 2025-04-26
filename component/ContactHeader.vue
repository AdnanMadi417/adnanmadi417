<script setup lang="ts">
const contactInfo = [
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
    platformName: "Email",
    platformIcon: "mdi:email",
    platformAddress: "mailto:adnanmadi417@gmail.com",
    displayText: "Email Address"
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
  <div class="contact-header-sec">
    <div class="container">
      <ul class="contact-list">
        <li v-for="(contact, index) in contactInfo" :key="index">
          <a :href="contact.platformAddress" target="_blank" class="contact-item">
            <UIcon :name="contact.platformIcon" class="icon"/>
            {{ contact.displayText }}
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>

<style scoped>
.contact-header-sec {
  background-image: linear-gradient(-45deg, var(--main-color) 0%, var(--main-hovor-color));
  padding: 1rem 0;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
}

.contact-list {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  list-style: none;
  padding: 0;
  margin: 0;
  gap: 1rem;
}

.contact-list li {
  flex: 1 1 200px;
  max-width: 200px;
  text-align: center;
}

.contact-item {
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.1rem;
  text-decoration: none;
  color: var(--main-font-color);
  padding: 0.5rem;
  transition: color 0.3s ease-in-out;
}

.contact-item:hover {
  color: var(--font-hovor-color);
}

.icon {
  font-size: 1.5rem;
  margin-right: 0.5rem;
}

@media (max-width: 768px) {
  .contact-item {
    font-size: 1rem;
  }


  .contact-list {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(170px, 1fr));
    justify-content: start;
    list-style: none;
    padding: 0;
    margin: 0;
    gap: 1rem;
  }

  .contact-list li {
    flex: 1 1 200px;
    max-width: 200px;
    text-align: start;
  }

  .contact-item {
    justify-content: start;
    font-size: 1.1rem;
    padding: 0;
    margin: 0;
  }
}


@media (max-width: 480px) {
  .contact-list li {
    flex: 1 1 100%;
    max-width: 100%;
  }
}
</style>
