import * as React from "react";
import {
  VizWrapper,
  ElementTitle,
  MainRed,
  AirBlueLight,
  VizItemSmall,
  LegendItem,
  VizItem
} from "../materials/materials";
import { SquareWrapper } from "../components/Countries";
import ZurichGradientSVG from "../zh_gradient.svg";
import DetailGradientSVG from "../detail_gradient.svg";
import { Legend } from "./Legends";
import styled from "@emotion/styled";
import { scaleLinear } from "d3-scale";
import { keyframes } from "@emotion/core";

export class Switzerland extends React.Component {
  render() {
    return (
      <>
        <SquareWrapper>
          <VizWrapper
            style={{ backgroundImage: "url(" + DetailGradientSVG + ")" }}
          >
            <ElementTitle>Switzerland</ElementTitle>
          </VizWrapper>

          <Legend>
            <LegendItem>6.2</LegendItem>
            <LegendItem>→ Fine particle emission in 2016 (µg / m²)</LegendItem>
            <LegendItem>24</LegendItem>
          </Legend>
        </SquareWrapper>
      </>
    );
  }
}

export const ValueRange = styled("div")`
  display: flex;
  align-items: space-between;
  position: absolute;
  opacity: 0.8;
  width: 700px;
  left: 0;
`;

// add annotation that there are days when no data was recorded (NaN).
// smallest and largest values can be hardcoded but having data on hand calls for using it. attention: current design macht, dass man glaubt, dass die station generell über dem limitwert ist. dabei sind es im falle der stampfenbachstrasse gerade mal 25 tage in 2016. irgendwo vermerken?

// use max value of countries data set from 2016. here hardcoded with value 292...
// on hover show the two values? or number of days how high and low values within 2016?

// const size = scaleLinear()
//     .domain([0, 292])
//     .rangeRound([1, 700] as any)

const ValueRangeHeight = 209;

const sizeMonthly = scaleLinear()
  .domain([0, 81.99])
  .rangeRound([1, 700] as any);

/* console.log(sizeMonthly(50));
 */
const ValueRangeBars = (width: number) => keyframes`
    from, 0% {
        width: 0;
    }

    100% {
        width: ${width}px;
    }
`;

export const ValueRangeDetail = styled("div")`
  position: absolute;
  animation: ${(props: { bars: number }) => ValueRangeBars(props.bars)} 2s ease;
`;

export const ValueRangeLimit = styled("div")`
  position: absolute;
`;

export type Station = {
  Station: string;
  Month: string;
  Max: number;
  Min: number;
};

export interface Props {
  stations: Array<Station>;
  Animation: boolean;
}

export interface LimitAnimation {
  stations: Array<Station>;
  triggerAnimation: boolean;
}

// max ZH value: 81.99 results in color value of 200, 153, 183 in range of world countries

export class Zurich extends React.Component<Props> {
  render() {
    return (
      <SquareWrapper>
        <VizWrapper>
          <LegendItem style={{ position: "absolute", top: "-5vh" }}>
            ↑ Checkpoint over time
          </LegendItem>
          {/* Rosengartenstrasse */}
          <ValueRange>
            <VizItem>Rosengartenstrasse</VizItem>
            {this.props.stations
              .filter(function(i) {
                return i.Station === "Rosengartenstrasse";
              })
              .map((station, i) => (
                <ValueRangeDetail
                  key={i}
                  bars={sizeMonthly(station.Max - station.Min)}
                  style={{
                    backgroundImage: "url(" + DetailGradientSVG + ")",
                    mask: "url(" + ZurichGradientSVG + ")",
                    height: ValueRangeHeight / 12,
                    top: (ValueRangeHeight / 12) * i + 20,
                    left: sizeMonthly(station.Min),
                    width: sizeMonthly(station.Max - station.Min)
                  }}
                >
                  <VizItemSmall>{station.Month}</VizItemSmall>
                </ValueRangeDetail>
              ))}
          </ValueRange>

          {/* Schimmelstrasse */}
          <ValueRange style={{ height: ValueRangeHeight, top: 235 }}>
            <VizItem>Schimmelstrasse</VizItem>
            {this.props.stations
              .filter(function(i) {
                return i.Station === "Schimmelstrasse";
              })
              .map((station, i) => (
                <ValueRangeDetail
                  bars={sizeMonthly(station.Max - station.Min)}
                  key={i}
                  style={{
                    backgroundImage: "url(" + DetailGradientSVG + ")",
                    mask: "url(" + ZurichGradientSVG + ")",
                    height: ValueRangeHeight / 12,
                    top: (ValueRangeHeight / 12) * i + 20,
                    left: sizeMonthly(station.Min),
                    width: sizeMonthly(station.Max - station.Min)
                  }}
                >
                  <VizItemSmall>{station.Month}</VizItemSmall>
                </ValueRangeDetail>
              ))}
          </ValueRange>

          {/* Stampfenbachstrasse */}
          <ValueRange style={{ height: 230, top: 470 }}>
            <VizItem>Stampfenbachstrasse</VizItem>
            {this.props.stations
              .filter(function(i) {
                return i.Station === "Stampfenbachstrasse";
              })
              .map((station, i) => (
                <ValueRangeDetail
                  bars={sizeMonthly(station.Max - station.Min)}
                  key={i}
                  style={{
                    backgroundImage: "url(" + DetailGradientSVG + ")",
                    mask: "url(" + ZurichGradientSVG + ")",
                    height: ValueRangeHeight / 12,
                    top: (ValueRangeHeight / 12) * i + 20,
                    left: sizeMonthly(station.Min),
                    width: sizeMonthly(station.Max - station.Min)
                  }}
                >
                  <VizItemSmall>{station.Month}</VizItemSmall>
                </ValueRangeDetail>
              ))}
          </ValueRange>
        </VizWrapper>
        <Legend>
          <LegendItem>0</LegendItem>
          <LegendItem>→ Fine particle emission in 2016 (µg / m²)</LegendItem>
          <LegendItem>82</LegendItem>
        </Legend>
      </SquareWrapper>
    );
  }
}

export class Limits extends React.Component<LimitAnimation> {
  render() {
    return (
      <SquareWrapper style={{ position: "absolute" }}>
        <VizWrapper>
          <LimitValues runAnimation={this.props.triggerAnimation} />
        </VizWrapper>
      </SquareWrapper>
    );
  }
}

const LimitIndex = keyframes`
    0% {
    left: 700px;
    opacity: 0;
  }

  30% {
    left: 427px;
    opacity: 1;
  }
`;

export const LimitIndicator = styled("div")`
  position: absolute;
  height: 700px;
  width: 5px;
  background-color: black;
  animation-name: ${LimitIndex};
  animation-duration: 8s;
  animation-fill-mode: forwards;
  animation-iteration-count: infinite;
`;

const LimitAreas = keyframes`
    from, 20% {
      opacity: 0;
    }

    80% {
        opacity: 0.3;
      }
  
    100% {
      opacity: 0.3;
    }
  `;

export const LimitAreaLeft = styled("div")`
  position: absolute;
  height: 700px;
  top: 0;
  left: 0;
  background-color: ${AirBlueLight};
  opacity: 0;
  animation: ${LimitAreas} 8s ease infinite;
`;

export const LimitAreaRight = styled("div")`
  position: absolute;
  height: 700px;
  top: 0;
  left: 0;
  background-color: ${MainRed};
  opacity: 0;
  animation: ${LimitAreas} 8s ease infinite;
`;

export class LimitValues extends React.Component<{ runAnimation: boolean }> {
  render() {
    return (
      <>
        <LimitAreaLeft
          style={{
            width: sizeMonthly(50),
            animationPlayState: this.props.runAnimation ? "running" : "paused"
          }}
        />
        <LimitAreaRight
          style={{
            left: sizeMonthly(50),
            width: sizeMonthly(32),
            animationPlayState: this.props.runAnimation ? "running" : "paused"
          }}
        />
        <LimitIndicator
          style={{
            left: sizeMonthly(50),
            animationPlayState: this.props.runAnimation ? "running" : "paused"
          }}
        />
      </>
    );
  }
}
