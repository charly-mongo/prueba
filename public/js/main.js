// Estado de la aplicación
let cart = [];
let currentCategory = 'hamburguesas';
let currentItem = null;
let selectedExtras = [];

// Número de WhatsApp predeterminado
const WHATSAPP_NUMBER = '523111235595';

// Inicialización cuando carga la página
document.addEventListener('DOMContentLoaded', function() {
    loadCategory('hamburguesas');
    updateCartCount();
    
    // Event listeners para botones de navegación
    document.querySelectorAll('.nav-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            document.querySelectorAll('.nav-btn').forEach(b => b.classList.remove('active'));
            this.classList.add('active');
            loadCategory(this.dataset.category);
        });
    });
    
    // Event listener para el botón del carrito
    document.getElementById('cartBtn').addEventListener('click', openCart);
});

// Cargar categoría del menú
function loadCategory(category) {
    currentCategory = category;
    const container = document.getElementById('menuContainer');
    const items = menuData[category];
    
    if (!items) return;
    
    container.innerHTML = '';
    
    items.forEach(item => {
        const menuItem = createMenuItem(item, category);
        container.appendChild(menuItem);
    });
}

// Crear elemento del menú
function createMenuItem(item, category) {
    const div = document.createElement('div');
    div.className = 'menu-item';
    div.onclick = () => openItemModal(item, category);
    
    div.innerHTML = `
        <div class="menu-item-header">
            <div class="menu-item-name">${getIcon(category)} ${item.name}</div>
        </div>
        <div class="menu-item-body">
            <div class="menu-item-ingredients">${item.ingredients.replace(/\+/g, ', ')}</div>
        </div>
        <div class="menu-item-footer">
            <div class="menu-item-price">$${item.price}</div>
            <button class="add-btn" onclick="event.stopPropagation(); quickAddToCart('${item.name}', ${item.price}, '${category}')">
                <i class="fas fa-cart-plus"></i> Agregar
            </button>
        </div>
    `;
    
    return div;
}

// Obtener icono según categoría
function getIcon(category) {
    const icons = {
        hamburguesas: '🍔',
        hotdogs: '🌭',
        sincronizadas: '🥙',
        tortas: '🥪',
        bebidas: '🥤'
    };
    return icons[category] || '🍽️';
}

// Agregar rápido al carrito
function quickAddToCart(name, price, category) {
    const item = {
        id: Date.now(),
        name: name,
        price: price,
        category: category,
        quantity: 1,
        vegetables: [...vegetables],
        condiments: [...condiments],
        extras: [],
        instructions: ''
    };
    
    cart.push(item);
    updateCartCount();
    showNotification('Producto agregado al carrito');
}

// Abrir modal de detalles del item
function openItemModal(item, category) {
    currentItem = { ...item, category };
    selectedExtras = [];
    
    document.getElementById('itemTitle').textContent = `${getIcon(category)} ${item.name}`;
    document.getElementById('itemIngredients').textContent = `Ingredientes: ${item.ingredients.replace(/\+/g, ', ')}`;
    document.getElementById('itemPrice').textContent = `Precio base: $${item.price}`;
    
    // Cargar ingredientes extra
    const extrasContainer = document.getElementById('extraIngredients');
    extrasContainer.innerHTML = '';
    
    extraIngredients.forEach((extra, index) => {
        const extraDiv = document.createElement('div');
        extraDiv.className = 'extra-item';
        extraDiv.id = `extra-${index}`;
        extraDiv.onclick = () => toggleExtra(index);
        extraDiv.innerHTML = `
            <div class="extra-item-name">${extra.name}</div>
            <div class="extra-item-price">+$${extra.price}</div>
        `;
        extrasContainer.appendChild(extraDiv);
    });
    
    // Cargar verduras (marcadas por defecto)
    const vegetablesContainer = document.getElementById('vegetables');
    vegetablesContainer.innerHTML = '';
    
    vegetables.forEach(veg => {
        const label = document.createElement('label');
        label.className = 'checkbox-label';
        label.innerHTML = `
            <input type="checkbox" name="vegetable" value="${veg}" checked>
            <span>${veg}</span>
        `;
        vegetablesContainer.appendChild(label);
    });
    
    // Cargar aderezos (marcados por defecto)
    const condimentsContainer = document.getElementById('condiments');
    condimentsContainer.innerHTML = '';
    
    condiments.forEach(cond => {
        const label = document.createElement('label');
        label.className = 'checkbox-label';
        label.innerHTML = `
            <input type="checkbox" name="condiment" value="${cond}" checked>
            <span>${cond}</span>
        `;
        condimentsContainer.appendChild(label);
    });
    
    // Resetear cantidad e instrucciones
    document.getElementById('quantity').value = 1;
    document.getElementById('instructions').value = '';
    
    // Mostrar modal
    document.getElementById('itemModal').classList.add('active');
}

// Toggle ingrediente extra
function toggleExtra(index) {
    const extraElement = document.getElementById(`extra-${index}`);
    
    if (selectedExtras.includes(index)) {
        selectedExtras = selectedExtras.filter(i => i !== index);
        extraElement.classList.remove('selected');
    } else {
        selectedExtras.push(index);
        extraElement.classList.add('selected');
    }
    
    updateItemPrice();
}

// Actualizar precio del item
function updateItemPrice() {
    let totalPrice = currentItem.price;
    
    selectedExtras.forEach(index => {
        totalPrice += extraIngredients[index].price;
    });
    
    const quantity = parseInt(document.getElementById('quantity').value) || 1;
    totalPrice *= quantity;
    
    document.getElementById('itemPrice').textContent = `Precio total: $${totalPrice}`;
}

// Cerrar modal de item
function closeItemModal() {
    document.getElementById('itemModal').classList.remove('active');
    currentItem = null;
    selectedExtras = [];
}

// Funciones de cantidad
function increaseQuantity() {
    const input = document.getElementById('quantity');
    if (input.value < 10) {
        input.value = parseInt(input.value) + 1;
        updateItemPrice();
    }
}

function decreaseQuantity() {
    const input = document.getElementById('quantity');
    if (input.value > 1) {
        input.value = parseInt(input.value) - 1;
        updateItemPrice();
    }
}

// Agregar al carrito desde el modal
function addToCart() {
    if (!currentItem) return;
    
    const selectedVegetables = Array.from(document.querySelectorAll('input[name="vegetable"]:checked'))
        .map(cb => cb.value);
    
    const selectedCondiments = Array.from(document.querySelectorAll('input[name="condiment"]:checked'))
        .map(cb => cb.value);
    
    const quantity = parseInt(document.getElementById('quantity').value) || 1;
    const instructions = document.getElementById('instructions').value;
    
    const extrasData = selectedExtras.map(index => extraIngredients[index]);
    
    let itemPrice = currentItem.price;
    extrasData.forEach(extra => {
        itemPrice += extra.price;
    });
    
    const cartItem = {
        id: Date.now(),
        name: currentItem.name,
        price: itemPrice,
        category: currentItem.category,
        quantity: quantity,
        vegetables: selectedVegetables,
        condiments: selectedCondiments,
        extras: extrasData,
        instructions: instructions
    };
    
    cart.push(cartItem);
    updateCartCount();
    closeItemModal();
    showNotification(`${quantity} ${currentItem.name} agregado(s) al carrito`);
}

// Actualizar contador del carrito
function updateCartCount() {
    const count = cart.reduce((total, item) => total + item.quantity, 0);
    document.getElementById('cartCount').textContent = count;
}

// Abrir carrito
function openCart() {
    const cartItemsContainer = document.getElementById('cartItems');
    cartItemsContainer.innerHTML = '';
    
    if (cart.length === 0) {
        cartItemsContainer.innerHTML = '<p style="text-align: center; padding: 2rem;">Tu carrito está vacío</p>';
    } else {
        cart.forEach((item, index) => {
            const cartItemDiv = createCartItem(item, index);
            cartItemsContainer.appendChild(cartItemDiv);
        });
    }
    
    updateCartTotal();
    document.getElementById('cartModal').classList.add('active');
}

// Crear elemento del carrito
function createCartItem(item, index) {
    const div = document.createElement('div');
    div.className = 'cart-item';
    
    let details = `Cantidad: ${item.quantity}`;
    if (item.extras && item.extras.length > 0) {
        details += ` | Extras: ${item.extras.map(e => e.name).join(', ')}`;
    }
    
    div.innerHTML = `
        <div class="cart-item-info">
            <div class="cart-item-name">${getIcon(item.category)} ${item.name}</div>
            <div class="cart-item-details">${details}</div>
        </div>
        <div class="cart-item-price">$${item.price * item.quantity}</div>
        <button class="cart-item-remove" onclick="removeFromCart(${index})">
            <i class="fas fa-trash"></i>
        </button>
    `;
    
    return div;
}

// Actualizar total del carrito
function updateCartTotal() {
    const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    document.getElementById('cartTotal').textContent = `$${total}`;
}

// Eliminar del carrito
function removeFromCart(index) {
    cart.splice(index, 1);
    updateCartCount();
    openCart(); // Recargar vista del carrito
    showNotification('Producto eliminado del carrito');
}

// Cerrar carrito
function closeCart() {
    document.getElementById('cartModal').classList.remove('active');
}

// Proceder al checkout
function proceedToCheckout() {
    if (cart.length === 0) {
        showNotification('Tu carrito está vacío');
        return;
    }
    
    closeCart();
    openCheckout();
}

// Abrir checkout
function openCheckout() {
    updateOrderSummary();
    document.getElementById('checkoutModal').classList.add('active');
}

// Cerrar checkout
function closeCheckout() {
    document.getElementById('checkoutModal').classList.remove('active');
}

// Toggle campos de entrega
function toggleDeliveryFields() {
    const deliveryType = document.querySelector('input[name="deliveryType"]:checked').value;
    const deliveryFields = document.getElementById('deliveryFields');
    const deliveryFeeRow = document.getElementById('deliveryFeeRow');
    
    if (deliveryType === 'delivery') {
        deliveryFields.style.display = 'block';
        deliveryFeeRow.style.display = 'flex';
    } else {
        deliveryFields.style.display = 'none';
        deliveryFeeRow.style.display = 'none';
        document.getElementById('deliveryCost').textContent = '$0';
        document.getElementById('deliveryFee').textContent = '$0';
    }
    
    updateGrandTotal();
}

// Actualizar costo de envío cuando cambia la zona
document.addEventListener('DOMContentLoaded', function() {
    const zoneSelect = document.getElementById('zone');
    if (zoneSelect) {
        zoneSelect.addEventListener('change', function() {
            const zone = this.value;
            if (zone && deliveryZones[zone]) {
                const cost = deliveryZones[zone].cost;
                document.getElementById('deliveryCost').textContent = `$${cost}`;
                document.getElementById('deliveryFee').textContent = `$${cost}`;
                updateGrandTotal();
            } else {
                document.getElementById('deliveryCost').textContent = '$0';
                document.getElementById('deliveryFee').textContent = '$0';
                updateGrandTotal();
            }
        });
    }
});

// Actualizar resumen del pedido
function updateOrderSummary() {
    const summaryContainer = document.getElementById('orderSummary');
    summaryContainer.innerHTML = '';
    
    cart.forEach(item => {
        const itemDiv = document.createElement('div');
        itemDiv.style.cssText = 'padding: 0.5rem 0; border-bottom: 1px solid #eee;';
        
        let itemText = `${item.quantity}x ${item.name} - $${item.price * item.quantity}`;
        if (item.extras && item.extras.length > 0) {
            itemText += ` (Extras: ${item.extras.map(e => e.name).join(', ')})`;
        }
        
        itemDiv.textContent = itemText;
        summaryContainer.appendChild(itemDiv);
    });
    
    const subtotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    document.getElementById('subtotal').textContent = `$${subtotal}`;
    updateGrandTotal();
}

// Actualizar total general
function updateGrandTotal() {
    const subtotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    let deliveryFee = 0;
    
    const deliveryType = document.querySelector('input[name="deliveryType"]:checked').value;
    if (deliveryType === 'delivery') {
        const zone = document.getElementById('zone').value;
        if (zone && deliveryZones[zone]) {
            deliveryFee = deliveryZones[zone].cost;
        }
    }
    
    const grandTotal = subtotal + deliveryFee;
    document.getElementById('grandTotal').textContent = `$${grandTotal}`;
}

// Enviar pedido por WhatsApp
function sendToWhatsApp() {
    // Validar campos requeridos
    const customerName = document.getElementById('customerName').value.trim();
    if (!customerName) {
        showNotification('Por favor ingresa tu nombre');
        return;
    }
    
    const deliveryType = document.querySelector('input[name="deliveryType"]:checked').value;
    
    if (deliveryType === 'delivery') {
        const address = document.getElementById('address').value.trim();
        const neighborhood = document.getElementById('neighborhood').value.trim();
        const zone = document.getElementById('zone').value;
        
        if (!address || !neighborhood || !zone) {
            showNotification('Por favor completa todos los campos de entrega requeridos');
            return;
        }
    }
    
    // Construir mensaje de WhatsApp
    let message = `🍔 *NUEVO PEDIDO - GEORGE BURGER* 🍔\n\n`;
    message += `👤 *Cliente:* ${customerName}\n`;
    
    const customerPhone = document.getElementById('customerPhone').value.trim();
    if (customerPhone) {
        message += `📱 *Teléfono:* ${customerPhone}\n`;
    }
    
    message += `\n📦 *Tipo de entrega:* ${deliveryType === 'delivery' ? '🏍️ A domicilio' : '🏪 Recoger en tienda'}\n`;
    
    if (deliveryType === 'delivery') {
        const address = document.getElementById('address').value.trim();
        const betweenStreets = document.getElementById('betweenStreets').value.trim();
        const neighborhood = document.getElementById('neighborhood').value.trim();
        const zone = document.getElementById('zone').value;
        
        message += `\n📍 *DIRECCIÓN DE ENTREGA:*\n`;
        message += `• Dirección: ${address}\n`;
        if (betweenStreets) {
            message += `• Entre calles: ${betweenStreets}\n`;
        }
        message += `• Colonia: ${neighborhood}\n`;
        message += `• Zona: ${deliveryZones[zone].name}\n`;
    }
    
    message += `\n🛒 *PEDIDO:*\n`;
    message += `------------------------\n`;
    
    cart.forEach((item, index) => {
        message += `\n${index + 1}. *${item.name}* (${item.quantity}x)\n`;
        message += `   Precio unitario: $${item.price}\n`;
        
        if (item.extras && item.extras.length > 0) {
            message += `   Extras: ${item.extras.map(e => `${e.name} (+$${e.price})`).join(', ')}\n`;
        }
        
        if (item.vegetables && item.vegetables.length > 0) {
            message += `   Verduras: ${item.vegetables.join(', ')}\n`;
        }
        
        if (item.condiments && item.condiments.length > 0) {
            message += `   Aderezos: ${item.condiments.join(', ')}\n`;
        }
        
        if (item.instructions) {
            message += `   Notas: ${item.instructions}\n`;
        }
        
        message += `   Subtotal: $${item.price * item.quantity}\n`;
    });
    
    const subtotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    message += `\n------------------------\n`;
    message += `💰 *SUBTOTAL:* $${subtotal}\n`;
    
    if (deliveryType === 'delivery') {
        const zone = document.getElementById('zone').value;
        if (zone && deliveryZones[zone]) {
            const deliveryFee = deliveryZones[zone].cost;
            message += `🏍️ *Costo de envío:* $${deliveryFee}\n`;
            message += `💳 *TOTAL A PAGAR:* $${subtotal + deliveryFee}\n`;
        }
    } else {
        message += `💳 *TOTAL A PAGAR:* $${subtotal}\n`;
    }
    
    message += `\n⏰ Pedido realizado: ${new Date().toLocaleString('es-MX')}`;
    
    // Crear URL de WhatsApp
    const encodedMessage = encodeURIComponent(message);
    const whatsappURL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`;
    
    // Abrir WhatsApp
    window.open(whatsappURL, '_blank');
    
    // Limpiar carrito después de enviar
    setTimeout(() => {
        if (confirm('¿Tu pedido fue enviado correctamente? ¿Deseas limpiar el carrito?')) {
            cart = [];
            updateCartCount();
            closeCheckout();
            showNotification('Pedido enviado exitosamente');
        }
    }, 3000);
}

// Mostrar notificación
function showNotification(message) {
    // Crear elemento de notificación si no existe
    let notification = document.getElementById('notification');
    if (!notification) {
        notification = document.createElement('div');
        notification.id = 'notification';
        notification.style.cssText = `
            position: fixed;
            bottom: 20px;
            right: 20px;
            background: #4CAF50;
            color: white;
            padding: 1rem 1.5rem;
            border-radius: 8px;
            box-shadow: 0 4px 6px rgba(0,0,0,0.1);
            z-index: 9999;
            transform: translateY(100px);
            opacity: 0;
            transition: all 0.3s ease;
        `;
        document.body.appendChild(notification);
    }
    
    notification.textContent = message;
    notification.style.transform = 'translateY(0)';
    notification.style.opacity = '1';
    
    setTimeout(() => {
        notification.style.transform = 'translateY(100px)';
        notification.style.opacity = '0';
    }, 3000);
}