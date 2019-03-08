class Map{

	constructor(src){
		var d =document.createElement("div");
		d.id="map"
	    var m = document.createElement("img");
	    m.src=src;
	    m.style.right="0%";
	    m.style.bottom="0%";
	    m.style.position="fixed";
	    d.appendChild(m)
	    getBody.appendChild(d)
	}


	

}