import React from 'react';
import PropTypes from 'prop-types';
import Card from 'react-bootstrap/Card';
import Spinner from 'react-bootstrap/Spinner';


class MediaCard extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            items: [],
            loading:false
        }
    }
    componentDidMount() {
        fetch('http://saral.navgurukul.org/api/courses')
        .then(res => res.json())
        .then(json => {
            this.setState({
            items: json.availableCourses
            });
        }).catch((error)=>{
            console.log(error);
        })
    }   
    render() {
        const { items,loading } = this.state
        return (
            <div>
              <h2 className="heading">Aap yeh courses mein enroll kar skte hai</h2>
              {loading?<div>
                {items? items.map((item => (
                  <Card >
                    <Card.Img variant="top" src={item.logo} className="course-img"/>
                    <Card.Body>
                      <Card.Title>{item.name}</Card.Title>
                      <Card.Text>
                      {item.shortDescription}
                      {console.log(item.shortDescription) }
                      </Card.Text>
                    </Card.Body>
                  </Card>
                )
                )):null}
            </div>:<Spinner animation="border" role="status">
                     <span className="sr-only">Loading...</span>
                   </Spinner>
            }
            </div>
        );
    }
}

MediaCard.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default (MediaCard);