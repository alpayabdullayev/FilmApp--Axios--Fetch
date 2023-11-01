// AXIOS CARDS SCRIPTS
const row = document.getElementById("row")
async function filmCards() {
    const response = await axios("https://api.tvmaze.com/shows")
    response.data.sort((a, b) => (b.rating.average > a.rating.average ? 1 : a.rating.average > b.rating.average ? -1 : 0));
    let col3 = ""
    response.data.forEach(element => {
        col3+=
        `
        <div class="col-12 col-md-6 col-lg-4  col-xl-3">
            <div class="filmCard">
                <div class="card-img"><img src="${element.image.medium}" class="card-img-top" alt="..."> </div>
                <div class="category"> <h5 class="card-title">${element.name}</h5></div>
                <div class="heading"> <span><i class="fa-solid fa-star" style="color: #f5c518;"></i></span> ${element.rating.average}
                    <div class="author">LANGUAGE : <span class="name">${element.language}</span></div>
                </div>
            </div>
        </div>
        `
        row.innerHTML = col3
  
        // console.log(response.data);
    });
}
filmCards()




//FETCH CARDS SCRIPTS
// const row = document.getElementById("row")
// async function filmCards() {
//     const response = await fetch("https://api.tvmaze.com/shows")
//     .then(res => res.json())
//     .then(data =>{
//         data.sort((a, b) => (b.rating.average > a.rating.average ? 1 : a.rating.average > b.rating.average ? -1 : 0));

//         let col3 = ''
//         data.forEach((element)=>{
//             col3 += 
//             `
//             <div class="col-12 col-md-6 col-lg-3">
//             <div class="filmCard">
//                 <div class="card-img"><img src="${element.image.medium}" class="card-img-top" alt="..."> </div>
//                 <div class="category"> <h5 class="card-title">${element.name}</h5></div>
//                 <div class="heading"> ${element.rating.average}
//                     <div class="author">  <span class="name">${element.language}</span></div>
//                 </div>
//             </div>
//         </div>
//             `
//         })
//         row.innerHTML = col3
//         console.log(data);
//     })
// }
// filmCards()






//AXIOS TABLE SCRIPTS
// const table = document.querySelector("table");
// const tbody = document.querySelector("tbody");
// const search = document.querySelector(".search");

// async function Films() {
//     const response = await axios("https://api.tvmaze.com/shows");
//     let tr = ""
//     response.data.forEach(element => {
//         tr+=
//         `
//         <tr>

//             <td>${element.id}</td>
//             <td>${element.name}</td>
//             <td>${element.rating.average}</td>
//             <td>${element.language}</td>
//             <td><img src="${element.image.medium}" alt=""></td>
//         </tr>
//         `


//     });
//     tbody.innerHTML = tr
//     console.log(response.data);
// }
// Films()

//FETCH TABLE SCRIPTS
// async function Films() {
//   const response = await fetch("https://api.tvmaze.com/shows")
//     .then((res) => res.json())
//     .then((data) => {
//       let tr = "";
//       data.forEach((element) => {
//         tr += `
//         <tr>

//             <td>${element.id}</td>
//             <td>${element.name}</td>
//             <td>${element.rating.average}</td>
//             <td>${element.language}</td>
//             <td><img src="${element.image.medium}" alt=""></td>
//         </tr>
//         `;
//         // data.sort((a, b) => (a.id > b.id ? 1 : b.id > a.id ? -1 : 0));
//       });
//       tbody.innerHTML = tr;
//     });
// }
// Films();




// SEARCH SCRIPTS
const searchInput = document.querySelector(".search");
const loadMore = document.querySelector(".loadMore");

searchInput.addEventListener("input", (e) => {
  let value = e.target.value.toLowerCase();
  const cards = row.querySelectorAll(".col-12");

  cards.forEach(card => {
    const title = card.querySelector(".card-title").textContent.toLowerCase();
    if (title.includes(value)) {
      card.style.display = "block";
    } else {
      card.style.display = "none";   
    }
  });
});


//NAVBAR SCRIPTS
let body = document.querySelector('body')
let header = document.querySelector('header')
let container = document.querySelector('.container')
let nav = document.querySelector('nav')
let logo = document.getElementById('logo')
let navbarLinks = document.getElementById('navbar-links')
let ul = document.getElementById('ulNav')
let hamburger = document.getElementById('hamburger')
let ikon = document.querySelector('i')


hamburger.addEventListener('click' , (e)=>{
    e.preventDefault()
    navbarLinks.classList.toggle('mobNav')
    navbarLinks.style.transition = 'all 0.5s'
    ikon.classList.toggle('fa-bars')
    ikon.classList.toggle('fa-x')
    ikon.style.display = "flex"
})