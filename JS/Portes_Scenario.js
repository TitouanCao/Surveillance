var d1 = new Door(1,false,m);
d1.placer();
d1.register();
d1.move(480,474);

var d2 = new Door(2,false,m);
d2.placer();
d2.move(480,319);
d2.register();

var d3 = new Door(3,true,m);
d3.placer();
d3.move(247,510);
d3.register();

var d4 = new Door(4,true,m);
d4.placer();
d4.move(247,281);
d4.register();

var d5 = new Door(5,true,m);
d5.placer();
d5.move(247,440);
d5.block();

var d6 = new Door(6,true,m);
d6.placer();
d6.move(118,32);
d6.register();

var d7 = new Door(7,true,m);
d7.placer();
d7.move(118,255);
d7.register();

var d8 = new Door(8,false,m);
d8.placer();
d8.move(170,587);
d8.register();

var d9 = new Door(9,false,m);
d9.placer();
d9.move(10,69);
d9.register();

var d10 = new Door(10,true,m);
d10.placer();
d10.move(247,685);
d10.register();

var d11 = new Door(11,true,m);
d11.placer();
d11.move(247,125);
d11.register();