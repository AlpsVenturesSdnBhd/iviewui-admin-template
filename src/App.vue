<template>
  <div id="app">
    <Layout style="flex-direction:row; flex:unset !important; height: 100%">

      <!-- Left column -->
      <Layout class="left">
        <AppLeftSide ref="appLeftSide" :collapsedWidth="siderCollapsedWidth" class="bottomLeft" v-on:siderCollapseTriggerClicked="siderCollapseTriggerClicked"></AppLeftSide>
      </Layout>

      <Layout class="right">
        <AppHeader ref="appHeader" v-on:toggleSiderCollapse="externalToggleSider" class="header-bar" :headerStyle="computeRighttHeaderStyle" hasI18N></AppHeader>
        <Content :style="{padding: '10px', background: '#fff', minHeight: '0px'}" class="bottomRight">
            <router-view/>
          </Content>
      </Layout>

    </Layout>
  </div>
</template>

<script>
import AppHeader from './components/AppHeader.vue'
import AppLeftSide from './components/AppLeftSide.vue'
export default {
  name: 'App',
  components: {
    AppHeader,
    AppLeftSide
  },
  data () {
    return {
      siderCollapsedWidth: 78,
      darkHeader: {
        background: '#242D3A',
        'padding-left': '0px'
      },
      lightHeader: {
        background: '#ffffff',
        'padding-left': '0px'
      }
    }
  },
  methods: {
    siderCollapseTriggerClicked (payload) {
      // console.log('sider trigger collapsed, isCollapsed: ' + payload)
      // built in sider trigger click, hence menu had been collapsed,
      // now we need to update the state of the external toggle button located in header
      this.$refs.appHeader.siderCollapsedByOthers(payload)
    },
    externalToggleSider () {
      // console.log('external trigger sider collapse')
      // toggle collapse sider from header, now we need to call sider to toggle its own collapse state
      this.$refs.appLeftSide.manualToggleCollapse()
    }
  },
  computed: {
    computeLeftHeaderStyle: function () {
      return this.lightHeader
    },
    computeRighttHeaderStyle: function () {
      return this.lightHeader
    }
  }
}
</script>

<style>
html, body {
  height:100%;
  overflow: hidden;
}
#app {
  font-family: 'Helvetica Neue', 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /* margin-top: 60px; */
  border: 1px solid #d7dde4;
  background: #f5f7f9;
  position: relative;
  border-radius: 4px;
  height: 100%;
  /* overflow: hidden; */
}
.left{
  flex: unset !important;
  flex-grow:1;
  flex-shrink: 0;
  display: flex;
  flex-direction: column;
  height: 100%;
  /* overflow: hidden; */
}
.right{
  flex: unset !important;
  flex-grow:1;
  flex-shrink: 1;
  width:100%;
  /* background-color: #5b6270; */
  display: flex;
  flex-direction: column;
  height: 100%;
}
.bottomLeft {
    /* min-height:100%; */
    flex-grow: 1;  /*ensures that the container will take up the full height of the parent container*/
    overflow: hidden;  /*adds scroll to this container*/
    height: 100%;
}
.bottomRight {
    flex-grow: 1;  /*ensures that the container will take up the full height of the parent container*/
    overflow: auto;  /*adds scroll to this container*/
    /* height: 100%; */
    /* min-height: 100%; */
    /* display: flex; */
}
.header-bar {
  justify-content: flex-end;
  display: flex;
  align-items: center;
  /* flex-direction: row; */
  box-shadow: 0 1px 1px rgba(0,0,0,.1);
  height: 55px;
  /* border: 1px solid rgb(223, 223, 223); */
  border-bottom: 1px solid rgb(223, 223, 223);
}
</style>
