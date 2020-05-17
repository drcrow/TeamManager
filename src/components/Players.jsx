import React from "react";
import { connect } from "react-redux";

const Players = ({ players, addRegular, addSubstitute }) => (
    <div>
        <div className="row">
            <h2>Players</h2>
        </div>
        <div className="row">
                {
                    players.map(j => (
                        <div className="col-md-3" key={ j.id }>
                            <div className="card">
                                <img src={ j.pic } alt={ j.name } className="card-img-top" />
                                <div className="card-body">
                                    <h4>{ j.name }</h4>
                                    <button className="btn btn-primary" onClick={ () => addRegular(j) }>Regular</button>
                                    &nbsp;
                                    <button className="btn btn-primary" onClick={ () => addSubstitute(j) }>Substitute</button>
                                </div>
                            </div>
                        </div>
                    ))
                }
        </div>
    </div>
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