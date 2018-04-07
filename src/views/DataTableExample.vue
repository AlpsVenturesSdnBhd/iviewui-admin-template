<template>
  <div>
    <DataTable :tableColumns="getColumns" :tableRowsData="getRowsData" tableMaxHeight="300"></DataTable>
  </div>
</template>
<script>
import DataTable from '../components/DataTable'
export default {
  name: 'DataTableExample',
  components: {
    DataTable
  },
  data () {
    return {
      dataTableStoreName: 'dataTableStore'
    }
  },
  created: function () {
    console.log('Data table created')
    this.$store.dispatch(this.dataTableStoreName + '/fetchRowsData')
  },
  computed: {
    getColumns () {
      return this.$store.getters[this.dataTableStoreName + '/getHeaders']
    },
    getRowsData () {
      return this.$store.getters[this.dataTableStoreName + '/getRowsData']
    },
    getButtonGroupStyle () {
      return 'margin-bottom:1px;'
    }
  }
}
</script>

<style scoped>
</style>
