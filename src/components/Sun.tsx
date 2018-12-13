import * as React from 'react';
import { VizWrapper, SunRed, SunOrange, SunYellow, SunGreen, SunIndigo, SunBlue, SunPurple, LabelColor } from 'src/materials/materials';
import styled from '@emotion/styled-base';
import { keyframes } from '@emotion/core';
import { SquareWrapper } from './Countries';
import 'd3-transition';

export const SunColors = [SunRed, SunOrange, SunYellow, SunGreen, SunIndigo, SunBlue, SunPurple]

const StaggeringRed = keyframes`
  from, 0% {
    left: 333px;
    background-color: ${SunYellow};
  }

  50% {
    left: 665px;
    background-color: ${SunRed};
    transform: scale(1);
    transform-origin: center;

  }

  65% {
    left: 333px;
    transform: scale(20);
    background-color: ${SunYellow};
    transform-origin: center;
  }

  80% {
    background-color: ${SunYellow};
    transform: scale(1);
    opacity: 1;
    top: 333px;
    left: 333px;
  }

  100% {
    background-color: ${SunYellow};
    transform: scale(1);
    opacity: 1;
    top: 333px;
    left: 333px;
  }
`;

export const SunElement01 = styled('div')`
    position: absolute;
    top: 333px;
    width: 35px;
    height: 35px;
    border-radius: 17px;
    animation: ${StaggeringRed} ease 8s infinite;
    animation-fill-mode: forwards;
`

const StaggeringYellow = keyframes`
  from, 0% {
    left: 333px;
    background-color: ${SunYellow};
  }

  50% {
    left: 554px;
    background-color: ${SunYellow};
    transform: scale(1);
    transform-origin: center;
  }

  65% {
    left: 333px;
    transform: scale(20);
    background-color: ${SunYellow};
    transform-origin: center;
  }

  80% {
    background-color: ${SunYellow};
    transform: scale(1);
    opacity: 1;
    top: 333px;
    left: 333px;
  }

  100% {
    background-color: ${SunYellow};
    transform: scale(1);
    opacity: 1;
    top: 333px;
    left: 333px;
  }
`;

export const SunElement02 = styled('div')`
    position: absolute;
    top: 333px;
    width: 35px;
    height: 35px;
    border-radius: 17px;
    animation: ${StaggeringYellow} ease 8s infinite;
    animation-fill-mode: forwards;
`

const StaggeringOrange = keyframes`
  from, 0% {
    left: 333px;
    background-color: ${SunYellow};
  }

  50% {
    left: 443px;
    background-color: ${SunOrange};
    transform: scale(1);
    transform-origin: center;
  }

  65% {
    left: 333px;
    transform: scale(20);
    background-color: ${SunYellow};
    transform-origin: center;
  }

  80% {
    background-color: ${SunYellow};
    transform: scale(1);
    opacity: 1;
    top: 333px;
    left: 333px;
  }

  100% {
    background-color: ${SunYellow};
    transform: scale(1);
    opacity: 1;
    top: 333px;
    left: 333px;
  }
`;

export const SunElement03 = styled('div')`
    position: absolute;
    top: 333px;
    width: 35px;
    height: 35px;
    border-radius: 17px;
    animation: ${StaggeringOrange} ease 8s infinite;
    animation-fill-mode: forwards;
`

const StaggeringGreen = keyframes`
  from, 0% {
    left: 333px;
    background-color: ${SunYellow};
  }

  50% {
    left: 332px;
    background-color: ${SunGreen};
    transform: scale(1);
    transform-origin: center;
  }

  65% {
    left: 333px;
    transform: scale(20);
    background-color: ${SunYellow};
    transform-origin: center;
  }

  80% {
    background-color: ${SunYellow};
    transform: scale(1);
    opacity: 1;
    top: 333px;
    left: 333px;
  }

  100% {
    background-color: ${SunYellow};
    transform: scale(1);
    opacity: 1;
    top: 333px;
    left: 333px;
  }
`;

export const SunElement04 = styled('div')`
    position: absolute;
    top: 333px;
    width: 35px;
    height: 35px;
    border-radius: 17px;
    animation: ${StaggeringGreen} ease 8s infinite;
    animation-fill-mode: forwards;
`

const StaggeringIndigo = keyframes`
  from, 0% {
    left: 333px;
    background-color: ${SunYellow};
  }

  50% {
    left: 221px;
    background-color: ${SunIndigo};
    transform: scale(1);
    transform-origin: center;
  }

  65% {
    left: 333px;
    transform: scale(20);
    background-color: ${SunYellow};
    transform-origin: center;
  }

  80% {
    background-color: ${SunYellow};
    transform: scale(1);
    opacity: 1;
    top: 333px;
    left: 333px;
  }

  100% {
    background-color: ${SunYellow};
    transform: scale(1);
    opacity: 1;
    top: 333px;
    left: 333px;
  }
`;

export const SunElement05 = styled('div')`
    position: absolute;
    top: 333px;
    width: 35px;
    height: 35px;
    border-radius: 17px;
    animation: ${StaggeringIndigo} ease 8s infinite;
    animation-fill-mode: forwards;
`

const StaggeringBlue = keyframes`
  from, 0% {
    left: 333px;
    background-color: ${SunYellow};
  }

  50% {
    left: 111px;
    background-color: ${SunBlue};
    transform: scale(1);
    transform-origin: center;
  }

  65% {
    left: 333px;
    transform: scale(20);
    background-color: ${SunYellow};
    transform-origin: center;
  }

  80% {
    background-color: ${SunYellow};
    transform: scale(1);
    opacity: 1;
    top: 333px;
    left: 333px;
  }

  100% {
    background-color: ${SunYellow};
    transform: scale(1);
    opacity: 1;
    top: 333px;
    left: 333px;
  }
`;

export const SunElement06 = styled('div')`
    position: absolute;
    top: 333px;
    width: 35px;
    height: 35px;
    border-radius: 17px;
    animation: ${StaggeringBlue} ease 8s infinite;
    animation-fill-mode: forwards;
`

const StaggeringPurple = keyframes`
  from, 0% {
    left: 333px;
    background-color: ${SunYellow};
  }

  50% {
    left: 0px;
    background-color: ${SunPurple};
    transform: scale(1);
    transform-origin: center;
  }

  65% {
    left: 333px;
    transform: scale(20);
    background-color: ${SunYellow};
    transform-origin: center;
  }

  80% {
    background-color: ${SunYellow};
    transform: scale(1);
    opacity: 1;
    top: 333px;
    left: 333px;
  }

  100% {
    background-color: ${SunYellow};
    transform: scale(1);
    opacity: 1;
    top: 333px;
    left: 333px;
  }
`;

export const SunElement07 = styled('div')`
    position: absolute;
    top: 333px;
    width: 35px;
    height: 35px;
    border-radius: 17px;
    animation: ${StaggeringPurple} ease 8s infinite;
    animation-fill-mode: forwards;
`

const LegendWLItems = keyframes`
    from, 0% {
       opacity: 0;
    }

    50% {
        opacity: 1;
    }

    70% {
        opacity: 0;
    }

    100% {
      opacity: 0;
  }
`

export const LegendLabelWL = styled('p')`
    font-size: 1em;
    line-height: 120%;
    color: ${LabelColor};
    animation: ${LegendWLItems} ease 8s infinite;
    animation-fill-mode: forwards;
`

export const Legend = styled('div')`
    display: flex;
    width: 700px;
    justify-content: space-between;
`

const LegendSun = keyframes`
    from, 55% {
       opacity: 0;
    }

     90% {
      opacity: 1;
   }

    100% {
        opacity: 0;
    }
`

export const LegendLabelSun = styled('p')`
opacity: 0;
    font-size: 1em;
    line-height: 120%;
    color: ${LabelColor};
    animation: ${LegendSun} ease 8s;
`

export class Sun extends React.Component<{ runAnimation: boolean }> {
    render() {
        return(
            <SquareWrapper >
            <VizWrapper>
                <SunElement01 style={{ animationPlayState: this.props.runAnimation ? 'running' : 'paused'}} />
                <SunElement02 style={{ animationPlayState: this.props.runAnimation ? 'running' : 'paused'}} />
                <SunElement03 style={{ animationPlayState: this.props.runAnimation ? 'running' : 'paused'}} />
                <SunElement04 style={{ animationPlayState: this.props.runAnimation ? 'running' : 'paused'}} />
                <SunElement05 style={{ animationPlayState: this.props.runAnimation ? 'running' : 'paused'}} />
                <SunElement06 style={{ animationPlayState: this.props.runAnimation ? 'running' : 'paused'}} />
                <SunElement07 style={{ animationPlayState: this.props.runAnimation ? 'running' : 'paused'}} />
            </VizWrapper>
             <Legend>
                <LegendLabelWL style={{ animationPlayState: this.props.runAnimation ? 'running' : 'paused'}}>short</LegendLabelWL>
                <LegendLabelSun style={{ animationPlayState: this.props.runAnimation ? 'running' : 'paused'}}>Sun</LegendLabelSun>
                <LegendLabelWL style={{ animationPlayState: this.props.runAnimation ? 'running' : 'paused'}}>long</LegendLabelWL>
            </Legend>
            </SquareWrapper>
        );
    }
}

// Sun Ray for Scattering
//

const Rays = keyframes`
  from, 0% {
    opacity: 0;
  }

  100% {
    opacity: 1;
  }
`

export const SunElement = styled('div')`
  position: absolute;
  width: 35px; 
  height: 35px;
  border-radius: 17.5px;
  background-color: ${SunYellow};
  animation: ${Rays} ease 3s;
`

export class SunRayShort extends React.Component <{ runAnimation: boolean }> {
  render() {
    const sunElements = [];

    for (let i = 0; i < 9; i++) {
        sunElements.push({
          xPos: 315,
          yPos: (35 * i),
        });
    }

    return(
        <VizWrapper>
          {sunElements.map(( sunElement, i) =>
            <SunElement key={i} style={{top: sunElement.yPos, left: sunElement.xPos, animationPlayState: this.props.runAnimation ? 'running' : 'paused'}}/>
          )}
        </VizWrapper>
    );
  }
}

export class SunRayLong extends React.Component {
  render() {
    const sunElements = [];

    for (let i = 0; i < 17; i++) {
        sunElements.push({
          xPos: 315,
          yPos: (35 * i),
        });
    }

    return(
        <VizWrapper>
          {sunElements.map(( sunElement, i) =>
            <SunElement key={i} style={{top: sunElement.yPos, left: sunElement.xPos}}/>
          )}
        </VizWrapper>
    );
  }
}

// // type PolarHintValue = { radius: number; value: string };
// interface Props {
// 	show: boolean;
// }

// export class SunRayShort extends React.Component<Props> {
// 	sunRayMeta: React.RefObject<HTMLDivElement>;
// 	constructor(props: Props) {
// 		super(props);
// 		this.sunRayMeta = React.createRef();
// 	}
// 	show = (): void => {
// 		select(this.sunRayMeta.current).transition().duration(500).attr('opacity', 1);
// 	};
// 	hide = (): void => {
// 		select(this.sunRayMeta.current).transition().duration(500).attr('opacity', 0);
// 	};
// 	componentDidUpdate() {
// 		this.props.show ? this.show() : this.hide();
// 	}
// 	componentDidMount() {
// 		this.hide();
//   }
// 	render() {
//     const sunElements = [];

//     for (let i = 0; i < 9; i++) {
//         sunElements.push({
//           xPos: 315,
//           yPos: (35 * i),
//         });
//     }

// 		return (
// 			<VizWrapper ref={this.sunRayMeta}>
//           {sunElements.map(( sunElement, i) =>
//             <SunElement key={i} style={{top: sunElement.yPos, left: sunElement.xPos}}/>
//           )}
//         </VizWrapper>
// 		);
// 	}
// }


// const sunElements = [];
//     for (let i = 0; i < 9; i++) {
//         sunElements.push({
//           xPos: 315,
//           yPos: (35 * i),
//         });
//     }

//     export const SunRayy = ({sunElements}) => {
//       return (
//         <>
//           <ReactCSSTransitionGroup transitionName="sunRay" transitionEnterTimeout={700} transitionLeaveTimeout={700}>
//               {sunElements.map(( sunElement, i) =>
//             <SunElement key={i} style={{top: sunElement.yPos, left: sunElement.xPos}}/>
//             )}
//           </ReactCSSTransitionGroup>
//         </>
//       );
//     };
    

// const FullSun = keyframes`
//   from, 0% {
//     opacity: 1  
//   }

//   100% {
//     opacity: 0;  
//   }
// `;

// export const SunNegativeElement = styled('div')`
//   width: 35px; 
//   height: 35px;
//   border-radius: 0px;
//   background-color: ${SunWhite};
//   position: absolute;
//   // animation: ${FullSun} ease 3s infinite;
//   // animation-fill-mode: forwards;
// `

// export class SunRays extends React.Component {
//   render() {
//     const sunElements = [];
//     const sunNegativeElements = [];

//     for (let i = 0; i < 400; i++) {
//         sunElements.push({
//         });
//     }

//     for (let i = 0; i < 300; i++) {
//       sunNegativeElements.push({
//           xPos: Math.round(((Math.random() * 665) + 1) / 35) * 35,
//           yPos: Math.round(((Math.random() * 315) + 350) / 35) * 35,
//       });
//   }
//     return(
//         <VizWrapper>
//           <SquareWrapper>
//             {sunElements.map(( sunElement, i) =>
//               <SunElement key={i}/>
//             )}

//             {sunNegativeElements.map((sunNegativeElement, i) =>
//                 <SunNegativeElement key={i} style={{left: sunNegativeElement.xPos, top: sunNegativeElement.yPos}}/>
//             )}
//             </SquareWrapper>
//           </VizWrapper>
//     );
//   }
// }

