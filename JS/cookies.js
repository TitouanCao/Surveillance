document.cookie = 'troll=0; expires=Thu, 2 Aug 2050 20:47:11 UTC; path=/'

document.cookie = 'language=0; expires=Thu, 2 Aug 2050 20:47:11 UTC; path=/'

function setCookie(cname, cvalue) {
    var d = new Date()
    d.setTime(d.getTime() + (10*24*60*60*1000))
    var expires = "expires="+ d.toUTCString()
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/"
}

function getCookie(cname) {
    var name = cname + "="
    var decodedCookie = decodeURIComponent(document.cookie)
    var ca = decodedCookie.split(';')
    for(var i = 0; i <ca.length; i++) {
        var c = ca[i]
        while (c.charAt(0) == ' ') {
            c = c.substring(1)
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length)
        }
    }
    return ""
}













