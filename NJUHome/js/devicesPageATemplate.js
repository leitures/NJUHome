Vue.component('device-index',{
  name: 'device-index',
  props: ['devices'],
  template:
  '<div>'+
  '<div v-for="item in devices">'+
  '<a v-bind:href="\'roomPageA.html?room_id=\'+item[0].name">'+
  '<div class="roominfo">'+
  '<img class="roominfo-avatar" src="../img/icon.png"/>'+
  '<p class="roominfo-nickname">{{item[0].name}}</p>'+
  '</div>'+
  '</a>'+
  '</div>'+
  '</div>'
})
