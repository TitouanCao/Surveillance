

class room {
    
    constructor(id, camera){
        this.id = id
        this.camera = camera
    }
    
    getPath() {
        let nextRoom
        let linkedRooms = []
        for(let i = 0; i < doors.length; i++){
            nextRoom = doors[i].otherRoom(this)
            if(nextRoom != false) {
                linkedRooms.push(nextRoom)
            }
        }
        return linkedRooms
    }
    
    getRooms() {
        let nextRoom
        let linkedRooms = []
        for(let i = 0; i < doors.length; i++){
            nextRoom = doors[i].otherRoomBis(this)
            if(nextRoom != false) {
                linkedRooms.push(nextRoom)
            }
        }
        return linkedRooms
    }
    
    getDoors() {
        let door
        let linkedRooms = []
        for(let i = 0; i < doors.length; i++){
            door = doors[i].getDoorByRoom(this)
            if(door != false) {
                linkedRooms.push(door)
            }
        }
        return linkedRooms
    }
}