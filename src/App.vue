<template>
  <div id="app">
    <h1>Border Radius Previewer</h1>
    <Content :border="border" />
    <ClipBoard :border="border" />
  </div>
</template>

<script>
import Content from "./components/Content.vue";
import ClipBoard from "./components/ClipBoard.vue";

export default {
  name: "App",
  components: {
    Content,
    ClipBoard,
  },
  data() {
    return {
      border: {
        a: 0,
        b: 100,
        c: 0,
        d: 100,
      },
    };
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Kufam:wght@400;700&display=swap");
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
h1 {
  font-size: 3rem;
  margin: 20px 0;
  text-align: center;
  color: #eee;
}
body {
  background-color: #222;
  color: #fff;
}
body,
input,
button {
  font-family: "Kufam", cursive;
}
</style>
