
      var map;
      function initMap() {
        loc = {lat: 41.879398, lng: -87.632317};
        map = new google.maps.Map(document.querySelector('.map'), {
          center: {lat: 41.881832, lng: -87.623177},
          zoom: 14
        });
        const marker = new google.maps.Marker({position: loc, map: map});
      }


// $('#navbar a, .btn').on('click', function(event){
//
//     if(this.hash!== ''){
//       event.preventDefault();
//
//       cont hash = this.hash;
//
//       $('html, body').animate(
//         {
//           scrollTop: $(hash).offset().top - 100
//         },
//         800
//       );
//     }
//
// });
function smoothScroll(target, duration) {
  const navbarHeight  = parseInt(getComputedStyle(document.getElementsByTagName('nav')[0]).height) - 1;
  target = document.querySelector(target);
  let targetPosition = target.getBoundingClientRect().top - navbarHeight;
  let startPosition = window.pageYOffset || window.scrollY;
  let startTime = null;

  function loop(currentTime) {
    if (startTime === null) startTime = currentTime;
    let timeElapsed = currentTime - startTime;
    let run = ease(timeElapsed, startPosition, targetPosition, duration);
    window.scrollTo(0, run);
    if (timeElapsed < duration) requestAnimationFrame(loop);
  }
  function ease(t, b, c, d) {
    t /= d / 2;
    if (t < 1) return c / 2 * t * t + b;
    t--;
    return -c / 2 * (t * (t - 2) - 1) + b;
  }
  requestAnimationFrame(loop);
}

const homeBtn = document.querySelector('a[href="#home"]');
const whatBtn = document.querySelector('a[href="#what"]');
const whoBtn = document.querySelector('a[href="#who"]');
const contactBtn = document.querySelector('a[href="#contact"]');

homeBtn.addEventListener('click', () => smoothScroll('#home', 1000));
whatBtn.addEventListener('click', () => smoothScroll('#what', 1000));
whoBtn.addEventListener('click', () => smoothScroll('#who', 1000));
contactBtn.addEventListener('click', () => smoothScroll('#contact', 1000));
