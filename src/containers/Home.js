import React, { Component } from 'react'
import FirstImage from '../components/accueil/FirstImage';
import TextBox from '../components/accueil/TextBox';
import SecondImage from '../components/accueil/SecondImage';
import ThirdImage from '../components/accueil/ThirdImage';
import FourthImage from '../components/accueil/FourthImage';
import FifthImage from '../components/accueil/FifhtImage';


class Accueil extends Component {
  render() {
    return (
      <div>
      <FirstImage/>
      <TextBox/>
      <SecondImage/>
      <TextBox/>
      <ThirdImage/>
      <TextBox/>
      <FourthImage/>
      <TextBox/>
      <FifthImage/>
      </div>
    )
  }
}

export default Accueil;