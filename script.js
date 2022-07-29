let snowConatiner = document.querySelector('.snow-container');

const snowFall = () => {
    let snow = document.createElement('span');
    snow.className = 'snow';
    
    minSize = 5; 
    maxSize = 10;

    let snowSize = Math.random() * (maxSize - minSize) * 2;

    snow.style.width = snowSize + "px";
    snow.style.height = snowSize + "px";
    snow.style.left = Math.random() * 100 + "%";
    
    snowConatiner.appendChild(snow)

    setTimeout(() => {
        snow.remove();
    }, 10000)
}

setInterval(snowFall, 100)