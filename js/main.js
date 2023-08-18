let SubhanAllahCount = 0;
let allahuAkbarCount = 0;



/* first */
document.querySelector(".btn-increment").addEventListener("click",function(){
    const SubhanAllahDisplay = document.querySelector(".SubhanAllahdisplay");
    SubhanAllahCount++;

    const SubhanAllahDisplayNum = parseInt(SubhanAllahDisplay.textContent);
    SubhanAllahDisplay.textContent = SubhanAllahCount; 
});

document.querySelector(".btn-decrement").addEventListener("click",function(){
    const SubhanAllahDisplay = document.querySelector(".SubhanAllahdisplay");
    SubhanAllahCount--;

    const SubhanAllahDisplayNum = parseInt(SubhanAllahDisplay.textContent);
    SubhanAllahDisplay.textContent = SubhanAllahCount; 
});


/* second */
document.querySelector(".btn-increment-one").addEventListener("click",function(){
    const allahuAkbarDisplay = document.querySelector(".allahuakbardisplay");
    allahuAkbarCount++;

    const allahuAkbarDisplayNum = parseInt(allahuAkbarDisplay.textContent);
    allahuAkbarDisplay.textContent = allahuAkbarCount;
})

document.querySelector(".btn-decrement-two").addEventListener("click",function(){
    const allahuAkbarDisplay = document.querySelector(".allahuakbardisplay");
    allahuAkbarCount--;

    const allahuAkbarDisplayNum = parseInt(allahuAkbarDisplay.textContent);
    allahuAkbarDisplay.textContent = allahuAkbarCount;
})
