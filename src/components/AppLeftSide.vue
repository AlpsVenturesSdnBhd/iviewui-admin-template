<template>
  <div style="text-align: left;background: #ffffff;">
    <BrandingHeader v-bind:showLongLogo="!isCollapsed" class="header-bar"></BrandingHeader>
    <Sider ref="side1" collapsible :collapsed-width="collapsedWidth" v-model="isCollapsed" breakpoint="sm" v-on:input="handleSiderCollapseTriggerClicked" class="sider-style" width="250">
      <Menu :active-name="activeMenuName" theme="light" width="auto" :class="menuitemClasses">
        <div v-for="menu in menus" :key="menu.name">
          <MenuGroup v-if="menu.groupName" :title="menu.groupName" class="menu-group">
            <MenuItem v-for="groupchild in menu.children" :key="groupchild.name" :name="groupchild.name" @click.native="menuItemClicked(groupchild)">
              <Icon :type="groupchild.icon"></Icon>
              <span v-if="!isCollapsed">{{groupchild.name}}</span>
            </MenuItem>
          </MenuGroup>
          <Submenu v-else-if="menu.subMenuName" :name="menu.subMenuName" class="menu-group">
            <template slot="title">
              <Icon :type="menu.icon"></Icon>
              <span v-if="!isCollapsed">{{menu.subMenuName}}</span>
            </template>
            <MenuItem v-for="submenuchild in menu.children" :key="submenuchild.name" :name="submenuchild.name" @click.native="menuItemClicked(submenuchild)">
              <Icon :type="submenuchild.icon"></Icon>
              <span v-if="!isCollapsed">{{submenuchild.name}}</span>
            </MenuItem>
          </Submenu>
          <MenuItem v-else-if="menu.name" :name="menu.name" @click.native="menuItemClicked(menu)">
            <Icon :type="menu.icon"></Icon>
            <span v-if="!isCollapsed">{{menu.name}}</span>
          </MenuItem>
        </div>
        <!-- hack to make the last menu item to be displayed -->
      <div style="height: 100px"></div>
      </Menu>
    </Sider>
  </div>
</template>
<script>
import nav from '../router/nav'
import BrandingHeader from './BrandingHeader'
export default {
  name: 'AppLeftSide',
  props: [
    'collapsedWidth'
  ],
  components: {
    BrandingHeader
  },
  created: function () {
    // select the initial active menu
    console.log('this.$route.path:' + this.$route.path)
    for (let m in this.$route.matched) {
      console.log('m:' + m)
    }
    if (!this.activeMenuName) {
      this.activeMenuName = nav.items[0].name
    }
  },
  data () {
    return {
      isCollapsed: false,
      activeMenuName: '',
      menus: nav.items
    }
  },
  computed: {
    menuitemClasses () {
      // console.log('Get menu item classes')
      return [
        'menu-item',
        this.isCollapsed ? 'collapsed-menu' : ''
      ]
    }
  },
  methods: {
    handleSiderCollapseTriggerClicked () {
      this.$emit('siderCollapseTriggerClicked', this.isCollapsed)
    },
    menuItemClicked (menu) {
      console.log('Menu item clicked: ' + menu)
      if (menu.url) {
        this.$router.push(menu.url)
      }
    },
    manualToggleCollapse () {
      // console.log('Manual toggle collapse, current state: ' + this.isCollapsed)
      this.$refs.side1.toggleCollapse()
      // console.log('Manual toggle collapse, current state: ' + this.isCollapsed)
    }
  }
}
</script>
<style scoped>
.menu{
  margin-left: 10px;
}
.menu-icon{
  transition: all .3s;
}
.rotate-icon{
  transform: rotate(-90deg);
}
.menu-item span{
  display: inline-block;
  overflow: hidden;
  width: auto;
  text-overflow: ellipsis;
  white-space: nowrap;
  vertical-align: bottom;
  transition: width .2s ease .2s;
}
.menu-item i{
  transform: translateX(0px);
  transition: font-size .2s ease, transform .2s ease;
  vertical-align: middle;
  font-size: 20px;
  padding-left: 0px;
}
/* .menu-item {
  border-right: none !important;
} */
.collapsed-menu span{
  width: 0px;
  transition: width .2s ease;
}
.collapsed-menu i{
  transform: translateX(5px);
  transition: font-size .2s ease .2s, transform .2s ease .2s;
  vertical-align: middle;
  font-size: 20px;
}
.header-bar {
  box-shadow: 0 1px 1px rgba(0,0,0,.1);
  height: 55px;
  /* border: 1px solid rgb(223, 223, 223); */
  border-bottom: 1px solid rgb(223, 223, 223);
}
.menu-group {
  background: #f7f7f7;
  border-top: 1px solid #cfcfcf;
  border-bottom: 1px solid #cfcfcf;
}
.sider-style {
  height: 100%;
  overflow:auto;
  background: #ffffff;
  border-right: 1px solid rgb(223, 223, 223);
}
/* totally hide the scrollbar
.sider-style::-webkit-scrollbar {
 display: none;
} */
.sider-style::-webkit-scrollbar {
    width: 2px;
}
.sider-style::-webkit-scrollbar-track {
    /* -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3); */
    background-color: rgb(231, 231, 231);
}
.sider-style::-webkit-scrollbar-thumb {
  background-color: rgb(119, 119, 119);
  outline: 1px solid rgb(231, 231, 231);
}
</style>
