import { FaFacebook, FaLinkedin, FaTwitter } from "react-icons/fa";

import { socialNetworkCodes } from "../utils/constant";

const UserDetails = ({ profile }) => {
  /**
   * Show social Network icon
   * @param {string} code
   * @returns {JSX}
   */
  const getSocialNetworkIcon = (code) => {
    switch (code) {
      case socialNetworkCodes.Facebook:
        return <FaFacebook color="3B5998" size={20} />;
      case socialNetworkCodes.LinkedIn:
        return <FaLinkedin color="0e76a8" size={20} />;
      case socialNetworkCodes.Twitter:
        return <FaTwitter color="00acee" size={20} />;
      default:
        break;
    }
  };

  return (
    <div className="card ">
      <div className="columns is-mobile is-centered">
        <figure className="image mt-4 is-half">
          <img
            className="is-rounded"
            style={{ width: 128, height: 128 }}
            src={profile.avatar}
          />
        </figure>
      </div>
      <div className="card-content">
        <div className="media">
          <div className="media-content">
            <p className="title is-4">{profile.prenom + " " + profile.nom}</p>
          </div>
        </div>
        <div className="content">
          <p className="title is-6">About me</p>
          {profile.about}
        </div>
        <p className="title is-6">My social Ids</p>
        {profile.socialNetworks.map((sn) => (
          <div className="row">
            <div className="columns">
              <div className="column is-1">{getSocialNetworkIcon(sn.type)}</div>
              <div className="column mt-1">
                <p className="title is-7">{sn.socialId}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default UserDetails;
