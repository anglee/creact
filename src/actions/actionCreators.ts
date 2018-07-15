import actionTypes from "./actionTypes";
import createDataThunk from "./createDataThunk/createDataThunk";
import fetchDataThunk from "./fetchDataThunk/fetchDataThunk";

export default {
  createData: () => createDataThunk(),
  fetchData: () => fetchDataThunk(),
  initialize: () => ({
    type: actionTypes.INITIALIZE
  }),
};