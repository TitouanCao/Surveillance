var start = null
var delay = 7000
var cam = null

var moving = null

class Monster {
    
    constructor() {
        this.room = null
        this.lastRoom = null
        this.triggered = false
        this.ventAccess = 1 //Math.floor(Math.random() * 3)+2
    }
    
    initialize(room) {
        this.room = room
    }
    
    start() {
        moving = setInterval("monster.moove()", delay)
    }
    
    moove() {
        if(this.ventAccess<=0 && this.room.hasVent) {
            console.log('VENT')
            clearInterval(moving)
            this.ventAccess = Math.floor(Math.random() * 3)+2;
            ventEvent()
            console.log("nope")
            setTimeout(function(){
                let exit = ventRooms[Math.floor(Math.random() * ventRooms.length-1)+1]
                console.log(exit)
                monster.room = exit
                moving = setInterval("monster.moove()", delay)

            },10000)
        }
        else {
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
                if(this.room.hasVent) this.ventAccess--
            }
            console.log("LE MONSTRE EST DANS LA SALLE " + this.room.id)
            this.seen()
            this.checkGenerators()
            this.checkLose()
        }
    }
    
   
    
    
    logicIA(){     
        var room = this.room          //This is the current room
        var projection                  //This might be next room, or the room after the next in some cases
        var steps = []                  //The table which contains the rooms in order to get to the closest winning room
        var tried = []                  //The table which contains the rooms we evaluated as useless rooms, it's useful when you realize you chose a wrong way
        var alreadyCheck = false        //Useful variable when you feel like you are going to loop again and again between two rooms
        
        while(room.value != 2) {      //While we are not in a winning room, the player can't technically block them all, so we can't infinite loop
            if(alreadyCheck == false) projection = room.getPath()     //If the projection has not been defined for the next loop yet. If you go into a room you already went, then you choose to not go back once again in the room you come from.
            alreadyCheck = false        //We can reset this once this is done
            
            //console.log("--------------------------------")
            //console.log("ROOM : ")
            //console.log(room)
            //console.log("PROJECTION : ")
            //console.log(projection)
            //console.log("TRIED : ")
            //console.log(tried)
            
            if (projection == false) return false   //Don't remember why but if ever we meet an error, breaking a door is still better than a bug for the player
        
            if(tried.includes(projection)) {        //If we realize we already went into this room
                
                if (projection.getPathNot(tried) == false) {        //If from this new room we can't go anywhere. For instance if the monster is blocked in a couple of two rooms, he is actually not really "blocked" but as he will moove like A -> B, B -> A etc It's all the same.
                    
                    //console.log("------------------------------------")
                    //console.log(room)
                    //console.log("GETPATHNOT")
                    //console.log(tried)
                    //console.log(room.getPathNot(tried))
                    //console.log("FALSE")
                    //console.log("------------------------------------")
                    
                    return false        //The monster can consider itself as blocked and break the first door he sees
                }
                //If we already went into this room but that other rooms than the one we come from are reachable
                room = projection     //We decide to go there, current room = the one we think is best
                projection = projection.getPathNot(tried)       //Our projection becomes the projection of our projection, we are very smart, don't we ?
                steps.shift()       //As we just went into a room for no reasons we can erase this from the results
                steps.shift()       //The second room, and actually this will make the monster teleport from room A to room C but this can only happen when the monster crosses the corridor, which is actually constituted of two rooms, so that's not a matter, he goes from corridor part 1 to corridor part 2, it shouldn't disturb the player that much
                alreadyCheck = true     //Here comes the point of this variable, now as our projection became the next loop projection (projection = the projection of the projection) we don't want to project it again during next passage
                
                //console.log("STEPS : ")
                //console.log(steps)
                
            }
            
            else {      //If this room has actually never been visited   
                
                steps.push(room)      //Then we put it in our result table
                room = projection     //And we progress by assuming our projection becomes our current position
                
            }
            
            tried.push(room)          //And we can consider we went into our current room    
        }
        
        steps.push(room)      //This is the final-goal-room, actually it's not necessary to put it in the table as we will only get the next room and reload it next moove, but why not, might be useful for debuging
        return steps            //We return the fruits of our wonderful thought 
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