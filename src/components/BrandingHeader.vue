<template>
  <div class="logo" :width="computeWidth" :style="headerStyle">
    <!-- <div class="logo"> -->
    <img :src="compactLogo" :width="compactLogoWidth" :height="compactLogoHeght">
    <transition name="fade">
      <img :src="longLogo" :width="computeLongLogoWidth" :height="computeLongLogoHeight" style="margin=left:5px">
    </transition>
    <!-- </div> -->
  </div>
</template>
<script>
var compactLogo = require('../assets/compactlogo.png')
var longLogo = require('../assets/logotext.png')
export default {
  name: 'BrandingHeader',
  props: [
    'showLongLogo',
    'collapsedWidth',
    'headerStyle'
  ],
  data () {
    return {
      compactLogo: compactLogo,
      compactLogoWidth: 30,
      compactLogoHeght: 30,
      longLogo: longLogo,
      longLogoWidth: 80,
      longLogoHeight: 15
    }
  },
  computed: {
    computeShowLongLogo: function () {
      if (this.showLongLogo && this.showLongLogo === 'true') {
        return true
      }
      return false
    },
    computeLongLogoWidth: function () {
      if (this.showLongLogo && (this.showLongLogo === true || this.showLongLogo === 'true')) {
        return this.longLogoWidth
      } else {
        return 0
      }
    },
    computeLongLogoHeight: function () {
      if (this.showLongLogo && (this.showLongLogo === true || this.showLongLogo === 'true')) {
        return this.longLogoHeight
      } else {
        return 0
      }
    },
    computeWidth: function () {
      if (this.showLongLogo && (this.showLongLogo === true || this.showLongLogo === 'true')) {
        return 0
      }
      return this.collapsedWidth
    }
  }
}
</script>
<style>
.logo {
  /* display: inline-block; */
  /* overflow: hidden; */
  display:flex;
  justify-content:center;
  align-items:center;
}
.fade-enter-active, .fade-leave-active {
  transition: width .5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>
