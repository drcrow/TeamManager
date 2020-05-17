import React from "react";
import { connect } from "react-redux";

const RegularPlayers = ({regularPlayers, removeRegular}) => (
    <section>
        <h2>Regular Players</h2>
        <div className="regulars">
        {
                regularPlayers.map(j => (
                    <article className="regular" key={ j.id }>
                        <img src={ j.pic } alt={ j.name } />
                        <h3>{ j.name }</h3>
                        <div>
                            <button onClick={ () => removeRegular(j) }>Remove</button>
                        </div>
                    </article>
                ))
            }
        </div>
    </section>
)

const mapStateToProps = state => ({
    regularPlayers: state.regularPlayers
})

const mapDispatchToProps = dispatch => ({
    removeRegular(player){
        dispatch({
            type: "REMOVE_REGULAR",
            player
        })
    }
})

export default connect( mapStateToProps, mapDispatchToProps )( RegularPlayers )