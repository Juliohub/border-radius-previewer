<template>
  <div class="clipboard">
    <span>border-radius:</span>
    <div class="clip">
      {{`${border.a}% ${100 - border.a}% ${100 - border.d}% ${border.d}% /
      ${border.b}% ${border.c}% ${100 - border.c}% ${100 - border.b}%`}}
    </div>
    <button @click="copyText">Copiar</button>

    <transition name="textCopy">
      <div v-if="textCopied" class="mensagemCopy">Texto Copiado com Sucesso!</div>
    </transition>
  </div>
</template>

<script>
export default {
  name: "ClipBoard",
  props: {
    border: Object,
  },
  data() {
    return {
      textCopied: false,
    };
  },
  methods: {
    copyText() {
      this.$copyText(document.querySelector(".clip").innerText).then(() => {
        this.textCopied = true;

        setTimeout(() => {
          this.textCopied = false;
        }, 2000);
      });
    },
  },
};
</script>

<style scoped>
.clipboard {
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 40px;
}
span {
  padding: 0 20px;
  font-weight: 700;
}
.clip {
  height: 100%;
  background-color: #444;
  color: #fff;
  padding: 0 20px;
  word-spacing: 10px;
  line-height: 50px;
}
button {
  height: 100%;
  padding: 0 20px;
  border: none;
  background: blueviolet;
  color: #fff;
  outline: none;
  cursor: pointer;
  transition: all 0.3s;
}
button:hover {
  background-color: rgb(200, 0, 100);
}

.mensagemCopy {
  position: absolute;
  top: 100px;
  margin: 0 auto;
  padding: 24px 28px;
  background: lightseagreen;
  border-radius: 10px;
  box-shadow: 0px 2px 6px rgba(255, 255, 255, 0.4);
}
.textCopy-enter,
.textCopy-leave-to {
  transform: translate3d(0, -150px, 0);
  opacity: 0;
}
.textCopy-enter-active,
.textCopy-leave-active {
  transition: all 0.5s;
}

@media screen and (max-width: 770px) {
  .clip {
    padding: 0 10px;
    word-spacing: 5px;
    line-height: 50px;
    font-size: 12px;
  }
}
@media screen and (max-width: 550px) {
  .clipboard {
    min-height: 50px;
    flex-direction: column;
    margin-top: 80px;
  }
  button {
    min-height: 50px;
    width: 200px;
  }
  .clip,
  button {
    border-radius: 5px;
    margin: 10px;
  }
}
@media screen and (max-width: 320px) {
  .clip {
    min-height: 100px;
  }
}
</style>
