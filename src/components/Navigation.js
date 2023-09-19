import React from 'react';
import { NavLink } from 'react-router-dom';

const Navigation = () => {
    return (
        <div className="navigation">
            <ul>
                <NavLink to="/" className={(nav) => (nav.isActive ? "nav-active hover" : "hover")}><li>accueil</li></NavLink>
                <NavLink to="/favoris" className={(nav) => (nav.isActive ? "nav-active hover" : "hover")}><li>favoris</li></NavLink>
                <NavLink to="/credits" className={(nav) => (nav.isActive ? "nav-active hover" : "hover")}><li>crédits</li></NavLink>
            </ul>
        </div>
    );
};

export default Navigation;