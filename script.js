let searchBtn=document.querySelector('#search-btn');
let searchBar=document.querySelector('.search-bar-container');
let formBtn=document.querySelector('#login-btn');
let loginForm=document.querySelector('.login-form-container');
let formClose=document.querySelector('#form-close');
let menu= document.querySelector('#menu-bar');
let navbar= document.querySelector('.navbar');
let videoBtn= document.querySelectorAll('.vid-btn');
// // mylogic
// let videowalacontent=document.querySelector('.video-container');



window.onscroll=()=>{
    searchBtn.classList.remove('fa-times');
    searchBar.classList.remove('active');
    menu.classList.remove('fa-times');
    navbar.classList.remove('active');
    loginForm.classList.remove('active');
};


menu.addEventListener('click',()=>{
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
});

searchBtn.addEventListener('click',()=>{
    searchBtn.classList.toggle('fa-times');
    searchBar.classList.toggle('active');
});

// // javscript for form
var form=document.getElementById('form');
form.addEventListener('mousemove',(e)=>{
    var x=(window.innerWidth/2-e.pageX)/12;
    var y=(window.innerHeight/2-e.pageY)/12;

    form.style.transform='rotateX(' +x+'deg)rotateY(' +y+'deg)'
});
form.addEventListener('mouseleave',function(){
    form.style.transform='rotateX(0deg)rotateY(0deg)';
}
);



formBtn.addEventListener('click',()=>{
    loginForm.classList.add('active');
});

formClose.addEventListener('click',()=>{
    loginForm.classList.remove('active');
});

videoBtn.forEach(btn =>{
btn.addEventListener('click',()=>{
document.querySelector('.controls .active').classList.remove('active');
btn.classList.add('active');
let src=btn.getAttribute('data-src');
document.querySelector('#video-slider').src=src;

});
});


// // mylogic

// formBtn.addEventListener('click',()=>{
//     videowalacontent.classList.remove('active');
// });

// formClose.addEventListener('click',()=>{
//     videowalacontent.classList.add('active');
// });


// for weather

const apiKey="7e48bfa19886a36c49d5f02107a0fc05";
const apiUrl="https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searcbox=document.querySelector(".search input");
const searcbtn=document.querySelector(".search button");
const weatherIcon=document.querySelector(".weather-icon")

async function checkWeather(city){
    const response =await fetch(apiUrl+city+`&appid=${apiKey}`);
    var data=await response.json();

    console.log(data);
    document.querySelector(".city").innerHTML=data.name;
    document.querySelector(".temp").innerHTML=Math.round(data.main.temp)+"°c";
    document.querySelector(".humidity").innerHTML=data.main.humidity+"%";
    document.querySelector(".wind").innerHTML=data.wind.speed+"km/h";
    
    if(data.weather[0].main=="Clouds"){
        weatherIcon.src="clouds.png";
    }
    else if(data.weather[0].main=="Clear"){
        weatherIcon.src="clear.png";
    }
    else if(data.weather[0].main=="Rain"){
        weatherIcon.src="rain.png";
    }
    else if(data.weather[0].main=="Drizzle"){
        weatherIcon.src="drizzle.png";
    }
    else if(data.weather[0].main=="Mist"){
        weatherIcon.src="mist.png";
    }
    document.querySelector(".weather").style.display="block";

}


searcbtn.addEventListener("click",()=>{
checkWeather(searcbox.value);
});

