var start = null
var delay = 5000
var cam = null

var moving = null

class Monster {
    
    constructor() {
        this.room = null
        this.triggered = false
        this.ventAccess = Math.floor(Math.random() * 3)+5
    }
    
    initialize(room) {
        this.room = room
        this.start()
    }
    
    moove() {
        let moves = this.room.getPath()
        let doors = this.room.getDoors()
        //console.log(moves)
        if(interval != undefined ) {
                clearInterval(interval)
        }
        if (moves.length <= 0) {
            let rand = Math.floor(Math.random() * doors.length)
            doors[rand].destroy()
            this.room = doors[rand].otherRoom(this.room)
            /*if(this.room.hasVent){
                this.room = ventEvent(this.room)
            }*/
        }
        else {
            let rand = Math.floor(Math.random() * moves.length)
            //console.log(rand)
            this.room = moves[rand]
            /*if(this.room.hasVent){
                this.ventAccess--
                if(this.ventAccess == 0){
                    ventEvent()
                    this.ventAccess = Math.floor(Math.random() * 3)+2
                }
            }*/

            
        }
        this.seen()
        this.checkGenerators()
        this.checkLose()
    }
    
    trigger() {
        this.triggered == true
        //setTimeout(, 10000)
    }

    seen(){
        //console.log(this.room)
        let cam = document.getElementsByClassName("selectedCam")[0]
        if(this.room.camera == cam){
            glitch()
        }
    }

    checkLose() {
        if(this.room == r2) {
            loadLost()
            toLevel()
            this.reset()
            b.reload()
        }
    }
    
    checkGenerators() {
        if(this.room == r4){
            g1.desactivate()
        }
        if(this.room == r5){
            g2.desactivate()
        }
        if(this.room == r8){
            g3.desactivate()
        }
    }
    
    start() {
        moving = setInterval("monster.moove()", delay)
    }
    
    reset() {
        clearInterval(moving)
        this.room = null
        this.triggered = false
    }
}