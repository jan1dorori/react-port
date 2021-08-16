import React from 'react';
import Footer from '../layout/Footer';
import Header from '../layout/Header';

// class 컴포넌트
class Main extends React.Component {
  render() {
    return(
      <div id="wrap">
        <Header />
        <main id="mainCont">
          <div className="main__cont">
            <div>WE PROVIDE</div>
            <div>VISUAL CODING</div>
            <div>SOLUTIONS</div>
            <div>FOR YOU WEB</div>
          </div>
        </main>
        <Footer />
      </div>
    )
  }
}

export default Main;