class Map{

	constructor(src,batteryC){
		this.idImg = "imgMap";
		this.battery = batteryC;
		this.src = src;
		this.percent = 1;
		var d = document.createElement("div");
		d.id = "map"
		var ds = document.createElement("div");
		ds.id = "doors"
	    var m = document.createElement("img");
	    m.id = "imgMap";
	    m.src = this.src;
	    m.style.right = "0%";
	    m.style.bottom = "0%";
	    m.style.position = "absolute";
	    if(m.width > (window.innerWidth*0.233)) m.style.width = "431px";
	    d.appendChild(m)
	    game.appendChild(d)
	    game.appendChild(ds)
	}


	getPercent(){
		var mi = document.getElementById("imgMap")
		var i =document.createElement("img");
		i.src=this.src;
		return mi.height/i.height;
	}

	

}