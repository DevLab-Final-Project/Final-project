var slider = document.getElementById('slide')
var next = document.getElementById('next')
var prev = document.getElementById('prev');

var req = new Request('https://newsapi.org/v2/top-headlines?country=us&apiKey=312463b31a7c4c65992ccb16c86425c2')
fetch(req)
.then(resp=>{
    if (resp.ok){
        return resp.json();

    }
    else 
    throw new Error('err')
    
})
.then(date=>{
    
    var k=0;
    for(let j=0; j<=2;j++){
        
        if(date.articles[k]){
        var div=document.createElement('div');
        div.className='visibleslide'
        slider.appendChild(div);
        for(let i=0;i<3;i++){
            var inp = document.createElement('input');
            inp.setAttribute("type", "button");
            inp.setAttribute("value", "Read More");
            inp.className='readmorebtn';
            var div_2=document.createElement('div');
            div_2.className='item';
            div.appendChild(div_2);
            div_2.appendChild(inp);
            div_2.style.backgroundImage='url('+date.articles[k].urlToImage+')';
            var p = document.createElement('p');
            p.className='title'
            p.innerHTML=date.articles[k++].title;
            div_2.appendChild(p)
            }
        
    }}
    
        vis=document.querySelectorAll('.visibleslide') 
   
})

var vis;
next.addEventListener('click', gonext);
prev.addEventListener('click', goprev)
    var counter = 0;
next.addEventListener('click', gonext);
function gonext(){
    
    var vis=document.querySelectorAll('.visibleslide') 
    if(counter>=vis.length-1){
        counter=-1;
    }
    counter ++
    for(i=0;i<vis.length;i++){
        vis[i].style.transition= 'transform 0.4s ease-in-out'
    vis[i].style.transform='translateX('+(-counter* slider.offsetWidth) + "px)";
    }
    if(counter==vis.length-1){
        counter=-1;
    }
}
function goprev(){
    
    var vis=document.querySelectorAll('.visibleslide') 
    if(counter<1){
        counter=vis.length;
    }
    counter --
    console.log(counter)
    for(i=0;i<vis.length;i++){
        vis[i].style.transition= 'transform 0.4s ease-in-out'
    vis[i].style.transform='translateX('+(-counter* slider.offsetWidth) + "px)";
    }
    
}
setInterval(gonext,3000)

