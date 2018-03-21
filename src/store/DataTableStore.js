const state = {
  isLoading: false,
  headers: [
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

const getters = {
  getHeaders: function (state, getters, rootState) {
    return state.headers
  },
  getRowsData: function (state, getters, rootState) {
    return state.rowsData
  }
}

const mutations = {
  toggleIsLoading: function (state, show) {
    state.isLoading = show
  },
  setRowsData: function (state, payload) {
    state.rowsData = payload
  }
}

const actions = {
  fetchRowsData (context, payload) {
    let datas = [
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

    context.commit('setRowsData', datas)
  }
}

export default {namespaced: true, state, getters, mutations, actions}
