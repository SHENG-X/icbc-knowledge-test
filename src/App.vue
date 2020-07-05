<template>
  <div class="page-container">
    <md-app md-mode="fixed">
      <md-app-toolbar class="md-primary">
        <div class="md-toolbar-row">
          <div class="md-toolbar-section-start">
            <md-button class="md-icon-button" @click="menuVisible = !menuVisible">
              <md-icon>menu</md-icon>
            </md-button>
            <div class="md-toolbar-row">
              <span class="md-title">
                ICBC Knowledge Test
              </span>
            </div>
          </div>
        </div>

      </md-app-toolbar>

      <md-app-drawer :md-active.sync="menuVisible">
        <md-toolbar class="md-transparent" md-elevation="0">
          ICBC Knowledge Test
        </md-toolbar>

        <md-list>
          <router-link to="/home">
            <md-button @click="menuVisible = !menuVisible">
              <md-list-item>
                <span class="md-list-item-text">Home</span>
              </md-list-item>
            </md-button>
          </router-link>

          <router-link to='/mock'>
            <md-button @click="menuVisible = !menuVisible">
              <md-list-item>
                <span class="md-list-item-text">Mock Test</span>
              </md-list-item>
            </md-button>
          </router-link>

          <router-link to='/all'>
            <md-button @click="menuVisible = !menuVisible">
              <md-list-item>
                <span class="md-list-item-text">All Questions</span>
              </md-list-item>
            </md-button>
          </router-link>

          <router-link to='/rules'>
            <md-button @click="menuVisible = !menuVisible">
              <md-list-item>
                <span class="md-list-item-text">Road Rules</span>
              </md-list-item>
            </md-button>
          </router-link>

          <router-link to='/signs'>
            <md-button @click="menuVisible = !menuVisible">
              <md-list-item>
                <span class="md-list-item-text">Road Signs</span>
              </md-list-item>
            </md-button>
          </router-link>

          <router-link to='/archived'>
            <md-button @click="menuVisible = !menuVisible">
              <md-list-item>
                <span class="md-list-item-text">Archived</span>
              </md-list-item>
            </md-button>
          </router-link>

        </md-list>

      </md-app-drawer>

      <md-app-content>
        <router-view/>
      </md-app-content>
    </md-app>
  </div>
</template>

<script>
export default {
  data: () => ({
    menuVisible: false,
  }),
};
</script>

<style lang="scss">
body {
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
  * {
    text-transform: initial;
  }
}
.page-container {
  width: 100%;
  height: 100%;
  .md-app {
    height: 100%;
    .md-drawer {
      width: 230px;
      .md-button {
        height: 46px;
        width: 100%;
        margin: 0;
        .md-ripple {
          display: flex;
          justify-content: flex-start;
        }
      }
    }
  }
}
</style>
