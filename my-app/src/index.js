import React from 'react';
import ReactDOM from 'react-dom';
import './sass/styles.scss';
import border from './assets/img/bordertop.png';
const borderline = {backgroundImage:`url(${border})` }

class Navigation extends React.Component{
  render() {
    return (
      <nav className="header-container container">
        <div className="header-wrap">
          <div className="header-icon">
            <div className="icon-wrap">
                <span className="menuIcon one"></span>
                <span className="menuIcon two"></span>
                <span className="menuIcon three"></span>
              </div>
            </div>
            <div className="border border-top border-left border-no-margin" style={borderline}></div>
            <div className="listItem logo-wrap">
              <div className="logo-img">
                <img src={require("./assets/img/logo-lg.png")} alt="Guardian logo"></img>
              </div>
            </div>
            <nav className="nav-container">
              <div className="nav">
                <ul className="list-ul">
                  <li className="listItem"></li>
                  <li className="listItem">News</li>
                  <li className="listItem">Perspective</li>
                  <li className="listItem">Business</li>
                  <li className="listItem"></li>
                  <li className="listItem">Sports</li>
                  <li className="listItem">LifeStyle</li>
                  <li className="listItem">Opinion</li>
                </ul>
              </div>
            </nav>
            <div className="border border-bottom-1 border-2" style={borderline}></div>
            <div className="border border-bottom-2 border-right border-no-margin" style={borderline}></div>
        </div>
      </nav>
    
    )
  }
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
              <li class="footer-li">About</li>
              <li class="footer-li">EDITORIAL POLICIES</li>
              <li class="footer-li">BECOME A SOURCE</li>
              <li class="footer-li">CONTACT</li>
              <li class="footer-li">SUBSCRIBE</li>
            </ul>
          </div>
          <div className="footer--list--col two">
            <ul className="footer--ul">
              <li class="footer-li">Terms of Use</li>
              <li class="footer-li">Privacy</li>
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
        <section className="headline">
          <Navigation/> 
          <div className="date-container">
            <div className="date-wrap">
              <p>{this.currentDate()}</p>
            </div>
          </div>
          <LeadStory/>
        </section>
        <TopStory />
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
