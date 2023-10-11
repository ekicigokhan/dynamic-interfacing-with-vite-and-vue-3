<template>
  <aside :class="`${isExpanded && 'isExpanded'}`">
    <div class="logo">
      <img src="../assets/location-hunter.png" alt="" />
    </div>
    <div class="menu-toggle-wrap">
      <button class="menu-toggle" @click="ToggleMenu">
        <span class="material-icons"> keyboard_double_arrow_right </span>
      </button>
    </div>
    <h3>Gökhan Ekici</h3>
    <h3>Menü</h3>
    <div class="menu">
      <router-link class="button" to="/">
        <span class="material-icons">map</span>
        <span class="text">Harita</span>
      </router-link>
      <router-link class="button" to="/profile">
        <span class="material-icons">person</span>
        <span class="text">Profil</span>
      </router-link>
      <router-link class="button" to="/support">
        <span class="material-icons">star</span>
        <span class="text">Kaydedilenler</span>
      </router-link>
      <router-link class="button" to="/email">
        <span class="material-icons">email</span>
        <span class="text">İletişim</span>
      </router-link>
    </div>

    <div class="flex"></div>

    <div class="menu">
      <router-link class="button" to="/login">
        <span class="material-icons">logout</span>
        <span class="text">Çıkış </span>
      </router-link>
    </div>
  </aside>
</template>

<script setup>
import { ref } from "vue";

const isExpanded = ref(localStorage.getItem("isExpanded") === "true");

const ToggleMenu = () => {
  isExpanded.value = !isExpanded.value;

  localStorage.setItem("isExpanded", isExpanded.value); // ? Buraları kendine anlat.
};
</script>

<style lang="scss" scoped>
aside {
  display: flex;
  flex-direction: column;
  width: calc(2rem + 32px);
  overflow: hidden;
  min-height: 100vh;
  padding: 1rem;

  background-color: var(--dark);
  color: var(--light);

  transition: 0.3s ease-out;

  .flex {
    flex: 1;
  }
  .logo {
    margin-bottom: 1rem;
    img {
      transition: 0.5s linear;
      transform: rotate(360deg);

      width: 2rem;
      border-radius: 40%;
    }
  }

  .menu-toggle-wrap {
    display: flex;
    justify-content: flex-end;
    margin-bottom: 1rem;

    position: relative;
    top: 0;
    transition: 0.5s ease-out;

    .menu-toggle {
      transition: 0.3s ease-out;
      .material-icons {
        font-size: 2rem;
        color: var(--light);
      }
      &:hover {
        .material-icons {
          color: var(--primary);
          transform: translateX(0.5rem);
          transition: 0.3s ease-out;
        }
      }
    }
  }
  h3,
  .button .text {
    opacity: 0;
    transition: 0.3s ease-out;
  }
  h3 {
    color: var(--grey);
    font-size: 1rem;
    margin-bottom: 1rem;
    text-transform: uppercase;
  }
  .menu {
    margin: -0.5rem;

    .button {
      display: flex;
      align-items: center;
      text-decoration: none;

      padding: 0.5rem;
      transition: 0.3s ease-out;

      .material-icons {
        font-size: 2rem;
        color: var(--light);
        transition: 0.3s ease-out;
      }
      .text {
        color: var(--light);
        transition: 0.3s ease-out;
      }

      &:hover,
      &.router-link-exact-active {
        background-color: var(--dark-alt);

        .material-icons,
        .text {
          color: var(--primary);
        }
      }
      &.router-link-exact-active {
        border-right: 5px solid var(--primary);
      }
    }
  }

  &.isExpanded {
    // Buradaki & işareti sadece parent olarak aside'ı esas alır.
    width: var(--sidebar-width);
    .logo {
      margin-bottom: 1rem;
      img {
        transition: 0.3s linear;
        transform: rotate(-360deg);

        width: 10rem;
        border-radius: 40%;
      }
    }

    .menu-toggle-wrap {
      top: -12rem;
      .menu-toggle {
        transform: rotate(-180deg);
      }
    }
    h3,
    .button .text {
      opacity: 1;
      transition: 0.3s ease-out;
    }
    .button {
      .material-icons {
        margin-right: 1rem;
      }
    }
  }

  @media (max-width: 768px) {
    position: fixed;
  }
}
</style>