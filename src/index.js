import axios from "axios";

const execute = async (closure) => {
  try {
    const { data } = await closure;
    return data;
  } catch (error) {
    throw error;
  }
};

/**
 * Create instance
 * @param {Object} config - The configuration options for connecting with mongrel database
 * @param {string} config.database - The unique id of the database
 * @param {string} config.token - The API key of the database
 */
const mongrelDB = (config) => {
  const { database, token } = config;

  const axiosInstance = axios.create({
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
     * @param {string} key - The key to fetch data for
     */
    get: (key) => {
      return execute(axiosInstance.get("/package/" + key));
    },

    /**
     * Upsert record
     * @param {string} key - The key to update data for
     * @param {Object} data - The key-value pair to insert
     */
    put: (key, data) => {
      return execute(
        axiosInstance.put("/package/" + key, {
          value: data,
        })
      );
    },

    /**
     * Delete record
     * @param {string} key - The key to delete the record
     */
    delete: (key) => {
      return execute(axiosInstance.delete("/package/" + key));
    },
  };
};

export default mongrelDB;
