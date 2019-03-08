function loadScreens(qtte) {
    for(var i = 1; i <= qtte; i++) {
        createScreen(i)
        createCam(i)
    }
}
