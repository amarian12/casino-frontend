import React from 'react'
import CardImage from './CardImage'
import {connect} from 'react-redux'

class Player extends React.Component {
  render() {
    const { player, playerValue } = this.props
    let cards = player.map(card => <CardImage key={card.code} card={card}  /> )

    return(
      <div className="playerCards">
        <div className="playerCardsValue">
          <h2>Player Value: {playerValue} </h2>
        </div>
        <div className="playerCardsImages">
          {cards}
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    player: state.player, playerValue: state.playerValue
  }
}

export default connect(mapStateToProps)(Player)
