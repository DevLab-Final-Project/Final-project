
var date = document.getElementById('date');
date.addEventListener('change',filter)
 var form = document.getElementById('form')
form.addEventListener('submit', filter);
search();
var next;
var prev;
function search(){
    if(next!=undefined){
        next.remove()
    }
    if(prev!=undefined){
        prev.remove()
    }
    var start = document.getElementById('date').value
    var dateObj = new Date();
    var month = ('0' + (dateObj.getMonth() + 1)).slice(-2);
    var day_2 = ('0' + dateObj.getDate()).slice(-2);
    day_1=parseInt(day_2)-start;
    var year = dateObj.getFullYear();
    var startDate = year + '-' + month + '-' + day_1;
    var finishDate = year + '-' + month + '-' + day_2;
    
    var list = document.getElementById('NUMS');

     prev = document.createElement('p');
    prev.textContent='prev'
    prev.className='prev';
    list.appendChild(prev);
    
     next = document.createElement('p');
    next.textContent='next'
    next.className='next';
    list.appendChild(next);


  
    uri = 'https://newsapi.org/v2/everything?q=sport&from='+startDate+'&to='+finishDate+'&sortBy=popularity&pageSize=100&apiKey=312463b31a7c4c65992ccb16c86425c2'
    
fetch(uri)
.then(req=>{
    if(req.ok){
        return req.json();
    }
    else throw new Error ('err');
    
})
.then(date=>{
    var main = document.getElementById('MAIN')
    var text = document.getElementById('text').value;
    var name = document.getElementById('NAME');
    var arr=[];
    var br=0;
    var k =0
    
    next.addEventListener('click', gonext);



    var nums  = document.getElementById('NUMBTN')
    show3()
    
    function show3(){
        main.innerHTML='';
    if(name.checked){
        
    nums.innerHTML=''
        for(let j = 1; j<=Math.floor(date.articles.length/4);j++)
        {
            var p = document.createElement('p');
            p.textContent=j;
            nums.appendChild(p)

        }
    for(let i = 0;i<=3;i++){
        if(date.articles[k].title.toLowerCase().startsWith(text.toLowerCase()) ){
            arr[br]=k;
            br++;
        var item = document.createElement('div');
        item.className='item';
        main.appendChild(item);

        var img = document.createElement('img');
        img.className='image'
        img.setAttribute('src', date.articles[k].urlToImage)
        item.appendChild(img);

        var div = document.createElement('div');
        div.className='rightside';

            var author = document.createElement('p');
            author.textContent='Author:'+ ' ' + date.articles[k].author;
           
    

        var title = document.createElement('p');
        title.textContent='Title:'+' '+date.articles[k].title.substring(0,35)+'...';;

        var source= document.createElement('p');
        source.textContent='Source:'+ ' ' + date.articles[k].source.name;

        var time = document.createElement('p');
        time.textContent='Date:'+ ' ' + date.articles[k++].publishedAt;

        item.appendChild(div);

        div.appendChild(author);
        div.appendChild(title);
        div.appendChild(source);
        div.appendChild(time);
        }
        else{
            k++;
            i--;
        }
    }
}
var source = document.getElementById('SOURCE');
if(source.checked){
    for(let i = 0;i<=3;i++){
        
        if(date.articles[k].urlToImage && date.articles[k].source.name.toLowerCase().startsWith(text.toLowerCase()) ){
        arr[br]=k
        br++; 
        var item = document.createElement('div');
        item.className='item';
        main.appendChild(item);

        var img = document.createElement('img');
        img.className='image'
        img.setAttribute('src', date.articles[k].urlToImage)
        item.appendChild(img);

        var div = document.createElement('div');
        div.className='rightside';

        var author = document.createElement('p');
        author.textContent='Author:'+ ' ' + date.articles[k].author;
       

        var title = document.createElement('p');
        title.textContent='Title:'+' '+date.articles[k].title.substring(0,35)+'...';;

        var source= document.createElement('p');
        source.textContent='Source:'+ ' ' + date.articles[k].source.name;

        var time = document.createElement('p');
        time.textContent='Date:'+ ' ' + date.articles[k++].publishedAt;

        item.appendChild(div);

        div.appendChild(author);
        div.appendChild(title);
        div.appendChild(source);
        div.appendChild(time);
        }
        else{
            k++;
            i--;
        }
    }
}
    var auth = document.getElementById('AUTHOR');
if(auth.checked){
    for(let i = 0;i<=3;i++){
        
        if(date.articles[k].urlToImage && date.articles[k].author.toLowerCase().startsWith(text.toLowerCase()) ){   
            arr[br]=k
            br++; 

        var item = document.createElement('div');
        item.className='item';
        main.appendChild(item);

        var img = document.createElement('img');
        img.className='image'
        img.setAttribute('src', date.articles[k].urlToImage)
        item.appendChild(img);

        var div = document.createElement('div');
        div.className='rightside';

            var author = document.createElement('p');
            author.textContent='Author:'+ ' ' + date.articles[k].author;
          
    

        var title = document.createElement('p');
        title.textContent='Title:'+' '+date.articles[k].title.substring(0,35)+'...';;

        var source= document.createElement('p');
        source.textContent='Source:'+ ' ' + date.articles[k].source.name;

        var time = document.createElement('p');
        time.textContent='Date:'+ ' ' + date.articles[k++].publishedAt;

        item.appendChild(div);

        div.appendChild(author);
        div.appendChild(title);
        div.appendChild(source);
        div.appendChild(time);
        }
        else{
            k++;
            i--;
        }
    }
}
if(arr.length<5){

    prev.style.opacity= '0.5'
     prev.style.cursor='not-allowed'
     prev.removeEventListener('click',goprev)
 }
 else{
     
    prev.addEventListener('click', goprev)
    prev.style.opacity= '1'
     prev.style.cursor='pointer'
 }

    }
    function gonext(){
        show3()
    }
function goprev(e){
    
    e.target.style.opacity='1'
    k=arr[arr.length-8]
    br=br-8;
    arr.pop()
    arr.pop()
    arr.pop()
    arr.pop()
    arr.pop()
    arr.pop()
    arr.pop()
    arr.pop()
    show3()
}


})
}
function filter(e){
    var main = document.getElementById('MAIN')
    main.innerHTML=''
    e.preventDefault()
    search();
}