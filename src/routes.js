import Home from './views/home'
import Products from './views/products'
import ProductDetail from './components/pages/product-detail'
import Discount from './views/discount'
import ShoppingBagPage from './components/pages/shopping-bag'
import text from './text.json'

const routeItem = (title, path, element) => {
    return {
        title,
        path,
        element
    }
}

const routes = {
    home: routeItem(text.greentecno_homepage, '/', <Home />),
    products: routeItem(text.greentecno_products, '/məhsullar', <Products />),
    productDetail: routeItem(text.greentecno_products, '/məhsullar/:productId', <ProductDetail />),
    discounts: routeItem(text.greentecno_discounts, '/endirimlər', <Discount />),
    shoppingBag: routeItem(text.greentecno_shopping_bag, '/səbət', <ShoppingBagPage />)
}

const routeArr = Object.values(routes)

export {
    routes,
    routeArr
}
