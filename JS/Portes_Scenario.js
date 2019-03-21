var r1 = new room(1, document.getElementById("screen3"),false)
var r2 = new room(2, null,true)
var r3 = new room(3, document.getElementById("screen4"),false)
var r4 = new room(4, null,false)
var r5 = new room(5, null,true)
var r6 = new room(6, document.getElementById("screen1"),false)
var r7 = new room(7, document.getElementById("screen2"),false)
var r8 = new room(8, null,true)
var r9 = new room(9, document.getElementById("screen5"),false)

monster.initialize(r6)

var d1 = new Door(1,false,m, r1, r2);
d1.placer();
d1.register();
d1.move(480,474);

var d2 = new Door(2,false,m, r2, r3);
d2.placer();
d2.move(480,319);
d2.register();

var d3 = new Door(3,true,m, r1, r6);
d3.placer();
d3.move(247,510);
d3.register();

var d4 = new Door(4,true,m, r3, r7);
d4.placer();
d4.move(247,281);
d4.register();

var d5 = new Door(5,true,m, r2, r7);
d5.placer();
d5.move(247,440);
d5.block();

var d6 = new Door(6,true,m, r7, r9);
d6.placer();
d6.move(118,32);
d6.register();

var d7 = new Door(7,true,m, r7, r8);
d7.placer();
d7.move(118,255);
d7.register();

var d8 = new Door(8,false,m, r5, r6);
d8.placer();
d8.move(170,587);
d8.register();

var d9 = new Door(9,false,m, r8, r9);
d9.placer();
d9.move(10,69);
d9.register();

var d10 = new Door(10,true,m, r1, r5);
d10.placer();
d10.move(247,685);
d10.register();

var d11 = new Door(11,true,m, r4, r7);
d11.placer();
d11.move(247,125);
d11.register();

var d12 = new Door(12,true,m, r6, r7);