import React from 'react';
import { getHaikuComponent } from '../haiku-factory/haiku-factory';
import styled from 'styled-components';
import { HaikuProps } from '../../model/haiku/haikuProps';

const HaikuWrapper = (props: HaikuProps): JSX.Element => {
    return (
        <Container>
            {getHaikuComponent(props.haiku)}
        </Container>
    )
    
}

const Container = styled.div`
    max-width: 500px;
    border: 1px solid black;
    padding: 10px 20px;
`;

export default HaikuWrapper;