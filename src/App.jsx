import './App.css'
import Banner from './Banner'
import Content from './Content'
import Footer from './Footer'
import Header from './Header'
import Hub from './Hub'
import MainBanner from './MainBanner'
import Slider from './Slider'
import StickyHeader from './StickyHeader'

const App = () => {

  return (
    <>
      <Header />
      <StickyHeader/>

      <Banner />
      <MainBanner />

      <Content />

      <Hub />

      <Slider />

    <Footer/>

    </>
  )
}

export default App
