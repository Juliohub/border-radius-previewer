<template>
  <div class="clipboard" :style="{bottom: `${textModal ? '0px' : '-35%'}`}">
    <span>border-radius:</span>
    <div class="clip">
      {{`${border.a}% ${100 - border.a}% ${100 - border.d}% ${border.d}% /
      ${border.b}% ${border.c}% ${100 - border.c}% ${100 - border.b}%`}}
    </div>
    <button class="btn-clip" @click="copyText">Copiar</button>

    <transition name="textCopy">
      <div v-if="textCopied" class="mensagemCopy">Texto Copiado com Sucesso!</div>
    </transition>

    <button
      @click="textModal = !textModal"
      :class="{'btn-clip-rotate': textModal, 'btn-code': true}"
    >&#9650;</button>
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
      textModal: false,
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
  position: relative;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 40px;
  transition: all 0.5s;
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
.btn-clip {
  height: 100%;
  padding: 0 20px;
  border: none;
  background: blueviolet;
  color: #fff;
  outline: none;
  cursor: pointer;
  transition: all 0.3s;
}
.btn-clip:hover {
  background-color: rgb(200, 0, 100);
}

.mensagemCopy {
  position: absolute;
  top: -150px;
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
.btn-code {
  display: none;
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
    position: fixed;
    height: auto;
    flex-direction: column;
    margin-top: 100px;
    left: 0;
    right: 0;
    border-top: 5px solid #161616;
    padding: 40px 0;
    background-color: #191919;
  }
  .btn-code {
    display: block;
    position: absolute;
    top: -35px;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    border: none;
    color: #fff;
    font-size: 24px;
    background-color: #222;
    box-shadow: 0px 0px 10px 2px rgba(0, 0, 0, 0.4);
    outline: none;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all 0.5s;
  }
  .btn-clip-rotate {
    transform: rotate(180deg);
  }
  .btn-clip {
    min-height: 50px;
    width: 200px;
  }
  .clip,
  .btn-clip {
    border-radius: 5px;
    margin: 10px;
  }
}
@media screen and (max-width: 350px) {
  .clip {
    min-height: 50px;
  }
}
</style>
