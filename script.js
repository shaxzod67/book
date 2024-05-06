let sun = document.querySelector("#sun"),
  moon = document.querySelector("#moon"),
  body = document.querySelector("body"),
  cart = document.querySelector("#cart"),
  closeShopping = document.querySelector(".closeShopping"),
  homeBg = document.querySelector(".home_bg"),
  leftArrow = document.querySelector(".leftArrow"),
  rightArrow = document.querySelector(".rightArrow"),
  imageIcons = document.querySelectorAll(".image-icon"),
  list = document.querySelector(".product-right-bottom"),
  li = document.querySelectorAll(".list"),
  circle = document.querySelectorAll(".fa-circle"),
  allList = document.querySelector(".all-list"),
  listCard = document.querySelector(".listCard");
card = document.querySelector(".card");
let total = document.querySelector(".total");
let quanity = document.querySelector(".quantity");
const navMenu = document.getElementById("nav_menu"),
  navToggle = document.getElementById("nav-toggle"),
  navClose = document.getElementById("nav-close");

let products = [
  {
    id: 0,
    type: "modern",
    title: "big magic",
    author: "donna karan",
    image: "https://meek-haupia-827c15.netlify.app/Assets/Images/1.PNG",
    price: 20.0,
  },
  {
    id: 1,
    type: "classic",
    title: "i was born width music",
    author: "dolce & cabanna",
    image: "https://meek-haupia-827c15.netlify.app/Assets/Images/2.PNG",
    price: 200.0,
  },
  {
    id: 2,
    type: "biography",
    title: "i'm glad my mom died",
    author: "jennette mcCurdy",
    image: "https://meek-haupia-827c15.netlify.app/Assets/Images/3.PNG",
    price: 21.99,
  },
  {
    id: 3,
    type: "detective",
    title: "Warrior Soul: A Tye Caine Wilderness Mystery",
    author: "David Barbur",
    image: "https://meek-haupia-827c15.netlify.app/Assets/Images/4.PNG",
    price: 4.99,
  },
  {
    id: 4,
    type: "fantasy",
    title: "The Mountain in the Sea: A Novel",
    author: "Ray Nayler",
    image: "https://meek-haupia-827c15.netlify.app/Assets/Images/5.PNG",
    price: 18.0,
  },
  {
    id: 5,
    type: "cookbook",
    title: "Sweet Enough: A Dessert Cookbook",
    author: "Alison Roman",
    image: "https://meek-haupia-827c15.netlify.app/Assets/Images/6.PNG",
    price: 32.55,
  },
  {
    id: 6,
    type: "fairy tale",
    title: "Fairy Tale",
    author: "Stephen King",
    image: "https://meek-haupia-827c15.netlify.app/Assets/Images/7.PNG",
    price: 30.23,
  },
  {
    id: 7,
    type: "fiction",
    title: "Flash Fiction America: 73 Very Short Stories",
    author: "John DuFresne , et al.",
    image: "https://meek-haupia-827c15.netlify.app/Assets/Images/8.PNG",
    price: 15.76,
  },
  {
    id: 8,
    type: "horror",
    title: "Taaqtumi: An Anthology of Arctic Horror Stories",
    author: "Thomas Anguti Johnston , et al.",
    image: "https://meek-haupia-827c15.netlify.app/Assets/Images/9.PNG",
    price: 15.76,
  },
  {
    id: 9,
    type: "historical fiction",
    title:
      "The Things We Cannot Say: A WWII Historical Fiction Novel (Original)",
    author: "Kelly Rimmer",
    image: "https://meek-haupia-827c15.netlify.app/Assets/Images/10.PNG",
    price: 15.8,
  },
  {
    id: 10,
    type: "history",
    title: "The Secret History",
    author: "Donna Tartt",
    image: "https://meek-haupia-827c15.netlify.app/Assets/Images/11.PNG",
    price: 16.74,
  },
  {
    id: 11,
    type: "romance",
    title: "Daughter of the Moon Goddess: A Fantasy Romance Novel",
    author: "Sue Lynn Tan",
    image: "https://meek-haupia-827c15.netlify.app/Assets/Images/12.PNG",
    price: 16.73,
  },
  {
    id: 12,
    type: "modern",
    title: "Women Without Men: A Novel of Modern Iran",
    author: "Shahrnush Parsipur , et al.",
    image: "https://meek-haupia-827c15.netlify.app/Assets/Images/13.PNG",
    price: 14.83,
  },
  {
    id: 13,
    type: "classic",
    title: "War and Peace",
    author: "Leo Tolstoy , et al.",
    image: "https://meek-haupia-827c15.netlify.app/Assets/Images/14.PNG",
    price: 20.46,
  },
  {
    id: 14,
    type: "biography",
    title: "Barkley: A Biography (Original)",
    author: "Timothy Bella",
    image: "https://meek-haupia-827c15.netlify.app/Assets/Images/15.PNG",
    price: 27.89,
  },
  {
    id: 15,
    type: "detective",
    title: "The Detective Up Late",
    author: "Adrian McKinty",
    image: "https://meek-haupia-827c15.netlify.app/Assets/Images/16.PNG",
    price: 25.1,
  },
  {
    id: 16,
    type: "fantasy",
    title: "Legends & Lattes: A Novel of High Fantasy and Low Stakes",
    author: "Travis Baldree",
    image: "https://meek-haupia-827c15.netlify.app/Assets/Images/17.PNG",
    price: 16.73,
  },
  {
    id: 17,
    type: "cookbook",
    title: "The Everlasting Meal Cookbook: Leftovers A-Z",
    author: "Tamar Adler , et al.",
  }]

// Menu bar ======================= Start =======================

navToggle.addEventListener("click", () => {
  navMenu.classList.add("show-menu");
});

navClose.addEventListener("click", () => {
  navMenu.classList.remove("show-menu");
});

// Menu bar ======================= Finish =======================


// Dark Mode ======================= Start =======================

sun.addEventListener("click", () => {
  body.classList.add("darkLight");
  sun.classList.toggle("hide");
  moon.classList.toggle("hide");
});

moon.addEventListener("click", () => {
  body.classList.remove("darkLight");
  sun.classList.toggle("hide");
  moon.classList.toggle("hide");
});

// Dark Mode ======================= Finish =======================

// Slider ======================= Start =======================

let img = document.querySelectorAll(".home_bg img");

img.forEach((item, index) => {
  item.style.left = `${index * 100}%`
});
let counter = 0;

leftArrow.addEventListener("click", () => {
  console.log("Worker");
  if (counter == 0) {
    counter = img.length - 1;
    sliderImage();
  } else {
    counter--;
    sliderImage();
  }
});
rightArrow.addEventListener("click", () => {
  console.log("Worker");
  if (counter == img.length - 1) {
    counter = 0;
    sliderImage();
  } else {
    counter++;
    sliderImage();
  }
});

const sliderImage = () => {
  img.forEach((slide) => {
    slide.style.transform = `translateX(-${counter * 100}%)`
  });
};

// Slider ======================= Finish =======================

// Get Data ======================= Start =======================

let ProductsParent = document.querySelector(".product-right-bottom");

products.map((product, key) => {
  return (
    ProductsParent.innerHTML += `
      <div class="book-card">
      <div class="book-image">
        <img src="${product.image}" alt="">
      </div>
      <div class="book-details">
        <p class="book-type">${product.type}</p>
        <h3 class="book-title">${product.title}</h3>
        <p class="book-author">${product.author}</p>
        <span class="book-price">$ ${product.price}</span>
        <div class="buttons">
          <button class="addToCart" onclick="addToCard(${key})">Add to cart</button>
          <i class="ri-heart-line" id="heart"></i>
          <i class='bx bx-dots-vertical-rounded options' onclick="option(${key})"></i>
          <div class="inOption">
            <i class='bx bx-pencil' onclick="renameItem(${key})"></i>
            <i class="fa-solid fa-trash" onclick="removeItem(this)"></i>
          </div>
        </div>
      </div>
    </div>
      `
  )
});

// Get Data ======================= Finish =======================

// Category ======================= Start =======================

circle.forEach((item, index) => {

  li[index].addEventListener("click", () => {
    for (let h = 0; h < circle.length; h++) {
      li[h].classList.remove("active");
    }
    li[index].classList.add("active");
    let dataFilter = li[index].getAttribute("data-filter");

    products.forEach((product, index) => {
      let box = list.querySelectorAll(".book-card");
      box[index].classList.remove("show");
      box[index].classList.add("hide");

      if (products[index].type == dataFilter || dataFilter == "all") {
        box[index].classList.remove("hide");
        box[index].classList.add("show");
      }
      else {
        console.log('error');
      }
    })
  });

})

// Category ======================= Finish =======================

// Shopping ======================= Start =======================

cart.addEventListener("click", () => {
  card.classList.add("active");
});

closeShopping.addEventListener("click", () => {
  card.classList.remove("active");
});

window.onscroll = function () {
  card.classList.remove("active");
}

let listCards = [];

function addToCard(key) {
  if (listCards[key] == null) {
    listCards[key] = JSON.parse(JSON.stringify(products[key]));
    listCards[key].quanity = 1;
  }
  reloadCard();
}

function reloadCard() {
  listCard.innerHTML = "";
  let count = 0;
  let totalPrice = 0;
  listCards.forEach((data, index) => {
    totalPrice += data.price
    count += data.quanity

    if (data != null) {
      let newDiv = document.createElement("li");

      newDiv.innerHTML = `
                     <div>
                         <img src="${data.image}" alt="">
                     </div>

                        <div>${data.title}</div>
                        <div>$ ${data.price}</div>

                     <div>
                        <button onclick="changeQuanity(${index},${data.quanity - 1})">-</button>
                        <div>  ${data.quanity}</div>
                        <button onclick="changeQuanity(${index},${data.quanity + 1})">+</button>
                     </div>
      `
      listCard.appendChild(newDiv);
    }
  });
  total.innerHTML = `$ ${totalPrice.toLocaleString()}`;
  quanity.innerHTML = count;

  
}

function changeQuanity(key, quantity) {
  if(quantity == 0) {
    delete listCards[key];
  } else {
    listCards[key].quanity = quantity;
    listCards[key].price = quantity * products[key].price;
  }   
  reloadCard();
  }
// Shopping ======================= Finish =======================

// Search ======================= Start =======================

let bookCards = document.querySelectorAll(".book-card");
let inOption = document.querySelectorAll(".inOption");
function option(key) {
  inOption[key].classList.toggle("show");
}
let bookTitle = document.querySelectorAll(".book-title");

let bookPrice = document.querySelectorAll(".book-price");
let bookImages = document.querySelectorAll(".book-images");
let bookAuthor = document.querySelectorAll(".book-author");
let mySearch = document.querySelector("#mySearch");
let searchBtn = document.querySelector("#searchBtn");

let bookType = document.querySelectorAll(".book-type");

mySearch.addEventListener("keyup", () => {
  let input = mySearch.value.toUpperCase();

  bookTitle.forEach((item, index) => {
    if (item.textContent.toUpperCase().includes(input)) {
      bookCards[index].style.display = "flex";
    } else {
      bookCards[index].style.display = "none";
    }
  });

  bookType.forEach((item, index) => {
    if (item.textContent.toUpperCase().includes(input)) {
      bookCards[index].style.display = "flex";
    } else {
      bookCards[index].style.display = "none";
    }
  });
});


// Search ======================= Finish =======================