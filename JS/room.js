

class room {
    
    constructor(id, camera){
        this.id = id
        this.camera = camera
    }
    
    getPath() {
        let nextRoom
        let linkedRooms = []
        for(let i = 0; i < Alldoors.length; i++){
            nextRoom = Alldoors[i].otherRoom(this)
            if(nextRoom != false) {
                linkedRooms.push(nextRoom)
            }
        }
        return linkedRooms
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