import Home from './views/home'
import Products from './views/products'
import ProductDetail from './components/pages/product-detail'
import Discount from './views/discount'
import text from './text.json'

const routeItem = (title, path, element, child=null) => {
    return {
        title,
        path,
        element,
        child
    }
}

const routes = {
    home: routeItem(text.greentecno_homepage, '/', <Home />),
    products: routeItem(text.greentecno_products, '/məhsullar', <Products />),
    discounts: routeItem(text.greentecno_discounts, '/endirimlər', <Discount />, <ProductDetail />)
}

const routeArr = Object.values(routes)

export {
    routes,
    routeArr
}
