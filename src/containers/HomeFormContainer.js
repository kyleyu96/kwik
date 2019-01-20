import { connect } from "react-redux";
import HomeForm from "../components/HomeForm";
import { addUser, setCurrentUser } from "../actions";

const mapStateToProps = (state, ownProps) => ({
	users: state.database.users
});

const mapDispatchToProps = dispatch => ({
	addUser: (id, userInfo) => dispatch(addUser(id, userInfo)),
	setCurrentUser: user => dispatch(setCurrentUser(user))
});

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(HomeForm);
