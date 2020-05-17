import React from "react";
import { connect } from "react-redux";

const SubstitutePlayers = ({substitutePlayers}) => (
    <section>
        <h2>Substitute Players</h2>
        <div className="substitutes">
        {
                substitutePlayers.map(j => (
                    <article className="substitute" key={ j.id }>
                        <img src={ j.pic } alt={ j.name } />
                        <h3>{ j.name }</h3>
                        <div>
                            <button>Remove</button>
                        </div>
                    </article>
                ))
            }
        </div>
    </section>
)

const mapStateToProps = state => ({
    substitutePlayers: state.substitutePlayers
})

const mapDispatchToProps = dispatch => ({})

export default connect( mapStateToProps, mapDispatchToProps )( SubstitutePlayers )