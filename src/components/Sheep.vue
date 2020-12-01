<template>
  <div class="container">
    <canvas class="canvas"></canvas>
  </div>
</template>

<script>
import { onMounted } from "vue";
export default {
  setup() {
    onMounted(() => {
      const canvas = document.querySelector(".canvas");

      const ctx = canvas.getContext("2d");

      const img = new Image();
      img.src = "https://coseo12.github.io/running-sheep/images/sheep.png";

      const totalFrame = 8;
      //   const sx = 0;
      const sy = 0;
      const sWidth = 360;
      const sHeight = 300;
      const dx = 0;
      const dy = 0;
      const dWidth = 180;
      const dHeight = 150;
      //   const widthHalf = 90;
      const fps = 24;
      const fpsTime = 1000 / fps;
      let time = 0;
      let curFrame = 0;

      const draw = (ctx, t) => {
        if (!time) {
          time = t;
        }

        const now = t - time;
        if (now > fpsTime) {
          time = t;
          curFrame += 1;
          if (curFrame === totalFrame) {
            curFrame = 0;
          }
        }

        animate(ctx, t);
      };

      const animate = ctx => {
        ctx.save();
        ctx.drawImage(
          img,
          sWidth * curFrame,
          sy,
          sWidth,
          sHeight,
          dx,
          dy,
          dWidth,
          dHeight
        );

        ctx.restore();
      };

      const re = t => {
        requestAnimationFrame(re);
        ctx.clearRect(
          0,
          0,
          document.body.clientWidth,
          document.body.clientHeight
        );

        draw(ctx, t);
      };

      requestAnimationFrame(re);
    });
  }
};
</script>

<style lang="scss" scoped>
.container {
  display: flex;
  position: absolute;
  top: -35px;
  left: -50px;
  transform: scale(0.45);
  justify-content: center;
  align-items: center;
  background-color: #c5ffe5;
}
</style>
