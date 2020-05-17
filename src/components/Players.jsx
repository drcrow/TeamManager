import React from "react";
import { connect } from "react-redux";

const Players = ({ players, addRegular, addSubstitute }) => (
    <section>
        <h2>Players</h2>
        <div className="players-container">
            {
                players.map(j => (
                    <article className="player" key={ j.id }>
                        <img src={ j.pic } alt={ j.name } />
                        <h3>{ j.name }</h3>
                        <div>
                            <button onClick={ () => addRegular(j) }>Regular</button>
                            <button onClick={ () => addSubstitute(j) }>Substitute</button>
                        </div>
                    </article>
                ))
            }
        </div>
    </section>
)

const mapStateToProps = state => ({
    players: state.players
})

const mapDispatchToProps = dispatch => ({
    addRegular(player){
        dispatch({
            type: "ADD_REGULAR",
            player
        })
    },
    addSubstitute(player){
        dispatch({
            type: "ADD_SUBSTITUTE",
            player
        })
    }
})

export default connect( mapStateToProps, mapDispatchToProps )( Players )