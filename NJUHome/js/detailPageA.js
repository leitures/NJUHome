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
    url: config.globalData.YeeHost+'/devices'
  },
  mounted: function() {
    this.getDevices();
  },
  methods: {
    getDevices: function() {
      console.log('hello world');
      this.$http.get(this.url, {
        emulateJSON: true
      }).then(function(response) {
        console.log(response);
        console.log(this.url);
      })
    }

  }
})
