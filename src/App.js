import React, {Component} from 'react';
import HashRouter from 'react-router-dom/es/HashRouter';
import Route from 'react-router-dom/es/Route';
import Switch from 'react-router-dom/es/Switch';
import Main from './components/main';
import Menu from './components/menu'
import CreatePDF from './components/createPDF';
import Testing from './components/Testing/testing';
import NotFound from './components/notfound';
import './App.css';


class App extends Component {
	render() {
		return (<HashRouter>
				<div className="container">
					<Menu />
					<Switch>
						<Route exact path="/" component={Main}/>
						<Route path="/create" component={CreatePDF}/>
						<Route path="/testing" component={Testing}/>
						<Route path="*" component={NotFound}/>
					</Switch>
				</div>
			</HashRouter>);
	}
}


export default App;
