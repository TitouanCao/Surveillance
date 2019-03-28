

class generator {
    
    constructor(room,mapC) {
        this.id = room.id + "Generator"
        this.room = room
        this.state = "true"
        this.map=mapC;
    }
    
    place(x, y) {
        var generator = document.createElement("img")
        generator.id = this.id
        p = this.map.getPercent()
        generator.style.position = "absolute"
        generator.style.bottom = x*p + "px"
        generator.style.right = y*p + "px"
        generator.style.width = "60px"
        generator.src = "RESOURCES/generatorFull.png"
        
        game.appendChild(generator)
        
    }
    
    desactivate() {
        if(this.state == "true") {
            this.state = "false"
            b.kill()
            var generator = document.getElementById(this.id)
            generator.src = "RESOURCES/generatorEmpty.png"
            this.room.value = 0
        }
    }
    
    suicide() {
        var img = document.getElementById(this.id)
        var erase = game.removeChild(img)
        erase =""
    }
    
}