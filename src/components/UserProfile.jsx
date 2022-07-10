import { socialNetworkCodes } from "../utils/constant";

const UserProfile = ({ profile }) => {
  return (
    <div className="row p-2">
      <p className="title is-6 mb-1 mt-2 ml-2">Prénom</p>
      <div className="columns">
        <div className="column is-6">
          <input
            className="input is-warning is-rounded my-2"
            type="text"
            defaultValue={profile.prenom}
            placeholder="Warning input"
          />
        </div>
      </div>
      <p className="title is-6 mb-1 mt-2 ml-2">Nom</p>
      <div className="columns">
        <div className="column is-6">
          <input
            className="input is-warning is-rounded my-2"
            type="text"
            placeholder="Warning input"
            defaultValue={profile.nom}
          />
        </div>
      </div>
      <p className="title is-6 mb-1 mt-2 ml-2">About me</p>
      <textarea
        className="textarea is-warning is-rounded"
        placeholder="Warning textarea"
        defaultValue={profile.about}
      />
      <p className="title is-6 mb-1 mt-5 ml-2">Social Ids</p>
      <div className="columns">
        <div className="column is-5">
          <input
            className="input is-warning is-rounded my-2"
            type="text"
            placeholder="Warning input"
            defaultValue={profile.nom}
          />
        </div>
        <div className="column is-2">
          <div className="select is-rounded is-warning mt-2">
            <select>
              <option value={socialNetworkCodes.LinkedIn}>LinkedIn</option>
              <option value={socialNetworkCodes.Facebook}>Facebook</option>
              <option value={socialNetworkCodes.Twitter}>Twitter</option>
            </select>
          </div>
        </div>
        <div className="column is-3 mt-2 ">
          <button className="button is-warning mr-2">+</button>
          <button className="button is-warning">-</button>
        </div>
      </div>
      <button className="button is-dark">Ajouter une affiliation</button>
      {profile.affiliations.map((affiliation) => (
        <div className="row ">
          <p className="title is-6 ml-2 mb-1 mt-3">Organisation</p>
          <div className="columns">
            <div className="column is-6">
              <input
                className="input is-warning is-rounded mt-0"
                type="text"
                defaultValue={affiliation.organisation}
                placeholder="Warning input"
              />
            </div>
          </div>
          <p className="title is-6 mt-0 mb-1 ml-2">Fonction</p>
          <div className="columns">
            <div className="column is-6">
              <input
                className="input is-warning is-rounded mt-0"
                type="text"
                defaultValue={affiliation.fonction}
                placeholder="Warning input"
              />
            </div>
          </div>
          <p className="title is-6 mt-0 mb-1 ml-2">Equipe</p>
          <div className="columns">
            <div className="column is-6">
              <input
                className="input is-warning is-rounded mt-0 mb-6 "
                type="text"
                defaultValue={affiliation.equipe}
                placeholder="Warning input"
              />
            </div>
          </div>
        </div>
      ))}
      <p className="title is-6 mb-1 mt-2 ml-2">Avatar link</p>
      <div className="columns">
        <div className="column is-6">
          <input
            className="input is-warning is-rounded my-2"
            type="text"
            defaultValue={profile.avatar}
            placeholder="Warning input"
          />
        </div>
      </div>
    </div>
  );
};
export default UserProfile;
