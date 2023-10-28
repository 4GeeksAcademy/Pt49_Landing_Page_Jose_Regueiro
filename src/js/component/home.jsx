import React from "react";
import Jumbotron from "./jumbotron.jsx";
import Card from "./card.jsx";
import Newnavbar from "./newnavbar.jsx";
import Footer from "./footer.jsx";


//create your first component
const Home = () => {
	return (
		<> 
		<Newnavbar />
		<div className="container">
		<Jumbotron />
		<div className="cards_row">
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
	  </div>
	  <Footer/>
	  </>
   
	);
};

export default Home;
