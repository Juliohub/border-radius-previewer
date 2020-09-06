<template>
  <section class="section">
    <div class="center">
      <input type="range" min="0" max="100" v-model="border.a" class="a" />
      <input type="range" min="0" max="100" v-model="border.b" class="b" />
      <input type="range" min="0" max="100" v-model="border.c" class="c" />
      <input type="range" min="0" max="100" v-model="border.d" class="d" />
      <div
        class="content"
        :style="{borderRadius:
        `${border.a}% ${100 - border.a}% ${100 - border.d}% ${border.d}% /
         ${border.b}% ${border.c}% ${100 - border.c}% ${100 - border.b}%`}"
      ></div>
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
.center {
  width: 320px;
  height: 320px;
  position: relative;
  display: flex;
  align-items: center;
  margin: 10px auto;
}
.content {
  width: 100%;
  height: 100%;
  background: blueviolet;
}
.top,
.bottom {
  margin: 0 auto;
}

.b,
.c {
  transform: rotate(90deg);
}

.a,
.b,
.c,
.d {
  position: absolute;
  width: 100%;
}
.a {
  top: 0;
}
.b {
  right: 50%;
}
.c {
  left: 50%;
}
.d {
  bottom: 0;
}

/* Personalizando o Input Range */
input {
  -webkit-appearance: none;
  height: 1px;
  background: transparent;
  outline: none;
  opacity: 0.6;
  transition: opacity 0.2s;
}
input:hover {
  opacity: 1;
}
input::-webkit-slider-thumb {
  -webkit-appearance: none;
  appearance: none;
  width: 18px;
  height: 18px;
  border-radius: 50%;
  background: red;
  cursor: pointer;
}

input::-moz-range-thumb {
  width: 18px;
  height: 18px;
  border-radius: 50%;
  background: red;
  cursor: pointer;
}

@media screen and (max-width: 770px) {
  .center {
    width: 200px;
    height: 200px;
  }
}
@media screen and (max-width: 450px) {
  .center {
    width: 150px;
    height: 150px;
  }
}
</style>