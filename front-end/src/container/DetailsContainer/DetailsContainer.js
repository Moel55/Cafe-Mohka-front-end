
import React from 'react';
import './DetailsContainer.css';
import Details from '../../components/Details/Details';
import { Container } from 'semantic-ui-react';

class DetailsContainer extends React.Component {
    render() {
        let details = this.props.details.map((detail, index) => {
            return <Details title={detail.title} image={detail.image} body={detail.body} key={index} />
        })

        return(
            <div className="DetailsContainer">
                <h2>Ethiopia's Coffee Farm</h2>
            <Container textAlign='justified'>
                {details}
            </Container>
          </div>
        )
    }
}

export default DetailsContainer;