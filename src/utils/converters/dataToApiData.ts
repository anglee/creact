import DataType from "../../types/enums/DataType";
import { IApiData } from "../../types/interfaces/IApiData";
import { IData } from "../../types/interfaces/IData";

const convertDataType = (dataType: DataType): string => {
  switch (dataType) {
    case DataType.A:
      return "a";
    case DataType.B:
      return "b";
  }

  throw new Error(`Unknown data type ${dataType}`);
};

const dataToApiData = (data: IData): IApiData => ({
  id: data.id,
  type: convertDataType(data.type),
  foo: data.foo
});

export default dataToApiData;
