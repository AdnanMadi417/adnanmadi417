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
          <div class="icon-circle">
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
          <div class="icon-circle">
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
          <div class="icon-circle">
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
          <div class="icon-circle">
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
  max-width: 1200px;
  margin: 0 auto;
  text-align: center;
  padding: 5rem 2rem;
}

.subheader {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 0.75rem;
}

.services-title {
  font-size: var(--font-size-h1);
  font-weight: 700;
  color: var(--font-color);
  letter-spacing: -0.02em;
}

.services-intro {
  max-width: 580px;
  margin: 0 auto 3rem auto;
}

.services-intro p {
  font-size: var(--font-size-base);
  color: var(--font-light-color);
  line-height: 1.7;
}

.services-container {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1.25rem;
  margin: 0 auto;
  max-width: 1000px;
}

@media (max-width: 768px) {
  .services-section { padding: 3rem 1rem; }
  .services-container { grid-template-columns: 1fr; }
}

.service-card {
  background: var(--body-bg-color);
  border: 1px solid var(--card-bg-color);
  border-radius: 16px;
  padding: 1.75rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  text-align: left;
  transition: border-color 0.3s ease, box-shadow 0.3s ease, transform 0.3s ease;
}

.service-card:hover {
  border-color: var(--accent-color);
  box-shadow: 0 8px 28px rgba(46, 78, 67, 0.1);
  transform: translateY(-4px);
}

.service-header-card {
  display: flex;
  gap: 1.25rem;
  align-items: flex-start;
  margin-bottom: 0.75rem;
  width: 100%;
}

.icon-circle {
  width: 48px;
  height: 48px;
  min-width: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 12px;
  background: rgba(46, 78, 67, 0.1);
  color: var(--accent-color);
  font-size: 1.4rem;
}

.service-card h3 {
  font-size: 1rem;
  font-weight: 700;
  color: var(--font-color);
  margin-bottom: 0.5rem;
  line-height: 1.3;
}

.service-card p {
  font-size: var(--font-size-sm);
  color: var(--font-light-color);
  line-height: 1.65;
}
</style>