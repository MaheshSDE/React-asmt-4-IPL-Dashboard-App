// Write your code here
const MatchCard = props => {
  const {matchDetails} = props
  const {competingTeam, competingTeamLogo, result, matchStatus} = matchDetails

  return (
    <li className="match-card-container">
      <img
        src={competingTeamLogo}
        alt={competingTeam}
        className="match-card-image"
      />
      <p className="competingTeamValue">{competingTeam}</p>
      <p className="resultValue">{result}</p>
      <p className="matchStatusValue">{matchStatus}</p>
    </li>
  )
}
export default MatchCard
