class Battery{
	constructor(MaxStateC){
		this.state=MaxStateC;
		this.maxState=MaxStateC;
		this.id="imgBattery";
		var d =document.createElement("div");
		d.id="battery"
	    var m = document.createElement("img");
	    m.id="imgBattery";
	    m.src="RESOURCES/battery_"+MaxStateC+".png";
	    m.style.right = "36%";
	    m.style.bottom = "0%";
        m.style.width="3%";
        m.style.transform = "rotate(270deg)";
	    m.style.position="absolute";
	    d.appendChild(m)
	    game.appendChild(d)
	}

	use(){
		if(this.state>0){
			let b = document.getElementById(this.id);
			b.src="RESOURCES/battery_"+(this.state-1)+".png";
			this.state--;
		}
	}

	liberate(){
		if(this.state<this.maxState){
			let b = document.getElementById(this.id);
			b.src="RESOURCES/battery_"+(this.state+1)+".png";
			this.state++;
		}
	}


}