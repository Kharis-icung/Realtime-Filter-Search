<template>
  <h1>Realtime Filter Search</h1>
  <div>
    <input type="text" v-model="search" placeholder="Searching">
    <ul>
      <li v-for="item in filteredItems" :key="item.name">{{ item.name }}</li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      items: [
        { name: "Hasan" },
        { name: "Arif" },
        { name: "Yudha Arif" },
        { name: "Dinda Ikhlas" },
      ],
      search: "",
    };
  },
  computed: {
    filteredItems() {
      return this.items.filter((item) => {
        return item.name.includes(this.search);
      });
    },
  },
};
</script>

