import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Card from "react-bootstrap/Card";
import StarRatingComponent from 'react-rating-stars-component';
import './MovieCard.css';

const Movie = ({el }) => {
  return (
    <Card style={{ width: "25rem",backgroundColor:"linen" }} >
      <Card.Img variant="top" src={el.posterURL} className="car" style={{marginTop:"5px",marginRight:"3px"}}/>
      <Card.Body>
        <Card.Title>{el.title}</Card.Title>
        <Card.Text>{el.description}</Card.Text>
        <StarRatingComponent
                starCount={7}
                value={el.rate}
                edit={false}
                size={30}
            />    
              </Card.Body>
    </Card>
  );
};

export default Movie;