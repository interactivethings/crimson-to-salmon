import * as React from 'react';
import styled from '@emotion/styled';
import { TextColor, MainRed, FooterParagraph } from 'src/materials/materials';

export const FooterRoot = styled('div')`
    display: flex;
    flex-direction: column;
    max-width: 800px;
    margin: 15vh 0 20vh 0;
`

export const Sources = styled('div')`
    width: 50%;
    margin: 10rem 0 0 0;
`

export const FooterLink = styled('a')`
    color: ${TextColor};
    text-decoration: none;

    &:hover {
        color: ${MainRed};
        transition: 0.5s ease-in-out;
    }
`

export const SourceItem = styled('div')`
    margin: 0em 0 0.5em 0;
    font-size: 1rem;
    line-height: 1rem;
`

export class Conclusion extends React.Component {
    render() {
        return(
        
            <FooterRoot>
                <FooterParagraph>
                    This project was created by me during the last month of my internship at <FooterLink href="https://www.interactivethings.com/">Interactive Things</FooterLink>, a Zurich based design studio for digital products and data visualization. 
                </FooterParagraph>
                <FooterParagraph>
                    For my final project, I wanted to choose data sets which are provided by the Open Data Zurich initiative. It aims to provide public administration data free of charge, machine-readable and available under free license. This potentially enables every citizen to get access to information and as a designer and artist, our work is to make this data even more accessible for others.
                </FooterParagraph>
                <FooterParagraph>
                    The topic of Umweltschutz, climate change, and sustainability are topics which I have a personal concern. 
                </FooterParagraph>
                <FooterParagraph>
                    <FooterLink href="http://nadineprigann.de/">Nadine Prigann</FooterLink><br />
                    with many thanks to<br /> 
                    Luc Guillemot<br />
                    Jan Wächter<br />
                    Gerhard Bliedung<br />
                    and the whole team at<br />
                    <FooterLink href="https://www.interactivethings.com/">Interactive Things</FooterLink>
                </FooterParagraph>
                <Sources>
                    <SourceItem>
                        <FooterLink href="https://www.nasa.gov/">WHO</FooterLink>,{' '}
                        <FooterLink href="https://exoplanets.nasa.gov/5-ways-to-find-a-planet/#/3">«Direct Imaging»</FooterLink>. Retrieved
                        October 31, 2018.
                    </SourceItem>
                    <SourceItem>
                        <FooterLink href="https://www.nasa.gov/">WHO</FooterLink>,{' '}
                        <FooterLink href="https://exoplanets.nasa.gov/5-ways-to-find-a-planet/#/3">«Direct Imaging»</FooterLink>. Retrieved
                        October 31, 2018.
                    </SourceItem>                
                </Sources>
            </FooterRoot>
        );
    }
}   