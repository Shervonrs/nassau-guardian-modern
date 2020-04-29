import React from 'react';
import ReactDOM from 'react-dom';
import './sass/styles.scss';
import border from './assets/img/bordertop.png';
// import background from './assets/img/facemask.jpg'
const borderline = {backgroundImage:`url(${border})` }

class Logo extends React.Component{
  render() {
    return (
      <section className="logo-container">
        <button className="nav-button homepage-button">
          <span className="Icon"></span>
          <span className="Icon"></span>
          <span className="Icon"></span>
        </button>
        <a className="homepage--logo" href="#">
          <div className="logo-wrap">
            <img src={require("./assets/img/logo.svg")} alt="Guardian logo"></img>
          </div>
        </a> 
      </section>
    )
  }
}

function Hero () {
    return (
      <header className="header-container">
        <div className="heroContainer">
          <a className="hero--link" href="#">
            <div className="herotopStories-img">
              <div className="heroTopStories-layer">
                <div className="heroTopStories--imageSpacer"></div>
                <div className="image--spacer-div">
                  <div className="responsive-image-container">
                    <div className="responsiveImg--spacer"></div>
                    <picture className="hero-image">
                      <source media="(min-width: 1240px)" srcSet={require('./assets/img/hospital-bed/care-1920.jpg')}></source>
                      <source media="(min-width: 800px)" srcSet={require('./assets/img/hospital-bed/care-1280.jpg')}></source>
                      <img src={require("./assets/img/hospital-bed/care-640.jpg")} alt="Guardian logo"></img>
                    </picture>
                  </div>
                </div>
              </div>
            </div>
            <div className="heroTopStories-contentContainer">
              <div className="heroTop-heading">
                <h1 className="hero-title-container">
                  <span className="hero-title">FIVE NEW CASES OF COVID-19</span>
                </h1>
                <div className="hero--author--container">
                  <span className="hero--author-layer">
                    <span>Jane Doe</span>
                  </span>
                </div>
              </div>
            </div>
          </a>
        </div>
        <div className="navigation-bar--container">
          <nav className="navigation-list-container">
            <ul className="navBarCatergories">
              <li className="navBarItem"><a href="#" className="navBarLink">News</a></li>
              <li className="navBarItem"><a href="#" className="navBarLink">Perspective</a></li>
              <li className="navBarItem"><a href="#" className="navBarLink">Business</a></li>
              <li className="navBarItem"><a href="#" className="navBarLink">Sports</a></li>
              <li className="navBarItem"><a href="#" className="navBarLink">LifeStyle</a></li>
              <li className="navBarItem"><a href="#" className="navBarLink">Opinion</a></li>
            </ul>
            <ul className="navBarButtons">
              <li className="navBarButtonItem"><a href="#" className="navBarButtonLink secondary"><span>About</span></a></li>
              <li className="navBarButtonItem"><a href="#" className="navBarButtonLink primary"><span>Subscribe</span></a></li>
            </ul>
          </nav>
        </div>
        <div className="top--stories--container">
          <div className="top--stories--wrapper">
            <h2>Top Stories</h2>
            <div className="top-stories-primaryList">
              <a href="#" className="primary--container">
                <div className="primary--container--img">
                  <div className="primary-layer--container">
                    <div className="primary-layer-one"></div>
                    <div className="primary-layer-two">
                      <div className="responsiveContainer">
                        <div className="responsive-spacer"></div>
                        <picture className="element-picture">
                          <img className="primary-pic" src="https://pbs.twimg.com/media/EUuOh7SXgAEJlgN?format=jpg&name=medium"></img>
                        </picture>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="primary--container--text-block">
                  <div className="primary--text--container">
                    <h3 className="block--title--text container">
                      <span className="title-text">
                        Ministry of Health moving to conduct rapid testing of COVID-19
                      </span>
                    </h3>
                    <div className="author--text--container">
                      <div className="author--wrapper">
                        <span className="author--span-text"><span className="author--name">Jane Doe</span></span>
                      </div>
                    </div>
                    <p className="primary--text--content summary">
                      Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt
                      ut labore et dolore magna aliquyam erat, sed diam voluptua.
                    </p>
                  </div>
                </div>
              </a>
              <a href="#" className="primary--container">
                <div className="primary--container--img">
                  <div className="primary-layer--container">
                    <div className="primary-layer-one"></div>
                    <div className="primary-layer-two">
                      <div className="responsiveContainer">
                        <div className="responsive-spacer"></div>
                        <picture className="element-picture">
                          <img className="primary-pic" src={require("./assets/img/govhouse.jpg")} alt="Guardian logo"></img>
                        </picture>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="primary--container--text-block block">
                  <div className="primary--text--container">
                    <h3 className="block--title--text container">
                      <span className="title-text">
                        State of emergency extended to April 30
                      </span>
                    </h3>
                    <div className="author--text--container">
                      <div className="author--wrapper">
                        <span className="author--span-text"><span className="author--name">Jane Doe</span></span>
                      </div>
                    </div>
                    <p className="primary--text--content summary">
                      Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt
                      ut labore et dolore magna aliquyam erat, sed diam voluptua.
                    </p>
                  </div>
                </div>
              </a>
              <a href="#" className="primary--container">
                <div className="primary--container--img">
                  <div className="primary-layer--container">
                    <div className="primary-layer-one"></div>
                    <div className="primary-layer-two">
                      <div className="responsiveContainer">
                        <div className="responsive-spacer"></div>
                        <picture className="element-picture">
                          <img className="primary-pic" src={require("./assets/img/hardware.jpg")} alt="Guardian logo"></img>
                        </picture>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="primary--container--text-block">
                  <div className="primary--text--container">
                    <h3 className="block--title--text container ">
                      <span className="title-text">
                      ‘PM Announces Hardware, Auto-parts Stores Allowed to Open’                      </span>
                    </h3>
                    <div className="author--text--container">
                      <div className="author--wrapper">
                        <span className="author--span-text"><span className="author--name">Jane Doe</span></span>
                      </div>
                    </div>
                    <p className="primary--text--content summary">
                      Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt
                      ut labore et dolore magna aliquyam erat, sed diam voluptua.
                    </p>
                  </div>
                </div>
              </a>
            </div>
            <div className="top-stories-secondaryList">
              <div className="secondary--container">
                <div className="secondaryContainer-Item">
                  <a href ="#" className="secondaryContainer-item-link">
                    <div className="secondary--image--block">
                      <div className="secondary-layer">
                        <div className="secondary-layer-one"></div>
                        <div className="secondary-layer-two">
                          <div className="secondary-responsive-image">
                            <div className="responsive-image--spacer">
                              <picture className="image--container">
                               <img className="secondary-pic" src={require("./assets/img/exuma.jpg")} alt="Guardian logo"></img>
                              </picture>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="secondary--text--block">
                      <h4 className="secondary--title title">
                        <span>Man Killed in Exuma boating accident</span>
                      </h4>
                      <div className="author--text--container">
                        <span className="author--span-text"><span className="author--name">Jane Doe</span></span>
                      </div>
                    </div>
                  </a>
                </div>
                <div className="secondaryContainer-Item">
                  <a href ="#" className="secondaryContainer-item-link">
                    <div className="secondary--image--block">
                      <div className="secondary-layer">
                        <div className="secondary-layer-one"></div>
                        <div className="secondary-layer-two">
                          <div className="secondary-responsive-image">
                            <div className="responsive-image--spacer">
                              <picture className="image--container">
                               <img className="secondary-pic" src={require("./assets/img/shopping.jpg")} alt="Guardian logo"></img>
                              </picture>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="secondary--text--block">
                      <h4 className="secondary--title title">
                        <span>Food Stores Extend Hours</span>
                      </h4>
                      <div className="author--text--container">
                        <span className="author--span-text"><span className="author--name">Jane Doe</span></span>
                      </div>
                    </div>
                  </a>
                </div>
                <div className="secondaryContainer-Item">
                  <a href="#" className="secondaryContainer-item-link">
                    <div className="secondary--image--block">
                      <div className="secondary-layer">
                        <div className="secondary-layer-one"></div>
                        <div className="secondary-layer-two">
                          <div className="secondary-responsive-image">
                            <div className="responsive-image--spacer">
                              <picture className="image--container">
                               <img className="secondary-pic" src={require("./assets/img/covid.jpg")} alt="Guardian logo"></img>
                              </picture>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="secondary--text--block">
                      <h4 className="secondary--title title">
                        <span>Data Reveals Covid-19 Links</span>
                      </h4>
                      <div className="author--text--container">
                        <span className="author--span-text"><span className="author--name">Jane Doe</span></span>
                      </div>
                    </div>
                  </a>
                </div>
                <div className="secondaryContainer-Item">
                  <a href ="#" className="secondaryContainer-item-link">
                    <div className="secondary--image--block">
                      <div className="secondary-layer">
                        <div className="secondary-layer-two"></div>
                          <div className="secondary-responsive-image">
                            <div className="responsive-image--spacer">
                              <picture className="image--container">
                               <img className="secondary-pic" src="http://bahamaspress.com/wp-content/uploads/2018/02/Brave-Davis.jpg"alt="Guardian logo"></img>
                              </picture>
                            </div>
                          </div>
                      </div>
                    </div>
                    <div className="secondary--text--block">
                      <h4 className="secondary--title title">
                        <span>Davis Expelled from House</span>
                      </h4>
                      <div className="author--text--container">
                        <span className="author--span-text"><span className="author--name">Jane Doe</span></span>
                      </div>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    )
}

class LeadStory extends React.Component {
  render() {
    return (
      <div className="lead-story">
        <div className="lead-content">
          <div className="lead-title">
           <h1 className="title-item">‘PM Announces Hardware, Auto-parts Stores Allowed to Open’</h1>
          </div>
          <ul className="lead-text">
            <li>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.</li>
            <li>At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.</li>
            <li>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.</li>
          </ul>
        </div>
        <div className="lead-img">
          <img src={require("./assets/img/pm-Minnis.jpg")} alt="Guardian logo"></img>
        </div>
      </div>
    )
  }
}

class TopStory extends React.Component {
  render() {
    return (
      <section className="top--story--container">
        <div className="border border-top" style={borderline}></div>
        <div className="container--title">
          <h1>TOP STORIES</h1>
        </div>
        <div className="story--container">
          <div className="story--outer--layer one">
            <div className="story--wrap one">
              <div className="story--img-container">
                <img src={require("./assets/img/pm-mic.jpg")} alt="Pm Standing at Podium"></img>
              </div>
              <div className="story--content-container">
                <article>
                  <div className="story--text--container">
                    <div className="story--title--wrap">
                      <h2 className="story--title">Green Light to Reopen</h2>
                    </div>
                    <div className="story--content--container">
                      <p className="story--content">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.</p>
                    </div>
                  </div>
                </article>
              </div>
            </div>
          </div>

          <div className="story--outer--layer two">
            <div className="story--wrap two">
              <div className="story--img-container">
                <img src={require("./assets/img/covid-test.jpg")} alt="Positive Covid Vile"></img>
              </div>
              <div className="story--content-container">
                <article>
                  <div className="story--text--container">
                    <div className="story--title--wrap">
                      <h2 className="story--title">Two More Cases Drive Count to 60</h2>
                    </div>
                    <div className="story--content--container">
                      <p className="story--content">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.</p>
                    </div>
                  </div>
                </article>
              </div>
            </div>
          </div>

          <div className="story--outer--layer three">
            <div className="story--wrap three">
              <div className="story--img-container">
                <img src={require("./assets/img/davis.jpg")} alt="Deputy PM Davis"></img>
              </div>
              <div className="story--content-container">
                <article>
                  <div className="story--text--container">
                    <div className="story--title--wrap">
                      <h2 className="story--title">A Study in Confusion</h2>
                    </div>
                    <div className="story--content--container">
                      <p className="story--content">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.</p>
                    </div>
                  </div>
                </article>
              </div>
            </div>
          </div>

        </div>
        <div className="border border-bottom" style={borderline}></div>
      </section>
    )
  }
}

class NewsSection extends React.Component {
  render() {
    return (
      <section className="news--section--container">
        <div className="container--title">
          <h1>PERSPECTIVE</h1>
        </div>
        <div className="story--container">
          <div className="story--wrapper">
            <div className="main--column">
              <div className="main--img--container">
              <img src={require("./assets/img/cruise.jpg")} alt="Carnival Cruise"></img>
              </div>
              <div className="main--title--container">
                <h1 className="main--title">
                  <span className="title">Carnival is among major cruise lines that have suspended operations from U.S.</span>
                </h1>
                <div className="writer-container">
                  <span className="sub--author">Jane Doe</span>
                </div>
              </div>
            </div>
            <div className="secondary--column">
              <div className="secondary--sub--container one">
                <div className="sub--img--container">
                  <img src={require("./assets/img/parliament.jpg")} alt="Parlament"></img>
                </div>
                <div className="sub--content--container">
                  <div className="sub--content--title">
                    <h4>
                      <span className="sub--title">Politicians and Their Finances</span>
                      {/* <span className="sub--content">amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut</span> */}
                    </h4>
                  </div>
                  <div className="writer-container">
                    <span className="sub--author">Jane Doe, Lew Doe</span>
                  </div>
                </div>
              </div>
              <div className="secondary--sub--container two">
                <div className="sub--img--container">
                  <img src={require("./assets/img/parliament.jpg")} alt="Parlament"></img>
                </div>
                <div className="sub--content--container">
                  <div className="sub--content--title">
                    <h4>
                      <span className="sub--title">Politicians and Their Finances</span>
                      {/* <span className="sub--content">amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut</span> */}
                    </h4>
                  </div>
                  <div className="writer-container">
                    <span className="sub--author">Jane Doe</span>
                  </div>
                </div>
              </div>
              <div className="secondary--sub--container three">
                <div className="sub--img--container">
                  <img src={require("./assets/img/parliament.jpg")} alt="Parlament"></img>
                </div>
                <div className="sub--content--container">
                  <div className="sub--content--title">
                    <h4>
                      <span className="sub--title">Politicians and Their Finances</span>
                      {/* <span className="sub--content">amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut</span> */}
                    </h4>
                  </div>
                  <div className="writer-container">
                    <span className="sub--author">Jane Doe</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="border border-bottom" style={borderline}></div>
        </div>
      </section>
    )
  }
}

class Video extends React.Component {
  render() {
    return (
      <section className="media--container">
        <div className="media--column">
          <div className="radio--container">
            <div className="container--title">
              <h1 className="radio--title">
                <span className="title">RADIO</span>
              </h1>
            </div>
            <div className="radio--content--wrapper">
              <div className="radio--layer one">
                <div className="img--container">
                  <img src={require("./assets/img/dwight.jpg")} alt="Dwight Radio Personality"></img>
                </div>
                <div className="radio--content-container">
                  <div className="radio--content--title">
                    <h3 className="radio--content--header">
                      <span className="radio--title">Morning Blend w/ Dwight Strachan</span>
                    </h3>
                  </div>
                  <div className="time--slot--container">
                    <h3 className="time--slot--header">
                      <span className="time--slot">6AM to 9AM</span>
                    </h3>
                  </div>
                </div>
              </div>

              <div className="radio--layer two">
                <div className="img--container">
                  <img src={require("./assets/img/michelle.png")} alt="Dwight Radio Personality"></img>
                </div>
                <div className="radio--content-container">
                  <div className="radio--content--title">
                    <h3 className="radio--content--header">
                      <span className="radio--title">The Paradigm Shift w/ Michelle Malcolm</span>
                    </h3>
                  </div>
                  <div className="time--slot--container">
                    <h3 className="time--slot--header">
                      <span className="time--slot">10AM to 12AM</span>
                    </h3>
                  </div>
                </div>
              </div>
        
            </div>
          </div>
          <div className="video--container">
            <div className="container--title">
              <h1 className="video--title">
                <span className="title">VIDEO</span>
              </h1>
            </div>
            <div className="video--wrapper">
              <div className="primary--video--container">
                <div className="primary--wrapper">
                  <div className="video--wrap">
                    <video controls className="primary-video video">
                      <source src="https://tng-video.s3.amazonaws.com/FMN+Town+Meeting2+-+Jan+23%2C+2020.mp4" type="video/mp4"></source>
                    </video>
                  </div>
                  <div className="prim--video--title">
                    <h3 className="prim--title--container">
                      <span className="prim--title">Minnis Launches Re-election Campaign</span>
                    </h3>
                  </div>
                </div>
              </div>
              <div className="secondary--video--container">
                <div className="secondary--wrapper">
                  <div className="video-container one">
                    <div className="sub-video-container">
                      <video controls className="sub-video">
                        <source src="https://tng-video.s3.amazonaws.com/PMH+REPORT+-+Jan+20%2C+2020.mp4"></source>
                      </video>
                    </div>
                    <div className="sub-video-title">
                      <h3 className="sub--title--container">
                        <span className="sub--title">PMH Prospective Redevelopment Plan</span>
                      </h3>
                    </div>
                  </div>

                  <div className="video-container two">
                    <div className="sub-video-container">
                      <video controls className="sub-video">
                        <source src="https://tng-video.s3.amazonaws.com/Philip+Davis+-+Bahamasair+-+Jan+3%2C+2020.mp4"></source>
                      </video>
                    </div>
                    <div className="sub-video-title">
                      <h3 className="sub--title--container">
                        <span className="sub--title">Davis: Minnis administration Dropped the Ball on Bahamasair</span>
                      </h3>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </section>
    )
  }
}

class Footer extends React.Component {
  render() {
    return (
      <section className="footer--container">
        <div className="footer--content-wrapper">
          <div className="footer--logo--container">
            <div className="footer--logo">
              <img src={require("./assets/img/main-logo.png")} alt="Guardian logo"></img>
            </div>
            <div className="copy--right--container">
              <span className="copy--right">&copy; FIRST LOOK MEDIA. ALL RIGHTS RESERVED</span>
            </div>
          </div>
          <div className="footer--list--col one">
            <ul className="footer--ul">
              <li className="footer-li">About</li>
              <li className="footer-li">EDITORIAL POLICIES</li>
              <li className="footer-li">BECOME A SOURCE</li>
              <li className="footer-li">CONTACT</li>
              <li className="footer-li">SUBSCRIBE</li>
            </ul>
          </div>
          <div className="footer--list--col two">
            <ul className="footer--ul">
              <li className="footer-li">Terms of Use</li>
              <li className="footer-li">Privacy</li>
            </ul>
          </div>
        </div>
      </section>
    )
  }
}


class Main extends React.Component {
  currentDate = () => {
    const date = new Date();
    let currDate = {weekday: 'long', month: "long" , day:'numeric', year: 'numeric'};
    return  date.toLocaleString('en-US', currDate);
  }  

  render() {
    return (
      <main className="main">
        <Logo />
        <section className="hero--container">
          <Hero/> 
          <div className="date-container">
            <div className="date-wrap">
              <p>{this.currentDate()}</p>
            </div>
          </div>
        </section>
        <NewsSection />
        <Video />
        <Footer />
      </main>

    )
  }
}


ReactDOM.render (
  <Main />,
  document.getElementById('root')
);
