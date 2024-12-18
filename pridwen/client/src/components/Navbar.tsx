import React from 'react';
import {Link} from "react-router-dom";
import {routePath} from "../utils/Routes";

const Navbar = () => {
    return (
        <nav>
            <Link to={routePath.HOME_PATH}>Home</Link>
            <Link to={routePath.TIER_LIST_PATH}>Tierlist</Link>
            <Link to={routePath.CHARACTERS_PATH}>Characters</Link>
        </nav>
    );
}

export default Navbar;