<template>
  <section class="section">
    <div class="top">
      <input type="range" min="0" max="100" v-model="border.a" />
    </div>
    <div class="center">
      <input type="range" min="0" max="100" v-model="border.b" class="b" />
      <div
        class="content"
        :style="{borderRadius:
        `${border.a}% ${100 - border.a}% ${100 - border.d}% ${border.d}% /
         ${border.b}% ${border.c}% ${100 - border.c}% ${100 - border.b}%`}"
      ></div>

      <input type="range" min="0" max="100" v-model="border.c" class="c" />
    </div>
    <div class="bottom">
      <input type="range" min="0" max="100" v-model="border.d" />
    </div>
  </section>
</template>

<script>
export default {
  name: "Content",
  props: {
    border: Object,
  },
};
</script>

<style scoped>
.content {
  width: 320px;
  height: 320px;
  background: blueviolet;
}

.section {
  display: flex;
  flex-direction: column;
}
.top,
.bottom {
  margin: 0 auto;
}
.center {
  display: flex;
  align-items: center;
  margin: 10px auto;
}
.b,
.c {
  transform: rotate(90deg);
}

@media screen and (max-width: 770px) {
  .content {
    width: 200px;
    height: 200px;
  }
}
@media screen and (max-width: 450px) {
  .content {
    width: 150px;
    height: 150px;
  }
  .center {
    flex-direction: column;
  }
  .b,
  .c {
    transform: rotate(0deg);
    margin: 10px;
  }
}
</style>