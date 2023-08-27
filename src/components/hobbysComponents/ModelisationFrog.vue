<template>
    <div class="frog-container" ref="container">

    </div>
</template>
<script>
import * as THREE from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';

const loader = new GLTFLoader();
export default {
    name: "ModelisationFrog",
    mounted() {
        window.addEventListener("resize", onWindowResize);
        const container = this.$refs.container;

        const scene = new THREE.Scene();

        const camera = new THREE.PerspectiveCamera(75, container.offsetWidth / container.offsetHeight, 0.1, 1000);

        const light1 = new THREE.PointLight(0xffffff, 1, 100);
        const light2 = new THREE.PointLight(0xffffff, 1, 100);
        const light3 = new THREE.PointLight(0xffffff, 1, 100);
        const ambientLight = new THREE.AmbientLight(0x404040, 15);
        light1.position.set(0, .5, 1);
        light2.position.set(1, -.5, 0);
        light3.position.set(.5, 0, 2);
        scene.add(ambientLight);
        scene.add(light1);
        scene.add(light2);
        scene.add(light3);

        const renderer = new THREE.WebGLRenderer({ alpha: true });
        container.appendChild(renderer.domElement);
        renderer.setSize(container.offsetWidth, container.offsetHeight);
        let object;

        loader.load('./frog-swim-rasp.glb', function (gltf) {
            object = gltf.scene;
            if (camera.aspect > 1 || container.offsetWidth > 1000) {
                camera.position.z = 2 / camera.aspect;
            } else {
                camera.position.z = 1200 / container.offsetWidth;
            }
            camera.position.y = -.3;
            scene.add(object);
            animate();
        }, undefined, function (error) {

            console.error(error);

        });


        function animate() {
            requestAnimationFrame(animate);

            object.rotation.y += 0.005;
            object.rotation.x += 0.0025;

            renderer.render(scene, camera);
        }

        function onWindowResize() {

            camera.aspect = container.offsetWidth / container.offsetHeight;
            camera.updateProjectionMatrix();
            if (camera.aspect > 1 || container.offsetWidth > 1000) {
                camera.position.z = 2 / camera.aspect;
            } else {
                camera.position.z = 1200 / container.offsetWidth;
            }
            console.log(camera.position.z);

            renderer.setSize(container.offsetWidth, container.offsetHeight);

        }

    }
}

</script>
<style scoped>
.frog-container {
    width: 100%;
    height: 100%;
}
</style>