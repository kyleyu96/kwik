import React, { Fragment, Component } from "react";
import { Route, HashRouter } from "react-router-dom";
import HomeContainer from "../containers/HomeContainer";

class App extends Component {
	render() {
		return (
			<HashRouter>
				<Fragment>
					<Route exact path="/" component={HomeContainer} />
				</Fragment>
			</HashRouter>
		);
	}
}

export default App;
