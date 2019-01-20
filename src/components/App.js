import React, { Fragment, Component } from "react";
import { Route, Redirect, Switch } from "react-router-dom";
import ReqForm from "./ReqForm";

class App extends Component {
	render() {
		return (
			<ReqForm
				user={{
					email: "irene.zhang@icloud.com",
					first_name: "irene",
					last_name: "zhang",
					address: "3600 av du parc, montreal, QC, Canada",
					potal_code: "H2X 2J1",
					credit_card: "000000000000",
					phone_number: "514000000"
				}}
			/>
		);
	}
}

export default App;
