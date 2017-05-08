Vue.component('device-index',{
  name: 'device-index',
  props: ['items'],
  template:
  '<ul class="ui-grid-trisect">'+
  '<li v-for="item in items">'+
  '<a v-bind:href="\'roomPageB.html?room_id=\'+item[1]">'+
  '<div class="ui-border">'+
  '<div class="ui-grid-trisect-img">'+
  '<span v-if="item[0].tags == \'bedroom\'" style="background-image:url(\'../img/yeebedroom.png\')"></span>'+
  '<span v-else-if="item[0].tags == \'living\'" style="background-image:url(\'../img/yeeliving.png\')"></span>'+
  '<span v-else-if="item[0].tags == \'garden\'" style="background-image:url(\'../img/yeegarden.png\')"></span>'+
  '<span v-else style="background-image:url(\'../img/yeedefault.png\')"></span>'+
  '</div>'+
  '<div style=" float:left; display:inline">'+
  '<h4 class="ui-nowrap-multi">{{item[0].title}}</h4>'+
  '<h5 class="ui-nowrap">{{item[0].about}}</h5>'+
  '</div>'+
  '<div style=" float:right; display:inline;margin-top:10px">'+
  '<div class="ui-label-list">'+
  '<label class="ui-label-s">{{item[0].local}}</label>'+
  '</div>'+
  '</div>'+
  '</div>'+
  '</a>'+
  '</li>'+
  '</ul>'
})
