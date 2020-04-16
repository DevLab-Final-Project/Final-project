
var sport=document.getElementById('sports')
var busin=document.getElementById('business')
var tech=document.getElementById('technology')


sport.addEventListener('click',()=>{
    localStorage.setItem("Category",'sports' )})
       
       
    busin.addEventListener('click',()=>{
    localStorage.setItem("Category",'business' )})
   
   
    tech.addEventListener('click',()=>{
    localStorage.setItem("Category",'technology' )})