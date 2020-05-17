import { createStore } from "redux";

const initialState = {
    players: [
        {
            id: 1,
            name: "Fernanda Mansilla",
            pic: "https://4.bp.blogspot.com/-ikAR9TA_vkA/Vdk6uBPyQ6I/AAAAAAAAACM/7RPKgLNWWHQ/s1600/hello-kitty-movie.jpg"
        },
        {
            id: 2,
            name: "Fausto Virga",
            pic: "https://media.cdnandroid.com/5c/77/57/03/d1/imagen-sans-undertale-for-aneko-aneko-skin-0thumb.jpg"
        },
        {
            id: 3,
            name: "Agustin Fiori",
            pic: "https://gifimage.net/wp-content/uploads/2017/10/cthulhu-gif-200x200.gif"
        }
    ],
    regularPlayers: [],
    substitutePlayers: []
}

const reducer = (state = initialState, action) => {
    console.log(action);

    if( action.type === "ADD_REGULAR" ){
        return {
            ...state,
            regularPlayers: state.regularPlayers.concat( action.player ),
            players: state.players.filter( j => j.id !== action.player.id )
        }
    }

    if( action.type === "ADD_SUBSTITUTE" ){
        return {
            ...state,
            substitutePlayers: state.substitutePlayers.concat( action.player ),
            players: state.players.filter( j => j.id !== action.player.id )
        }
    }

    return state;
}

export default createStore(reducer);