var m = new Map("RESOURCES/map.png");

var d1 = new Door(1,false);
d1.placer();
d1.move(480,305);

var d2 = new Door(2,false);
d2.placer();
d2.move(480,150);

var d3 = new Door(3,true);
d3.placer();
d3.move(245,340);

var d4 = new Door(4,true);
d4.placer();
d4.move(245,120);

var d5 = new Door(5,true);
d5.placer();
d5.move(245,220);
d5.lock();

var d6 = new Door(6,true);
d6.placer();
d6.move(120,80);

var d7 = new Door(7,true);
d7.placer();
d7.move(120,365);

var d8 = new Door(8,false);
d8.placer();
d8.move(210,420);