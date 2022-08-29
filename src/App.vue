<template>
  <div id="sidebar-button">
    <!-- <h1 class="welcome-message" id="welcome-message">Welcome Challenger!</h1> -->
    <b-button class="sidebar-button" size="lg" squared variant="primary"> Shop Your Taste</b-button>
    <h1>Heading 1</h1>
    <h2>Heading 2</h2>
  </div>
</template>

<script>
import store from '@/store';

export default {
  name: 'App',
  store,
};
</script>

<style lang="scss" >
$primary:  #c7a17a;
$secondary: #ccc7c6;
$dark: #272727;

@import 'bootstrap/scss/bootstrap.scss';
@import 'bootstrap-vue/src/index.scss';

@import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Jost:wght@400;500;600;700&display=swap');

// font-family: 'Bebas Neue', cursive;
// font-family: 'Jost', sans-serif;

body {
  font-family: 'Jost', sans-serif;
}
h1, h2 {
  font-family: 'Bebas Neue', cursive;
  font-weight: 400;
  font-size: 40px;
  color: $primary
}

h2 {
  color: $secondary;
}
.welcome-message {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: #ffda30;
  font-size: 5rem;
  margin: 0;
  font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
}

.sidebar-button {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  // font-size: 5rem;
  text-transform: uppercase;
  margin: 0;
  font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
}
</style>
