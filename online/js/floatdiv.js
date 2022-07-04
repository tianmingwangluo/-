var delta=0.15
var collection;
var html = '<table width="81" border="0" cellspacing="0" cellpadding="0">\
  <tr>\
    <td><img src="images/ra_01.png" width="81" height="12" /></td>\
  </tr>\
  <tr>\
    <td align="center" background="images/ra_03.gif"><table width="100%" border="0" cellspacing="0" cellpadding="0">\
      <tr>\
        <td height="65" align="center" valign="top"><a href="#"><img src="images/365App.png" width="59" height="63" border="0"/></a></td>\
      </tr>\
      <tr>\
        <td height="15" align="center" valign="top"></td>\
      </tr>\
      <tr>\
        <td height="85" align="center" valign="top"><img src="images/wxgzh.jpg" width="70" height="81" border="0"/></td>\
      </tr>\
    </table>\</td>\
  </tr>\
  <tr>\
    <td><img src="images/ra_02.png" width="81" height="11" /></td>\
  </tr>\
</table>';
function floaters() {
	this.items = [];
	this.addItem = function(id,x,y,content) {
		document.write('<div id='+id+' style="z-index: 10; position: absolute;width:80px; right:30px;right:'+(typeof(x)=='string'?eval(x):x)+';top:'+(typeof(y)=='string'?eval(y):y)+'">'+content+'</div>');
		var newItem = {};
		newItem.object = document.getElementById(id);
		newItem.x = x;
		newItem.y = y;
		this.items[this.items.length] = newItem;
	}
	this.play = function() {
		collection = this.items
		setInterval('play()',10);
	}
}
function play() {
	var width = document.documentElement.clientWidth||document.body.clientWidth;
	var height = document.documentElement.clientHeight||document.body.clientHeight;
	if ( width > 200 )
		theFloaters.items[0].x = width -100;
	if ( height > 300 )
		theFloaters.items[0].y = height -400;
	if(screen.width<=800) {
		for(var i=0;i<collection.length;i++) {
			collection[i].object.style.display = 'none';
		}
		return;
	}
	for(var i=0;i<collection.length;i++) {
		var followObj = collection[i].object;
		var followObj_x = (typeof(collection[i].x)=='string'?eval(collection[i].x):collection[i].x);
		var followObj_y = (typeof(collection[i].y)=='string'?eval(collection[i].y):collection[i].y);
		if(followObj.offsetLeft!=(document.body.scrollLeft+followObj_x)) {
			var dx=(document.body.scrollLeft+followObj_x-followObj.offsetLeft)*delta;
			dx=(dx>0?1:-1)*Math.ceil(Math.abs(dx));
			followObj.style.left=(followObj.offsetLeft+dx)+"px";
		}
        var scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
		if(followObj.offsetTop!=(scrollTop+followObj_y)) {
			var dy=(scrollTop+followObj_y-followObj.offsetTop)*delta;
			dy=(dy>0?1:-1)*Math.ceil(Math.abs(dy));
			followObj.style.top=followObj.offsetTop+dy+"px";
		}
		followObj.style.display	= '';
	}
}
var theFloaters = new floaters();
theFloaters.addItem('followDiv2',30,80,html);
theFloaters.play();