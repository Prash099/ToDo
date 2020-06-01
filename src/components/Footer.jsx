import React from 'react';

function Footer() {
    const year = new Date().getFullYear();
    return (<div>
        <footer>
            <h4>© Prashanth R {year}</h4>
        </footer>

    </div>)
}
export default Footer;