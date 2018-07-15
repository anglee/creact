import { IApiData } from "../types/interfaces/IApiData";
import commonUtils from "./commonUtils";

const api = {
  getData: async (): Promise<{
    status: number;
    data: IApiData;
  }> => {
    await commonUtils.delay(500);
    return {
      status: 200,
      data: {
        id: 12345,
        type: "a",
        foo: "bar"
      }
    };
  },
  postData: async (
    data: IApiData
  ): Promise<{
    status: number;
    error?: string;
  }> => {
    await commonUtils.delay(500);
    return {
      status: 201
    };
  }
};

export default api;
