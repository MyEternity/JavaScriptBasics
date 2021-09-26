function Item(product, image, description, price, discount = 0) {
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

const catalog = document.querySelector('#catalog');

function drawItem(catalodList) {
    for (const iterator of catalodList) {
        catalog.insertAdjacentHTML('beforeend',
            `<div class="prod_item">
            <div class="item">
                <div class="image" style="height:120px;width:120px"><img src="${iterator.image}"></div>
                <div class="description"><h4>${iterator.product}</h4>${iterator.description}
                    <div class="price">Цена: 
                        <span>${iterator.price}</span>
                    </div>
                </div>
            </div>
            <div class="sale">
                <span class='offer ${iterator.discount > 0 ? 'show' : ''}'>Скидка: ${iterator.discount}%</span>
                <a href="#">В корзину</a>
            </div>
        </div>`);
    }
    ;
}

drawItem(catalodList);