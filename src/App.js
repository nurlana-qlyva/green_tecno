import { routeArr } from './routes'
import { createBrowserRouter, Route, RouterProvider, createRoutesFromElements } from 'react-router-dom'
import Main from './components/layouts/main/Index'
import { Provider } from 'react-redux'
import store from './store/store.js'
import './index.css'

const router = createBrowserRouter(createRoutesFromElements(
  <>
    <Route
      path='/'
      element={<Main />}
      children={routeArr.map((route) => {
        return <Route
          key={route.path}
          path={route.path}
          element={route.element}
        />
      })}
    />
  </>
));

export default function App() {
  return (
    <>
      <Provider store={store}>
        <RouterProvider router={router} />
      </Provider>
    </>
  )
}
