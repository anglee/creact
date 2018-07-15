import { combineReducers } from "redux";
import dataStore, * as fromDataStore from "./dataStore/dataStore";
export interface IState {
  dataStore: fromDataStore.IState;
}

export default combineReducers({
  dataStore,
});

export const selectors = {
  getData: (state: IState) => fromDataStore.getData(state.dataStore),
};
