// ================ mouseover ================
let topImg = document.querySelector('.intro img');
topImg.addEventListener('mouseover', () => {
    topImg.src = 'https://dreamlimousinesdetroit.com/wp-content/uploads/2016/12/party-buses.jpg';
});
topImg.addEventListener('mouseleave', () => {
    topImg.src = 'img/fun-bus.jpg';
});

// ================ keydown ================
document.addEventListener('keydown', () => {
    alert('Keeps you paws off me you damn dirty apes.')
});

// ================ wheel ================
document.addEventListener('wheel', () => {
    alert('Nice wheels')
})

// ================ drag / drop ================


// ================ load ================
window.addEventListener('load', (event) => {
    alert('The page is fully loaded');
  });

  // ================ focus ================

  // ================ resize ================
  let boatImg = document.querySelector('.content-destination img');
  console.log(boatImg)
  window.addEventListener('resize', () => {
      boatImg.src = 'https://www.bing.com/th/id/OIP.R3-UjxHAS-hbOYAHlTZpiwHaEK?pid=Api&rs=1';
  })

  // ================ scroll ================

  // ================ select ================

// ================ dblclick ================
// const navLink = document.querySelectorAll('nav-link');
// navLink.forEach(element => {
//     element.addEventListener('dblclick', () => {
//         navLink.style.color = 'green';
//     })
// })