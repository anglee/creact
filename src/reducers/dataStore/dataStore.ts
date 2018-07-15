import actionTypes from "../../actions/actionTypes";
import DataType from "../../types/enums/DataType";
import { IData } from "../../types/interfaces/IData";

export interface IState {
  data: IData;
}

const initialState: IState = {
  data: {
    id: -1,
    type: DataType.A,
    foo: ""
  }
};

export default function(state: IState = initialState, action: any): IState {
  switch (action.type) {
    case actionTypes.FETCH_DATA_SUCCESS:
      return {
        ...state,
        data: action.data
      };
    default:
      return state;
  }
}

export const getData = (state: IState) => state.data;
