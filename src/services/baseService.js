import axios from "axios";
import { environment } from "../../environments/environment.development";
import GetToken from "../utilis/AppAuth";

class BaseService {
  // Axios intance
  Axios = axios.create({
    baseURL: environment.BASE_URL,
    headers: {
      Authorization: `Bearer ${GetToken()}`,
    },
  });

  // Generic Function for fetching data
  Fetch(url) {
    try {
      return this.Axios.get(url);
    } catch (error) {
      throw new Error(error);
    }
  }

  //   Generic function for posting data
  Post(url, model) {
    try {
      return this.Axios.post(url, model);
    } catch (error) {
      throw new Error(error);
    }
  }

  //   Generic function for deleting data
  Delete(url) {
    try {
      return this.Axios.delete(+ url);
    } catch (error) {
      throw new Error(error);
    }
  }

  //   Generic function for updating data
  Update(url, model) {
    try {
      return this.Axios.put(url, model);
    } catch (error) {
      throw new Error(error);
    }
  }
}

export const BASE_SERVICE = new BaseService();
