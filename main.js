let shop = document.getElementById('shop');
console.log(shop);

let shopItemsData = [
    {   
        id: 1,
        name: "Casual shirt",
        price: 45,
        description: "What is a Casual Shirt? Casual shirts have less rigid collars – such as the button-down.",
        img: "img/casual-shirt.jpg",
    },
    {
        id: 2,
        name: "Office shirt",
        price: 60,
        description: "A dress shirt, button shirt, button-front, button-front shirt, or button-up shirt, is a garment with a collar and a full-length opening at the front, which is fastened using buttons or shirt studs.",
        img: "img/office-shirt.png",
    },
    {
        id: 3,
        name: "T-shirt",
        price: 20,
        description: "A T-shirt (also spelled tee shirt), or tee, is a style of fabric shirt named after the T shape of its body and sleeves.",
        img: "img/t-shirt.jpg",
    },
    {
        id: 4,
        name: "Mens suit",
        price: 149,
        description: "A suit, lounge suit, or business suit is a set of clothes comprising a suit jacket and trousers of identical textiles worn with a collared dress shirt, necktie, and dress shoes.",
        img: "/img/mens-suit.jpg",
    },
];

const generateShop = () => {
    return (shop.innerHTML = shopItemsData.map((item) => {
        let {id, name, price, description, img} = item
        return `
        <div id="product-id-${id}" class="item">
            <img src=${img} width="100%" height="auto" alt="Casual shirt">
            <div class="details">
                <h3>${name}</h3>
                <p>${description}</p>
                <div class="price-quantity">
                    <h2> $${price} </h2>
                    <div class="buttons">
                       <i class="bi bi-dash-lg"></i>
                       <div id=${id} class="quantity">0</div>
                       <i class="bi bi-plus-lg"></i>
                    </div>
                </div>
            </div>
        </div>`
    }).join(" ")
  );
};

generateShop();

// video 1:05:30

