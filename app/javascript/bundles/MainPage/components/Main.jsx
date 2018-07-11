import React from 'react';
import Header from './Header';
import Asidebar from './Asidebar';
import Footer from './Footer';
import Controlsidebar from './Controlsidebar';
export default class Main extends React.Component{


  render (){
    return (
        <div>
            <Header />
            <Asidebar />
            <div className="content-wrapper">
            </div>
            <Footer />
            <Controlsidebar />
        </div>
    )
  }
}
