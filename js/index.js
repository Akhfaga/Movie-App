/// <reference types ="../@types/jquery" /> 
input.addEventListener('input',async function(){
    let search = input.value
    getSearch(search)
})
var loading=document.querySelector('.loading')

async function getSearch(term) {

    try{
    loading.classList.remove('d-none')
     const response = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=eba8b9a7199efdcb0ca1f96879b83c44&query=${term}`);
    const data = await response.json();
    allRecipes = data.results;
    displayData(allRecipes );
    console.log(allRecipes);
    loading.classList.add('d-none')

    }catch (error) {

        alert("errrrrrrrrrrrrrrrrrrrrrrroooooor")
    }


}

$(".side-nav i.openCLose ").on("click", function () {

    let boxwidth = $(".side-nav .nav-icon").outerWidth()
    if ($(".side-nav").css("left") == "0px") {

        $(".side-nav").animate({ left: -boxwidth }, 500)
        $(".openCLose").addClass(" fa-align-justify ")
        $(".openCLose").removeClass("fa-x")
        $(".links li").eq(0).animate({ top: 300 }, 600)
        $(".links li").eq(1).animate({ top: 300 }, 600)
        $(".links li").eq(2).animate({ top: 300 }, 700)
        $(".links li").eq(3).animate({ top: 300 }, 800)
        $(".links li").eq(4).animate({ top: 300 }, 900)
        $(".links li").eq(5).animate({ top: 300 }, 1000)
        $(".links li").eq(6).animate({ top: 300 }, 1000)
    }
    else {
        $(".side-nav").animate({ left: -boxwidth }, 500)

        $(".side-nav").animate({ left: 0 }, 500)
        $(".openCLose").removeClass(" fa-align-justify ")
        $(".openCLose").addClass("fa-x ")
        $(".links li").eq(0).animate({ top: 0 }, 600)
        $(".links li").eq(1).animate({ top: 0 }, 600)
        $(".links li").eq(2).animate({ top: 0 }, 700)
        $(".links li").eq(3).animate({ top: 0 }, 800)
        $(".links li").eq(4).animate({ top: 0 }, 900)
        $(".links li").eq(5).animate({ top: 0 }, 1000)
        $(".links li").eq(6).animate({ top: 0 }, 1000)
    }

})
 var rowData = document.getElementById('rowData').innerHTML ;
var allRecipes = [];
async function grtNewPlaying() {
    rowData.innerHTML='';
    try{
        loading.classList.remove('d-none')

    var response = await fetch(`https://api.themoviedb.org/3/movie/now_playing?api_key=38cac00ec17141c892cd146aa3f582a3`);
    var data = await response.json();
    allRecipes = data.results;
    console.log(allRecipes)
    displayData(allRecipes)
    loading.classList.add('d-none')

    }catch (error){
        alert("errrrrrrror")
    }
 

}
grtNewPlaying()

async function grtPopular() {
    rowData.innerHTML='';
    try{

        loading.classList.remove('d-none')

    var response = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=38cac00ec17141c892cd146aa3f582a3`);
    var data = await response.json();
    allRecipes = data.results;
     displayData(allRecipes)
     loading.classList.add('d-none')
    }catch (error){
        alert("errrrrrrror")
    }



}
async function grtTopRated() {
    rowData.innerHTML='';
    try{
        loading.classList.remove('d-none')

    var response = await fetch(`https://api.themoviedb.org/3/movie/top_rated?api_key=eba8b9a7199efdcb0ca1f96879b83c44`);
    var data = await response.json();
    allRecipes = data.results;
     displayData(allRecipes)
     loading.classList.add('d-none')
    }catch (error){
        alert("errrrrrrror")
    }


}
async function grtTrending() {
    rowData.innerHTML='';
    try{
        loading.classList.remove('d-none')

    var response = await fetch(`https://api.themoviedb.org/3/trending/all/day?api_key=eba8b9a7199efdcb0ca1f96879b83c44`);
    var data = await response.json();
    allRecipes = data.results;
     displayData(allRecipes)
     loading.classList.add('d-none')

    }catch (error){
        alert("errrrrrrror")
    }

}
async function grtUpcoming() {
    rowData.innerHTML='';
    try{
        loading.classList.remove('d-none')

    var response = await fetch(`https://api.themoviedb.org/3/movie/upcoming?api_key=eba8b9a7199efdcb0ca1f96879b83c44`);
    var data = await response.json();
    allRecipes = data.results;
     displayData(allRecipes)
     loading.classList.add('d-none')
    }catch (error){
        alert("errrrrrrror")
    }


}

 function displayData(allRecipes) {
     var cartona = ``;
    for (var i = 0; i < allRecipes.length; i++) {
         var voteAverage = Math.round(allRecipes[i].vote_average / 2);  
        var stars = '';
        for (var j = 0; j < 5; j++) {
            if (j < voteAverage) {
                stars += '<i class="fa-solid fa-star" style="color: #FFD43B;"></i>';
            } else {
                stars += '<i class="fa-regular fa-star" style="color: #FFD43B;"></i>';
            }
        }

        cartona += `
            <div class="card col-md-4 my-3 px-3">
                <img src="https://image.tmdb.org/t/p/w500${allRecipes[i].poster_path}" class="card_img" alt="">
                <div class="caption  ">
                    <h1 class="h3 text-center">${allRecipes[i].title }</h1>                 
                     <p class=''>${allRecipes[i].overview.split(/\s+/).slice(0, 40).join(' ')}.... </p>
                    <p>Release date: ${allRecipes[i].release_date}</p>
                    <div class=" p-3 rating">
                        ${stars}
                    </div>

                    <div>
                        <p class="vote p-3 vote-average">${allRecipes[i].vote_average.toFixed(1)}</p>
                    </div>
                </div>
            </div>
        `;
    }
    document.getElementById('rowData').innerHTML = cartona;
}

document.addEventListener('DOMContentLoaded', () => {
    let name = document.getElementById('name');
    let phone = document.getElementById('phone');
    let email = document.getElementById('email');
    let age = document.getElementById('age');
    let password = document.getElementById('password');
    let repassword = document.getElementById('repassword');
    let msgName = document.getElementById('msgName');
    let msgPhone = document.getElementById('msgPhone');
    let msgEmail = document.getElementById('msgEmail');
    let msgAge = document.getElementById('msgAge');
    let msgPassword = document.getElementById('msgPassword');
    let msgRepassword = document.getElementById('msgRepassword');

    function checkValidation(regex, msg, element) {
        if (regex.test(element.value)) {
            msg.classList.add('d-none');
            return true;
        } else {
            msg.classList.remove('d-none');
            return false;
        }
    }

    function checkIfAllAreTrue() {
        return (
            checkValidation(/^[A-Za-z]+(?: [A-Za-z]+)*$/, msgName, name) &&
            checkValidation(/^(?:1[01][0-9]|120|[1-9]?[0-9])$/, msgAge, age) &&
            checkValidation(/^\+?(\d{1,3})?[-.\s]?(\(?\d{1,4}\)?)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/, msgPhone, phone) &&
            checkValidation(/^(?=.[a-z])(?=.[A-Z])(?=.\d)(?=.[@$!%?&])[A-Za-z\d@$!%?&]{8,}$/, msgPassword, password) &&
            checkValidation(/^(?=.[a-z])(?=.[A-Z])(?=.\d)(?=.[@$!%?&])[A-Za-z\d@$!%?&]{8,}$/, msgRepassword, repassword) &&
            checkValidation(/^[\w.-]+@[a-zA-Z\d.-]+\.[a-zA-Z]{2,6}$/, msgEmail, email)
        );
    }

    let form = document.getElementById('form');
    form.addEventListener('input', function (e) {
        e.preventDefault();
        checkIfAllAreTrue();
    });

    form.addEventListener('submit', function (e) {
        if (!checkIfAllAreTrue()) {
            e.preventDefault();
            alert('Please correct the errors in the form');
        }
    });
});


 
  document.addEventListener('scroll', function() {
    var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    var button = document.querySelector('.icon-111');

    if (scrollTop > 200) {  
      button.classList.add('show');
    } else {
      button.classList.remove('show');
    }
  });

  document.querySelector('.icon-111 a').addEventListener('click', function(event) {
    event.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
 
