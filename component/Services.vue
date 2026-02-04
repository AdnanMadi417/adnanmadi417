<script setup lang="ts">
</script>

<template>

  <div class="services-section" id="services">

    <div class="services-intro">

        <div class="subheader">
          <h3 class="services-title">Services</h3>
        </div>
       <p>
          I provide end-to-end web development services focused on performance, security, and user experience.
          My work combines clean design with scalable engineering to deliver real-world impact.
        </p>
      </div>

    <div class="services-container">

      <div class="service-card">
        <div class="service-header-card">
          <div class="icon-circle blue">
            <UIcon name="mdi:palette" />
          </div>

          <div class="service-content">
            <h3 class="service-title">UI / UX Implementation</h3>

            <p class="service-description">
              Transforming Figma designs and prototypes into responsive, user-friendly
              web interfaces using Vue.js, Nuxt.js, and React. Clean layouts, intuitive
              navigation, and seamless interactions across devices.
            </p>
          </div>
        </div>
      </div>

      <div class="service-card">
        <div class="service-header-card">
          <div class="icon-circle green">
            <UIcon name="mdi:code-braces" />
          </div>

          <div class="service-content">
            <h3 class="service-title">Frontend Development</h3>

            <p class="service-description">
              Building scalable and maintainable web applications with Vue.js, Nuxt.js,
              and React. Specializing in dashboards, admin panels, and content
              management systems with efficient backend integration.
            </p>
          </div>
        </div>
      </div>

      <div class="service-card">
        <div class="service-header-card">
          <div class="icon-circle purple">
            <UIcon name="mdi:server" />
          </div>

          <div class="service-content">
            <h3 class="service-title">Backend Integration & APIs</h3>

            <p class="service-description">
              Designing and integrating secure, data-driven backend systems with Django
              and REST APIs. Includes authentication, role-based access control, form
              handling, and real-time features.
            </p>
          </div>
        </div>
      </div>

      <div class="service-card">
        <div class="service-header-card">
          <div class="icon-circle red">
            <UIcon name="mdi:architecture" />
          </div>

          <div class="service-content">
            <h3>System Architecture & Workflow Automation</h3>
            <p>
              Architecting scalable system structures and implementing best
              practices for maintainable code. Automating workflows and
              improving operational efficiency for reliable systems.
            </p>
          </div>
        </div>
      </div>

    </div>

  </div>

</template>


<style scoped>

.services-section {
  max-width: 1200px;
  margin: 0 auto;
  text-align: center;
  font-family: system-ui, sans-serif;
  display: block;
  padding: 1.5rem;
}

.services-title{
  font-size: var(--font-size-xl);
  font-weight: 700;
  color: var(--secondary-color);
  font-family: -apple-system, BlinkMacSystemFont, "SF Pro Display", Helvetica, Arial, sans-serif;
  letter-spacing: -0.03em;
  line-height: 1.2;
}

.subheader {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 16px;
  margin-bottom: 1rem;
  position: relative;
}

.services-title {
  font-size: 2rem;
  font-weight: 700;
  color: #2E4E43FF;
  letter-spacing: -0.02em;
}

.icon-wrapper {
  width: 56px;
  height: 56px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, #2E4E43FF 0%, #1C352DFF 100%);
  border-radius: 16px;
  color: #ffffff;
  position: relative;
  box-shadow: 0 4px 12px rgba(59, 130, 246, 0.15);
}

.icon-wrapper::before {
  content: "";
  position: absolute;
  inset: -8px;
  background: linear-gradient(135deg, #2E4E43FF 0%, #1C352DFF 100%);
  border-radius: 20px;
  opacity: 0.1;
  filter: blur(12px);
  z-index: -1;
}

.services-intro {
  max-width: 600px;
  margin: 0 auto 2rem auto;
}

.services-intro h2 {
  font-size: 2.25rem;
  font-weight: 700;
  color: #111827;
  margin-bottom: 1rem;
}

.services-intro p {
  font-size: 1rem;
  color: #4b5563;
  line-height: 1.6;
  max-width: 700px;
  margin: 0 auto;
}

.services-container {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0;
  margin: 0 auto;
  max-width: 1000px;
}

@media (max-width: 768px) {
  .services-container {
    grid-template-columns: 1fr;
  }
}

.service-card {
  backdrop-filter: blur(12px);
  border-radius: 1rem;
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  opacity: 0;
  transform: translateY(20px);
  animation: fadeUp 0.6s forwards;
  transition: transform 0.35s ease, box-shadow 0.35s ease;
}

.service-header-card {
  display: flex;
  gap: 32px;
  align-items: center;
  justify-content: flex-start;
  margin-bottom: 1rem;
}

.icon-circle {
  width: 56px;
  height: 56px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 9999px;
  margin-bottom: 0;
  flex-shrink: 0;
}

.icon-circle.blue { background-color: #DBEAFE; color: #3B82F6; }
.icon-circle.green { background-color: #DCFCE7; color: #22C55E; }
.icon-circle.purple { background-color: #EDE9FE; color: #8B5CF6; }
.icon-circle.red { background-color: #FEE2E2; color: #EF4444; }

.service-card h3 {
  font-size: 1.125rem;
  font-weight: bold;
  color: #111827;
  text-align: start;
}

.service-card p {
  font-size: 0.95rem;
  color: #4b5563;
  line-height: 1.5;
  text-align: start;
}


@keyframes fadeUp {
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

</style>