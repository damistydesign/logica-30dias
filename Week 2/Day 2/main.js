//  idea más o menos
//  un arreglo vacío de productos
//  un objeto con los productos y sus IDs   
//  luego de forma dinámica mapeamos el objeto de productos y lo desplegamos en el contenedor de productos
//  luego, al hacer click, se agrega el producto al arreglo de productos
//  en el arreglo de productos mapeamos para que se muestre dinámicamente
//  escuchamos cuando se haga click en el botón de eliminar el producto
//  vamos al id del padre (el elemento producto) y filtramos en el arreglo producto aquellos que tengan un ID diferente del producto que estamos filtrando, son con los que nos vamos a quedar

// contenedor de productos
const containerList = document.getElementById('productsContainer');

// carrito
const cartList = document.getElementById('cart');

// container carrito
const cartContainer = document.getElementById('cart__visible');

const productsJson = [
    {
        title: 'Celular',
        price: 5000,
        id: 1
    },
    {
        title: 'Televisión',
        price: 8200,
        id: 2
    },
    {
        title: 'Laptop',
        price: 10.000,
        id: 3
    },
    {
        title: 'Tablet',
        price: 3500,
        id: 4
    },
    {
        title: 'Reloj Inteligente',
        price: 1200,
        id: 5
    }
]

const products = [];

const handleAddProduct = (event) => {
    let product = event.target.parentElement;
    let siblingProduct = event.target.previousElementSibling.innerText;

    products.push({
        title: siblingProduct,
        id: product.id
    })

    updateCart();
}


productsMapped = productsJson.map( (product) => {
    return `<div class='card' id='${product.id}'>
                <strong>
                    ${product.title} - $${product.price}
                </strong>
                <button onclick='handleAddProduct(event)'>
                    Añadir al carrito
                </button>
            </div>`
})

containerList.innerHTML += productsMapped.join('');

const handleRemove = (event) => {
    const productToRemove = event.target.parentElement.parentElement.id;
    const productIndex = products.findIndex((product) => product.id === productToRemove)

    if(productIndex !== -1){
        console.log(productIndex)
        products.splice(productIndex, 1)
    }
    
    updateCart()
}

let updateCart = () => 
    {
        cartList.innerHTML = '';
        let cartProducts = products.map((product) => {
        return `<li id='${product.id}'>
            <strong>
                ${product.title}
            </strong>
            <button onclick='handleRemove(event)'>
                <svg width="30" height="30">
                <g transform="translate(0,-289.0625)">
                    <path
                        style="opacity:1;fill:#000000;fill-opacity:1;stroke:none;stroke-width:0.5;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
                        d="M 25.607422 4.3925781 L 4.3925781 25.607422 L 5.8066406 27.021484 L 9.1210938 23.707031 A 2 2 0 0 0 10.988281 25 A 2 2 0 0 0 12.988281 23 A 2 2 0 0 0 11.697266 21.130859 L 12.828125 20 L 22.988281 20 L 22.988281 18 L 14.828125 18 L 16.828125 16 L 20.488281 16 C 21.042281 16 21.234967 15.4927 21.488281 15 L 24.955078 8.2578125 C 25.019878 8.1317781 25.022638 7.9880711 24.984375 7.84375 L 27.021484 5.8066406 L 25.607422 4.3925781 z M 4.9882812 5 L 4.9882812 7 L 6.4042969 7 L 10.429688 14.904297 L 9.0996094 17.664062 C 9.0235414 17.82199 9.0056559 17.990239 9.0117188 18.160156 L 20.171875 7 L 8.6503906 7 L 7.6328125 5 L 5.9882812 5 L 5.3867188 5 L 4.9882812 5 z M 20.988281 21 A 2 2 0 0 0 18.988281 23 A 2 2 0 0 0 20.988281 25 A 2 2 0 0 0 22.988281 23 A 2 2 0 0 0 20.988281 21 z "
                        transform="translate(0,289.0625)"
                        id="path824" />
                </g>
                </svg>
            </button>
        </li>`
    })
    
    cartList.innerHTML += cartProducts.join('');

    if (products.length) {
    cartContainer.classList.add('visible');
    } else {
        cartContainer.classList.remove('visible');
    }
} 
