document.getElementById('turnOn').onclick = () => { lamp.src = './img/lampada-ligada.jpg' };
document.getElementById('turnOff').onclick = () => { lamp.src = './img/lampada-desligada.jpg' };

document.getElementById('lamp').ondblclick = () => { lamp.src = './img/lampada-quebrada.jpg' };

document.getElementById('lamp').onmouseover = () => { lamp.src = './img/lampada-ligada.jpg' };
document.getElementById('lamp').onmouseleave = () => { lamp.src = './img/lampada-desligada.jpg' };



