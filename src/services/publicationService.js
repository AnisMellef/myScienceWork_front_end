import { axiosCreator } from "../utils/configureApi";

/**
 * Load all publications by user
 * @param {number} userId 
 * @returns {Promise}
 */
export const getPublicationsByUser = (userId) => {
  return new Promise((resolve, reject) => {
    axiosCreator
      .get("/allPublicationsByUser/" + userId)
      .then((res) => resolve(res))
      .catch((err) => reject(err()));
  });
};

/**
 * Add new publication api
 * @param {number} userId 
 * @param {string} content 
 * @returns {Promise}
 */
 export const addPublication = (userId, content) => {
  return new Promise((resolve, reject) => {
    axiosCreator
      .post("/publicationsByUser/" + userId, { content })
      .then((res) => resolve(res))
      .catch((err) => reject(err()));
  });
};
