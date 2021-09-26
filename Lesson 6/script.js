// создаем объект каталога
function Item(product, image, description, price, discount=0) {
    this.product = product;
    this.image = `img/${image}.jpg`;
    this.description = description;
    this.price = price;
    this.discount = discount
}

let catalodList = []

catalodList.push(
    new Item('Печеньки', 'pc', 'Вкусно и питательно', 95, 20)
);
catalodList.push(
    new Item('Пряники', 'pr', 'Угостите своих любимых :)', 17)
);
catalodList.push(
    new Item('Вареники', 'vr', 'Из России с любовью )', 15)
);

// создаем отображение каталога
function drawItems() {
    catalodList.forEach(function (item, i) {
        drawItem(item, i);
    })
}

const $catalog = document.querySelector('#catalog');
function drawItem(item, id) {
    $catalog.insertAdjacentHTML('beforeend',
    `<div id="item-${id}" class="prod_item">
        <div class="item">
            <div class="image" style="height:80px;width:80px"><img src="${item.image}"></div>
            <div class="description"><h4>${item.product}</h4>${item.description}
                <div class="price">Цена: 
                    <span>${item.price}</span> руб.
                </div>
            </div>
        </div>
        <div class="sale">
            <span class='offer ${item.discount > 0 ? 'show' : ''}'>Скидка: ${item.discount}%</span>
            <div data-id="${id}" class="button">В корзину</div>
        </div>
    </div>`);
}
drawItems(catalodList);


// ----------- создаем объект корзины -----------
let shoppingCart = [];

let emptyBasket = 'Ваша корзина пуста.';

function basketItem(product, price, discount=0) {
    this.product = product;
    this.price = price;
    this.discount = discount;
    this.finalPrice = function() {
        if (this.discount != 0) {
            return this.price - this.price*this.discount/100;
        } else {
            return this.price;
        }
    }
}

// получаем итоговую сумму
function totalSumm(shoppingCart) {
    return shoppingCart.reduce(function (acc, price) {
        return acc + price.finalPrice();
    }, 0);
}

// создаем отображение корзины
function drowTotal (shoppingCart) {
    const $basket = document.querySelector('#basket');
    $basket.textContent = '';

    if (shoppingCart == 0) {
        $basket.insertAdjacentHTML('beforeend', `<div class="total">${emptyBasket}</div>`);
    } else {
        $basket.insertAdjacentHTML('beforeend',
        `<div class="total">
            <p>Товаров в корзине: ${shoppingCart.length} 
            на сумму ${totalSumm(shoppingCart)} рублей.</p>
            <a class="buy" href="#">Купить</a>
        </div>`);
    }
}
drowTotal(shoppingCart);

// событие - добавление объекта в корзину
$catalog.addEventListener('click', function (e) {
    if (e.target.className ==='button' ) {
        const id = Number(e.target.getAttribute('data-id'));
        const choice = catalodList[id];
        shoppingCart.push(new basketItem(choice.product, choice.price, choice.discount));

        drowTotal(shoppingCart);
    }
});

// работаем с #popup
 const $popup = document.querySelector('#popup');
//
 $popup.addEventListener('click', function(e) {
     $popup.style.display = 'none';
 });
//
  $catalog.addEventListener('click', function(e) {
     if( e.target.tagName === 'IMG' ) {
         $popup.textContent = '';
         $popup.style.display = 'flex';
         $popup.insertAdjacentHTML('beforeend',
             `<img src="${e.target.getAttribute('src')}" class="scale" style="height:200px;width:200px">`);
     }
});