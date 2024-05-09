<template>
  <img src="@/assets/background_feather_widget.png" alt="" />
  <canvas class="canvas-condensation" ref="canvas" @click="delete_condensation">
  </canvas>
</template>
<script>
export default {
  name: "FeatherWidget",
  data() {
    return {
      clicked: false,
    };
  },
  methods: {
    delete_condensation: function () {
      this.$refs.canvas.classList.toggle("no-condensation");
      if (this.clicked) {
        this.$refs.canvas.classList.toggle("return-condensation");
      }

      this.clicked = true;
    },
  },
};
</script>
<style scoped>
.canvas-condensation {
  position: absolute;
  top: 8%;
  left: 0;
  width: 100%;
  height: 92%;
  border-bottom-left-radius: 1rem;
  border-bottom-right-radius: 1rem;
  filter: blur(0.6rem);
  background-color: rgba(255, 255, 255);
}

.no-condensation {
  filter: blur(5rem);
  opacity: 0.5;
  animation: erase-condensation 5s;
}

.return-condensation {
  animation: return-condensation 2s;
}

@keyframes erase-condensation {
  0% {
    filter: blur(0.6rem);
    opacity: 1;
  }

  50% {
    filter: blur(5rem);
  }

  100% {
    opacity: 0.5;
  }
}

@keyframes return-condensation {
  0% {
    opacity: 0.5;
    filter: blur(5rem);
  }

  50% {
    filter: blur(0.6rem);
  }

  100% {
    opacity: 1;
  }
}
</style>
