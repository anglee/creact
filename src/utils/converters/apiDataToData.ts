import DataType from "../../types/enums/DataType";
import { IApiData } from "../../types/interfaces/IApiData";
import { IData } from "../../types/interfaces/IData";

const convertDataType = (apiDataType: string): DataType => {
  switch (apiDataType) {
    case "a":
      return DataType.A;
    case "b":
      return DataType.B;
  }

  throw new Error(`Unknown data type ${apiDataType}`);
};

const apiDataToData = (apiData: IApiData): IData => ({
  id: apiData.id,
  type: convertDataType(apiData.type),
  foo: apiData.foo
});

export default apiDataToData;
