class Door{

	constructor(id,vertical){
		this.state=1;
		this.id="door"+id;
		this.x=531;
		this.y=548;
		this.vertical=vertical;
	}

	placer(){
		var m = document.getElementById("map");
		var d= document.createElement("img");
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
		var that=this;
		var d = document.getElementById(this.id);
	    d.addEventListener('click', function(e) {that.switch();});
	}

	move(x,y){
		var d = document.getElementById(this.id);
		if(x>=0 & x<=531){
			this.x=x
			d.style.right=this.x+"px";
		} 
		if(y>=0 & y<=548){
			this.y=y
			d.style.bottom=this.y+"px";
		} 
		

	}

	close(){
		var d = document.getElementById(this.id);
		d.src="RESOURCES/door_closed.png";
		this.state=0;
	}

	open(){
		var d = document.getElementById(this.id);
		d.src="RESOURCES/door_open.png";
		this.state=1;
	}

	lock(){
		var d = document.getElementById(this.id);
		d.src="RESOURCES/door_locked.png";
		this.state=-1;
	}

	switch(){
		if(this.state==1) this.close();
		else if(this.state==0) this.open();
	}
}