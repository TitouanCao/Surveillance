class Battery{
	constructor(MaxStateC){
        this.lastLock = null
        this.secondLock = null
        this.firstLock = null
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
	    m.addEventListener("click", function(){
	        glitch()
	    })
	    d.appendChild(m)
	    game.appendChild(d)
	}
    
    suicide() {
        var img = document.getElementById("imgBattery")
        var div = document.getElementById("battery")
        var erase = div.removeChild(img)
        erase = ""
        var eraseAgain = game.removeChild(div)
        eraseAgain = ""
    }

	use(door){
        this.firstLock = this.secondLock
        this.secondLock = this.lastLock
        this.lastLock = door
        
        while(this.checkDoor(door)) {
            this.lastLock = this.firstLock
            this.secondLock = this.firstLock
            this.firstLock = null 
        }
        
        let b = document.getElementById(this.id);
        b.src="RESOURCES/battery_"+(this.state-1)+".png";
        this.state--;
        this.check()
	}
    
    kill() {
        let b = document.getElementById(this.id)
        b.src="RESOURCES/battery_"+(this.state-1)+".png"
        this.state--
        this.check()
        
        this.lastLock = this.secondLock
        this.secondLock = this.firstLock
        this.firstLock = null 
    }

	liberate(){
		if(this.state<this.maxState){
			let b = document.getElementById(this.id);
			b.src="RESOURCES/battery_"+(this.state+1)+".png";
			this.state++;
		}
	}
    
    check() {
        if(this.state < 0) {
            this.lastLock.switch()
        }
    }
    
    checkDoor(door) {
        if(door.state != undefined) {
            if(door.state == 1) {
                return true
            }
            else { return false }
        }
        else { return false }
    }
    
    reload() {
        this.state = 3
    }


}