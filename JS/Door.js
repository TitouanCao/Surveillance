var nbLockedDoors=0;
var Alldoors = []

function ChangelockSound(version){
	let l= document.getElementById("lock");
	let u= document.getElementById("unlock");
	l.src="RESOURCES/Sound/lock"+version+".mp3";
	u.src="RESOURCES/Sound/lock"+version+".mp3";
}


class Door{


	constructor(idC,vertical,mapC, room1, room2){
		this.state=1;
		this.id="door"+idC;
		this.map=mapC;
		this.x=this.map.w;
		this.y=this.map.h;
		this.vertical=vertical;
		this.room1 = room1
        this.room2 = room2
        Alldoors.push(this)
	}

	placer(){
		//let m = document.getElementById("doors");
		let d= document.createElement("img");
	    d.src="RESOURCES/door_open.png";
	    d.id=this.id;
	    d.className="door";
	    d.style.right=this.x+"px";
	    d.style.bottom=this.y+"px";
	    d.style.position="absolute";
	    if(this.vertical) d.style.transform="rotate(90deg)";
        //m.appendChild(d);
	    game.appendChild(d)
	}

	register(){
		let that=this;
		let d = document.getElementById(this.id);
	    d.addEventListener('click', function(e) {that.switch();});
	}

	move(x,y){
		let p = this.map.getPercent()
		console.log(p)
		let i=(1-p)*10
		if(p<0.9) i=3
		let d = document.getElementById(this.id);
		if(x>=0){
			this.x=(Math.round(x))*p-i
			d.style.right=this.x+"px";
		} 
		if(y>=0){
			this.y=(Math.round(y))*p
			d.style.bottom=this.y+"px";
		} 
	}

	lock(){
		let d = document.getElementById(this.id);
		startSound("lock")
		d.src="RESOURCES/door_closed.png";
		this.state=0;
		nbLockedDoors++;
	}

	unlock(){
		let d = document.getElementById(this.id);
		let s = document.getElementById("unlock")
		startSound("unlock")
		d.src="RESOURCES/door_open.png";
		this.state=1;
		nbLockedDoors--;
	}

	block(){
		let d = document.getElementById(this.id);
		d.src="RESOURCES/door_locked.png";
		this.state=-1;
	}
    
    destroy() {
        let d = document.getElementById(this.id);
        d.src="RESOURCES/door_locked.png";
        this.state = 2
        this.map.battery.liberate();
    }

	switch(){
		if(this.state==1 & this.map.battery.state>0) {
			this.lock();
			this.map.battery.use(this);
		}
		else if(this.state==0) {
			this.unlock();
			this.map.battery.liberate();
		}
	}

    isLinked(room) {
        if(this.room1 == room || this.room2 == room) {
            return true
        }
    }
    
    otherRoom(room) {
        if(this.room1 == room && this.state >= 1) {
            return this.room2
        }
        else if (this.room2 == room && this.state >= 1) {
            return this.room1
        }
        else {
            return false
        }
    }
    
    otherRoomBis(room) {
        if(this.room1 == room) {
            return this.room2
        }
        else if (this.room2 == room) {
            return this.room1
        }
        else {
            return false
        }
    }
    
    getDoorByRoom(room) {
        if(this.isLinked(room)) {
            return this
        }
        else {
            return false
        }
    }
}