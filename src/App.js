import { routeArr } from './routes'
import { createBrowserRouter, Route, RouterProvider, createRoutesFromElements } from 'react-router-dom'
import Main from './components/layouts/main/Index'
import Errorpage from './components/core/error-page'
import { Provider } from 'react-redux'
import store from './store/store.js'
import './index.css'

const router = createBrowserRouter(createRoutesFromElements(
  <>
    <Route
      path='/'
      element={<Main />}
      errorElement={<Errorpage />}
      children={routeArr.map((route) => {
        return <Route
          key={route.path}
          path={route.path}
          element={route.element}
        ></Route>
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
