import text from './text.json'
import Home from './views/home'
import Products from './views/products'
import ProductDetail from './components/pages/product-detail'
// import Discount from './views/discount'
import Cart from './components/pages/cart'


const routeItem = (title, path, element) => {
    return {
        title,
        path,
        element
    }
}

const routes = {
    home: routeItem(text.greentecno_homepage, '/', <Home />),
    products: routeItem(text.greentecno_products, '/products', <Products />),
    productDetail: routeItem(text.greentecno_products, '/products/:productId', <ProductDetail />),
    // discounts: routeItem(text.greentecno_discounts, '/endirimlər', <Discount />),
    cart: routeItem(text.greentecno_shopping_bag, '/cart', <Cart />)
}

const routeArr = Object.values(routes)

export {
    routes,
    routeArr
}
