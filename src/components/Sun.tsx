import * as React from 'react';
import { VizWrapper, SunRed, SunOrange, SunYellow, SunGreen, SunIndigo, SunBlue, SunPurple, LabelColor } from 'src/materials/materials';
import styled from '@emotion/styled-base';
import { keyframes } from '@emotion/core';
import { SquareWrapper } from './Countries';
// import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import { select } from 'd3-selection';
import 'd3-transition';

export const SunColors = [SunRed, SunOrange, SunYellow, SunGreen, SunIndigo, SunBlue, SunPurple]

const StaggeringRed = keyframes`
  from, 0% {
    left: 333px;
    background-color: ${SunYellow};
  }

  60% {
    left: 665px;
    background-color: ${SunRed};
    transform: scale(1);
    transform-origin: center;

  }

  80% {
    left: 333px;
    transform: scale(20);
    background-color: ${SunYellow};
    transform-origin: center;
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
    animation: ${StaggeringRed} ease 4s;
    animation-fill-mode: forwards;
`

const StaggeringYellow = keyframes`
  from, 0% {
    left: 333px;
    background-color: ${SunYellow};
  }

  60% {
    left: 554px;
    background-color: ${SunYellow};
    transform: scale(1);
    transform-origin: center;
  }

  80% {
    left: 333px;
    transform: scale(20);
    background-color: ${SunYellow};
    transform-origin: center;
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
    animation: ${StaggeringYellow} ease 4s;
    animation-fill-mode: forwards;
`

const StaggeringOrange = keyframes`
  from, 0% {
    left: 333px;
    background-color: ${SunYellow};
  }

  60% {
    left: 443px;
    background-color: ${SunOrange};
    transform: scale(1);
    transform-origin: center;
  }

  80% {
    left: 333px;
    transform: scale(20);
    background-color: ${SunYellow};
    transform-origin: center;
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
    animation: ${StaggeringOrange} ease 4s;
    animation-fill-mode: forwards;
`

const StaggeringGreen = keyframes`
  from, 0% {
    left: 333px;
    background-color: ${SunYellow};
  }

  60% {
    left: 332px;
    background-color: ${SunGreen};
    transform: scale(1);
    transform-origin: center;
  }

  80% {
    left: 333px;
    transform: scale(20);
    background-color: ${SunYellow};
    transform-origin: center;
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
    animation: ${StaggeringGreen} ease 4s;
    animation-fill-mode: forwards;
`

const StaggeringIndigo = keyframes`
  from, 0% {
    left: 333px;
    background-color: ${SunYellow};
  }

  60% {
    left: 221px;
    background-color: ${SunIndigo};
    transform: scale(1);
    transform-origin: center;
  }

  80% {
    left: 333px;
    transform: scale(20);
    background-color: ${SunYellow};
    transform-origin: center;
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
    animation: ${StaggeringIndigo} ease 4s;
    animation-fill-mode: forwards;
`

const StaggeringBlue = keyframes`
  from, 0% {
    left: 333px;
    background-color: ${SunYellow};
  }

  60% {
    left: 111px;
    background-color: ${SunBlue};
    transform: scale(1);
    transform-origin: center;
  }

  80% {
    left: 333px;
    transform: scale(20);
    background-color: ${SunYellow};
    transform-origin: center;
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
    animation: ${StaggeringBlue} ease 4s;
    animation-fill-mode: forwards;
`

const StaggeringPurple = keyframes`
  from, 0% {
    left: 333px;
    background-color: ${SunYellow};
  }

  60% {
    left: 0px;
    background-color: ${SunPurple};
    transform: scale(1);
    transform-origin: center;
  }

  80% {
    left: 333px;
    transform: scale(20);
    background-color: ${SunYellow};
    transform-origin: center;
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
    animation: ${StaggeringPurple} ease 4s;
    animation-fill-mode: forwards;
`

const LegendWLItems = keyframes`
    from, 0% {
       opacity: 0;
    }

    80% {
        opacity: 1;
    }

    100% {
        opacity: 0;
    }
`

export const LegendLabelWL = styled('p')`
    font-size: 1em;
    line-height: 120%;
    color: ${LabelColor};
    animation: ${LegendWLItems} ease 3s;
    animation-fill-mode: forwards;
`

export const Legend = styled('div')`
    display: flex;
    width: 700px;
    justify-content: space-between;
    animation: ${LegendWLItems} ease 3s;
    animation-fill-mode: forwards;
`

const LegendSun = keyframes`
    from, 80% {
       opacity: 0;
    }

    100% {
        opacity: 1;
    }
`

export const LegendLabelSun = styled('p')`
    font-size: 1em;
    line-height: 120%;
    color: ${LabelColor};
    animation: ${LegendSun} ease 3s;
`

export class Sun extends React.Component {
    render() {
        return(
            <SquareWrapper>
            <VizWrapper>
                <SunElement01 />
                <SunElement02 />
                <SunElement03 />
                <SunElement04 />
                <SunElement05 />
                <SunElement06 />
                <SunElement07 />
            </VizWrapper>

             <Legend>
                <LegendLabelWL>short</LegendLabelWL>
                <LegendLabelSun>Sun</LegendLabelSun>
                <LegendLabelWL>long</LegendLabelWL>
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

// export class SunRayShort extends React.Component {
//   render() {
//     const sunElements = [];

//     for (let i = 0; i < 9; i++) {
//         sunElements.push({
//           xPos: 315,
//           yPos: (35 * i),
//         });
//     }

//     return(
//         <VizWrapper>
//           {sunElements.map(( sunElement, i) =>
//             <SunElement key={i} style={{top: sunElement.yPos, left: sunElement.xPos}}/>
//           )}
//         </VizWrapper>
//     );
//   }
// }

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

// type PolarHintValue = { radius: number; value: string };
interface Props {
	show: boolean;
}

export class SunRayShort extends React.Component<Props> {
	sunRayMeta: React.RefObject<HTMLDivElement>;
	constructor(props: Props) {
		super(props);
		this.sunRayMeta = React.createRef();
	}
	show = (): void => {
		select(this.sunRayMeta.current).transition().duration(500).attr('opacity', 1);
	};
	hide = (): void => {
		select(this.sunRayMeta.current).transition().duration(500).attr('opacity', 0);
	};
	componentDidUpdate() {
		this.props.show ? this.show() : this.hide();
	}
	componentDidMount() {
		this.hide();
  }
	render() {
    const sunElements = [];

    for (let i = 0; i < 9; i++) {
        sunElements.push({
          xPos: 315,
          yPos: (35 * i),
        });
    }

		return (
			<VizWrapper ref={this.sunRayMeta}>
          {sunElements.map(( sunElement, i) =>
            <SunElement key={i} style={{top: sunElement.yPos, left: sunElement.xPos}}/>
          )}
        </VizWrapper>
		);
	}
}


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

