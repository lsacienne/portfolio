<template>
  <div class="frog-container" ref="container">
    <TresCanvas :alpha="true">
      <TresPerspectiveCamera />
      <OrbitControls
        :autoRotate="true"
        :enablePan="false"
        :enableZoom="false"
      />
      <Suspense>
        <GLTFModel path="/models/frog-swim-rasp.glb" :draco="true"></GLTFModel>
      </Suspense>
      <TresAmbientLight :intensity="2" />
    </TresCanvas>
  </div>
</template>
<script>
import SemipolarSpinner from "@/components/SemipolarSpinner.vue";
import { TresCanvas } from "@tresjs/core";
import { GLTFModel, OrbitControls } from "@tresjs/cientos";
import { EffectComposer, Outline } from "@tresjs/post-processing";

export default {
  name: "ModelisationFrog",
  components: {
    SemipolarSpinner,
    TresCanvas,
    GLTFModel,
    OrbitControls,
  },
};
</script>
<style scoped>
.frog-container {
  width: 100%;
  height: 100%;
}
</style>
