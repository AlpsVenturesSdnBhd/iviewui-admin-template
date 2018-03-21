<template>
  <div>
    <Breadcrumb style="text-align:left">
      <BreadcrumbItem to="/datatable">DataTable</BreadcrumbItem>
    </Breadcrumb>
    <ButtonGroup style="margin-bottom:1px">
      <Button type="primary" icon="refresh">Refresh</Button>
      <Button type="primary" icon="search">Search</Button>
      <!-- <Button type="primary" icon="ios-copy">Select All</Button> -->
      <Button type="primary" icon="plus">Add</Button>
      <Button type="primary" icon="ios-trash-outline">Remove</Button>
      <Button type="primary" icon="ios-upload-outline">Export</Button>
      <Button type="primary" icon="settings">Settings</Button>
    </ButtonGroup>
    <Table height="600" size="small" :columns="columns" :data="rowsData" highlight-row border></Table>
    <Page :total="100" show-total show-sizer show-elevator></Page>
  </div>
</template>
<script>
export default {
  name: 'DataTable',
  data () {
    return {
      columns: [
        {
          width: '60',
          type: 'selection'
        },
        {
          title: 'Name',
          key: 'name',
          sortable: true
        },
        {
          title: 'Age',
          key: 'age',
          sortable: true
        },
        {
          title: 'Address',
          key: 'address',
          sortable: true
        }
      ],
      rowsData: []
    }
  },
  created: function () {
    console.log('Data table created')
    // load the table data here
    this.rowsData = [
      {
        name: 'John Brown',
        age: 18,
        address: 'New York No. 1 Lake Park',
        date: '2016-10-03'
      },
      {
        name: 'Jim Green',
        age: 24,
        address: 'London No. 1 Lake Park',
        date: '2016-10-01'
      },
      {
        name: 'Joe Black',
        age: 30,
        address: 'Sydney No. 1 Lake Park',
        date: '2016-10-02'
      },
      {
        name: 'Jon Snow',
        age: 26,
        address: 'Ottawa No. 2 Lake Park',
        date: '2016-10-04'
      },
      {
        name: 'John Brown',
        age: 18,
        address: 'New York No. 1 Lake Park',
        date: '2016-10-03'
      },
      {
        name: 'Jim Green',
        age: 24,
        address: 'London No. 1 Lake Park',
        date: '2016-10-01'
      },
      {
        name: 'Joe Black',
        age: 30,
        address: 'Sydney No. 1 Lake Park',
        date: '2016-10-02'
      },
      {
        name: 'Jon Snow',
        age: 26,
        address: 'Ottawa No. 2 Lake Park',
        date: '2016-10-04'
      },
      {
        name: 'John Brown',
        age: 18,
        address: 'New York No. 1 Lake Park',
        date: '2016-10-03'
      },
      {
        name: 'Jim Green',
        age: 24,
        address: 'London No. 1 Lake Park',
        date: '2016-10-01'
      },
      {
        name: 'Joe Black',
        age: 30,
        address: 'Sydney No. 1 Lake Park',
        date: '2016-10-02'
      },
      {
        name: 'Jon Snow',
        age: 26,
        address: 'Ottawa No. 2 Lake Park',
        date: '2016-10-04'
      },
      {
        name: 'John Brown',
        age: 18,
        address: 'New York No. 1 Lake Park',
        date: '2016-10-03'
      },
      {
        name: 'Jim Green',
        age: 24,
        address: 'London No. 1 Lake Park',
        date: '2016-10-01'
      },
      {
        name: 'Joe Black',
        age: 30,
        address: 'Sydney No. 1 Lake Park',
        date: '2016-10-02'
      },
      {
        name: 'Jon Snow',
        age: 26,
        address: 'Ottawa No. 2 Lake Park',
        date: '2016-10-04'
      }
    ]
  }
}
</script>
