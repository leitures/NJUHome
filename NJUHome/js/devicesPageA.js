// $.ajax({
//         type: 'GET',
//         url: 'http://joymebook.oss-cn-shanghai.aliyuncs.com/1.txt',
//         headers: {
//           // 'U-ApiKey': '6441e70eefc58fea0b1e938abf946a28',
//           // 'U-ApiKey2': '222'
//         },
//
//         dataType: 'json',
//         success: function(res) {
//             console.log(res);
//         }
//     });

// $.ajax({
//   url: 'http://api.yeelink.net/v1.0/devices',
//   headers: {
//     Accept: "application/json; charset=utf-8",
//     'U-ApiKey': '6441e70eefc58fea0b1e938abf946a28'
//   },
//   type: "get",
//   success: function(data) {
//
//   }
// });

var detaila = new Vue({
  el: '#data-typea-body',
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
        for(var i = 0;i<devices_info.length;i++){
          console.log(devices_info[i].id);
          this.getDevice(devices_info[i].id);
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
