import React, { Component } from "react";
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button
} from 'reactstrap';
import "../App.css";


class Home extends Component {
  render() {
    return (
    
      <div className="condiv home">
        <label className="label_css">Search:</label>
        <input type="text"></input>
        <button type="submit" className="button_style">
          Validate
        </button>
      
        <div  class="flex-container">
    <div> 
    <Card className="card">
    <img  className="imgcard" src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQZjbMDrbYnaxVrnKJV28Q4T0ghPXPK_8ywHSRl7kolInGeGA2A" alt="Card image cap" ></img>
    <CardBody>
      <CardTitle className="cardtitle">image 1</CardTitle>
      <CardSubtitle className="cardtitle">Card subtitle</CardSubtitle>
      <CardText className="cardtext">Some quick example </CardText>
    </CardBody>
  </Card> </div>

  <div> 
    <Card>
    <img   className="imgcard" top src="https://previews.123rf.com/images/tadeas21/tadeas211701/tadeas21170100128/70340514-servir-par-le-joueur-de-tennis-professionnel-tennis-servir-%C3%A0-l-int%C3%A9rieur-de-la-salle-de-tenis-man-on-.jpg" alt="Card image cap" ></img>
    <CardBody>
      <CardTitle className="cardtitle"> image 2</CardTitle>
      <CardSubtitle className="cardtitle">subtitle2</CardSubtitle>
      <CardText className="cardtext">Some quick example </CardText>
    </CardBody>
  </Card> </div>

  <div> 
    <Card>
    <img  className="imgcard" top src="https://static.lpnt.fr/images/2018/05/11/14815130lpw-14815127-article-jpg_5233592.jpg" alt="Card image cap" ></img>
    <CardBody>
      <CardTitle className="cardtitle">image 3</CardTitle>
      <CardSubtitle className="cardtitle">sub 2</CardSubtitle>
      <CardText className="cardtext">Some quick example </CardText>
    </CardBody>
  </Card> </div>
  
       </div>

       

      </div>
         
    




    );
  }
}
export default Home;
