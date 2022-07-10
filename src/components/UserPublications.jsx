import moment from "moment";
import { useEffect, useState } from "react";

import {
  addPublication,
  getPublicationsByUser,
} from "../services/publicationService";

const UserPublications = ({ profile }) => {
  //Init states
  const [publications, setPublications] = useState([]);
  const [newPublication, setNewPublication] = useState("");

  //Init useEffects from first render and update
  useEffect(() => {
    getPublicationsByUser(profile._id).then((res) => setPublications(res.data));
  }, []);
  const loadPublications = () => {
    getPublicationsByUser(profile._id).then((res) => {
      setPublications(res.data.publicationsByUser);
    });
  };
  useEffect(() => {
    loadPublications();
  }, [profile]);

  /**
   * Handle submit
   */
  const handleSubmit = () => {
    addPublication(profile._id, newPublication).then(() => {
      setNewPublication("");
      loadPublications();
    });
  };
  return (
    <div className="p-4">
      <textarea
        className="textarea is-warning is-rounded p-3"
        placeholder="Warning textarea"
        onChange={(ev) => setNewPublication(ev.target.value)}
        value={newPublication}
      />
      <button className="button is-warning mt-3 mb-5" onClick={handleSubmit}>
        Envoyer
      </button>
      {publications.length &&
        publications.map((publication) => (
          <>
            <p className="title is-7 mb-0">
              {moment(publication.createDate).format("MMMM Do YYYY, h:mm:ss a")}
            </p>
            <div className="content">{publication.content}</div>
          </>
        ))}
    </div>
  );
};
export default UserPublications;
