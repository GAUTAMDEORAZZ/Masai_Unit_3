
let search=async (url) =>{
    try{
        let response= await fetch(url)
        let data= await response.json()
        return data
    }
    catch(err){
        console.log(err)
    }
   
}

let append=(data,con) =>{

    console.log(data)
    data.forEach(function(elem){
        let image=document.createElement("img")
        let h3=document.createElement("h3")
        let h2=document.createElement("h2")
        let div=document.createElement("div")
        div.setAttribute("class","news")

        image.src=elem.url
        h3.innerText=elem.title
        h2.innerText=elem.author

        console.log(image,h2,h3);
        div.append(image,h2,h3)
        con.append(div)
     })
};

export {search,append};