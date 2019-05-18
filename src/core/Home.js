import React from 'react';
import Posts from "../post/Posts";

const Home = () => (
	<div>
		<div className="jumbotron text-center">
			<h2>Home</h2>
			<p className="lead">Welcome to React FrontEnd </p>
		</div>	
		<div className="container">
	        <Posts />
	    </div>
	</div>
);

export default Home;