import { createBrowserRouter, Route, RouterProvider, createRoutesFromElements } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from './store/store.js'
import { routeArr } from './routes'
import './index.css'
import Main from './components/layouts/main/index.jsx'
import ErrorPage from './components/pages/error'

const router = createBrowserRouter(createRoutesFromElements(
  <>
    <Route
      path='/'
      element={<Main />}
      errorElement={<ErrorPage />}
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
