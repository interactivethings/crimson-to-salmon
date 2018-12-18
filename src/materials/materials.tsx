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
    line-height: 120%;
    color: ${TextColor};
    margin: 15vh 0 0 0;
`

export const Paragraph = styled('p')`
    font-size: 1.5rem;
    line-height: 120%;
    color: ${TextColor};

    //   @media (max-width: ${small}px)  {
    //       font-size: 1rem;
    //   };

    //   @media (min-width: ${small}px) and (max-width: ${medium}px) {
    //       font-size: 1.1rem;
    //   };

    //   @media (min-width: ${medium}px) {
    //       font-size: 1.2rem;
    //   };
`

export const FooterParagraph = styled('p')`
    font-size: 1.5rem;
    line-height: 120%;
    color: ${TextColor};
    margin: 1.2rem 0 0 0;
    display: block;

    //   @media (max-width: ${small}px)  {
    //       font-size: 1rem;
    //   };

    //   @media (min-width: ${small}px) and (max-width: ${medium}px) {
    //       font-size: 1.1rem;
    //   };

    //   @media (min-width: ${medium}px) {
    //       font-size: 1.2rem;
    //   };
`

export const LegendLabel = styled('p')`
    font-size: 1em;
    line-height: 120%;
    color: ${LegendLabelColor}
`

export const LegendItem = styled('p')`
    font-size: 1em;
    line-height: 120%;
    color: ${LegendLabelColor};
`

export const VizItem = styled('p')`
    font-size: 1em;
    line-height: 120%;
    color: ${VizLabelColor};
`

export const LegendItemSmall = styled('p')`
    font-size: 0.8em;
    line-height: 120%;
    color: ${LegendLabelColor};
`

export const VizItemSmall = styled('p')`
    font-size: 0.8em;
    line-height: 120%;
    color: ${VizLabelColor};
    margin: 0 0 0 0.2rem;
`

// Intro

export const IntroHeading = styled('div')`
    font-family: 'IBM Plex Sans';
    font-weight: 700;
    font-size: 5em;
    color: ${TextColor};
`

export const Intro1 = styled('h1')`
    position: absolute;
    top: 10vh;
    line-height: 120%;

    @media (max-width: ${small}px)  {
        left: 10vw;   
    };
        
    @media (min-width: ${small}px) and (max-width: ${medium}px) {
        left: 20vw;
    };

    @media (min-width: ${medium}px) {
        left: 40vh;
    };
`

export const Intro2 = styled('h1')`
    position: absolute;
    line-height: 120%;
    top: 40vh;
    left: 40vw;

    @media (max-width: ${small}px)  {
        left: 20vw;
    };
`

export const Intro3 = styled('h1')`
    position: absolute;
    top: 45vh;
    left: 40vw;

    @media (max-width: ${small}px)  {
        left: 20vw;
      };
`

export const Intro4 = styled('h1')`
    position: absolute;
    top: 50vh;
    left: 40vw;

    @media (max-width: ${small}px)  {
       left: 20vw;
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
