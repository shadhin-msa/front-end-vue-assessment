<template>
  <div id="sidebar" class="sidebar-wc">
    <b-button
      v-show="!sidebarModel"
      v-b-toggle.sidebar-right
      class="sidebar-button"
      size="lg"
      squared
      variant="primary"
    >
      {{ config.launcher.ctaText }}
    </b-button>
    <b-sidebar id="sidebar-right" class="" v-model="sidebarModel" right shadow no-header>
      <b-button
        class="sidebar-close-button"
        @click="sidebarModel = false"
        size="md"
        variant="primary"
      >
        Close
      </b-button>
      <b-container fluid class="bg-white">
        <!-- carousel Header -->
        <b-row class="carousel">
          <b-col class="bg-primary text-white">
            <!-- section title -->
            <div class="pt-4">
              <h1 class="title" >{{ carousel.defaultTitle }}</h1>
              <sub>Total item 17</sub>
            </div>

            <!-- Carousel Area -->
            <div>
              <h2>Carrosel</h2>
            </div>
          </b-col>
        </b-row>

        <!-- Body content -->
        <b-row class="page py-5">
          <b-col>
            <div>
              <h1 class="title text-black" >{{ page1.title.text }}</h1>
              <sub class="text-primary">{{ page1.description.text }}</sub>

              <!-- page 1 -->
              <div v-if="firstPage" class="page1 py-4">
                <b-row cols="3" class="g-xs gv-xs">
                  <b-col v-for="(c, i) in page1.cards" :key="i">
                    <card :title="c.title" :icon="c.icon" :active="true"></card>
                  </b-col>
                </b-row>
              </div>

              <!-- Page 2 -->

              <div v-else class="page2 py-4">
                <b-row cols="1" class="g-xs gv-xs">
                  <b-col v-for="(c, i) in page2.cards" :key="i">
                    <card :title="c.title" :description="c.description" :active="true"></card>
                  </b-col>
                </b-row>
              </div>
            </div>
          </b-col>
        </b-row>
      </b-container>

      <!-- Footer -->
      <template #footer="{}">
        <b-row align-h="between" class="footer px-3 py-2">
          <b-col cols="auto">
            <b-button
              v-if="firstPage"
              style="border: none"
              size="md"
              variant="outline-primary"
              @click="skip"
              >Skip</b-button
            >
            <b-button v-else size="md" variant="outline-primary" @click="restart">Restart</b-button>
          </b-col>
          <b-col cols="auto btn-g-xs">
            <b-button
              v-if="firstPage"
              size="md"
              variant="primary"
              class="text-white"
              @click="showSecondPage"
              >Next</b-button
            >
            <template v-else>
              <b-button
                size="md"
                class="text-primary"
                style="background: #c7a17a29"
                variant="light"
                @click="showFirstPage"
                >Back</b-button
              >
              <b-button size="md" variant="primary" class="text-white" @click="submit"
                >Submit</b-button
              >
            </template>
          </b-col>
        </b-row>
      </template>
    </b-sidebar>
  </div>
</template>

<script>
import store from '@/store';
import config from '../configs/config.json';
import card from './components/c-card.vue';

export default {
  name: 'App',
  store,
  components: {
    card,
  },
  data() {
    return {
      config,
      carousel: config.flow.carousel,
      page1: config.flow.pages[0],
      page2: config.flow.pages[1],
      sidebarModel: true,
      firstPage: false,
    };
  },
  methods: {
    showSecondPage() {
      this.firstPage = false;
    },
    showFirstPage() {
      this.firstPage = true;
    },
    submit() {
      this.sidebarModel = false;
      // TODO: where to send the data?
    },
    skip() {
      this.showSecondPage();
      // TODO: action unknown
    },
    restart() {
      this.showFirstPage();
      // TODO: clear data
    },
  },
};
</script>

<style lang="scss">
@import './style/variables.scss';

@import 'bootstrap/scss/bootstrap.scss';
@import 'bootstrap-vue/src/index.scss';

// font-family: 'Bebas Neue', cursive;
// font-family: 'Jost', sans-serif;

// default css
.sidebar-wc {
  // font-family: Arial, sans-serif;
  font-family: 'Jost', sans-serif;
  font-size: 16px;
}
h1 {
  font-family:'Bebas Neue', cursive;
  font-weight: normal;
}
h2 {
  color: $secondary;
}
.btn-g-xs button {
  margin-left: 3px;
  margin-right: 3px;
}

.row.g-xs {
  margin-right: -3px;
  margin-left: -3px;
}
.row.g-xs .col {
  padding-right: 3px;
  padding-left: 3px;
}

.row.gv-xs .col {
  padding-top: 3px;
  padding-bottom: 3px;
}

.row.g-sm {
  margin-right: -6px;
  margin-left: -6px;
}
.row.g-sm .col {
  padding-right: 6px;
  padding-left: 6px;
}

.btn-primary.btn-lg {
  color: white;
  font-weight: 600;
  font-size: 16px;
  padding: 27px 54px;
}
h1.title + sub {
  font-size: 100%;
}

// sidebar
#sidebar-right {
  width: 600px;
}
.b-sidebar-body .container-fluid {
  position: relative;
}
.sidebar-close-button {
  position: absolute;
  top: 50%;
  left: 0;
  transform: translate(-74%, -50%) rotate(-90deg);
  border-radius: 12px 12px 0 0;
  padding: 15px 30px;
  color: white;
}

.carousel h1.title {
  font-size: 1.8rem ;
  // font-weight: 600;
}
.page h1.title {
  font-size: 2rem;
  // font-weight: 600;
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

// carousel css

.carousel h1.title {
  margin-bottom: 0;
}
</style>
