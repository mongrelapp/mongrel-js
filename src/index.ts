import axios, { AxiosInstance, AxiosResponse } from "axios";

export interface ConfigOptions {
  database: string;
  token: string;
}

const execute = async (closure: Promise<AxiosResponse<any>>) => {
  try {
    return await closure;
  } catch (error) {
    throw new Error(error);
  }
};

const MongrelDB = (config: ConfigOptions) => {
  const { database, token } = config;

  const axiosInstance: AxiosInstance = axios.create({
    baseURL: "https://my.mongrel.app/api/v1",
    headers: {
      accept: "application/json",
      "X-API-KEY": token,
      "X-DATABASE-ID": database,
    },
  });

  return {
    /**
     * Get single record
     */
    get: (key: string) => {
      return execute(axiosInstance.get("/package/" + key));
    },

    /**
     * Upsert record
     */
    put: (key: string, data: Record<string, any>) => {
      return execute(
        axiosInstance.put("package/" + key, {
          value: data,
        })
      );
    },

    /**
     * Delete record
     */
    delete: (key: string, data: Record<string, any>) => {
      return execute(axiosInstance.delete("/package/" + key));
    },
  };
};

export default MongrelDB;
