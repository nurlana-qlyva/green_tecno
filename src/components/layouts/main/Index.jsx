import { Outlet } from 'react-router'
import Header from '../header'

const Main = () => {
  return (
    <>
        <Header />
        <Outlet />
    </>
  )
}

export default Main
