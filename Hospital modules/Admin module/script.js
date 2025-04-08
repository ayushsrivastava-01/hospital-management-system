let menuBtn=document.querySelector("#menu");
let menu2Btn=document.querySelector("#menu2");
let menu3Btn=document.getElementById("menu3");
let menu4Btn=document.getElementById("menu4");
let sideBar=document.querySelector("#sidebar");
let hiddenSideBar=document.querySelector("#hidden-sidebar");


menuBtn.addEventListener("click", ()=>{
    sideBar.style.display="none";
    menuBtn.style.display="none";
    menu3Btn.style.display="none";
    menu4Btn.style.display="none";
    menu2Btn.style.display="block";
});

menu2Btn.addEventListener("click", ()=>{
    sideBar.style.display="flex";
    menuBtn.style.display="block";
    menu3Btn.style.display="none";
    menu4Btn.style.display="none";
    menu2Btn.style.display="none";
});
menu3Btn.addEventListener("click", ()=>{
    hiddenSideBar.style.display="flex";
    menu3Btn.style.display="none";
    menu4Btn.style.display="block";
    menu2Btn.style.display="none";
    menuBtn.style.display="none";
});
menu4Btn.addEventListener("click", ()=>{
    hiddenSideBar.style.display="none";
    menu3Btn.style.display="block";
    menu4Btn.style.display="none";
    menuBtn.style.display="none";
    menu2Btn.style.display="none";
});


// Add the resize event listener
window.addEventListener('resize', ()=>{
    if (window.innerWidth < 501) {
        menu3Btn.style.backgroundColor="blue";
        hiddenSideBar.style.display="none";
        menu2Btn.style.display=="none";
        menu4Btn.style.display=="none";
        menuBtn.style.display=="none";
        }
});





// Changin iframes
let iFrameChanger = document.getElementById("i-frame");
const frameLinks = document.querySelectorAll('a');
frameLinks.addEventListener('click', (event) => {
    event.preventDefault();
    if (document.getElementById('dashboard-admin')) {
        iFrameChanger.src = "Dashboard/dashboard.html";
    }
    if (document.getElementById('doctors')) {
        iFrameChanger.src = "Doctors/doctors.html";
    }
    if (document.getElementById('setting')) {
        iFrameChanger.src = "Doctors/doctors.html";
    }
    if (document.getElementById('department')) {
        iFrameChanger.src = "Department/department.html";
    }
    if (document.getElementById('payment')) {
        iFrameChanger.src = "Payments/payment.html";
    }
});

function logOut(){
    alert("Pahle design to kro \naur logic implementation kaha gya bey...")
}