var slider = document.getElementById('slide')
var next = document.getElementById('next')
var prev = document.getElementById('prev');


//date
var dateObj = new Date();
var month = ('0' + (dateObj.getMonth() + 1)).slice(-2);
var day_2 = ('0' + dateObj.getDate()).slice(-2);
day_1=parseInt(day_2)-1
var year = dateObj.getFullYear();
var shortDate = year + '/' + month + '/' + day_1;

fetch('https://newsapi.org/v2/everything?q=all&from='+year+'-'+month+'-'+day_1+'&to='+year+'-'+month+'-'+day_2+'&sortBy=popularity&apiKey=312463b31a7c4c65992ccb16c86425c2')
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
            inp.setAttribute("o",k) //saved number of article

            //model window
            inp.addEventListener('click',(e)=>{
                var br=e.target.getAttribute('o') 
                var body =document.getElementsByTagName('body')[0]
                var model = document.createElement('div');
                model.className='modal';
                slider.appendChild(model);
                var modelcont = document.createElement('div');
                modelcont.className='modal-content';
                model.appendChild(modelcont);

                 var span = document.createElement('span');
                 span.className='close';
                 span.textContent='&times'
                 modelcont.appendChild(span)

                 var title = document.createElement('p');
                 title.className='model-title'
                 title.textContent=date.articles[br].title;

                 var image=document.createElement('div');
                 image.className='model-img'
                 var img = document.createElement('img');
                 img.setAttribute('src',date.articles[br].urlToImage);
                 image.appendChild(img)

                var author = document.createElement('p');
                author.textContent ='Author:'+' '+ date.articles[br].author;
                author.className='model-author'

                 var cont = document.createElement('p');
                 cont.textContent=date.articles[br].content.substring(0,date.articles[br].content.indexOf('['));
                 cont.className='model-cont'

                 modelcont.appendChild(title)
                 modelcont.appendChild(image)
                 modelcont.appendChild(author)
                 modelcont.appendChild(cont)

                 model.style.display = "block";
                 body.style.overflowY= 'hidden'; //remove scrolbar when window is visible
                span.onclick = function() {

                    model.style.display = "none";
                    body.style.overflowY= 'visible';
                  }
            })


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
        vis[i].style.transition= 'transform 0.8s ease-in-out'
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
    for(i=0;i<vis.length;i++){
        vis[i].style.transition= 'transform 0.4s ease-in-out'
    vis[i].style.transform='translateX('+(-counter* slider.offsetWidth) + "px)";
    }
    
}
setInterval(gonext,3000)

fetch('https://newsapi.org/v2/top-headlines?country=us&apiKey=312463b31a7c4c65992ccb16c86425c2')
.then(resp=>{
    if (resp.ok){
        return resp.json();

    }
    else 
    throw new Error('err')
    
})
.then(date=>{
   
    var topr=document.getElementById('toprated')
    var sec = document.getElementById('sect');
    var k = 0;
    for(let i=0;i<2;i++){
        var div = document.createElement('div');
        div.className='row';
        topr.appendChild(div);
        for(j=0;j<3;j++){
            if(date.articles[k].urlToImage){//sometimes img doesn't exist
           var div_2=document.createElement('div');
           div_2.className='item2';
           div.appendChild(div_2);
        
           var img = document.createElement('img');
           img.setAttribute('src',date.articles[k].urlToImage);

           //modalwindow!
           img.setAttribute('o',k)

           img.addEventListener('click',(e)=>{
            var br=e.target.getAttribute('o') 
            var body =document.getElementsByTagName('body')[0]
            var model = document.createElement('div');
            model.className='modal';
            slider.appendChild(model);
            var modelcont = document.createElement('div');
            modelcont.className='modal-content';
            model.appendChild(modelcont);

             var span = document.createElement('span');
             span.className='close';
             span.textContent='&times'
             modelcont.appendChild(span)

             var title = document.createElement('p');
             title.className='model-title'
             title.textContent=date.articles[br].title;

             var image=document.createElement('div');
             image.className='model-img'
             var img = document.createElement('img');
             img.setAttribute('src',date.articles[br].urlToImage);
             image.appendChild(img)

            var author = document.createElement('p');
            author.textContent ='Author:'+' '+ date.articles[br].author;
            author.className='model-author'

             var cont = document.createElement('p');
             cont.textContent=date.articles[br].content.substring(0,date.articles[br].content.indexOf('['));
             cont.className='model-cont'

             modelcont.appendChild(title)
             modelcont.appendChild(image)
             modelcont.appendChild(author)
             modelcont.appendChild(cont)

             model.style.display = "block";
             body.style.overflowY= 'hidden'; //remove scrolbar when window is visible
            span.onclick = function() {

                model.style.display = "none";
                body.style.overflowY= 'visible';
              }
        })



           div_2.appendChild(img);
           



           var info = document.createElement('div');
           info.className='rightpart'
           div_2.appendChild(info)
           var title = document.createElement('p');
           title.innerHTML='Title:'+date.articles[k].title.substring(0,25)+'...';
           var description = document.createElement('p');
           description.innerHTML='Description:'+date.articles[k].description.substring(0,30)+'...';
           var pub = document.createElement('p');
           pub.innerHTML='Date:'+date.articles[k++].publishedAt;
           info.appendChild(title)
           info.appendChild(description)
           info.appendChild(pub)
        }
        else{
            k++;
            j--;
        }
           
        }

    }
    var loadmorebtn=document.getElementById('loadmorebtn');
    loadmorebtn.addEventListener('click',load);
    function load(){
        if(k>=date.articles.length-2){ 
    
            loadmorebtn.setAttribute('disabled',true)
        }
            var div = document.createElement('div');
            div.className='row'; 
            topr.appendChild(div);
            for(j=0;j<3;j++){
               var div_2=document.createElement('div');
               div_2.className='item2';
               div.appendChild(div_2);
               var img = document.createElement('img');
               img.setAttribute('src',date.articles[k].urlToImage);


               //modalwindo
               img.setAttribute('o',k)

               img.addEventListener('click',(e)=>{
                var br=e.target.getAttribute('o') 
                var body =document.getElementsByTagName('body')[0]
                var model = document.createElement('div');
                model.className='modal';
                slider.appendChild(model);
                var modelcont = document.createElement('div');
                modelcont.className='modal-content';
                model.appendChild(modelcont);
    
                 var span = document.createElement('span');
                 span.className='close';
                 span.textContent='&times'
                 modelcont.appendChild(span)
    
                 var title = document.createElement('p');
                 title.className='model-title'
                 title.textContent=date.articles[br].title;
    
                 var image=document.createElement('div');
                 image.className='model-img'
                 var img = document.createElement('img');
                 img.setAttribute('src',date.articles[br].urlToImage);
                 image.appendChild(img)
    
                var author = document.createElement('p');
                author.textContent ='Author:'+' '+ date.articles[br].author;
                author.className='model-author'
    
                 var cont = document.createElement('p');
                 cont.textContent=date.articles[br].content.substring(0,date.articles[br].content.indexOf('['));
                 cont.className='model-cont'
    
                 modelcont.appendChild(title)
                 modelcont.appendChild(image)
                 modelcont.appendChild(author)
                 modelcont.appendChild(cont)
    
                 model.style.display = "block";
                 body.style.overflowY= 'hidden'; //remove scrolbar when window is visible
                span.onclick = function() {
    
                    model.style.display = "none";
                    body.style.overflowY= 'visible';
                  }
            })
    
    

               div_2.appendChild(img);
               var info = document.createElement('div');
               info.className='rightpart'
               div_2.appendChild(info)
               var title = document.createElement('p');
               title.innerHTML='Title: '+date.articles[k].title.substring(0,25)+'...';
               var description = document.createElement('p');
               description.innerHTML='Description: '+date.articles[k].description.substring(0,30)+'...';
               var pub = document.createElement('p');
               pub.innerHTML='Date: '+date.articles[k++].publishedAt;
               info.appendChild(title)
               info.appendChild(description)
               info.appendChild(pub)
               
            }
    
        
    }
})