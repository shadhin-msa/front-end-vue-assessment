<template>
  <div>
    <VueSlickCarousel :arrows="true" v-bind="settings">
      <div v-for="(i, index) in carousel.defaultContent" :key="index">
        <div class="slide" :style="'background-image: url(' + i.imageUrl + ')'">
          <div class="desc">{{ i.title }}</div>
        </div>
      </div>
      <template #prevArrow="">
        <b-icon class="" icon="arrow-left-circle-fill" variant="white"></b-icon>
      </template>

      <template #nextArrow="">
        <b-icon class="" icon="arrow-right-circle-fill" variant="white"></b-icon>
      </template>
    </VueSlickCarousel>
  </div>
</template>

<script>
import VueSlickCarousel from 'vue-slick-carousel';
import config from '../../configs/config.json';

export default {
  name: 'c-carousel',
  components: { VueSlickCarousel },
  data() {
    return {
      carousel: config.flow.carousel,
      settings: {
        focusOnSelect: true,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        touchThreshold: 5,
        arrows: true,
      },
    };
  },
};
</script>

<style lang="scss">
@import 'vue-slick-carousel/dist/vue-slick-carousel.css';
// optional style for arrows & dots
@import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css';

.slide {
  background: #bbc377;
  height: 166px;
  margin: 6px;
  border-radius: 6px;
  position: relative;
  background-size: cover;
  background-position: center;
  box-shadow: 0px -54px 37px -21px #000000a3 inset;

  .desc {
    position: absolute;
    border: 0;
    bottom: 0;
    padding: 12px;
    line-height: 1.1rem;
    font-size: 0.9rem;
    font-family: 'Jost', sans-serif;
  }
}

.slick-prev {
  left: -8px;
  z-index: 99;
  color: white;
}

.slick-next {
  right: -8px;
  z-index: 99;
  color: white;
}
</style>
