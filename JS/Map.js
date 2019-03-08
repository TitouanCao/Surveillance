class Map{

	constructor(src,batteryC){
		this.idImg="imgMap";
		this.battery=batteryC;
		var d =document.createElement("div");
		d.id="map"
	    var m = document.createElement("img");
	    m.id="imgMap";
	    m.src=src;
	    this.h=m.height;
	    this.w=m.width;
	    m.style.right="0%";
	    m.style.bottom="0%";
	    m.style.position="absolute";
	    d.appendChild(m)
	    game.appendChild(d)
	}


	

}