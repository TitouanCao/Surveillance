var nbLockedDoors=0;

class Door{


	constructor(idC,vertical,mapC){
		this.state=1;
		this.id="door"+idC;
		this.map=mapC;
		this.x=this.map.w;
		this.y=this.map.h;
		this.vertical=vertical;
		

	}

	placer(){
		let m = document.getElementById("map");
		let d= document.createElement("img");
	    d.src="RESOURCES/door_open.png";
	    d.id=this.id;
	    d.className="door";
	    d.style.right=this.x+"px";
	    d.style.bottom=this.y+"px";
	    d.style.position="fixed";
	    if(this.vertical) d.style.transform="rotate(90deg)";
	    m.appendChild(d);
	}

	register(){
		let that=this;
		let d = document.getElementById(this.id);
	    d.addEventListener('click', function(e) {that.switch();});
	}

	move(x,y){
		let d = document.getElementById(this.id);
		if(x>=0 & x<=this.map.w){
			this.x=x
			d.style.right=this.x+"px";
		} 
		if(y>=0 & y<=this.map.h){
			this.y=y
			d.style.bottom=this.y+"px";
		} 
	}

	lock(){
		let d = document.getElementById(this.id);
		d.src="RESOURCES/door_closed.png";
		this.state=0;
		nbLockedDoors++;
	}

	unlock(){
		let d = document.getElementById(this.id);
		d.src="RESOURCES/door_open.png";
		this.state=1;
		nbLockedDoors--;
	}

	block(){
		let d = document.getElementById(this.id);
		d.src="RESOURCES/door_locked.png";
		this.state=-1;
	}

	switch(){
		if(this.state==1 & this.map.battery.state>0) {
			this.lock();
			this.map.battery.use();
		}
		else if(this.state==0) {
			this.unlock();
			this.map.battery.liberate();
		}
	}
}