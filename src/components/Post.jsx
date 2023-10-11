import React from 'react'
import Gallery from '../components/Images'
import CardImage from '../components/CardImage';

import '../scss/post/_Gallery-GRID.scss';

function Post() {
    return (
        <>
            <div className="projects-grid-container">
                {Gallery.map((puntero)  => (
                    <CardImage  
                        key={puntero.id}
                        link={puntero.link}
                    />
                ))}
            </div>
        </>
    );
}

export default Post;