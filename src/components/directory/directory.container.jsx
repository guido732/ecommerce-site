// Redux
import { compose } from "redux";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectDirectorySections } from "redux/directory/directory.selectors";
// Components
import Directory from "./directory.component";

const mapStateToProps = createStructuredSelector({
	sections: selectDirectorySections,
});

const DirectoryContainer = compose(connect(mapStateToProps))(Directory);

export default DirectoryContainer;
