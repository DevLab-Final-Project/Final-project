

var sport=document.getElementById('sports')
var busin=document.getElementById('business')
var tech=document.getElementById('technology')





 sport.addEventListener('click',()=>{
 localStorage.setItem("Category",'sports' )})
    
    
 busin.addEventListener('click',()=>{
 localStorage.setItem("Category",'business' )})


 tech.addEventListener('click',()=>{
 localStorage.setItem("Category",'technology' )})








var body=document.getElementsByTagName('body')[0]

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
    day_2=parseInt(day_2);
    

    
    
    var label = document.getElementById('label');
    label.innerHTML='News from: '+startDate;


    var list = document.getElementById('NUMS');

     prev = document.createElement('p');
    prev.textContent='prev'
    prev.className='prev';
    list.appendChild(prev);
    
     next = document.createElement('p');
    next.textContent='next'
    next.className='next';
    list.appendChild(next);


    var res=localStorage.getItem("Category")
  var header = document.getElementById('listHeading');
  header.innerHTML=res
  
    uri = 'https://newsapi.org/v2/everything?q='+res+'&from='+startDate+'&to='+startDate+'&pageSize=100&apiKey=312463b31a7c4c65992ccb16c86425c2'

    
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
    var sour = document.getElementById('SOURCE');
    var auth = document.getElementById('AUTHOR');


    var arr=[];
    var br=0;
    var k =0
    var checkk=0;
    
    var arrnum= [];
    var br2=0;
    var k1=0;

    if(name.checked){
        for(let i=0;i<100;i++){

          if(date.articles[k1].title.toLowerCase().startsWith(text.toLowerCase()) ){
              
            arrnum[br2++]=k1++;
        


        }
        else{
            k1++;

        }
     }
    }
     if(sour.checked){
        for(let i=0;i<100;i++){

          if(date.articles[k1].source.name.toLowerCase().startsWith(text.toLowerCase()) ){
              
            arrnum[br2++]=k1++;
        


        }
        else{
            k1++;

        }
     }
    }
     if(auth.checked){
         
        for(let i=0;i<100;i++){

            if(date.articles[k1].author==null){
                date.articles[k1].author='unknown'
            }
          if(date.articles[k1].author.toLowerCase().startsWith(text.toLowerCase()) ){
              
            arrnum[br2++]=k1++;
        


        }
        else{
            k1++;

        }
     }
    }
    var nums  = document.getElementById('NUMBTN')
    show3()
    
    function show3(){
    

        main.innerHTML='';




        if(name.checked){
    for(let i = 0;i<=3;i++){ 
    
        if(k>=100){
        checkk=1;
        break;
    }
    else{
        checkk=0;//for next btn
    }
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

        if(date.articles[k].author==null){
            date.articles[k].author='unknown'
        }
            var author = document.createElement('p');
            author.textContent='Author:'+ ' ' + date.articles[k].author.substring(0,25)+'...';
           
    

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




if(sour.checked){
    for(let i = 0;i<=3;i++){

         if(k>=100){
        checkk=1;
        break;
    }
    else{
        checkk=0;
    }
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

        if(date.articles[k].author==null){
            date.articles[k].author='unknown'
        }
        var author = document.createElement('p');
        author.textContent='Author:'+ ' ' + date.articles[k].author.substring(0,25)+'...';
       

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
if(auth.checked){

        for(let i = 0;i<=3;i++){ 
    
            if(k>=100){
            checkk=1;
            break;
        }
        else{
            checkk=0;//for next btn
        }

        if(date.articles[k].author==null){
            date.articles[k].author='unknown'
        }
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

        if(date.articles[k].author==null){
            date.articles[k].author='unknown'
        }
            var author = document.createElement('p');
            author.textContent='Author:'+ ' ' + date.articles[k].author.substring(0,25)+'...';
          
    

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
nums.innerHTML=''
if(arrnum.length%4!=0){
for(let j = 1; j<=Math.floor(arrnum.length/4+1);j++)
{
    var p = document.createElement('p');
    p.textContent=j;
    nums.appendChild(p)
 //   p.addEventListener('click',gotonum)

}
}
else{
    for(let j = 1; j<=Math.floor(arrnum.length/4);j++)
{
    var p = document.createElement('p');
    p.textContent=j;
    nums.appendChild(p)
    p.addEventListener('click',gotonum)

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
 if(checkk<1 && arr.length!=arrnum.length){
 next.addEventListener('click', gonext);
 next.style.opacity= '1'
 next.style.cursor='pointer'

}
   else{
    next.style.opacity= '0.5'
    next.style.cursor='not-allowed'
    next.removeEventListener('click',gonext)
       }

    }




    var a;

    function gonext(){
        show3()
    }



function goprev(e){
    var  countchild = main.childElementCount;
    if(countchild==4){
    next.style.opacity= '1'
    next.style.cursor='pointer'

    next.addEventListener('click',gonext )
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
    }
    else{
        k=arr[arr.length-4-countchild]
        br=br-4-countchild;
        arr.pop();
        arr.pop();
        arr.pop();
        arr.pop();
        if(countchild==3){
            arr.pop()
            arr.pop();
            arr.pop();
        }if(countchild==2){
            arr.pop()
            arr.pop();
        }
        if(countchild==1){
            arr.pop()
        }
        else{
        }
    }
    
    show3()
}



function gotonum(e){
    arr=[]
  a = parseInt(e.target.textContent)
  for(let i=0;i<(a)*4-3;i++){
     arr[i]=arrnum[i];
     br=i;

 }
 
 k=arr.length-1;
 show3()
 
}
function gotonum2(e){
    arr=[]
    console.log(arr)
    console.log(arrnum)
    a = parseInt(e.target.textContent)
    b=arrnum.length%4;
    for(let i=0;i<(a)*4-3;i++){
        arr[i]=arrnum[i];
        br=i;
   
    }
    
    console.log(arr)
    k=arr.length+4-b;
    console.log(k)
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