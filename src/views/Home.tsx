import React from 'react'
import styled from 'styled-components'
import Header from '../component/header'
import Content from '../component/content'
import Footer from '../component/footer'
const H1Custom = styled.h1`
  color: red;
`;

const Home: React.FC = () => {
  return (
    <>
      <header>
        <Header />
      </header>
      <Content />
      <footer>
        <Footer></Footer>
      </footer>
    </>
  )
}

export default Home;