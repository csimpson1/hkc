import { HaikuProps } from "../../../model/haiku/haikuProps";
import { HaikuContainer } from "../common-haiku-styles";
import styled from "styled-components";

const HaikuLetterComp = (haiku: HaikuProps) : JSX.Element => {
    return (
        <HaikuContainer>
            <div>{haiku.haiku.poem.line1[0]}</div>
            <div>{haiku.haiku.poem.line2[0]}</div>
            <LastLine>{haiku.haiku.poem.line3[0]}</LastLine>
            <LastLine>{haiku.haiku.poem.line3[1]}</LastLine>
        </HaikuContainer>
    );
}

const LastLine = styled.div`
    margin-left: auto;
`;

export default HaikuLetterComp;