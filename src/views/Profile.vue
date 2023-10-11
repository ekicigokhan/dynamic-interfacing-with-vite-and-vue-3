<template>
  <div class="page-layout">
    <Sidebar />
    <div>
      <main class="profile-page">
        <h1>PROFILE</h1>
        <p>This is the profile page.</p>
      </main>
    </div>
  </div>
</template>

<script setup>
import Sidebar from "../components/Sidebar.vue";
</script>


<style lang="scss">
.page-layout {
  display: flex;
  main {
    flex: 1 1 0;
    padding: 2rem;

    @media (max-width: 1024px) {
      padding-left: 6rem;
    }
  }
}
</style>