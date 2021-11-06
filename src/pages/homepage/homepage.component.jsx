import React from 'react'
import './homepage.styles.scss';
import Directory from '../../components/directory/directory.component'
function Homepage() {
    return (
        <div>
            <div className="homepage">
                <Directory />
            </div>
        </div>
    )
}

export default Homepage
