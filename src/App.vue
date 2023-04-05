<script setup>
import ItemsList from './components/ItemsList'

const items = [
  {
    id: 0,
    text: 'Oh'
    },
  {
    id: 1,
    text: 'hai'
  },
  {
    id: 2,
    text: 'there!'
  },
]
</script>

<template>
  <header>
    <img alt="Vue logo" class="logo" src="./assets/logo.svg" width="125" height="125" />

    <ItemsList :items="items"/>
  </header>
</template>

<style scoped>
header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }
}
</style>
