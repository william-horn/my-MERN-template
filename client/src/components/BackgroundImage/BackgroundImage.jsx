/*
    note:
    in order for this background component to work, it's parent component must be set
    to 'position: relative'
    ex: 
        <div style={{position: "relative"}}>
            <BackgroundImage image={...}>
                ...
            </BackgroundImage>
        </div>
*/

import React from 'react';

import { 
    StyledBackgroundImage, 
    StyledBackgroundImageContainer, 
} from './StyledBackgroundImage.style';

function BackgroundImage({ children, opacity, img, backgroundColor, style }) {

    // return background component
    return (
        <StyledBackgroundImageContainer backgroundColor={backgroundColor} style={style}>
            <StyledBackgroundImage opacity={opacity} src={img}/>
        </StyledBackgroundImageContainer>
    );
}

export default BackgroundImage;