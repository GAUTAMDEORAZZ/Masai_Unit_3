

import {search,append} from "/append.js"

let searchNews=async () =>{
   let value= document.getElementById("search_box").value 
   console.log(value)
   let url=`https://masai-mock-api.herokuapp.com/news?q=${value}`;
     let data= await search(url)
     let container=document.getElementById("news_result")
    append(data.articles,container)  
    console.log(data)
 


}

document.getElementById("search_box").addEventListener("keydown", searchNews)



// function append(data){
//     console.log(data)
// }

console.log("i am news")
let userData= JSON.parse(localStorage.getItem("user"))
console.log(userData)

let user=document.getElementById("user")

let image= document.createElement("img")
image.src=userData.image;

let user_name=document.createElement("h3")
 user_name.innerText=userData.name;

 let country=document.createElement("h3")
 country.innerText=userData.country

 let email=document.createElement("h3")
 email.innerText=userData.email

 let div=document.createElement("div")
 div.append("image,user_name,country,email")

 user.append(div)

