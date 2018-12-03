import * as React from 'react';
import 'intersection-observer';
import styled from '@emotion/styled'

export const Scroll = styled('section')`
    position: relative;
`

export const ScrollGraphic = styled('div')`
    position: absolute;
    top: 0;
    left: 0;
    bottom: auto;
    width: 100%;
    -webkit-transform: translate3d(0, 0, 0);
    -moz-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  `

  export const Visualization = styled('div')`
    position: absolute;
    right: 1rem;
    top: 50%;
    -moz-transform: translateY(-50%);
    -webkit-transform: translateY(-50%);
    transform: translateY(-50%);
  `

  export const ScrollText = styled('div')`
    padding: 0 1rem;
    max-width: 30rem;
  `

  export const Step = styled('div')`
    opacity: 0;
    padding: 1rem;
  `

export class Story extends React.Component {
    render() {
        return(
            <Scroll>
                <ScrollGraphic>
                    <Visualization>
                        {/* put viz here */}
                    </Visualization>
                </ScrollGraphic>

                <ScrollText>
                    <Step>
                        <p>1</p>
                    </Step>
                    <Step>
                        <p>2</p>
                    </Step>
                    <Step>
                        <p>3</p>
                    </Step>
                    <Step>
                        <p>4</p>
                    </Step>
                </ScrollText>
            </Scroll>


        );
    }
}