<template>
  <div class="icon-card" :class="{ active: active, 'wide-card': !icon }">
    <div v-if="icon" class="icon-area">
      <img :src="icon" :alt="title" />
    </div>
    <div class="title">
      {{ title }}
    </div>
    <p v-if="description">
      {{ description }}
    </p>
    <div class="triangle-tick-sign"></div>
    <b-icon class="tick-icon" icon="check-circle-fill" variant="white"></b-icon>
  </div>
</template>

<script>
export default {
  name: 'c-card',
  props: {
    title: String,
    icon: String,
    active: Boolean,
    description: String,
  },
};
</script>

<style lang="scss">
@import '../style/variables.scss';

.icon-card {
  padding: 10px;
  text-align: center;
  border: 1px solid #e0e0e0;
  border-radius: 12px;
  width: 100%;
  box-sizing: border-box;
  overflow: hidden;
  position: relative;
}
.icon-card .icon-area {
  margin-top: 15px;
  margin-bottom: 15px;
}

.icon-card .title {
  margin-bottom: 15px;
  font-weight: bold;
}

.icon-card.active {
  border: 2px solid $primary;
}

// wide card
.icon-card.wide-card {
  text-align: left;
  padding-left: 25px;
}

.icon-card.wide-card .title {
  margin-top: 10px;
  margin-bottom: 5px;
  font-family: 'Bebas Neue', cursive;
  text-transform: uppercase;
  font-size: 1.6rem;
  font-weight: normal;
}
.triangle-tick-sign {
  width: 0;
  height: 0;
  border-top: 50px solid $primary;
  border-left: 50px solid transparent;
  position: absolute;
  top: -3px;
  right: -3px;
}
.tick-icon {
  position: absolute;
  top: 4px;
  right: 4px;
}
</style>

<style scoped>
p {
  font-family: 'Jost', sans-serif;
  max-width: 370px;
  text-transform: capitalize;
  font-size: 14px;
}
</style>
