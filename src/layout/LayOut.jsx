
import { Header } from '../components/Header/Header'
import { Footer } from '../components/Footer/Footer'
import { Router } from '../routes/Router'

export const LayOut = () => {
  return (
    <>
    <Header/>
    <main>
        <Router/>
    </main>
    <Footer/>
    </>
  )
}
