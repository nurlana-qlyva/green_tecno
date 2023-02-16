import { Outlet } from 'react-router'
import Header from './../header'

export default function Main() {
  return (
    <>
        <Header />
        <Outlet />
    </>
  )
}
