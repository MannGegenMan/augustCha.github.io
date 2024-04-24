let tg = window.Telegram.WebApp;

tg.expand();

tg.MainButton.textColor = 'FFFFFF';
tg.MainButton.color = '#2cab37';

let items = [];

function toggleItem(btn, itemId, price) {
    let item = items.find(i => i.id === itemId);
    if (!item) {
        let newItem = { id: itemId, price: price};
        items.push(newItem);
        btn.classList.add('added-to-cart');
        btn.innerText = "Удалить из корзины";
        let totalPrice = items.reduce((total, item) => total + item.price, 0);
        if (totalPrice > 0) {
            tg.MainButton.setText(`Общая цена товаров: ${totalPrice}`);
            if (!tg.MainButton.isVisible) {
                tg.MainButton.show();
            }
        } else {
            tg.MainButton.hide();
        }
    } else {
        let index = items.indexOf(item);
        items.splice(index, 1);
        btn.classList.remove('added-to-cart');
        btn.innerText = "Добавить в корзину";
        let totalPrice = items.reduce((total, item) => total + item.price, 0);
        if (totalPrice > 0) {
            tg.MainButton.setText(`Общая цена товаров: ${totalPrice}`);
            if (!tg.MainButton.isVisible) {
                tg.MainButton.show();
            }
        } else {
            tg.MainButton.hide();
        }
    }
}

Telegram.Web.App.onEvent("mainButtonClicked", function() {
    let data = {
        items: items,
        totalPrice: calculateTotalPrice()
    };
    tg.sendData(JSON.stringify(data));
});

function calculateTotalPrice() {
    return items.reduce((total, item) => total + item.price, 0);
}

document.getElementById("btn1").addEventListener("click", function(){
    toggleItem(this, "item1", 3000);
})
document.getElementById("btn1").addEventListener("click", function(){
    toggleItem(this, "item2", 3000);
})
document.getElementById("btn1").addEventListener("click", function(){
    toggleItem(this, "item3", 3000);
})
document.getElementById("btn1").addEventListener("click", function(){
    toggleItem(this, "item4", 3000);
})
document.getElementById("btn1").addEventListener("click", function(){
    toggleItem(this, "item5", 3000);
})
document.getElementById("btn1").addEventListener("click", function(){
    toggleItem(this, "item6", 3000);
})
document.getElementById("btn1").addEventListener("click", function(){
    toggleItem(this, "item7", 3000);
})
document.getElementById("btn1").addEventListener("click", function(){
    toggleItem(this, "item8", 3000);
})