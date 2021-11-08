import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Skeleton from '../Skeleton';

const Card = styled.div`
  width: 90px;
  height: 90px;
  padding: 5px;
  border-radius: 6px;
  background-image: url(${(props) => props.photo});
  background-size: cover;
`;

const Title = styled.p`
  font-size: 16px;
  font-family: ${(props) => props.theme.fonts.regular};
  color: #ffffff;
  text-shadow: 1.5px 1.5px black;
`;

export const ImageCard = ({ photo, title }) => {
  const [imageLoaded, setImageLoaded] = useState(false);

  useEffect(() => {
    const imageLoader = new Image();
    imageLoader.src = photo;
    imageLoader.onload = () => setImageLoaded(true);
  }, [photo]);

  return (
    <>
      {imageLoaded ? (
        <Card photo={photo}>
          <Title>{title}</Title>
        </Card>
      ) : (
        <Skeleton width="90px" height="90px" />
      )}
    </>
  );
};

// import React from 'react';
// import styled from 'styled-components';

// const Card = styled.div`
//   display: flex;
//   justify-content: center;
//   width: 90px;
//   height: 90px;
//   border-radius: 5px;
//   background-image: url(${(props) => props.photo});
//   background-size: cover;
//   padding: 5px;
// `;

// const Title = styled.span`
//   color: #ffffff;
//   font-family: ${(props) => props.theme.fonts.regular};
//   font-size: 16px;
//   text-shadow: 2px 2px black;
// `;

// const ImageCard = ({ photo, title }) => (
//   <Card photo={photo}>
//     <Title>{title}</Title>
//   </Card>
// );

// export default ImageCard;
