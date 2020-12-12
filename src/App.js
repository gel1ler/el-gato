import React, { useState } from 'react'
import Header from './UI/Header/Header'
import Aux from './HOC/Auxiliary'
import Footer from './UI/Footer/Footer'
import Content from './Content/Content'

const App = () => {
  const [isScrolled, setScrolled] = useState(false)
  let flag = false
  let height = window.outerHeight * 0.5
  const scroller = () => {
    if (!flag && window.pageYOffset > height) {
      flag = true
      setScrolled(true)
    }
    if (flag && window.pageYOffset < height) {
      flag = false
      setScrolled(false)
    }
  }
  window.onscroll = scroller

  return (
    <Aux>
      <style jsx global>{
        `
      body {
        margin: 0px;
        overflow-x: hidden;
      }
      `
      }</style>
      <div className="App">
        <Header
          scrolled={isScrolled}
        />
        <Content />
        <Footer />
      </div>
    </Aux>
  )
  
}

export default App;
