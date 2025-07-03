var productList = document.querySelectorAll(".product-card")

// Casual CheckBox

var casualCheckbox = document.getElementById("casual-filter")

casualCheckbox.addEventListener("change", function () {

    displayproduct();
})

// Formal CheckBox

var formalCheckbox = document.getElementById("formal-filter")

formalCheckbox.addEventListener("change", function () {

    displayproduct();
})

// Beach Checkbox

var beachCheckbox = document.getElementById("beach-filter")

beachCheckbox.addEventListener("change", function () {

    displayproduct();
})

// Grenn Checkbox
var greenCheckbox = document.getElementById("green-filter")

greenCheckbox.addEventListener("change", function () {
    displayproduct();
})

// white checkbox

var whiteCheckbox = document.getElementById("white-filter")

whiteCheckbox.addEventListener("change", function () {
    displayproduct();
})

// Multi checkbox

var multiCheckbox=document.getElementById("multi-filter")

multiCheckbox.addEventListener("change",function()
{
    displayproduct();
})

// Cotton checkbox

var cottonCheckbox=document.getElementById("cotton-filter")

cottonCheckbox.addEventListener("change",function()
{
    displayproduct();
})

// Poly checkbox

var polyCheckbox=document.getElementById("poly-filter")

polyCheckbox.addEventListener("change",function()
{
    displayproduct();
})


//displayproduct function

function displayproduct() {

    if (!casualCheckbox.checked && !formalCheckbox.checked && !beachCheckbox.checked && !greenCheckbox.checked && !whiteCheckbox.checked && !multiCheckbox.checked  && !cottonCheckbox.checked   && !polyCheckbox.checked) {
        productList.forEach(function (data) {
            data.style.display = "block";
        });
        return;
    }

    productList.forEach(function (data) {
        var iscasual = casualCheckbox.checked && data.classList.contains("casual")
        var isformal = formalCheckbox.checked && data.classList.contains("formal")
        var isbeach = beachCheckbox.checked && data.classList.contains("beach")
        var isgreen = greenCheckbox.checked && data.classList.contains("green")
        var iswhite = whiteCheckbox.checked && data.classList.contains("white")
        var ismulti = multiCheckbox.checked && data.classList.contains("multi")
        var iscotton = cottonCheckbox.checked && data.classList.contains("cotton")
        var ispoly = polyCheckbox.checked && data.classList.contains("poly")

        if (iscasual || isformal || isbeach || isgreen || iswhite || ismulti || ispoly || iscotton) {
            data.style.display = "block"
            data.style.justifyContent = "start";
        }
        else {
            data.style.display = "none"
        }
    })
}

//search 

var search=document.getElementById("search-input")
var productCard=document.querySelectorAll(".product-card")

search.addEventListener("keyup",function()
{
    var enteredValue=event.target.value.toUpperCase()

    for(count=0;count<productCard.length;count++)
    {
        var productName=productCard[count].querySelector("h3").textContent.toUpperCase()

        if(productName.indexOf(enteredValue)<0)
        {
            productCard[count].style.display="none"
        }
        else
        {
            productCard[count].style.display="block"
        }
    }
})
