function loadScreens(qtte) {
    for(var i = 1; i <= qtte; i++) {
        createScreen(i)
        createCam(i)
    }
}

function sinkScreens() {
    var qtte = getNbScreen()
    for(var i = 1; i <= qtte; i++) {
        deleteScreen(i)
        deleteCam(i)
    }
    deleteBorder()
    deleteVent()
}

function loadLevels(qtte) {
    for(var i = 1; i <= qtte; i++) {
        if(i==1) createLevel(i,false)
        else createLevel(i,true)
    }
}

function sinkLevels() {
    var qtte = getNbLevel()
    for(var i = 1; i <= qtte; i++) {
        deleteLevel(i)
    }
}


function reloadLanguages() {
    reloadInstructions()
    reloadLobby()
    reloadLevel()
    reloadGame()
    reloadMenu()
}

function loadTheGame() {
    var background = document.getElementById('background')
    background.pause()
    document.body.style.opacity = "1"
    
    createInstructions()
    createSetting()
    loadLevels(12)
    
    
    setTimeout("document.body.style.pointerEvents = 'all'", 2000)
    setTimeout("background.play()", 2000)
}




function loadLevel1() {
    b = new Battery(3)
    m = new Map("RESOURCES/Levels/Level1/mapCam3.png",b,)
    monster = new Monster
    
    r1 = new room(1, document.getElementById("screen3"),false)
    r2 = new room(2, null,true)
    r3 = new room(3, document.getElementById("screen4"),false)
    r4 = new room(4, null,false)
    r5 = new room(5, null,true)
    r6 = new room(6, document.getElementById("screen1"),false)
    r7 = new room(7, document.getElementById("screen2"),false)
    r8 = new room(8, null,true)
    r9 = new room(9, document.getElementById("screen5"),false)
    
    monster.initialize(r6)

    g1 = new generator(r4)
    g1.place(30, 260)
    
    g2 = new generator(r5)
    g2.place(450, 50)
    
    g3 = new generator(r8)
    g3.place(160, 10)

    d1 = new Door(1,false,m, r1, r2)
    d1.placer()
    d1.register()
    d1.move(280,227)

    d2 = new Door(2,false,m, r2, r3)
    d2.placer()
    d2.move(280,336)
    d2.register()

    d3 = new Door(3,true,m, r1, r6)
    d3.placer()
    d3.move(176,380)
    d3.register()

    d4 = new Door(4,true,m, r3, r7)
    d4.placer()
    d4.move(176,170)
    d4.register()

    d5 = new Door(5,true,m, r2, r7)
    d5.placer()
    d5.move(176,280)
    d5.block()
    
    d6 = new Door(6,true,m, r7, r9)
    d6.placer()
    d6.move(83,22)
    d6.register()
    
    d7 = new Door(7,true,m, r7, r8)
    d7.placer()
    d7.move(83,150)
    d7.register()

    d8 = new Door(8,false,m, r5, r6)
    d8.placer()
    d8.move(80,419)
    d8.register()

    d9 = new Door(9,false,m, r8, r9)
    d9.placer()
    d9.move(35,48)
    d9.register()

    d10 = new Door(10,true,m, r1, r5)
    d10.placer()
    d10.move(176,460)
    d10.register()

    d11 = new Door(11,true,m, r4, r7)
    d11.placer()
    d11.move(176,50)
    d11.register()

    d12 = new Door(12,true,m, r6, r7)
    
    var screens = document.getElementsByClassName("screen")
    var i = 0
    while(tabCam[0][i] != null) {
        screens[i].firstChild.src = tabCam[0][i]
        i++
    }
    screens[i-1].classList.add("selectedCam")

}














//Variables globales de jeu, à adapter pour créer d'autres niveaux
var b
var m
var monster

var r1
var r2 
var r3 
var r4
var r5
var r6
var r7
var r8
var r9

var g1
var g2
var g3

var d1
var d2
var d3
var d4
var d5
var d6
var d7
var d8
var d9
var d10
var d11
var d12









