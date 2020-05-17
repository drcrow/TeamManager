import React from "react";
import RegularPlayers from "./RegularPlayers"
import SubstitutePlayers from "./SubstitutePlayers"

const SelectedTeam = () => (
    <section>
        <RegularPlayers />
        <SubstitutePlayers />
    </section>
)

export default SelectedTeam;