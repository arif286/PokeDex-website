<template>
  <div class="about">
    <h1>This is an about page</h1>
  </div>
</template>
<script>
import axios from "axios";
export default {
  name: "About",
  data() {
    return {
      id: this.$route.params.id,
      result: {},
    };
  },
  methods: {},
  created() {
    axios
      .get(`https://pokeapi.co/api/v2/pokemon/${this.id}`)
      .then((res) => (this.result = res.data));
    console.log(this.result);
  },
};
</script>
