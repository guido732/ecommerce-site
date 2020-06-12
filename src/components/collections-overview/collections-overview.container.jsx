// Redux
import { compose } from "redux";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectCollectionsForPreview } from "redux/shop/shop.selectors";
import { selectIsCollectionFetching } from "redux/shop/shop.selectors";
// Components
import WithSpinner from "components/with-spinner/with-spinner.component";
import CollectionsOverview from "components/collections-overview/collections-overview.component";

const mapStateToProps = createStructuredSelector({
	isLoading: selectIsCollectionFetching,
	collections: selectCollectionsForPreview,
});

const CollectionsOverviewContainer = compose(connect(mapStateToProps), WithSpinner)(CollectionsOverview);

export default CollectionsOverviewContainer;
