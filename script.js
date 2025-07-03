// Closing Bar

var close_offerbar = document.getElementById("close_offerbar")
var offerbar = document.querySelector(".offerbar")
close_offerbar.addEventListener("click", function () {
    offerbar.style.display = "none"
})

// side menu bar 

var sidebar = document.querySelector(".sidebar")
var side_menu = document.getElementById("side_menu")
var close_menu = document.querySelector(".close_menu")
side_menu.addEventListener("click", function () {
    sidebar.style.marginLeft = "0%"
})

close_menu.addEventListener("click", function () {
sidebar.style.marginLeft = "-50%"
})


// Add to fav 

var black=document.querySelectorAll('.black-heart')
black.forEach(function(data)
{
    console.log(data)
    data.addEventListener("click",()=>
        {
            var srcFile = data.src.split('/').pop();

        if (srcFile === 'heart.png') {
            data.src = 'pics/red-heart.png';
        } else {
            data.src = 'pics/heart.png';
        }
        })
})
