import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import actionCreators from "../../../../actions/actionCreators";
import { IState, selectors } from "../../../../reducers/root";
import ViewDataPage from "./ViewDataPage";

const mapStateToProps = (state: IState, ownProps: any) => {
  const { history } = ownProps;
  const data = selectors.getData(state);
  return {
    data,
    history,
  };
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    onInitialize: async () => {
      dispatch(actionCreators.initialize());
      await dispatch(actionCreators.fetchData());
    },
    onRefresh: async () => {
      await dispatch(actionCreators.fetchData());
    },
  };
};

const ConnectedViewDataPage = connect(
  mapStateToProps,
  mapDispatchToProps
)(ViewDataPage);

export default withRouter(ConnectedViewDataPage);
