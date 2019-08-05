import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'
import { HomeHeader, Banner, BannerButton } from '../utils'
import img from '../images/bcg/homeBcg.jpeg'
import QuickInfo from '../components/HomePageComponents/QuickInfo'
import Gallery from '../components/HomePageComponents/Gallery'
import Menu from '../components/HomePageComponents/Menu'
const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`jamaican food`, `jamaican music`, `huntsville`]} />
    <HomeHeader img={img}>
      <Banner 
      title="M&K" 
      subtitle="2501 C Jordan Lane
                Huntsville, AL 35816">
        <Link to="/menu/" style={{ textDecoration: 'none' }}>
          <BannerButton style={{ margin: '2rem auto' }}>menu</BannerButton>
        </Link>
      </Banner>
    </HomeHeader>
    <QuickInfo />
    <Gallery />
    <Menu />
  </Layout>
)

export default IndexPage
