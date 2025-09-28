# 🍔 George Burger - Sistema de Pedidos Digital

## 📋 Descripción del Proyecto
Sistema web completo para el restaurante George Burger que permite a los clientes ver el menú, personalizar sus pedidos y enviarlos directamente por WhatsApp. La aplicación es totalmente responsive y funciona perfectamente en dispositivos móviles.

## ✨ Características Implementadas

### 1. **Menú Digital Completo**
- ✅ Hamburguesas (30 variedades)
- ✅ Hot Dogs (13 variedades)
- ✅ Sincronizadas (5 variedades)
- ✅ Tortas y Burros (8 variedades)
- ✅ Bebidas (Coca-Cola y aguas frescas)

### 2. **Sistema de Personalización**
- ✅ Ingredientes extra con precios individuales
- ✅ Verduras incluidas (Jitomate, Cebolla, Chile) - seleccionables
- ✅ Aderezos incluidos (Crema, Mayonesa, Catsup, Mostaza) - seleccionables
- ✅ Campo de instrucciones especiales para cada producto
- ✅ Selector de cantidad (1-10 piezas)

### 3. **Carrito de Compras**
- ✅ Agregar productos rápidamente
- ✅ Vista detallada del carrito con cantidades y extras
- ✅ Eliminar productos del carrito
- ✅ Contador de productos en tiempo real
- ✅ Cálculo automático de totales

### 4. **Sistema de Pedidos**
- ✅ Opción de recoger en tienda o entrega a domicilio
- ✅ Formulario de datos del cliente (nombre, teléfono)
- ✅ Formulario de dirección para entregas (dirección, entre calles, colonia)
- ✅ Selector de zona con costo de envío automático:
  - Centro: $20
  - Zona Norte: $30
  - Zona Sur: $35
  - Zona Oriente: $40
  - Zona Poniente: $40

### 5. **Integración con WhatsApp**
- ✅ Envío automático del pedido al número +523111235595
- ✅ Formato detallado del mensaje con toda la información
- ✅ Incluye datos del cliente, dirección (si aplica), productos y totales
- ✅ Compatible con WhatsApp Web y móvil

### 6. **Diseño y UX**
- ✅ Interfaz moderna y atractiva con gradientes
- ✅ Totalmente responsive (móvil, tablet, desktop)
- ✅ Animaciones suaves y transiciones
- ✅ Iconos intuitivos para cada categoría
- ✅ Sistema de notificaciones para feedback al usuario

## 🚀 Funcionalidades Principales

### Navegación del Menú
1. Los usuarios pueden navegar entre categorías usando los botones superiores
2. Cada producto muestra su nombre, ingredientes y precio
3. Botón de "Agregar" rápido o click en el producto para personalizar

### Personalización de Productos
1. Al hacer click en un producto se abre un modal detallado
2. Se pueden agregar ingredientes extra (con costo adicional)
3. Las verduras y aderezos vienen marcados por defecto (sin costo)
4. Se puede especificar la cantidad de piezas
5. Campo para instrucciones especiales

### Proceso de Compra
1. Los productos se agregan al carrito con todas sus personalizaciones
2. El carrito muestra el resumen de productos con cantidades y extras
3. Al proceder al pedido, se elige entre recoger o entrega a domicilio
4. Se completan los datos necesarios según el tipo de entrega
5. El pedido se envía por WhatsApp con un solo click

## 📁 Estructura de Archivos
```
/
├── index.html           # Página principal con la estructura HTML
├── css/
│   └── style.css       # Estilos y diseño responsive
├── js/
│   ├── menu-data.js    # Base de datos del menú y precios
│   └── main.js         # Lógica de la aplicación
└── README.md           # Documentación del proyecto
```

## 🔧 Tecnologías Utilizadas
- **HTML5** - Estructura semántica
- **CSS3** - Estilos modernos con variables CSS y animaciones
- **JavaScript Vanilla** - Lógica sin dependencias externas
- **Font Awesome** - Iconos profesionales
- **Google Fonts** - Tipografías (Bebas Neue, Roboto)
- **WhatsApp API** - Integración para envío de pedidos

## 📱 Compatibilidad
- ✅ Chrome (Desktop y Móvil)
- ✅ Firefox
- ✅ Safari (iOS)
- ✅ Edge
- ✅ Opera

## 🎯 Próximos Pasos Recomendados

1. **Sistema de Pagos**
   - Integrar métodos de pago en línea
   - Mostrar opciones de pago (efectivo, tarjeta, transferencia)

2. **Gestión de Horarios**
   - Agregar horarios de servicio
   - Deshabilitar pedidos fuera de horario

3. **Sistema de Promociones**
   - Agregar códigos de descuento
   - Promociones por día de la semana

4. **Historial de Pedidos**
   - Guardar pedidos frecuentes
   - Opción de repetir pedidos anteriores

5. **Notificaciones**
   - Tiempo estimado de entrega
   - Estado del pedido

## 💡 Notas Importantes
- El número de WhatsApp está configurado como: +523111235595
- Los precios están en pesos mexicanos
- El sistema no procesa pagos, solo envía el pedido por WhatsApp
- Es necesaria conexión a internet para cargar las librerías CDN

## 🚀 Despliegue
Para hacer el sitio web accesible en línea, ve a la pestaña **Publish** donde puedes publicar tu proyecto con un solo click. La pestaña Publish manejará todo el proceso de despliegue automáticamente y te proporcionará la URL del sitio web en vivo.

## 📞 Contacto
**George Burger**  
WhatsApp: +52 311 123 5595

---
Desarrollado con ❤️ para George Burger