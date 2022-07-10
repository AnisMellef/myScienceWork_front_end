import Select from "react-select";

import { getProfile } from "../services/userService";

const AutoComplete = ({ options, setProfile }) => {

  /**
   * Load Profile
   * @param {number} id 
   */
  const handleProfileChange = (id) => {
    getProfile(id).then((res) => setProfile(res.data.profile));
  };

  return (
    <Select
      options={options}
      onChange={(ev) => handleProfileChange(ev.value)}
    />
  );
};
export default AutoComplete;
