// ================ mouseover ================
let mapImg = document.querySelector('.img-content img');
mapImg.addEventListener('mouseover', () => {
    mapImg.src = 'https://www.bing.com/th/id/OIP.SfgzySZIDWspeD3CFZZXmgHaEK?w=267&h=160&c=7&o=5&dpr=1.13&pid=1.7'
});

// ================ mouseleave ================
mapImg.addEventListener('mouseleave', () => {
    mapImg.src = 'img/adventure.jpg';
});

// ================ keydown ================
document.addEventListener('keydown', () => {
    alert('Keeps you paws off me you damn dirty apes.')
});

// ================ wheel ================
document.addEventListener('wheel', () => {
    alert('Nice wheels')
});

// ================ click ================
let topImg = document.querySelector('.intro img');
topImg.addEventListener('click', () => {
    topImg.src = 'https://dreamlimousinesdetroit.com/wp-content/uploads/2016/12/party-buses.jpg';
});

let hOne = document.querySelector('.logo-heading');
hOne.addEventListener('click', () => {
    hOne.textContent = 'Crunk Bus!'
});

// ================ click/stop propogation
let bottomSection = document.querySelector('.content-pick');
bottomSection.addEventListener('click', () => {
    bottomSection.style.backgroundColor = 'blue'
})

let bottomSectionDiv = document.querySelector('.destination');
bottomSectionDiv.addEventListener('click', () => {
    bottomSectionDiv.style.backgroundColor = 'orange'
    event.stopPropagation();
})

let bottomButt = document.querySelector('.btn');
bottomButt.addEventListener('click', () => {
    bottomButt.style.backgroundColor = 'darkOliveGreen'
    event.stopPropagation();
})


// ================ load ================
window.addEventListener('load', (event) => {
    alert('The page is fully loaded');
});

// ================ resize ================
let boatImg = document.querySelector('.content-destination img');
window.addEventListener('resize', () => {
    boatImg.src = 'https://www.bing.com/th/id/OIP.R3-UjxHAS-hbOYAHlTZpiwHaEK?pid=Api&rs=1';
});

// ================ dblclick ================
let hTwo = document.querySelectorAll('h2');
hTwo.forEach(element => {
    element.addEventListener('dblclick', () => {
        element.style.color = 'green';
    })
});

// ================ copy ================
document.addEventListener('copy', () => {
    alert('Stealing is bad 🚓')
})

// ================ visibilitychange ================
document.addEventListener('visibilitychange', () => {
    alert("Oh, so you don't love me?")
});
