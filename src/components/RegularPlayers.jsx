import React from "react";
import { connect } from "react-redux";

const RegularPlayers = ({regularPlayers, removeRegular}) => (
    <div>
        <div className="row">
            <h2>Regular Players</h2>
        </div>
        <div className="row">
        {
            regularPlayers.map(j => (
                <div className="col-md-3" key={ j.id }>
                    <div className="card">
                        <img src={ j.pic } alt={ j.name } className="card-img-top" />
                        <div className="card-body">
                            <h4>{ j.name }</h4>
                            <button onClick={ () => removeRegular(j) } className="btn btn-primary">Remove</button>
                        </div>
                    </div>
                </div>
            ))
            }
        </div>
    </div>
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