/*========== ANIMATION SKEW ==========*/

let SkewedOne = document.querySelector('.SkewedOne');
let SkewedTwo = document.querySelector('.SkewedTwo');
window.addEventListener('scroll', function() {
    let value1 = -15 + window.scrollY / 45;
    let value2 = 15 + window.scrollY / -45;
    SkewedOne.style.transform = "skewY(" + value1 + "deg)";
    SkewedTwo.style.transform = "skewY(" + value2 + "deg)";
})