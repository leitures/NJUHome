 Vue.component('sensor-index',{
   name: 'sensor-index',
   props: ['items'],
   template:
   '<ul class="ui-list ui-list-one ui-list-link ui-border-tb">'+
   '<li v-for="item in items" class="ui-border-t">'+
   '<div class="ui-list-thumb">'+
  //  '<span style="background-image:url(\'../img/icon.png\')"></span>'+
   '<span v-bind:style="\'background-image:url(../img/\'+item[0].tags+\'.png)\'">'+
   '</span>'+
   '</div>'+
   '<div class="ui-list-info">'+
   '<h4 class="ui-nowrap" style="font-size:0.267rem">{{item[0].title}}</h4>'+
   '<h4 class="ui-nowrap" style="font-size:0.213rem">{{item[0].about}}</h4>'+
   '<div class="ui-txt-info">{{item[2]}} {{item[0].unit_symbol}} </div>'+
   '</div>'+
   '</li>'+
   '</ul>'

 })
