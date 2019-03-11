import React from 'react';
import { Route } from 'react-router-dom';
import Menu from 'components/Menu';
import { 
	Home, 
	About,
	Posts
} from 'pages';

const App = () => {
	return (
		<div>
			<Menu />
			<Route exact path="/" component={Home} />
			<Route path="/about/:name?" component={About} />
			<Route path="/posts" component={Posts} />
		</div>
	);
};

export default App;