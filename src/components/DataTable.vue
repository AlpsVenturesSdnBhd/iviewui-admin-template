<template>
  <div>
    <ButtonGroup v-show="showToolbarButtons">
      <Button type="primary" icon="refresh" v-if="showRefreshButton">Refresh</Button>
      <Button type="primary" icon="search" v-if="showSearchButton">Search</Button>
      <Button type="primary" icon="plus" v-if="showAddButton">Add</Button>
      <Button type="primary" icon="ios-trash-outline" v-if="showRemoveButton">Remove</Button>
      <Button type="primary" icon="ios-upload-outline" v-if="showExportButton">Export</Button>
      <Button type="primary" icon="settings" v-if="showSettingsButton">Settings</Button>
    </ButtonGroup>
    <Table :height="getTableMaxHeight" size="small" :columns="tableColumns" :data="tableRowsData" highlight-row border class="table"></Table>
    <Page :total="getTotalRows" show-total show-sizer show-elevator></Page>
  </div>
</template>
<script>
export default {
  name: 'DataTable',
  props: {
    showToolbarButtons: {
      type: Boolean,
      default: true
    },
    toolbarButtonsHorizontalAlignment: {
      type: String,
      default: 'center'
    },
    showRefreshButton: {
      type: Boolean,
      default: true
    },
    showSearchButton: {
      type: Boolean,
      default: true
    },
    showAddButton: {
      type: Boolean,
      default: true
    },
    showRemoveButton: {
      type: Boolean,
      default: true
    },
    showExportButton: {
      type: Boolean,
      default: true
    },
    showSettingsButton: {
      type: Boolean,
      default: true
    },
    tableMaxHeight: {
      type: String,
      default: '0'
    },
    tableColumns: {
      type: Array,
      default: function () {
        return []
      }
    },
    tableRowsData: {
      type: Array,
      default: function () {
        return []
      }
    },
    tableTotalRows: {
      type: Number,
      default: 0
    }
  },
  data () {
    return {
    }
  },
  computed: {
    getTableMaxHeight () {
      return Number.parseInt(this.tableMaxHeight)
    },
    getTotalRows () {
      return Number.parseInt(this.tableTotalRows)
    }
  }
}
</script>

<style scoped>
.table {
  margin-top: 0.2rem;
  margin-bottom: 0.5rem;
}
</style>
