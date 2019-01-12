<template>
  <transition v-bind:css="false" v-on:enter="enter" v-on:leave="leave" appear>
    <div class="modal">
      <div v-show="isLoading" class="card inner">
        <div class="card-body">
          <!-- <button class="btn btn-info close-button" @click="handleClose">X</button> -->
          <h5 class="card-title">Obteniendo información del personaje...</h5>
        </div>
      </div>

      <div v-show="!isLoading" class="card inner">
        <div class="card-body">
          <button class="btn btn-info close-button" @click="handleClose">X</button>
          <h5 class="card-title">{{ character.name }}</h5>
          <hr>
          <div class="card-text text-left">
            <b-row class="mb-1" v-for="(value, key) in character" :key="key">
              <b-col cols="3">{{ key }}</b-col>
              <b-col>{{ value }}</b-col>
            </b-row>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
import { getACharacter } from "../services/got.service.js";
import { TweenMax, Power4 } from "gsap";

export default {
  name: "detail",
  data() {
    return {
      character: {},
      isLoading: false
    };
  },
  created() {
    this.isLoading = true;
    getACharacter(this.$route.params.id).then(res => {
      this.character = res.data;
      this.isLoading = false;
    });
  },

  methods: {
    enter(el) {
      TweenMax.fromTo(
        el,
        0.5,
        {
          alpha: 0
        },
        {
          alpha: 1,
          ease: Power4.easeOut
        }
      );
    },
    leave(el, done) {
      TweenMax.to(el, 0.5, {
        alpha: 0,
        ease: Power4.easeOut,
        onComplete: done
      });
    },
    handleClose() {
      this.$router.go(-1);
    }
  }
};
</script>

<style lang="scss" scoped>
.modal {
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100vw;
  background-color: fade-out(black, 0.2);
  display: flex;
  align-items: center;
  justify-content: center;
}

.inner {
  background-color: white;
  width: 600px;
  position: relative;
}

.close-button {
  position: absolute;
  top: -20px;
  right: -17px;
  height: 40px;
  width: 40px;
  border: 2px solid white;
  border-radius: 26px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
}

</style>
