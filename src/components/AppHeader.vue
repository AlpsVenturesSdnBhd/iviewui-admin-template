<template>
  <!-- <div> -->
    <Header :style="headerStyle" width="100%">
      <!-- <Icon @click.native="collapsedSider" :class="rotateIcon" type="navicon-round" size="24"></Icon> -->
      <Avatar icon="person"/>
      <Dropdown v-if="hasI18N" trigger="click" style="margin-left:20px" v-on:on-click="languageSelected">
        <a href="javascript:void(0)">
            {{selectedLanguage}}
            <Icon type="arrow-down-b"></Icon>
        </a>
        <DropdownMenu slot="list">
          <DropdownItem v-for="language in availableLanguages" :key="language" :name="language" placement="top-start">{{language}}</DropdownItem>
          <!-- <DropdownItem>Thai</DropdownItem> -->
          <!-- <DropdownItem>中文</DropdownItem> -->
        </DropdownMenu>
      </Dropdown>
    </Header>
  <!-- </div> -->
</template>
<script>
export default {
  name: 'AppHeader',
  props: {
    headerStyle: {
      type: String,
      default: ''
    },
    hasI18N: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      isCollapsed: false,
      availableLanguages: [
        'English',
        'Thai',
        '中文'
      ],
      selectedLanguage: ''
    }
  },
  computed: {
    rotateIcon () {
      return [
        'menu-icon',
        this.isCollapsed ? 'rotate-icon' : ''
      ]
    }
  },
  created: function () {
    console.log('Header created')
    if (!this.selectedLanguage || this.selectedLanguage === '') {
      if (this.availableLanguages.length > 0) {
        this.selectedLanguage = this.availableLanguages[0]
      }
    }
  },
  methods: {
    collapsedSider () {
      this.isCollapsed = !this.isCollapsed
      this.$emit('LeftSiderToggleCollapse')
    },
    languageSelected (event) {
      console.log('Language selected:' + event)
      if (event) {
        this.selectedLanguage = event
      }
    }
  }
}
</script>
<style scoped>
.menu-icon{
  margin: 20px 20px 0;
  transition: all .3s;
}
.rotate-icon{
  transform: rotate(-90deg);
}
</style>
