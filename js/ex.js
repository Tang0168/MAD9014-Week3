// JavaScript Document
var logRet; 
var shortRect;

document.addEventListener("DOMContentLoaded", function() {
    console.log("This page has been loaded");
// Long rectangle id was changed to mouse and the short one into clic
  logRet = document.querySelector('#mouse');
  shortRect = document.querySelector('#clic');
    
  logRet.addEventListener("mouseover", function() {
    shortRect.innerHTML = "Cursor is inside the box";
  });
    
  logRet.addEventListener("mouseout", function() {
	shortRect.innerHTML = "Cursor is outside the box";
    shortRect.onclick = aL;
    function aL() {
        alert("Hello!");
    }
  });
});