import React from 'react';
import 'semantic-ui-css/semantic.min.css';
//import Nav from '../Nav/Nav'
import Header from '../Header/Header';
import images from '../../images/production_beans.jpeg';
import Images from '../../images/Coffee_Beans.jpeg';
//import { Image } from 'react-native';
import DetailsContainer from '../../container/DetailsContainer/DetailsContainer';

class Landing extends React.Component {

  render () {
    return (
      <div className="Landing">
        <Header />
        <DetailsContainer details={[
          {
            title: 'Coffee Production In Ethiopia',
            image: <img src={images} alt=""/>,
            body: "is a longstanding tradition which dates back to dozens of centuries. Ethiopia is where Coffea arabica, the coffee plant, originates. The plant is now grown in various parts of the world; Ethiopia itself accounts for around 3% of the global coffee market. Coffee is important to the economy of Ethiopia; around 60% of foreign income comes from coffee, with an estimated 15 million of the population relying on some aspect of coffee production for their livelihood. In 2006, coffee exports brought in $350 million, equivalent to 34% of that year's total exports"
          },
          {
            title: "Ethiopian Coffee Beans",
            image: <img src={Images} alt=""/>,
            body: "of the species Coffea arabica can be divided into three categories: Longberry, Shortberry, and Mocha. Longberry varieties consist of the largest beans and are often considered of the highest quality in both value and flavour. Shortberry varieties are smaller than the Longberry beans but, are considered a high grade bean in Eastern Ethiopia where it originates. Also the Mocha variety is a highly prized commodity. Mocha Harars are known for their peaberry beans that often have complex chocolate, spice and citrus notes."
          },
          // {
          //   title: "Regional Varieties",
          //   body: "Ethiopian coffee beans that are grown in either the Harar, Yirgacheffe or Limu regions are kept apart and marketed under their regional name. These regional varieties are trademarked names with the rights owned by Ethiopia."
          // }
        ]}/>
      </div>
    );
  }
}

export default Landing;