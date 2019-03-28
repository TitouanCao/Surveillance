var start = null
var delay = 7000
var cam = null

var moving = null

class Monster {
    
    constructor() {
        this.room = null
        this.lastRoom = null
        this.triggered = false
        this.ventAccess = 0 //Math.floor(Math.random() * 3)+2
    }
    
    initialize(room) {
        this.room = room
    }
    
    start() {
        moving = setInterval("monster.moove()", delay)
    }
    
    moove() {
        if(this.ventAccess==0 && this.room.hasVent) {
            console.log('VENT')
            clearInterval(moving)
            this.ventAccess = Math.floor(Math.random() * 3)+2;
            ventEvent()
            setTimeout(function(){
                monster.room = ventRooms[Math.floor(Math.random() * ventRooms.length)]
                moving = setInterval("monster.moove()", delay)

            },8000)
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
        var future = this.room          //This is the current room
        var projection                  //This might be next room, or the room after the next in somes cases
        var steps = []                  //The table which contains the rooms in order to get to the closest winning room
        var tried = []                  //The table whihch contains the rooms we parsed as useless rooms, it's useful hen you realize you chose a wrong way
        var alreadyCheck = false        //Useful variable when you feel like you are going to loop again and again between two rooms
        
        while(future.value != 2) {      //While we are not in a winning room
            if(alreadyCheck == false) projection = future.getPath()     //If the projection as not been defined for the next loop yet. If you go to a room you already went, then you choose to not go back once again in the room you come from.
            alreadyCheck = false        //We can reset this once this is done
            
            //console.log("--------------------------------")
            //console.log("FUTURE : ")
            //console.log(future)
            //console.log("PROJECTION : ")
            //console.log(projection)
            //console.log("TRIED : ")
            //console.log(tried)
            
            if (projection == false) return false   //Don't remember why but if ever we meet an error, breaking a door is still better than a bug for the player
        
            if(tried.includes(projection)) {        //If we realize we already went in this room
                
                if (projection.getPathNot(tried) == false) {        //If from this new room we can't go anywhere, for instance the monster is blocked in a couple of two rooms, he is actually not really "blocked" but as he will moove like A -> B, B -> A etc It's all the same.
                    
                    //console.log("------------------------------------")
                    //console.log(future)
                    //console.log("GETPATHNOT")
                    //console.log(tried)
                    //console.log(future.getPathNot(tried))
                    //console.log("FALSE")
                    //console.log("------------------------------------")
                    
                    return false        //The monster can consider itself as blocked and break the first door he sees
                }
                //If we already went in this room but other rooms than the one we come from are reachable
                future = projection     //We decide to go there, current room = the one we think is best
                projection = projection.getPathNot(tried)       //Our projection becomes the projection of our projection, we are very smart don't we ?
                steps.shift()       //As we just went into a room for no reasons we can erase this from the results
                steps.shift()       //The second room, and actually this will make the monster teleport from room A to room C but this can only happen when the monster crosses the corridor, which is actually constituted of two rooms, so that's not a matter, he goes from corridor part 1 to corridor part 2
                alreadyCheck = true     //Here comes the point of this variable, now as our projection became the next loop projection (projection = the projection of the projection) we don't want to project it again next passage
                
                //console.log("STEPS : ")
                //console.log(steps)
                
            }
            
            else {      //If this room as actually never been visited   
                
                steps.push(future)      //Then we put it in our result table
                future = projection     //And we progress by assuming our projection becomes our current position
                
            }
            
            tried.push(future)          //And we can consider we went in our current room    
        }
        
        steps.push(future)      //This is the final-goal-room, actually it's not necessary to pur it in the table as we will only get the next room and reload it next moove, but why not   
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