const APIURL = 'https://api.github.com/users/';
const repo = '/repos?sort=created';

function data(input){
    
        fetch(APIURL+input).then((req) =>{
            return req.json();
        }).then((data)=>{
            console.log(data)
            html(data)
        })
        
}
const display = document.querySelector("input");

function mykey(my){
    switch(my){
        case "Enter":
            input = display.value;
            data(input)
            display.value=""
            
    }
    
}

    document.addEventListener("keydown",function(event){
        var key = event.key;
       mykey(key)
       
    })
    








function html(data){
    const file = document.querySelector(".contant");
    const html=
     `<div class="profile">
     <div class="img">
         <img src="${data.avatar_url}" alt="">
     </div>
     <div class="owner-name">
         <h1 id="owner">${data.name}</h1>
     </div>
     <div class="bio">
             <h3 id="bio-data">${data.bio}</h3>
     </div>
     <div class="features">
         
         <div class="followers">
             <h3>followers <samp>${data.followers}</samp></h3>
         </div>
         <div class="following">
             <h3>following <samp>${data.following}</samp></h3>
         </div>
     </div>
     <div class="link-url">
         <a id="profile" href="${data.html_url}" target="_blank"> view profile</a>
     </div>

 </div>

    `
    file.insertAdjacentHTML("afterbegin",html)
}

// function html11(data1){
//     let repo1 = document.querySelector(".repo");
//     let html1 = `
//     <div class="repo">
//     <div class="heading">
//         <h2>  <samp id="repo">20</samp> repository </h2>
//     </div>
//     <div class="first-five">
//     <p><a class="repositery" href="${data1[0].html_url}" target="_blank">${data1[0].name}</a> <br></p> 
//     <p><a class="repositery" href="${data1[1].html_url}" target="_blank">${data1[1].name}</a> <br></p> 
//     <p><a class="repositery" href="${data1[2].html_url}" target="_blank">${data1[2].name}</a> <br></p> 
//     <p><a class="repositery" href="${data1[3].html_url}" target="_blank">${data1[3].name}</a> <br></p>       
//     <p><a class="repositery" href="${data1[4].html_url}" target="_blank">${data1[4].name}</a> <br></p> 
//     </div>
//     <div class="total-repo">
//         <a id="view-more" href="" target="_blank">view more</a>
//     </div>
// </div>`
// repo1.insertAdjacentHTML("afterbegin", html1)
    
// }