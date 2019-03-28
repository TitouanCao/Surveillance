var Allrooms = []
var ventRooms = []

class room {
    
    constructor(id, camera, value, hasVent){
        this.id = id
        this.value = value
        this.camera = camera
        this.hasVent = hasVent
        Allrooms.push(this)
        if(hasVent) ventRooms.push(this)
    }
    
    getPath() {
        let nextRoom
        //let linkedRooms = []
        let mostWorthy = false
        let max = 0
        for(let i = 0; i < Alldoors.length; i++){
            nextRoom = Alldoors[i].otherRoom(this)
            if(nextRoom != false) {
                if(nextRoom.value > max) {
                    max = nextRoom.value
                    mostWorthy = nextRoom
                }
            }
        }
        return mostWorthy
    }
    
    getPathNot(rooms) {
        let nextRoom
        let mostWorthy = false 
        let max = 0
        for(let i = 0; i < Alldoors.length; i++){
            nextRoom = Alldoors[i].otherRoom(this)
            if(nextRoom != false) {
                if(nextRoom.value > max && !rooms.includes(nextRoom)) {
                    max = nextRoom.value
                    mostWorthy = nextRoom
                    return mostWorthy
                }
            }
        }
        return false
    }
    
    getRooms() {
        let nextRoom
        let linkedRooms = []
        for(let i = 0; i < Alldoors.length; i++){
            nextRoom = Alldoors[i].otherRoomBis(this)
            if(nextRoom != false) {
                linkedRooms.push(nextRoom)
            }
        }
        return linkedRooms
    }
    
    getDoors() {
        let door
        let linkedRooms = []
        for(let i = 0; i < Alldoors.length; i++){
            door = Alldoors[i].getDoorByRoom(this)
            if(door != false) {
                linkedRooms.push(door)
            }
        }
        return linkedRooms
    }
}