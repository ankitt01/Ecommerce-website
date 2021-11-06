import React from 'react';
import './menuItem.styles.scss'

function menuItem({title,imgUrl}) {
    return (
        <div style={{backgroundImage: `url(${imgUrl})`}} className="menu-item">
            <div className="content">
                <h1 className="title">{title}</h1>
                <span className="subtitle">SHOP NOW</span>
            </div>
        </div>
    )
}

export default menuItem
