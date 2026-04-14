<script setup lang="ts">
</script>

<template>

  <div class="services-section" id="services">

    <div class="services-intro" data-aos="fade-up">

      <div class="subheader">
        <h3 class="services-title">Services</h3>
      </div>
      <p>
        I provide end-to-end web development services focused on performance, security, and user experience.
        My work combines clean design with scalable engineering to deliver real-world impact.
      </p>
    </div>

    <div class="services-container">

      <div class="service-card" data-aos="fade-up" data-aos-delay="0">
        <div class="service-header-card">
          <div class="icon-circle blue">
            <UIcon name="mdi:palette" />
          </div>
          <div class="service-content">
            <h3 class="service-title">Interface Engineering</h3>
            <p class="service-description">
              Transform design concepts into production-quality interfaces with attention to accessibility, responsiveness, and interaction polish using modern frontend frameworks.
            </p>
          </div>
        </div>
      </div>

      <div class="service-card" data-aos="fade-up" data-aos-delay="100">
        <div class="service-header-card">
          <div class="icon-circle green">
            <UIcon name="mdi:code-braces" />
          </div>
          <div class="service-content">
            <h3 class="service-title">Frontend Platform Development</h3>
            <p class="service-description">
              Develop scalable web platforms including dashboards, administrative systems, and content-driven applications using component-based architecture and TypeScript-enabled frameworks.
            </p>
          </div>
        </div>
      </div>

      <div class="service-card" data-aos="fade-up" data-aos-delay="200">
        <div class="service-header-card">
          <div class="icon-circle purple">
            <UIcon name="mdi:server" />
          </div>
          <div class="service-content">
            <h3 class="service-title">API & Backend Integration</h3>
            <p class="service-description">
              Implement secure communication between frontend applications and backend services, supporting authentication flows, data management, and structured state synchronization.
            </p>
          </div>
        </div>
      </div>

      <div class="service-card" data-aos="fade-up" data-aos-delay="300">
        <div class="service-header-card">
          <div class="icon-circle red">
            <UIcon name="mdi:architecture" />
          </div>
          <div class="service-content">
            <h3 class="service-title">Workflow Automation Systems</h3>
            <p class="service-description">
              Build interface-driven automation platforms that simplify administrative operations such as application tracking, program management, and partner workflow coordination.
            </p>
          </div>
        </div>
      </div>

    </div>

  </div>

</template>


<style scoped>

.services-section {
  max-width: 1400px;
  margin: 0 auto;
  text-align: center;
  font-family: system-ui, sans-serif;
  display: block;
  padding: 1.5rem;
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


</style>