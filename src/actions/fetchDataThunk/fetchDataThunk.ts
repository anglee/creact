import { Dispatch } from "redux";
import api from "../../utils/api";
import apiDataToData from "../../utils/converters/apiDataToData";
import actionTypes from "../actionTypes";

const fetchDataThunk = () => async (dispatch: Dispatch) => {
  dispatch({ type: actionTypes.FETCH_DATA_REQUEST });
  try {
    const { data: apiData } = await api.getData();
    dispatch({
      type: actionTypes.FETCH_DATA_SUCCESS,
      data: apiDataToData(apiData)
    });
  } catch (error) {
    console.error(error); // tslint:disable-line no-console
    dispatch({
      type: actionTypes.FETCH_DATA_FAILURE,
      error: error.message
    });
  }
};

export default fetchDataThunk;
