var room_id = GetQueryString('room_id');

var detaila = new Vue({
  el: '#data-typea-body',
  data: {
    devices_url: config.globalData.AliHost+'/cc/data/',
    roomData: '',
    itemName: [],
    testName: 'hello',
    //device_id: '357651'
  },
  mounted: function() {
    this.getDevices();

  },
  methods: {
    getDevices: function() {
      console.log('hello world');
      this.$http.get(this.devices_url+room_id, {
        emulateJSON: true
      }).then(function(response) {
        this.roomData = response.data.result[0];
        console.log(this.roomData);
        var roomData = this.roomData;
        for(i in roomData){
          this.itemName.push(i);
        }
        console.log(this.itemName);
        this.getHistory();

      })
    },

    getHistory: function() {
      this.$http.get(this.devices_url+room_id+'/history', {
        emulateJSON: true
      }).then(function(res) {
        console.log('history');
        console.log(res);
      })
    }


  }
})
