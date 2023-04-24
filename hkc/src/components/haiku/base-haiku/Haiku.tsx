import React, { FC } from "react";
import { HaikuProps } from "../../../model/haiku/haikuProps";
import { HaikuContainer } from "../common-haiku-styles";

const HaikuComp = (haiku: HaikuProps) : JSX.Element => {
    return (
        <HaikuContainer>
            <div>{haiku.haiku.poem.line1[0]}</div>
            <div>{haiku.haiku.poem.line2[0]}</div>
            <div>{haiku.haiku.poem.line3[0]}</div>
        </HaikuContainer>
    );
}

export default HaikuComp;