import styled from '@emotion/styled-base';
import { small, medium } from './breakpoints';

// UI Colors

export const TextColor = '#322C2C';
export const LegendLabelColor = '#8B7F7F';
export const VizLabelColor = '#242020';
export const MainRed = '#FF5555';

// Air Colors

export const AirBlueLight = '#D1E6FF';
export const AirBlue = '#B2D5FF';
export const AirGreen = '#2FBF62';
export const AirRed = '#FF5555';
export const AirRedDark = '#9B0000';

// Sun Colors

export const SunRed = MainRed;
export const SunOrange = '#FF7300';
export const SunYellow = '#FFBF23';
export const SunGreen = '#35A535';
export const SunIndigo= '#4A00E2';
export const SunBlue = '#4A90E2';
export const SunPurple = '#BD10E0';

export const SunWhite = '#FFFFFF'

// Zurich Colors

export const MaskColor = '#E40000';


// Layout

export const Chapter = styled('div')`
    display: flex;
    justify-content: center;
    align-items: center;
`

export const VizWrapper = styled('div')`
    position: relative;
    width: 700px;
    height: 700px;
    `

// Typography

export const Heading = styled('h1')`
    font-size: 2.5rem;
    font-weight: 700;
    line-height: 130%;
    color: ${TextColor};

    @media (max-width: ${small}px)  {
        justify-content: center;
    };

     @media (min-width: ${small}px) and (max-width: ${medium}px) {
        margin: 5vh 0 0 0;
        justify-content: center;
    };

      @media (min-width: ${medium}px) {
        font-size: 2.5rem;
        margin: 15vh 0 0 0;
    };
`

export const Paragraph = styled('p')`
    line-height: 130%;
    color: ${TextColor};
    font-size: 1.5rem;

      @media (max-width: ${small}px)  {
        justify-content: center;
        margin: 1.2rem 0 8vh 0; 
      };

     @media (min-width: ${small}px) and (max-width: ${medium}px) {
        justify-content: center;
        margin: 1.2rem 0 8vh 0; 
    };

    @media (min-width: ${medium}px) {
            font-size: 1.5rem;
    };
`

// export const Paragraph = styled('p')`
//     color: ${TextColor};

//     @media (max-width: ${small}px)  {
//         font-size: 1.5rem;
//         line-height: 130%;
//      };

//     @media (min-width: ${small}px) and (max-width: ${medium}px) {
//         font-size: 1.5rem;
//         line-height: 130%;
//         width: 70%; 
//         justify-content: center;
//     };

//     //   @media (min-width: ${medium}px) {
//     //       font-size: 1.2rem;
//     //   };
// `

export const FooterParagraph = styled('p')`
    margin: 1.2rem 0 0 0;
    line-height: 130%;
    color: ${TextColor};
    font-size: 1.5rem;

      @media (max-width: ${small}px)  {
      };

     @media (min-width: ${small}px) and (max-width: ${medium}px) {
    };

    @media (min-width: ${medium}px) {
        font-size: 1.5rem;
    };
`

export const LegendLabel = styled('p')`
    font-size: 1em;
    line-height: 130%;
    color: ${LegendLabelColor}
`

export const LegendItem = styled('p')`
    font-size: 1em;
    line-height: 130%;
    color: ${LegendLabelColor};
`

export const VizItem = styled('p')`
    font-size: 1em;
    line-height: 130%;
    color: ${VizLabelColor};
`

export const LegendItemSmall = styled('p')`
    font-size: 0.8em;
    line-height: 130%;
    color: ${LegendLabelColor};
`

export const VizItemSmall = styled('p')`
    font-size: 0.8em;
    line-height: 130%;
    color: ${VizLabelColor};
    margin: 0 0 0 0.2rem;
`

// Intro

export const IntroHeading = styled('div')`
    font-family: 'IBM Plex Sans';
    font-weight: 700;
    font-size: 5em;
    color: ${TextColor};

    @media (max-width: ${small}px)  {
        font-size: 2.8em;    
    };

    @media (min-width: ${small}px) and (max-width: ${medium}px) {
        font-size: 4em;  
    };
`

export const Intro1 = styled('h1')`
    position: absolute;
    top: 10%;
    line-height: 130%;

    @media (max-width: ${small}px)  {
        left: 15%;   
    };
        
    @media (min-width: ${small}px) and (max-width: ${medium}px) {
        left: 20%;
    };

    @media (min-width: ${medium}px) {
        left: 30%;
    };
`

export const Intro2 = styled('h1')`
    position: absolute;
    line-height: 130%;
    top: 40%;

    @media (max-width: ${small}px)  {
        left: 35%;
    };

    @media (min-width: ${small}px) and (max-width: ${medium}px) {
        left: 40%;
    };

    @media (min-width: ${medium}px) {
        left: 40%;
    };
`

export const IntroParagraph = styled('p')`
    line-height: 130%;
    color: ${TextColor};
    text-align: center;
    font-weight: 500;

    @media (max-width: ${small}px)  {
        font-size: 1.6em;  
    };

    @media (min-width: ${small}px) and (max-width: ${medium}px) {
        font-size: 2em;  
    };

    @media (min-width: ${medium}px) {
        font-size: 2.5rem;
    };
`

// World

export const ElementTitle = styled('div')`
    font-family: 'IBM Plex Sans';
    font-weight: 500;
    font-size: 1em;
    color: ${TextColor};
    margin: 0.5rem 0 0 0.5rem;
`

export const ElementSubtitle = styled('div')`
    font-family: 'IBM Plex Sans';
    font-weight: 500;
    font-size: 1em;
    color: ${TextColor};
    margin: 0 0 0 0.5rem;
`

// Initiatives

export const InitiativesTitle = styled('p')`
    font-family: 'IBM Plex Sans';
    font-weight: 500;
    font-size: 2em;
    color: ${TextColor};
    margin: 1rem 1rem 0 1rem;
    display: block;

`

// export const InitiativesSubtitle = styled('div')`
//     font-family: 'IBM Plex Sans';
//     font-weight: 500;
//     font-size: 2em;
//     color: ${TextColor};
//     margin: 0 0 0 1rem;
// `
