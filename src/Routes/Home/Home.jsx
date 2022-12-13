import React, { useEffect, useState } from 'react'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import Main from '../../components/Main/Main'
import Backtotop from '../../components/BacktoTop/Backtotop'
import Banner from '../../components/banner/Banner'

const Home = () => {
  const [isbacktotop, setIsbacktotop] = useState(false)

  return (
    <div>
      <Header />
      <Banner/>
      <Main />
      {isbacktotop && (<Backtotop />)}
      <Footer />
    </div>

  )
}

export default Home