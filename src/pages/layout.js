import Footer from '@/components/Footer/Footer';
import Header from '@/components/Header/Header';
import React, { Suspense } from 'react'

const Layout = ({children})=>{
    return (
        <div className="layout" >
          <Header />
          <div className="main">
            {children}
          </div>
          
          <Footer />
        </div>
      );
}

export default Layout;