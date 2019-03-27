var start = null
var delay = 7000
var cam = null

var moving = null

class Monster {
    
    constructor() {
        this.room = null
        this.lastRoom = null
        this.triggered = false
        this.ventAccess = Math.floor(Math.random() * 3)+5
    }
    
    initialize(room) {
        this.room = room
    }
    
    start() {
        moving = setInterval("monster.moove()", delay)
    }
    
    moove() {
        let moves = this.room.getPath()
        let doors = this.room.getDoors()
        if(interval != undefined ) {
            clearInterval(interval)
        }
        
        var decision = this.logicIA()
        if (decision == false) {
            doors[0].destroy()
            this.room = this.room.getPath()
        }
        else {
            this.room = decision[1]
        }
        console.log("LE MONSTRE EST DANS LA SALLE " + this.room.id)
        this.seen()
        this.checkGenerators()
        this.checkLose()
    }
    
    logicIA(){     
        var future = this.room 
        var projection 
        var steps = [] 
        var tried = []
        console.log("--------------------------------")
        while(future.value != 2) {  
            projection = future.getPath() 
            
            
            if (projection == false) return false
        
            if(tried.includes(projection)) { 
                if (future.getPathNot(tried) == false) { 
                    console.log("OUI")
                    return false  
                }
                else {         
                    projection = future.getPathNot(tried)  
                }
                
            }
            else {      
                steps.push(future)      
            }
            tried.push(future)
            console.log("FUTURE : ")
            console.log(future)
        
            future = projection 
            
            console.log("PROJECTION : ")
            console.log(projection)
            console.log("TRIED : ")
            console.log(tried)
            
        }
        steps.push(future)      
        return steps            
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
    
    reset() {
        clearInterval(moving)
        this.room = null
        this.triggered = false
    }
}