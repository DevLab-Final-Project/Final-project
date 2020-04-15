fetch("http://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=d25da6256e544f53ab8a1cb897e733a2")
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    /*console.log(data);*/
    let articles = data.articles;
        
    //first best news title and img
    let firstBestTitle = document.getElementById("firstBestTitle");
    firstBestTitle.innerHTML = articles[0].title; 

    let firstBestImg = document.getElementById("firstBestImg");
    firstBestImg.src = articles[0].urlToImage;

    //second best news title and img
    let secondBestTitle = document.getElementById("secondBestTitle");
    secondBestTitle.innerHTML = articles[1].title; 

    let secondBestImg = document.getElementById("secondBestImg");
    secondBestImg.src = articles[1].urlToImage;
        
    //third best news title and img
    let thirdBestTitle = document.getElementById("thirdBestTitle");
    thirdBestTitle.innerHTML = articles[2].title; 

    let thirdBestImg = document.getElementById("thirdBestImg");
    thirdBestImg.src = articles[2].urlToImage;


    //modal actions
    // Get the modal
    let modal = document.getElementById("myModal");

    // Get the <span> element that closes the modal
    let span = document.getElementsByClassName("closeX")[0];

    let imgBestNews = document.querySelectorAll(".imgBestNews");
    for (let i=0; i<imgBestNews.length; i++){
      imgBestNews[i].addEventListener('click',function(){
        let modalHeader = document.getElementById("modalHeader");
        modalHeader.innerHTML =  articles[i].title; 

        let modalImg = document.getElementById("modalImg");
        modalImg.src =  articles[i].urlToImage; 

        let modalNewsAuthor = document.getElementById("modalNewsAuthor");
        modalNewsAuthor.innerHTML = "author: " + articles[i].author;

        let modalNewsDescription = document.getElementById("modalNewsDescription");
        modalNewsDescription.innerHTML = "description: " + articles[i].description;

        let modalNewsUrl = document.getElementById("modalNewsUrl");
        modalNewsUrl.innerHTML = "url: " ;

        let modalLink = document.createElement("a");
        modalLink.innerHTML = articles[i].url;
        modalLink.href = articles[i].url;

        modalNewsUrl.appendChild(modalLink);

        let modalNewsDate = document.getElementById("modalNewsDate");
        modalNewsDate.innerHTML = "publishedAt: " + articles[i].publishedAt;

        modal.style.display = "block";
      
      });
    }

    
    let bestTitle = document.querySelectorAll(".bestTitle");
    for (let i=0; i<bestTitle.length; i++){
        bestTitle[i].addEventListener('click',function(){
        let modalHeader = document.getElementById("modalHeader");
        modalHeader.innerHTML =  articles[i].title; 

        let modalImg = document.getElementById("modalImg");
        modalImg.src =  articles[i].urlToImage; 

        let modalNewsAuthor = document.getElementById("modalNewsAuthor");
        modalNewsAuthor.innerHTML = "author: " + articles[i].author;

        let modalNewsDescription = document.getElementById("modalNewsDescription");
        modalNewsDescription.innerHTML = "description: " + articles[i].description;

        let modalNewsUrl = document.getElementById("modalNewsUrl");
        modalNewsUrl.innerHTML = "url:" ;

        let modalLink = document.createElement("a");
        modalLink.innerHTML = articles[i].url;
        modalLink.href = articles[i].url;

        modalNewsUrl.appendChild(modalLink);

        let modalNewsDate = document.getElementById("modalNewsDate");
        modalNewsDate.innerHTML = "publishedAt: " + articles[i].publishedAt;

        
        let bodyWidth = document.body.innerWidth;
        document.body.style.overflow = "hidden";
        document.body.style.width = bodyWidth;

        modal.style.display = "block";
      
      });
    }


    // When the user clicks on <span> (x), close the modal
    span.onclick = function() {
      modal.style.display = "none";
      document.body.style.overflow = "auto";
      document.body.style.width= "auto";        
    }
     
  });

