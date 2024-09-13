import React, { Fragment } from 'react'
import Head from '../Header/Head'
import Footer from '../Footer/Footer'
import Routers from '../../routers/Routers'

const Layout = () => {
  return <Fragment>
    <Head />
    <div>
        <Routers />
    </div>
    <Footer />
  </Fragment>
}

export default Layout
