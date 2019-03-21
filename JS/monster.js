var start = null
var delay = 10000
var cam = null

var moving = null

class Monster {
    
    constructor() {
        this.room = null
        this.triggered = false
    }
    
    initialize(room) {
        this.room = room
    }
    
    moove() {
        let moves = this.room.getPath()
        let doors = this.room.getDoors()
        console.log(moves)
        if(interval != undefined ) {
                clearInterval(interval)
        }
        if (moves.length <= 0) {
            let rand = Math.floor(Math.random() * doors.length)
            doors[rand].destroy()
            this.room = doors[rand].otherRoom(this.room)
        }
        else {
            let rand = Math.floor(Math.random() * moves.length)
            console.log(rand)
            this.room = moves[rand]
            
        }
        this.seen() 
        this.checkLose()
    }
    
    trigger() {
        this.triggered == true
        //setTimeout(, 10000)
    }

    seen(){
        console.log(this.room)
        let cam = document.getElementsByClassName("selectedCam")[0]
        if(this.room.camera == cam){
            glitch()
        }
    }

    checkLose() {
        if(this.room == r2) {
            loadLost();
            toLevel()
        }
    }
    
    start() {
        moving = setInterval("monster.moove()", 5000)
    }
}