<template>
  <div>
    <ButtonGroup style="margin-bottom:1px">
      <Button type="primary" icon="refresh">Refresh</Button>
      <Button type="primary" icon="search">Search</Button>
      <!-- <Button type="primary" icon="ios-copy">Select All</Button> -->
      <Button type="primary" icon="plus">Add</Button>
      <Button type="primary" icon="ios-trash-outline">Remove</Button>
      <Button type="primary" icon="ios-upload-outline">Export</Button>
      <Button type="primary" icon="settings">Settings</Button>
    </ButtonGroup>
    <Table height="600" size="small" :columns="getColumns" :data="getRowsData" highlight-row border></Table>
    <Page :total="100" show-total show-sizer show-elevator></Page>
  </div>
</template>
<script>
export default {
  name: 'DataTable',
  data () {
    return {
    }
  },
  created: function () {
    console.log('Data table created')
    this.$store.dispatch('dataTableStore/fetchRowsData')
  },
  computed: {
    getColumns () {
      return this.$store.getters['dataTableStore/getHeaders']
    },
    getRowsData () {
      return this.$store.getters['dataTableStore/getRowsData']
    }
  }
}
</script>
