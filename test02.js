// document.getElementById("password").value

function checkIllegal(e) {
    if(e.value.length < 6) {
        e.setAttribute("class", "illegal-pwd")
    }else {
        e.removeAttribute("class")
    }
}