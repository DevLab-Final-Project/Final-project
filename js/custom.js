fetch("https://newsapi.org/v2/sources?apiKey=d25da6256e544f53ab8a1cb897e733a2&country=us")
    .then((response) => {
        return response.json();
    })
    .then((data) => {
        /*console.log(data);*/
        let sources = data.sources;

        let oneNewsSource = document.getElementsByClassName("gridChild");

        let newsName = document.getElementsByClassName("newsName");
        let newsWebPage = document.getElementsByClassName("newsPage");
        let newsDescription = document.getElementsByClassName("newsDescription");

        for(let i = 0; i < newsName.length; i++){
            newsName[i].innerHTML = sources[i].name;
            newsDescription[i].innerHTML = sources[i].description;
            newsWebPage[i].href = sources[i].url;
            
        }
    })
    .catch((error) =>{
        console.error(error);
    })
   