Vue.component('device-index',{
  name: 'device-index',
  props: ['devices'],
  template:
  '<div>'+
  '<div v-for="item in devices">'+
  '<a v-bind:href="\'roomPageA.html?room_id=\'+item[0].name">'+
  '<div class="roominfo">'+
  '<img class="roominfo-avatar" v-if="item[0].name == \'roomA\'" src="../img/roomA.png"/>'+
  '<img class="roominfo-avatar" v-else-if="item[0].name == \'roomB\'" src="../img/roomB.png"/>'+
  '<img class="roominfo-avatar" v-else-if="item[0].name == \'roomC\'" src="../img/roomC.png"/>'+
  '<img class="roominfo-avatar" v-else src="../img/icon.png"/>'+
  // '<img class="roominfo-avatar" v-bind:src="\'../img/\'+item[0].name+\'.png\'"/>'+
  '<p class="roominfo-nickname">{{item[0].name}}</p>'+
  '</div>'+
  '</a>'+
  '</div>'+
  '</div>'
})
