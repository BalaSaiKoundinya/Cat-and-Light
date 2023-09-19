function switchOff() {
    document.getElementById("bulbImage").src = "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/bulb-go-off-img.png";
    document.getElementById("catImage").src = "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/cat-eyes-img.png";
    document.getElementById("switchStatus").textContent = "SwitchedOff";
    document.getElementById("offSwitch").style.backgroundColor = "#cbd2d9"; //red
    document.getElementById("onSwitch").style.backgroundColor = "#22c55e"; // grey
}

function switchOn() {
    document.getElementById("bulbImage").src = "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/bulb-go-on-img.png";
    document.getElementById("catImage").src = "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/cat-img.png";
    document.getElementById("switchStatus").textContent = "SwitchedOn";
    document.getElementById("offSwitch").style.backgroundColor = "#e12d39"; //grey
    document.getElementById("onSwitch").style.backgroundColor = "#cbd2d9"; //green
}