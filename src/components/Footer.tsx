import * as React from "react";
import styled from "@emotion/styled";
import {
  TextColor,
  MainRed,
  FooterParagraph,
  Heading,
  AirBlue,
  SunBlue,
  LegendLabelColor,
  VizLabelColor
} from "../materials/materials";
import { small, medium } from "../materials/breakpoints";

export const FooterRoot = styled("div")`
  display: flex;
  flex-direction: column;
  max-width: 800px;

  @media (max-width: ${small}px) {
    width: 80%;
    margin: 10vh 0 5vh 0;
  }

  @media (min-width: ${small}px) and (max-width: ${medium}px) {
    width: 80%;
    margin: 10vh 0 15vh 0;
  }

  @media (min-width: ${medium}px) {
    margin: 15vh 0 20vh 0;
  }
`;

export const Sources = styled("div")`
  margin: 5rem 0 0 0;

  @media (max-width: ${small}px) {
    width: 70%;
  }

  @media (min-width: ${small}px) and (max-width: ${medium}px) {
    width: 50%;
  }

  @media (min-width: ${medium}px) {
    width: 50%;
  }
`;

export const FooterHeading = styled("h1")`
  font-size: 2rem;
  font-weight: 700;
  line-height: 130%;
  color: ${TextColor};
  margin: 5vh 0 2vh 0;
`;

export const FooterSubheading = styled("h2")`
  font-size: 1rem;
  font-weight: 700;
  line-height: 130%;
  color: ${TextColor};
  margin: 5vh 0 2vh 0;
`;

export const FooterLink = styled("a")`
  color: ${TextColor};
  text-decoration: underline;

  &:hover,
  &:visited {
    text-decoration: none;
    transition: all 0.2s ease-in-out;
  }
`;

export const SourceItem = styled("div")`
  margin: 0em 0 0.5em 0;
  font-size: 1rem;
  line-height: 130%;
`;

export class Conclusion extends React.Component {
  render() {
    return (
      <FooterRoot>
        <FooterHeading>Methodology</FooterHeading>
        <FooterParagraph>
          This project was created by{" "}
          <FooterLink href="http://nadineprigann.de/">me</FooterLink> during the
          last month of my internship at{" "}
          <FooterLink href="https://www.interactivethings.com/">
            Interactive Things
          </FooterLink>
          , a Zurich based design studio for digital products and data
          visualization.
        </FooterParagraph>
        <FooterParagraph>
          For the global overview, the data was extracted from the application
          based on the{" "}
          <FooterLink href="https://www.who.int/airpollution/data/cities/en/">
            Ambient Air Quality Database
          </FooterLink>{" "}
          by the <FooterLink href="https://www.who.int/">WHO</FooterLink>.
          Detailed information about Switzerland and Zurich use a{" "}
          <FooterLink href="https://data.stadt-zuerich.ch/dataset/luftqualitaet-historisierte-messungen">
            monthly air quality assessment
          </FooterLink>{" "}
          by the{" "}
          <FooterLink href="https://www.stadt-zuerich.ch/gud/de/index/umwelt_energie.html">
            City of Zurich, Departement Health and Environment
          </FooterLink>
          . This data is provided by{" "}
          <FooterLink href="https://www.stadt-zuerich.ch/portal/de/index/ogd.html">
            Open Data Zurich
          </FooterLink>
          .
        </FooterParagraph>
        <FooterParagraph>
          Many thanks to{" "}
          <FooterLink href="https://www.linkedin.com/in/stephen-corfidi-7240623b">
            Stephen Corfidi
          </FooterLink>{" "}
          who essentially helped me understand the main aspects of scattering
          and sky colors. Mr. Corfidi is an affiliate of the NOAA{" "}
          <FooterLink href="https://www.noaa.gov/">
            National Oceanic and Atmospheric Administration
          </FooterLink>
          .
        </FooterParagraph>
        <FooterParagraph>
          Furthermore, thanks to Jörg Sintermann for providing me an
          understanding of Zurich's specific air quality and monitoring tasks.
          Mr. Sintermann is the head of{" "}
          <FooterLink href="https://awel.zh.ch/internet/baudirektion/awel/de/ueber_uns/organisation/lufthygiene.html">
            the monitoring unit
          </FooterLink>{" "}
          of the Department Air of the{" "}
          <FooterLink href="https://www.zh.ch/internet/de/home.html#news">
            City of Zurich
          </FooterLink>
          .
        </FooterParagraph>
        <FooterParagraph>
          Personally, the topic of environment protection, climate change, and
          sustainability are topics which I not only have a great personal
          concern about but are also important key questions of today's society.
        </FooterParagraph>

        <FooterHeading>Conception and realization</FooterHeading>
        <FooterParagraph>
          This project was realized by
          <br />
          <FooterLink href="http://nadineprigann.de/">
            Nadine Prigann
          </FooterLink>
          <br />
          with many thanks to
          <br />
          <br />
          Luc Guillemot
          <br />
          Jan Wächter
          <br />
          Gerhard Bliedung
          <br />
          and the whole team at
          <br />
          <FooterLink href="https://www.interactivethings.com/">
            Interactive Things
          </FooterLink>
        </FooterParagraph>

        <Sources>
          <FooterHeading>Sources</FooterHeading>
          <FooterSubheading>Air pollution</FooterSubheading>
          <SourceItem>
            <FooterLink href="https://www.who.int/">
              World Health Oraganiztion
            </FooterLink>
            ,{" "}
            <FooterLink href="https://www.who.int/air-pollution/news-and-events/how-air-pollution-is-destroying-our-health">
              «How air pollution is destroying our health»
            </FooterLink>
            .<br />
            Retrieved December 18, 2018.
          </SourceItem>
          <SourceItem>
            <FooterLink href="https://www.stadt-zuerich.ch/gud/de/index.html">
              City of Zurich, Departement Health and Environment
            </FooterLink>
            ,{" "}
            <FooterLink href="https://www.stadt-zuerich.ch/gud/de/index/umwelt_energie/luftqualitaet.html">
              «Air Quality»
            </FooterLink>
            .<br />
            Retrieved December 18, 2018.
          </SourceItem>
          <SourceItem>
            <FooterLink href="https://www.bafu.admin.ch/bafu/de/home.html">
              Bundesamt für Umwelt BAFU
            </FooterLink>
            ,{" "}
            <FooterLink href="https://www.bafu.admin.ch/bafu/de/home/themen/luft.html">
              «Thema Luft»
            </FooterLink>
            .<br />
            Retrieved December 18, 2018.
          </SourceItem>
          <SourceItem>
            <FooterLink href="https://www.bafu.admin.ch/bafu/de/home.html">
              Bundesamt für Umwelt BAFU
            </FooterLink>
            ,{" "}
            <FooterLink href="https://www.bafu.admin.ch/bafu/de/home/themen/luft/dossiers/wintersmog-dicke-luft/farbenfroh-ins-neue-jahr--feuerwerke-und-luftbelastung.html">
              «Farbenfroh ins neue Jahr: Feuerwerke und Luftbelastung»
            </FooterLink>
            .<br />
            Retrieved December 18, 2018.
          </SourceItem>
          <SourceItem>
            <FooterLink href="https://www.washingtonpost.com/">
              The Washington Post
            </FooterLink>
            ,{" "}
            <FooterLink href="https://www.washingtonpost.com/weather/2018/11/20/smoke-california-wildfires-is-pooling-over-dc-enhancing-our-sunsets/?noredirect=on&utm_term=.28b1754f8647">
              «Smoke from California wildfires is pooling over D.C. and
              intensifying sunsets»
            </FooterLink>
            .<br />
            Retrieved December 18, 2018.
          </SourceItem>

          <FooterSubheading>Scattering</FooterSubheading>
          <SourceItem>
            <FooterLink href="https://www.noaa.gov/">
              National Oceanic and Atmospheric Administration
            </FooterLink>
            ,{" "}
            <FooterLink href="https://www.spc.noaa.gov/publications/corfidi/sunset/">
              «The Colors of Sunset and Twilight»
            </FooterLink>
            .<br />
            Retrieved December 18, 2018.
          </SourceItem>
          <SourceItem>
            <FooterLink href="https://www.scientificamerican.com/">
              Scientific American
            </FooterLink>
            ,{" "}
            <FooterLink href="https://www.scientificamerican.com/article/fact-or-fiction-smog-creates-beautiful-sunsets/">
              «Fact or Fiction?: Smog Creates Beautiful Sunsets»
            </FooterLink>
            .<br />
            Retrieved December 18, 2018.
          </SourceItem>

          <FooterSubheading>Further articles</FooterSubheading>
          <SourceItem>
            <FooterLink href="https://www.nzz.ch/">
              Neue Zürcher Zeitung
            </FooterLink>
            ,{" "}
            <FooterLink href="https://www.nzz.ch/meinung/aufruf-fuer-mehr-klimaschutz-ld.1436311">
              «Die Schweiz tut noch nicht genug für den Klimaschutz»
            </FooterLink>
            .<br />
            Retrieved December 18, 2018.
          </SourceItem>
          <SourceItem>
            <FooterLink href="https://www.nzz.ch/">
              Neue Zürcher Zeitung
            </FooterLink>
            ,{" "}
            <FooterLink href="https://www.nzz.ch/wissenschaft/klimawandel-die-wichtigsten-fakten-im-ueberblick-ld.1420749">
              «Temperaturanstieg, Treibhauseffekt und die Rolle der Schweiz: Das
              sind die wichtigsten Fakten zum Klimawandel»
            </FooterLink>
            .<br />
            Retrieved December 18, 2018.
          </SourceItem>

          <FooterSubheading>Other projects on the topic</FooterSubheading>
          <SourceItem>
            <FooterLink href="http://macarenaruiztagle.com/">
              Macarena Ruiz-Tagle
            </FooterLink>
            ,{" "}
            <FooterLink href="http://macarenaruiztagle.com/index.php?/atmospheric-pollution-series/">
              «Atmospheric Pollution Series»
            </FooterLink>
            .<br />
            Retrieved December 18, 2018.
          </SourceItem>
          <SourceItem>
            <FooterLink href="http://breathelife2030.org/">
              Breathe Life
            </FooterLink>
            ,{" "}
            <FooterLink href="http://breathelife2030.org/the-issue/air-quality-in-your-city/">
              «What Air Are You Breathing?»
            </FooterLink>
            .<br />
            Retrieved December 19, 2018.
          </SourceItem>
        </Sources>
      </FooterRoot>
    );
  }
}
