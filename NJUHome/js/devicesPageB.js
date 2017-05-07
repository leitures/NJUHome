var detaila = new Vue({
  el: '#data-typeb-body',
  data: {
    devices_url: config.globalData.YeeHost+'/devices',
    device_url: config.globalData.YeeHost+'/device',
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
        console.log('this is all devices:')
        var devices_info = JSON.parse(response.data.chunk);
        console.log(devices_info);
        
        for(device in devices_info){
          console.log(devices_info[device]);
        }

      })
    },
    getDevice: function(device_id) {
      this.$http.get(this.device_url+'/'+device_id, {
        emulateJSON: true
      }).then(function(response) {
        console.log('this is the one device:'+device_id)
        console.log(JSON.parse(response.data.chunk));
      })
    }

  }
})
