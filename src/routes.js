import Home from './views/home'
import Products from './views/products'
import Discount from './views/discount'
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
    discounts: routeItem(text.greentecno_discounts, '/endirimlər', <Discount />)
}

const routeArr = Object.values(routes)

export {
    routes,
    routeArr
}
