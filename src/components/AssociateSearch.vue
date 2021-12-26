<template>
  <div id="search-bar">
    <input type="text" v-model="keyword" />
  </div>
</template>

<script setup>
import useHooks from '../hooks';

const { keyword } = useHooks.useAssociateSearch();
</script>

<style lang="stylus" scoped></style>
