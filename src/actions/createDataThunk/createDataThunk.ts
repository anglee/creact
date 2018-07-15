import { Dispatch } from "redux";
import { IState, selectors } from "../../reducers/root";
import api from "../../utils/api";
import apiDataToData from "../../utils/converters/apiDataToData";
import dataToApiData from "../../utils/converters/dataToApiData";
import actionTypes from "../actionTypes";

const createDataThunk = () => async (
  dispatch: Dispatch,
  getState: () => IState
) => {
  const data = selectors.getData(getState());
  const apiData = dataToApiData(data);
  dispatch({ type: actionTypes.CREATE_DATA_REQUEST });
  try {
    const response = await api.postData(apiData);
    if (response.status === 201) {
      dispatch({
        type: actionTypes.CREATE_DATA_SUCCESS,
        data: apiDataToData(apiData)
      });
    } else {
      dispatch({
        type: actionTypes.CREATE_DATA_FAILURE,
        error: response.error
      });
    }
  } catch (error) {
    console.error(error); // tslint:disable-line no-console
    dispatch({
      type: actionTypes.CREATE_DATA_FAILURE,
      error: error.message
    });
  }
};

export default createDataThunk;
