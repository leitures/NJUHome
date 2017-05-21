var detaila = new Vue({
  el: '#data-typea-body',
  data: {
    devices_url: config.globalData.AliHost+'/cc/data',
    ccData: ''
    //device_id: '357651'
  },
  mounted: function() {
    this.getDevices();

  },
  methods: {
    getDevices: function() {
      console.log('hello world');
      this.$http.get(this.devices_url, {
        emulateJSON: true
      }).then(function(response) {
        // console.log((response.data.jsonData));
        // console.log(typeof(response.data.jsonData));
        this.ccData = response.data.jsonData;
        for (room in this.ccData){
          console.log(room);
          console.log(this.ccData[room])
        }

      })
    },


  }
})
