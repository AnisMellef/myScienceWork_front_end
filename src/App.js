import { useEffect, useState } from "react";

import { getUsers } from "./services/userService";
import AutoComplete from "./components/AutoComplete";
import UserDetails from "./components/UserDetails";
import { NavCodes } from "./utils/constant";
import AffiliationDetails from "./components/AffiliationDetails";
import UserProfile from "./components/UserProfile";
import UserPublications from "./components/UserPublications";

function App() {
  //Init states
  const [profile, setProfile] = useState();
  const [options, setOptions] = useState([]);
  const [nav, setNav] = useState(NavCodes.GeneralView);

 //Init effects from first render 
  useEffect(() => {
    getUsers().then((res) => {
      let array = [];
      res.data.allUser.map((user) => {
        array.push({ value: user._id, label: user.prenom + " " + user.nom });
      });
      setOptions(array);
    });
  }, []);

  /**
   * Show component on change navigation
   * @returns {JSX}
   */
  const showNavComponent = () => {
    switch (nav) {
      case NavCodes.GeneralView:
        return <AffiliationDetails affiliations={profile.affiliations} />;
      case NavCodes.MyProfile:
        return <UserProfile profile={profile} />;
      case NavCodes.MyPublications:
        return <UserPublications profile={profile} />;
      default:
        break;
    }
  };

  return (
    <div className="rows">
      <div className="columns mt-5 is-mobile is-centered">
        <div className="column is-half">
          <AutoComplete options={options} setProfile={setProfile} />
        </div>
      </div>
      {profile && (
        <div className="columns px-6 mt-5">
          <div className="column is-one-third">
            <UserDetails profile={profile} />
          </div>
          <div className="column">
            <div className="card ">
              <div className="columns p-4 is-mobile is-centered">
                <div className="buttons">
                  <button
                    className={
                      nav == NavCodes.GeneralView
                        ? "button is-warning "
                        : "button is-light"
                    }
                    onClick={() => setNav(NavCodes.GeneralView)}
                  >
                    Vue générale
                  </button>
                  <button
                    className={
                      nav == NavCodes.MyProfile
                        ? "button is-warning "
                        : "button is-light"
                    }
                    onClick={() => setNav(NavCodes.MyProfile)}
                  >
                    Mon Profile
                  </button>
                  <button
                    className={
                      nav == NavCodes.MyPublications
                        ? "button is-warning "
                        : "button is-light"
                    }
                    onClick={() => setNav(NavCodes.MyPublications)}
                  >
                    Mes Publications
                  </button>
                </div>
              </div>
              {showNavComponent()}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
export default App;
