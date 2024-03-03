// Write your code here
import './index.css'

const MatchCard = props => {
  const {matchDetails} = props
  const {competingTeam, competingTeamLogo, result, matchStatus} = matchDetails

  const status = matchStatus === 'Won' ? 'Won' : 'Lost'

  return (
    <li className="match-card-container">
      <img
        src={competingTeamLogo}
        alt={`competing team ${competingTeam}`}
        className="match-card-image"
      />
      <p className="competingTeamValue">{competingTeam}</p>
      <p className="resultValue">{result}</p>
      <p className={status}>{matchStatus}</p>
    </li>
  )
}
export default MatchCard
