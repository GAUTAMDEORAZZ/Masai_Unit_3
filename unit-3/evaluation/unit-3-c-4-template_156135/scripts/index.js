/*
Save the user to local storage with key "user", in following format:- 
{
name: "",
image: "",
email: "",
country: "" (store country code "in", "ch", "nz", "us", "uk")
}
*/

let getData= (event) =>{
    event.preventDefault();
 let user_form=  document.getElementById("user_form")
    let userData={
      name: document.getElementById("user_name").value,
      image: document.getElementById("user_pic").value,
      email: document.getElementById("user_email").value,
      country:document.getElementById("user_country").value
  
    }
    localStorage.setItem("user",JSON.stringify(userData))
    console.log(userData)
  }






let form= document.querySelector("#form").addEventListener("submit",getData)

