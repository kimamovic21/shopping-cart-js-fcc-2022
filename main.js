let shop = document.getElementById('shop');
// console.log(shop);

let shopItemsData = [
    {   
        id: 1,
        name: "Casual shirt",
        price: 45,
        desc: "What is a Casual Shirt? Casual shirts have less rigid collars – such as the button-down.",
        img: "img/casual-shirt.jpg",
    },
    {
        id: 2,
        name: "Office shirt",
        price: 60,
        desc: "A dress shirt, button shirt, button-front, button-front shirt, or button-up shirt, is a garment with a collar and a full-length opening at the front, which is fastened using buttons or shirt studs.",
        img: "img/office-shirt.png",
    },
    {
        id: 3,
        name: "T-shirt",
        price: 20,
        desc: "A T-shirt (also spelled tee shirt), or tee, is a style of fabric shirt named after the T shape of its body and sleeves.",
        img: "img/t-shirt.jpg",
    },
    {
        id: 4,
        name: "Mens suit",
        price: 149,
        desc: "A suit, lounge suit, or business suit is a set of clothes comprising a suit jacket and trousers of identical textiles worn with a collared dress shirt, necktie, and dress shoes.",
        img: "/img/mens-suit.jpg",
    },
];

// console.log(shopItemsData);

let basket = [];

const generateShop = () => {
    return (shop.innerHTML = shopItemsData.map((item) => {
        let { id, name, price, desc, img } = item;
        return `
      <div id=product-id-${id} class="item">
          <img width="100%" src=${img} alt="">
          <div class="details">
            <h3>${name}</h3>
            <p>${desc}</p>
            <div class="price-quantity">
              <h2>$ ${price} </h2>
              <div class="buttons">
                <i onclick="decrement(${id})" class="bi bi-dash-lg"></i>
                <div id=${id} class="quantity"> 0 </div>
                <i onclick="increment(${id})" class="bi bi-plus-lg"></i>
              </div>
            </div>
          </div>
        </div>
      `;
      }).join(""));
};

generateShop();


const increment = (id) => {
    let selectedItem = id;
    let search = basket.find((item) => item.id === selectedItem.id);

    if(search === undefined) {
        basket.push({
            id: selectedItem.id,
            item: 1,
        });
    }
    else {
        search.item += 1; 
    }

    console.log(basket);
};


const decrement = (id) => {
    let selectedItem = id;
    let search = basket.find((item) => item.id === selectedItem.id);

    if(search.item === 0) return;
        
    else {
        search.item -= 1; 
    }

    console.log(basket);
};


const update = (id) => {
    // console.log("update " + id)
    let selectedItem = id;
    console.log(selectedItem);
};


// video 1:20:00