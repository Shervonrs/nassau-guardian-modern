import React from 'react';
import ReactDOM from 'react-dom';
import './sass/styles.scss';
import border from './assets/img/bordertop.png';
const borderline = {backgroundImage:`url(${border})` }

class Logo extends React.Component{
  constructor(props){
    super(props);
    this.toggleClass = this.toggleClass.bind(this);
    this.state = {
      active: false,
    };
  }
  toggleClass(){
    const currentState = this.state.active
    this.setState({active:!currentState});    
  }



  

  render() {

    return (
      <section className="logo-container">
        <button className="nav-button homepage-button" onClick={this.toggleClass} >
          <span className="Icon"></span>
          <span className="Icon"></span>
          <span className="Icon"></span>
        </button>
        <div className ={this.state.active ? 'menu-drop-down active' : 'menu-drop-down'}>
          <div className="menu--container">
            <div className="dropdown--container">
              <a className="menu--logo" href="#">
                <div className="logo-wrap">
                  <img src={require("./assets/img/main-logo.png")} alt="Guardian logo"></img>
                </div>
              </a> 
              <div className="menu-close-btn" onClick={this.toggleClass}></div>
              <div className="list--container">
                <ul className="menu-ul">
                  <li className="menu--item">News</li>
                  <li className="menu--item">National Review</li>
                  <li className="menu--item">Perspective</li>
                  <li className="menu--item">Business</li>
                  <li className="menu--item">Sports</li>
                </ul>
                <ul className="menu-ul">
                  <li className="menu--item">Opinion</li>
                  <li className="menu--item">Religion</li>
                  <li className="menu--item">LifeStyle</li>
                  <li className="menu--item">Radio</li>
                  <li className="menu--item">Obituary</li>
                  <li className="menu--item">Subscribe</li>
                </ul>
                <ul className="menu-ul">
                  <li className="menu--item">About</li>
                  <li className="menu--item">Contact</li>
                  <li className="menu--item">Staff</li>
                  <li className="menu--item">Careers</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <a className="homepage--logo" href="#">
          <div className="logo-wrap">
            <img src={require("./assets/img/logo.svg")} alt="Guardian logo"></img>
          </div>
        </a> 
      </section>
    )
  }
}

class Hero extends React.Component{

  render(){
    
    let headerTitle = '', headerImg ='', headerAuthor = '', thirdTitle = '', thirdImg ='', thirdAuthor = '', thirdContent ='';
    let firstImg = '', firstTitle = '', firstAuthor = '', firstContent = '', secondImg = '', secondTitle = '', secondAuthor = '', secondContent = '';
    let secFImg = '', secFTitle= '', secFAuthor='', secSImg = '', secSTitle ='', secSAuthor = '', secTImg ='', secTTitle = '', secTAuthor;
    let secFoImg ='', secFoTitle ='', secFoAuthor ='';

    this.props.top.map((item, k) => {
      if(k === 0) {
        item.hero.map((content, d) =>{
          headerImg= content.img;
          headerTitle = content.title;
          headerAuthor =content.author;         
        }); 
      } else if(k === 1) {
        item.primCol.map((content, pos) =>{
          if(pos === 0) {
            firstImg = content.img;
            firstTitle = content.title
            firstAuthor = content.author
            firstContent = content.content
          } else if (pos === 1) {
            secondImg = content.img;
            secondTitle = content.title
            secondAuthor = content.author
            secondContent = content.content
          } else if (pos === 2) {
            thirdImg = content.img;
            thirdTitle = content.title
            thirdAuthor = content.author
            thirdContent = content.content
          }
          
        }); 
      } else if(k === 2) {
        item.secCol.map((content, pos) =>{
          if(pos === 0) {
            secFImg = content.img;
            secFTitle = content.title;
            secFAuthor = content.author;            
          } else if (pos === 1){
            secSImg = content.img;
            secSTitle = content.title;
            secSAuthor = content.author;
          } else if (pos === 2){
            secTImg = content.img;
            secTTitle = content.title;
            secTAuthor = content.author;
          } else if (pos === 3){
            secFoImg = content.img;
            secFoTitle = content.title;
            secFoAuthor = content.author;
          } 
        }); 
      }   
    });

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
                        {headerImg}
                    </picture>
                  </div>
                </div>
              </div>
            </div>
            <div className="heroTopStories-contentContainer">
              <div className="heroTop-heading">
                <h1 className="hero-title-container">
                  <span className="hero-title">{headerTitle}</span>
                </h1>
                <div className="hero--author--container">
                  <span className="hero--author-layer">
                    <span>{headerAuthor}</span>
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
                        <picture className="element-picture">{firstImg}</picture>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="primary--container--text-block">
                  <div className="primary--text--container">
                    <h3 className="block--title--text container">
                      <span className="title-text">{firstTitle}</span>
                    </h3>
                    <div className="author--text--container">
                      <div className="author--wrapper">
                        <span className="author--span-text"><span className="author--name"></span>{firstAuthor}</span>
                      </div>
                    </div>
                    <p className="primary--text--content summary">{firstContent}</p>
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
                        <picture className="element-picture">{secondImg}</picture>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="primary--container--text-block block">
                  <div className="primary--text--container">
                    <h3 className="block--title--text container">
                      <span className="title-text">{secondTitle}</span>
                    </h3>
                    <div className="author--text--container">
                      <div className="author--wrapper">
                        <span className="author--span-text"><span className="author--name"></span>{secondAuthor}</span>
                      </div>
                    </div>
                    <p className="primary--text--content summary">{secondContent}</p>
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
                        <picture className="element-picture">{thirdImg}</picture>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="primary--container--text-block">
                  <div className="primary--text--container">
                    <h3 className="block--title--text container ">
                      <span className="title-text">{thirdTitle}</span>
                    </h3>
                    <div className="author--text--container">
                      <div className="author--wrapper">
                        <span className="author--span-text"><span className="author--name"></span>{thirdAuthor}</span>
                      </div>
                    </div>
                    <p className="primary--text--content summary">{thirdContent}</p>
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
                              <picture className="image--container">{secFImg}</picture>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="secondary--text--block">
                      <h4 className="secondary--title title">
                        <span>{secFTitle}</span>
                      </h4>
                      <div className="author--text--container">
                        <span className="author--span-text"><span className="author--name"></span>{secFAuthor}</span>
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
                              <picture className="image--container">{secSImg}</picture>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="secondary--text--block">
                      <h4 className="secondary--title title">
                        <span>{secSTitle}</span>
                      </h4>
                      <div className="author--text--container">
                        <span className="author--span-text"><span className="author--name"></span>{secSAuthor}</span>
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
                              <picture className="image--container">{secTImg}</picture>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="secondary--text--block">
                      <h4 className="secondary--title title">
                        <span>{secTTitle}</span>
                      </h4>
                      <div className="author--text--container">
                        <span className="author--span-text"><span className="author--name"></span>{secTAuthor}</span>
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
                              <picture className="image--container">{secFoImg}</picture>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="secondary--text--block">
                      <h4 className="secondary--title title">
                        <span>{secFoTitle}</span>
                      </h4>
                      <div className="author--text--container">
                        <span className="author--span-text"><span className="author--name"></span>{secFoAuthor}</span>
                      </div>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="border border-bottom" style={borderline}></div>
      </header>
    )
  }
}

class NewsSection extends React.Component {
  render() {
    let header = "", headerImg = "", headerLead = "", headerAuthor = "";
    let topTitle = "", topImg = "", topAuthor ="", middleTitle = "", middleImg = "", middleAuthor ="", lastTitle = "", lastImg = "", lastAuthor ="";
    this.props.perspective.map((content, i) => {
      if( i === 0) {
        header = content.header;
        headerImg = content.img;
        headerLead = content.lead;
        headerAuthor = content.author 
      } else if (i === 1) {
        topTitle = content.title;
        topImg = content.img;
        topAuthor = content.author;
      }else if (i === 2) {
        middleTitle = content.title;
        middleImg = content.img;
        middleAuthor = content.author;
      } else if (i === 3) {
        lastTitle = content.title;
        lastImg = content.img;
        lastAuthor = content.author;
      }
    })
  
    
    return (
      <section className="news--section--container">
        <div className="container--title">
          <h1>{header}</h1>
        </div>
        <div className="story--container">
          <div className="story--wrapper">
            <div className="main--column">
              <div className="main--img--container">{headerImg}</div>
              <div className="main--title--container">
                <h1 className="main--title">
                  <span className="title">{headerLead}</span>
                </h1>
                <div className="writer-container">
                  <span className="sub--author">{headerAuthor}</span>
                </div>
              </div>
            </div>
            <div className="secondary--column">
              <div className="secondary--sub--container one">
                <div className="sub--img--container">{topImg}</div>
                <div className="sub--content--container">
                  <div className="sub--content--title">
                    <h4>
                      <span className="sub--title">{topTitle}</span>
                    </h4>
                  </div>
                  <div className="writer-container">
                    <span className="sub--author">{topAuthor}</span>
                  </div>
                </div>
              </div>
              <div className="secondary--sub--container two">
                <div className="sub--img--container">{middleImg}</div>
                <div className="sub--content--container">
                  <div className="sub--content--title">
                    <h4>
                      <span className="sub--title">{middleTitle}</span>
                    </h4>
                  </div>
                  <div className="writer-container">
                    <span className="sub--author">{middleAuthor}</span>
                  </div>
                </div>
              </div>
              <div className="secondary--sub--container three">
                <div className="sub--img--container">{lastImg}</div>
                <div className="sub--content--container">
                  <div className="sub--content--title">
                    <h4>
                      <span className="sub--title title">{lastTitle}</span>
                    </h4>
                  </div>
                  <div className="writer-container">
                    <span className="sub--author">{lastAuthor}</span>
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
                <span className="title">Radio</span>
              </h1>
            </div>
            <div className="spacer--container"></div>
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
            <div className="border border-bottom" style={borderline}></div>
            <div className="container--title">
              <h1 className="video--title">
                <span className="title">Video</span>
              </h1>
            </div>
            <div className="spacer--container"></div>
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
            </div>
          </div>
          <div className="secondary--video--container">
            <div className="filler--container container--title">
              <h1>hh</h1>
            </div>
            <div className="spacer--container"></div>
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
        <div className="border border-bottom lower" style={borderline}></div>

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
              <span className="copy--right">&copy; THE NASSAU GUARDIAN. ALL RIGHTS RESERVED</span>
            </div>
          </div>
          <div className="footer--list--col one">
            <ul className="footer--ul">
              <li className="footer-li">ABOUT</li>
              <li className="footer-li">EDITORIAL POLICIES</li>
              <li className="footer-li">BECOME A SOURCE</li>
              <li className="footer-li">CONTACT</li>
              <li className="footer-li">SUBSCRIBE</li>
            </ul>
          </div>
          <div className="footer--list--col two">
            <ul className="footer--ul">
              <li className="footer-li">TERMS OF USE</li>
              <li className="footer-li">PRIVACY</li>
            </ul>
          </div>
        </div>
      </section>
    )
  }
}

const CONTENT = [
  {
    Perspective : [ 
      {
        header : 'Perspective',
        img :<img src={require("./assets/img/cruise.jpg")} alt="Carnival Cruise"></img>,
        lead: 'Carnival is Among Major Cruise Lines That Have Suspended Operations From U.S.',
        author:'Jane Doe',
      },
      {
        title: 'The Long Road Home',
        img: <img src={require("./assets/img/road.jpg")} alt="Winding Road"></img>,
        author: 'Jane Doe, Lew Doe',
     },
      {
        title: 'Politicans and Their Finances',
        img: <img src={require("./assets/img/money.jpg")} alt="Money"></img>,
        author: 'Jane Doe'

      },
      {
        title: 'Stand for Something',
        img:  <img src={require("./assets/img/protest.jpg")} alt="People Protesting"></img>,
        author: 'Jane Doe'
      }
    ]
  },
  {
    Business: [
        {
          header :'Business',
          lead: 'European Commission blacklists The Bahamas',
          img: <img src={require("./assets/img/euCom.jpg")} alt="European Commission"></img>,
          author: 'Chester Robards'
          
        },
        {
          title : 'First Draft of Economic Recovery Committee Almost Complete',
          img: <img src={require("./assets/img/bank.jpg")} alt="Bank"></img>,
          author: 'Paige McCartney'
        },
        {
          title : 'Caricom Predicts Delay in Power Plant Construction',
          img: <img src={require("./assets/img/powerplant.jpg")} alt="Bank"></img>,
          author: 'Paige McCartney'
        },
        {
          title : 'State-Owned Enterprises will Become Bigger Burderns amid COVID-19, notes DPM',
          img: <img src={require("./assets/img/containers.jpg")} alt="Shipping Containers"></img>,
          author: 'Paige McCartney'
        }
      ]
  },
  {
    NationalReview: [
        {
          header :'National Review',
          lead: 'Ghost Town: Downtown Sidewalk nearly Deserted',
          img: <img src={require("./assets/img/closed.jpg")} alt="European Commission"></img>,
          author: 'Candia Dames'
          
        },
        {
          title : 'Bahamian Project Remains in Limbo as Crown Land Conflict Unresolved ',
          img: <img src={require("./assets/img/crownland.jpg")} alt="Bank"></img>,
          author: 'Candia Dames'
        },
        {
          title : 'Bracing for Impact',
          img: <img src={require("./assets/img/stall.jpg")} alt="Bank"></img>,
          author: 'Candia Dames'
        },
        {
          title : 'Allowing Democracy to Work',
          img: <img src={require("./assets/img/flag.jpg")} alt="Shipping Containers"></img>,
          author: 'Paige McCartney'
        }
      ]
  },
  {
    Sports: [
        {
          header :'Sports',
          lead: 'MSUM names Shyrone Kemp Newcomer of the Year',
          img: <img src="https://www.msumdragons.com/images/2020/3/11/shy2.png" alt="European Commission"></img>,
          author: 'Simba French'
          
        },
        {
          title : 'FINA 2021 World Championships postponed to 2022',
          img: <img src={require("./assets/img/swimming.jpg")} alt="Bank"></img>,
          author: 'Simba French'
        },
        {
          title : "Mingoes student-athletes still cautiously optimistic",
          img: <img src="https://www.ub.edu.bs/wp-content/uploads/2017/05/Harry-C-Moore-Library-and-Information-Centre.jpg" alt="Bank"></img>,
          author: 'Simba French'
        },
        {
          title : 'Turnquest named an ITA All-American',
          img: <img src="https://i0.wp.com/ewnews.com/wp-content/uploads/2019/09/Joshua-Turnquest5.jpg?fit=1143%2C803&ssl=1" alt="Shipping Containers"></img>,
          author: 'Simba French'
        }
      ]
  },
  {
    LifeStyle: [
        {
          header :'LifeStyle',
          lead: 'Technology Teacher Excited to Use Online Platform to Educate Students',
          img: <img src={require("./assets/img/zoom.jpg")} alt="European Commission"></img>,
          author: 'Shavaughn Moss'
          
        },
        {
          title : 'John Watling’s Distillery’s Bahamian-made Hand Sanitizers Hit the Market',
          img: <img src={require("./assets/img/sanitizer.jpg")} alt="Bank"></img>,
          author: 'Shavaughn Moss'
        },
        {
          title : 'In Midst of COVID-19 Outbreak, Diabetics Urged to Control Blood Glucose',
          img: <img src={require("./assets/img/diabetes.jpg")} alt="Bank"></img>,
          author: 'Shavaughn Moss'
        },
        {
          title : 'Friends of the Blood Bank chairman encourages blood donations',
          img: <img src={require("./assets/img/bloodDrive.jpg")} alt="Shipping Containers"></img>,
          author: 'The Nassau Guardian'
        }
      ]
  }

]
  



const TOPSTORIES = [
  { hero: 
    [
      { 
        img: <img src= {require('./assets/img/hospital-bed/care-640.jpg')} atl='Hosptial Bed'></img>, title: 'Five New Cases of Covid-19' , author: 'Jane Doe',
      }
    ] 
  },
  { primCol:
    [
      {
        img: <img className="primary-pic" src="https://pbs.twimg.com/media/EUuOh7SXgAEJlgN?format=jpg&name=medium" atl="PM Minnis"></img>,
        title: 'Ministry of Health moving to conduct rapid testing of COVID-19',
        author: 'Jane Doe',
        content:'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.'
      },
      {
        img: <img className="primary-pic" src={require("./assets/img/govhouse.jpg")} alt="Government House"></img>,
        title: 'State of emergency extended to April 30',
        author: 'Jane Doe',
        content: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.'
      },
      {
        img: <img className="primary-pic" src={require("./assets/img/hardware.jpg")} alt="Hardware Store"></img>,
        title: 'PM Announces Hardware, Auto-parts Stores Allowed to Open',
        author: 'Jane Doe',
        content: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.'
  
      }
    ]

  },
  { secCol:
    [
      {
        img: <img className="secondary-pic" src={require("./assets/img/exuma.jpg")} alt="Satellite Image of Exuma"></img>,
        title: 'Man Killed in Exuma Boating Accident',
        author: 'John Doe',
      },
      {
        img: <img className="secondary-pic" src={require("./assets/img/shopping.jpg")} alt="Grocery Store"></img>,
        title: 'Food Stores Extend Hours',
        author: 'John Doe',
      },
      {
        img: <img className="secondary-pic" src={require("./assets/img/covid.jpg")} alt="Picture of Covid-19 Virus"></img>,
        title: 'Data Reveals Covid-10 Links',
        author: 'Jane Doe',
      },
      {
        img: <img className="secondary-pic" src={require("./assets/img/davis.jpg")} atl="Deputy PM Phillip Davis"></img>,
        title: 'Davis Expelled from House',
        author: 'Jane Doe',
      }
    ]
  }
]

class Main extends React.Component {
  currentDate = () => {
    const date = new Date();
    let currDate = {weekday: 'long', month: "long" , day:'numeric', year: 'numeric'};
    return  date.toLocaleString('en-US', currDate);
  }  

  render() {
    // console.log(CONTENT);
       
    return (
      <main className="main">
        <Logo />
        <section className="hero--container">
          <Hero top={this.props.top}/> 
          {/* <div className="date-container">
            <div className="date-wrap">
              <p>{this.currentDate()}</p>
            </div>
          </div> */}
        </section>
        <NewsSection perspective={CONTENT[0].Perspective}/>
        <Video />
        <NewsSection perspective={CONTENT[1].Business}/>
        <NewsSection perspective={CONTENT[2].NationalReview}/>
        <NewsSection perspective={CONTENT[3].Sports}/>
        <NewsSection perspective={CONTENT[4].LifeStyle}/>

        <Footer />
      </main>

    )
  }
}


ReactDOM.render (
  <Main top={TOPSTORIES}/>,
  document.getElementById('root')
);
