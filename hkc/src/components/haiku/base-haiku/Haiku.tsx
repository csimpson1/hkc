import React, { FC } from "react";
import styled from "styled-components";
import { HaikuProps } from "../../../model/haiku/haikuProps";

const HaikuComp = (haiku: HaikuProps) : JSX.Element => {
    return (
        <HaikuContainer>
            <div>{haiku.haiku.poem.line1[0]}</div>
            <div>{haiku.haiku.poem.line2[0]}</div>
            <div>{haiku.haiku.poem.line3[0]}</div>
        </HaikuContainer>
    );
}

const HaikuContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export default HaikuComp;