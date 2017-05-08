var room_id = GetQueryString('room_id');
var detaila = new Vue({
  el: '#data-typeb-body',
  data: {
    device_url: config.globalData.YeeHost+'/device/',
    sensors: '',
    items: []
    //device_id: '357651'
  },
  mounted: function() {
    this.getSensors();

  },
  methods: {
    getSensors: function() {
      console.log('hello world');
      var req_url = this.device_url+room_id+'/sensors';
      console.log(req_url);
      this.$http.get(req_url, {
        emulateJSON: true
      }).then(function(response) {
        console.log('this is all devices:')
        var sensors_info = JSON.parse(response.data.chunk);
        console.log(sensors_info);
        // this.sensors = sensors_info;

        for(sensor in sensors_info){
          console.log(sensors_info[sensor].id);
          this.getSensor(sensors_info[sensor].id);
        }
        console.log('finally we get the items list:');
        console.log(this.items);

      })
    },
    getSensor: function(sensor_id) {
      this.$http.get(this.device_url+room_id+'/sensor/'+sensor_id, {
        emulateJSON: true
      }).then(function(response) {
        console.log('this is the one sensor:'+sensor_id)
        var sensor_data = JSON.parse(response.data.chunk);
        // var value2 = '2';
        this.$http.get(this.device_url+room_id+'/sensor/'+sensor_id+'/datapoints', {
          emulateJSON: true
        }).then(function(res) {
          value = JSON.parse(res.data.chunk).value;
          sensor_data.push(sensor_id);
          sensor_data.push(value);
          console.log('sensor data is:');
          console.log(sensor_data);
          this.items.push(sensor_data);
          console.log(this.items);
        })

        // sensor_data.push(sensor_id);
        // // sensor_data.push(value);
        // console.log('sensor data is:');
        // console.log(sensor_data);
        // this.items.push(sensor_data);

      })





    }

  }
})
