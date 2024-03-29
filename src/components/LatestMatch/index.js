// Write your code here
import './index.css'

const LatestMatch = props => {
  const {latestMatchDetails} = props
  const {
    umpires,
    result,
    manOfTheMatch,
    date,
    venue,
    competingTeam,
    competingTeamLogo,
    firstInnings,
    secondInnings,
  } = latestMatchDetails

  return (
    <div className="latest-match-container">
      <div className="top">
        <div className="team-detail-container">
          <p className="competingTeam">{competingTeam}</p>
          <p className="date">{date}</p>
          <p className="venue">{venue}</p>
          <p className="result">{result}</p>
        </div>
        <img
          src={competingTeamLogo}
          alt={`latest match ${competingTeam}`}
          className="competingTeamLogo"
        />
      </div>
      <hr className="separator" />
      <div className="bottom">
        <div className="match-info-item">
          <p className="firstInnings">First Innings</p>
          <p className="firstInningsValue">{firstInnings}</p>
        </div>
        <div className="match-info-item">
          <p className="secondInnings">Second Innings</p>
          <p className="secondInningsValue">{secondInnings}</p>
        </div>
        <div className="match-info-item">
          <p className="manOfTheMatch">Man Of The Match</p>
          <p className="manOfTheMatchValue">{manOfTheMatch}</p>
        </div>
        <div className="match-info-item">
          <p className="umpires">Umpires</p>
          <p className="umpiresValue">{umpires}</p>
        </div>
      </div>
    </div>
  )
}
export default LatestMatch
