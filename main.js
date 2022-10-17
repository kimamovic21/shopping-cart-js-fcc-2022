let shop = document.getElementById('shop');

let basket = JSON.parse(localStorage.getItem("data")) || [];

const generateShop = () => {
    return (shop.innerHTML = shopItemsData.map((item) => {
        let { id, name, price, desc, img } = item;
        let search = basket.find((x) => x.id === id) || [];
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
                <div id=${id} class="quantity">${search.item === undefined ? 0: search.item}</div>
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
    // console.log(id);
    let selectedItem = id;
    // console.log(selectedItem);
    let search = basket.find((x) => x.id === selectedItem);

    if(search === undefined) {
        basket.push({
            id: selectedItem,
            item: 1,
        });
    }
    else {
        search.item += 1; 
    }
    // console.log(basket);
    update(selectedItem);
    localStorage.setItem("data", JSON.stringify(basket));
};

const decrement = (id) => {
    // console.log(id);
    let selectedItem = id;
    // console.log(selectedItem);
    let search = basket.find((x) => x.id === selectedItem);

    if(search === undefined) return;
    else if(search.item === 0) return;
    else {
        search.item -= 1; 
    }
    
    update(selectedItem);
    basket = basket.filter((x) => x.item !== 0);
    // console.log(basket);

    localStorage.setItem("data", JSON.stringify(basket));
};

const update = (id) => {
    // console.log('The update function is running');
    let search = basket.find((x) => x.id === id);
    // console.log(search.item);
    document.getElementById(id).innerHTML = search.item;
    calculation();
};

const calculation = () => {
    // console.log("Calculation function is running");
    let cartIcon = document.getElementById('cartAmount');
    cartIcon.innerHTML = basket.map((x) => x.item).reduce((x, y) =>x+y, 0);
    console.log();
};

calculation();
