const AffiliationDetails = ({ affiliations }) => {
  return affiliations.map((affiliation) => (
    <div className="row p-4">
      <div className="title is-5 my-2">{affiliation.organisation}</div>
      <div className="content my-2">{affiliation.fonction}</div>
      <div className="content my-2">{affiliation.equipe}</div>
      <div className="content my-2">
        {affiliation.toDate
          ? `${affiliation.fromDate} - ${affiliation.toDate}`
          : `Depuis ${affiliation.fromDate}`}
      </div>
      <div className="title is-7">{affiliation.pays}</div>
    </div>
  ));
};
export default AffiliationDetails;
