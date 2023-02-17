import Header from "../../layouts/header"
import image from './../../../assets/media/notfound.svg'

export default function Errorpage() {
    return (
        <>
            <Header />
            <main className="not-found">
                <img src={image} alt="green tecno" />
                <h2>Səhifə tapılmadı</h2>
            </main>
        </>
    )
}
