var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-contents");
function opentab(tabname) {
    for (tablink of tablinks) {

        tablink.classList.remove("active-links");
    }
    for (tabcontent of tabcontents) {

        tabcontent.classList.remove("active-tab");
    }
    event.currentTarget.classList.add("active-links");
    document.getElementById(tabname).classList.add("active-tab");

}

var navbar= document.getElementById("nav-bar");
var menubar=document.getElementById("menu-icon");

function btnclick(){ 
  if(navbar.style.display==="block"){
    navbar.style.display="none";

  }else{
    navbar.style.display="block";
  }
}

