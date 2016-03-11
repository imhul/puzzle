var str = prompt('Впишите любую фразу');
var radius = 200;
var ugol = (2*Math.PI)/str.length;
var x = 300;
var y = 300;
// Math.cos(ugol) = dy/radius;
// Math.sin(ugol) = dx/radius;
var dx, dy, a, b, u;



for(var i=0;i<str.length;i++) {
	u = -ugol*i+Math.PI/2;
	dx = radius*Math.cos(u);
	dy = radius*Math.sin(u);
	a = x+dx;
	b = y-dy;
	document.write('<div style="position:absolute;left:'+a+'px;top:'+b+'px;">'+str[i]+'</div>');
}