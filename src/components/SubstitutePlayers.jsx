import React from "react";
import { connect } from "react-redux";

const SubstitutePlayers = ({substitutePlayers, removeSubstitute}) => (
    <div>
        <div className="row">
            <h2>Substitute Players</h2>
        </div>
        <div className="row">
            {
                substitutePlayers.map(j => (
                    <div className="col-md-3" key={ j.id }>
                        <div className="card">
                            <img src={ j.pic } alt={ j.name } className="card-img-top" />
                            <div className="card-body">
                                <h4>{ j.name }</h4>
                                <button onClick={ () => removeSubstitute(j) } className="btn btn-primary">Remove</button>
                            </div>
                        </div>
                    </div>
                ))
            }
        </div>
    </div>
)

const mapStateToProps = state => ({
    substitutePlayers: state.substitutePlayers
})

const mapDispatchToProps = dispatch => ({
    removeSubstitute(player){
        dispatch({
            type: "REMOVE_SUBSTITUTE",
            player
        })
    }
})

export default connect( mapStateToProps, mapDispatchToProps )( SubstitutePlayers )