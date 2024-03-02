import axios from "axios";
import { environment } from "../../environments/environment.development";
const base_url = environment.BASE_URL;

class BaseService {
  // Genereic Function for fetching data
  Fetch(url) {
    try {
      return axios.get(base_url + url);
    } catch (error) {
      throw new Error(error);
    }
  }

  //   Genereic function for posting data
  Post(url, model) {
    try {
      return axios.post(base_url + url, model);
    } catch (error) {
      throw new Error(error);
    }
  }

  //   Genereic function for deleting data
  Delete(url) {
    try {
      return axios.delete(base_url + url);
    } catch (error) {
      throw new Error(error);
    }
  }

  //   Genereic function for updating data
  Update(url, model) {
    try {
      return axios.put(base_url + url, model);
    } catch (error) {
      throw new Error(error);
    }
  }
}

export const BASE_SERVICE = new BaseService();
