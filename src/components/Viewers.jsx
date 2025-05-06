import React from 'react'
import styled from 'styled-components'
import disney from '../assets/images/viewers-disney.png'
import pixar from '../assets/images/viewers-pixar.png'
import marvel from '../assets/images/viewers-marvel.png'  
import starwars from '../assets/images/viewers-starwars.png'
import national from '../assets/images/viewers-national.png'


const Viewers = () => {
  return (
    <Containers>
    <Wrap>
     <img src={disney} alt="" />
     <video autoPlay loop muted playsInline>
       <source src="/1564674844-disney.mp4" type="video/mp4" />
     </video>
   </Wrap>
   <Wrap>
     <img src={pixar} alt="" />
     <video autoPlay loop muted playsInline>
       <source src="/1564676714-pixar.mp4" type="video/mp4" />
     </video>
   </Wrap>
   <Wrap>
     <img src={marvel} alt="" />
     <video autoPlay loop muted playsInline>
       <source src="/1564676115-marvel.mp4" type="video/mp4" />
     </video>
   </Wrap>
   <Wrap>
     <img src={starwars} alt="" />
     <video autoPlay loop muted playsInline>
       <source src="/1608229455-star-wars.mp4" type="video/mp4" />
     </video>
   </Wrap>
   <Wrap>
     <img src={national} alt="" />
     <video autoPlay loop muted playsInline>
       <source
         src="/1564676296-national-geographic.mp4"
         type="video/mp4"
       />
     </video>
   </Wrap>
 </Containers>
  )
}

export default Viewers

const Containers = styled.div`
  margin-top : 30px;
  padding : 30px 0px 26px;
  display : grid;
  gap : 25px;
  grid-template-columns: repeat(5, minmax(0, 1fr));
  @media (max-width: 768px) {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }
`;

const Wrap = styled.div`
  padding-top: 56.25%;
  border-radius: 10px;
  box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
    rgb(0 0 0 / 73%) 0px 16px 10px -10px;
  cursor: pointer;
  overflow: hidden;
  position: relative;
  transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
  border: 3px solid rgba(249, 249, 249, 0.1);

  img {
    inset: 0px;
    display: block;
    height: 100%;
    object-fit: cover;
    opacity: 1;
    position: absolute;
    transition: opacity 500ms ease-in-out 0s;
    width: 100%;
    z-index: 1;
    top: 0;
  }

  video {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0px;
    opacity: 0;
    z-index: 0;
  }

  &:hover {
    box-shadow: rgb(0 0 0 / 80%) 0px 40px 58px -16px,
      rgb(0 0 0 / 72%) 0px 30px 22px -10px;

    transform: scale(1.05);
    border-color: rgba(249, 249, 249, 0.8);

    video {
      opacity: 1;
    }
  }
`;