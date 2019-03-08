var b = new Battery(3);
var m = new Map("RESOURCES/map.png",b);

var d1 = new Door(1,false,m);
d1.placer();
d1.register();
d1.move(480,305);

var d2 = new Door(2,false,m);
d2.placer();
d2.move(480,150);
d2.register();

var d3 = new Door(3,true,m);
d3.placer();
d3.move(245,340);
d3.register();

var d4 = new Door(4,true,m);
d4.placer();
d4.move(245,120);
d4.register();

var d5 = new Door(5,true,m);
d5.placer();
d5.move(245,220);
d5.block();

var d6 = new Door(6,true,m);
d6.placer();
d6.move(120,80);
d6.register();

var d7 = new Door(7,true,m);
d7.placer();
d7.move(120,365);
d7.register();

var d8 = new Door(8,false,m);
d8.placer();
d8.move(210,420);
d8.register();

