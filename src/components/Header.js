import React from 'react';

import './Header.css';

function Header() {
    const date = new Date(2018, 6, 31, 15);
    const hours = date.getHours();
    let timeOfDay;
    const styles = {
        fontSize: 30,
    };

    if (hours < 12) {
        timeOfDay = "morning";
        styles.color ="#04756F";
    } else if (hours >= 12 && hours < 17) {
        timeOfDay = "afternoon";
        styles.color ="#2E1927";
    } else {
        timeOfDay = "night";
        styles.color ="#090000";
    }

    

    return (
        <header style={styles} className="navbar">Good {timeOfDay}</header>
    );
}

export default Header;