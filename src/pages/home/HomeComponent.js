import React, { Component } from "react";
import Header from "../../components/header/Header";
import { Helmet } from "react-helmet";
import Greeting from "../../containers/greeting/Greeting";
import Skills from "../../containers/skills/Skills";
import Footer from "../../components/footer/Footer";
import TopButton from "../../components/topButton/TopButton";

class Home extends Component {
  render() {
    return (
      <div>
      <Helmet>
          <title>Sourabh Lowanshi - Developer Portfolio</title>
          <meta name="description" content="Sourabh Lowanshi's portfolio showcasing web development skills, projects, and experience." />
          <meta name="keywords" content="Sourabh Lowanshi, developer, portfolio, React, web development" />
          <meta property="og:title" content="Sourabh Lowanshi - Developer Portfolio" />
          <meta property="og:description" content="Explore Sourabh Lowanshi's portfolio for web development projects, skills, and professional experience." />
          <meta property="og:image" content="URL-to-your-image.jpg" />
          <meta property="og:url" content="https://sourabhportfoliobharlay.vercel.app" />
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content="Sourabh Lowanshi - Developer Portfolio" />
          <meta name="twitter:description" content="Explore Sourabh Lowanshi's portfolio for web development projects, skills, and professional experience." />
          <meta name="twitter:image" content="URL-to-your-image.jpg" />
        </Helmet>
        <Header theme={this.props.theme} />
        <Greeting theme={this.props.theme} />
        <Skills theme={this.props.theme} />
        <Footer theme={this.props.theme} />
        <TopButton theme={this.props.theme} />
      </div>
    );
  }
}

export default Home;
