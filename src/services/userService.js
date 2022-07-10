import { axiosCreator } from "../utils/configureApi";

/**
 * Load users
 * @returns {Promise}
 */
export const getUsers = () => {
  return new Promise((resolve, reject) => {
    axiosCreator
      .get("/allUsers")
      .then((res) => resolve(res))
      .catch((err) => reject(err()));
  });
};

/**
 * Load profile by id
 * @param {number} id 
 * @returns {Promise}
 */
export const getProfile = (id) => {
  return new Promise((resolve, reject) => {
    axiosCreator
      .get("/myProfile/" + id)
      .then((res) => resolve(res))
      .catch((err) => reject(err()));
  });
};