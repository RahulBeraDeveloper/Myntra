let timerID;
var slideIndex = 0;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}


function showSlides() {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) { slideIndex = 1 }
    slides[slideIndex - 1].style.display = "block";

    timerID = setTimeout(() => {
        showSlides()
        timerID = null;
    }
        , 3000); // Change image every 3 seconds
}


function dropDown1() {
    let content = document.querySelector(".dropdown-content1");

    content.addEventListener("mouseover", function () {
        let menu = document.querySelector(".dropdown-menu1");
        menu.style.display = "block";
    });

    let menu = document.querySelector(".dropdown-menu1");
    menu.addEventListener("mouseover", function () {
        menu.style.display = "block";
        menu.addEventListener("mouseout", function () {
            menu.style.display = "none";
        });
    });

    content.addEventListener("mouseout", function () {
        let menu = document.querySelector(".dropdown-menu1");
        menu.style.display = "none";
    });
}
dropDown1();

function dropDown2() {
    let content = document.querySelector(".dropdown-content2");

    content.addEventListener("mouseover", function () {
        let menu = document.querySelector(".dropdown-menu2");
        menu.style.display = "block";
    });

    let menu = document.querySelector(".dropdown-menu2");
    menu.addEventListener("mouseover", function () {
        menu.style.display = "block";
        menu.addEventListener("mouseout", function () {
            menu.style.display = "none";
        });
    });

    content.addEventListener("mouseout", function () {
        let menu = document.querySelector(".dropdown-menu2");
        menu.style.display = "none";
    });
}
dropDown2();

function dropDown3() {
    let content = document.querySelector(".dropdown-content3");

    content.addEventListener("mouseover", function () {
        let menu = document.querySelector(".dropdown-menu3");
        menu.style.display = "block";
    });

    let menu = document.querySelector(".dropdown-menu3");
    menu.addEventListener("mouseover", function () {
        menu.style.display = "block";
        menu.addEventListener("mouseout", function () {
            menu.style.display = "none";
        });
    });

    content.addEventListener("mouseout", function () {
        let menu = document.querySelector(".dropdown-menu3");
        menu.style.display = "none";
    });
}
dropDown3();

function dropDown4() {
    let content = document.querySelector(".dropdown-content4");

    content.addEventListener("mouseover", function () {
        let menu = document.querySelector(".dropdown-menu4");
        menu.style.display = "block";
    });

    let menu = document.querySelector(".dropdown-menu4");
    menu.addEventListener("mouseover", function () {
        menu.style.display = "block";
        menu.addEventListener("mouseout", function () {
            menu.style.display = "none";
        });
    });

    content.addEventListener("mouseout", function () {
        let menu = document.querySelector(".dropdown-menu4");
        menu.style.display = "none";
    });
}
dropDown4();

function dropDown5() {
    let content = document.querySelector(".dropdown-content5");

    content.addEventListener("mouseover", function () {
        let menu = document.querySelector(".dropdown-menu5");
        menu.style.display = "block";
    });

    let menu = document.querySelector(".dropdown-menu5");
    menu.addEventListener("mouseover", function () {
        menu.style.display = "block";
        menu.addEventListener("mouseout", function () {
            menu.style.display = "none";
        });
    });

    content.addEventListener("mouseout", function () {
        let menu = document.querySelector(".dropdown-menu5");
        menu.style.display = "none";
    });
}
dropDown5();

// dark mode
const themeToggle = document.getElementById('theme-toggle');
const body = document.body;

themeToggle.addEventListener('click', function() {
  body.classList.toggle('dark-mode');
});





// for popup
window.onload = function() {
    
    var popup = document.getElementById("popup-coupon");
    
    var closeBtn = popup.getElementsByClassName("close-btn")[0];
   
    popup.style.display = "block";
    
    closeBtn.onclick = function() {
      popup.style.display = "none";
    }
  };



//   /* weather section and geo-location*/



  let y = document.getElementById('weather');

    // Get geolocation and weather information upon page load
    window.addEventListener('load', () => {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition);
      } else {
        y.innerText = "Geolocation Not Supported";
      }
    });

    function showPosition(data) {
      console.log(data);
      let lat = data.coords.latitude;
      let lon = data.coords.longitude;

      const url = `https://api.openweathermap.org/data/2.5/forecast/daily?lat=${lat}&lon=${lon}&mode=json&units=metric&cnt=5&appid=fbf712a5a83d7305c3cda4ca8fe7ef29`;

      // API call
      fetch(url, { method: 'GET' })
        // Return promise
        .then((res) => res.json())
        // Resolve the promise
        .then((data) => {
          console.log(data);
          let cityName = data.city.name;
          let temp = data.list[0].temp.day + " °C";
          let weatherIcon = data.list[0].weather[0].icon;
          y.innerHTML = `<img class="weather-icon" src="https://openweathermap.org/img/wn/${weatherIcon}.png" alt="Weather Icon">${temp} | ${cityName}`;
        });
    }