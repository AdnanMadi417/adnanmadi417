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
    displayText: "GitHub"
  },
  {
    platformName: "Email",
    platformIcon: "mdi:email",
    platformAddress: "mailto:adnanmadi417@gmail.com",
    displayText: "Email"
  },
  {
    platformName: "Phone",
    platformIcon: "mdi:phone",
    platformAddress: "https://wa.me/+601170064361",
    displayText: "WhatsApp"
  }
];
</script>

<template>
  <footer class="footer">
    <div class="footer-container">

      <p class="copyright">
        © 2025 <a href="https://adnanmadi417.vercel.app" target="_self">Adnan Madi</a>.
        All rights reserved.
      </p>

      <ul class="contact-list">
        <li v-for="(contact, index) in contactInfo" :key="index">
          <a :href="contact.platformAddress" target="_blank" class="contact-item">
            <UIcon :name="contact.platformIcon" class="icon"/>
          </a>
        </li>
      </ul>

    </div>
  </footer>
</template>

<style scoped>
.footer {
  background: var(--body-bg-color);
  padding: 1.5rem 1rem;
  color: var(--font-color);
  border-top: 1px solid var(--card-bg-color);
}

.footer-container {
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 1rem;
}

.contact-list {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1.5rem;
  padding: 0;
  margin: 0;
  list-style: none;
}

.contact-item {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-weight: 500;
  color: var(--font-light-color);
  text-decoration: none;
  border: 1px solid transparent;
  padding: 0.25rem;
  border-radius: 50%;
  font-size: var(--font-size-base, 1rem);
  width: 40px;
  height: 40px;
  justify-content: center;
  align-content: center;
  transition: all 0.3s ease;
}

.contact-item:hover {
  color: var(--font-color);
  border-color: var(--card-bg-color);
  background: var(--card-bg-color);
}

.icon {
  font-size: 1.2rem;
}

.footer a {
  color: inherit;
  text-decoration: none;
}

.copyright {
  font-size: 0.8rem;
  opacity: 0.6;
  white-space: nowrap;
  color: var(--font-color);
}

@media (max-width: 1024px) {
  .footer-container {
    flex-direction: column;
    text-align: center;
    gap: 1.5rem;
  }

  .contact-list {
    justify-content: center;
  }
}

@media (max-width: 768px) {
  .contact-list {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));
    gap: 1rem;
    width: 100%;
  }
}

@media (max-width: 480px) {
  .footer {
    padding: 1.5rem 0.8rem;
  }

  .contact-item {
    font-size: 0.9rem;
  }

  .icon {
    font-size: 1.1rem;
  }
}
</style>
