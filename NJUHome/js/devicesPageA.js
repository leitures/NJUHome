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
    devices_url: config.globalData.AliHost+'/cc/data',
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
        var ccData = response.data.jsonData;
        for (room in ccData){
          console.log(room);
          console.log(ccData[room])
        }

      })
    },


  }
})
