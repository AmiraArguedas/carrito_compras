// scripts.js
let cart = [];

function addToCart(productName, productPrice) {
    // Agregar el producto al carrito
    cart.push({ name: productName, price: productPrice });
    renderCart();
}

function removeFromCart(index) {
    // Eliminar un producto del carrito por índice
    cart.splice(index, 1);
    renderCart();
}

function renderCart() {
    const cartList = document.getElementById('cart-list');
    const totalPrice = document.getElementById('total-price');
    
    // Limpiar el carrito antes de renderizarlo de nuevo
    cartList.innerHTML = '';
    
    // Recorrer los productos del carrito y agregarlos a la lista
    let total = 0;
    for (let i = 0; i < cart.length; i++) {
        const item = cart[i];
        
        // Creamos un nuevo <li> para cada producto
        const listItem = document.createElement('li');
        
        // Configuramos el contenido de <li> con el nombre, precio y el botón de eliminar
        listItem.innerHTML = `${item.name} - $${item.price} <button onclick="removeFromCart(${i})">Eliminar</button>`;
        
        // Añadimos el <li> a la lista del carrito
        cartList.appendChild(listItem);
        
        // Sumamos el precio al total
        total += item.price;
    }


    // Mostrar el precio total
    totalPrice.innerText = `Total: $${total}`;
}

function clearCart() {
    // Vaciar el carrito
    cart = [];
    renderCart();
}
