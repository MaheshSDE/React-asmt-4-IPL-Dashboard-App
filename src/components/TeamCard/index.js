// Write your code here
import {Link} from 'react-router-dom'

import './index.css'

const TeamCard = props => {
  const {details} = props
  const {id, name, teamImageUrl} = details

  return (
    <Link to={`/team-matches/${id}`} className="link">
      <div className="team-card-container">
        <img src={teamImageUrl} alt={name} className="match-logo" />
        <h1 className="teamName">{name}</h1>
      </div>
    </Link>
  )
}

export default TeamCard
