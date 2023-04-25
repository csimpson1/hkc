import { HaikuProps } from "../../../model/haiku/haikuProps";
import { HaikuContainer } from "../common-haiku-styles";
import styled from "styled-components";

const HaikuTitleFootnoteComp = (haiku: HaikuProps) : JSX.Element => {
    return (
        <HaikuContainer>
            <Title>{haiku.haiku.poem.line1[0]}</Title>
            <div>{haiku.haiku.poem.line2[0]}<Superscript>1</Superscript></div>

            <Footnote>1: {haiku.haiku.poem.line3[0]}</Footnote>
        </HaikuContainer>
    );
}

const Title = styled.div`
    font-weight: bolder;
    text-decoration: underline;
`;
const Superscript = styled.span`
    font-size: 50%;
    vertical-align: super;
`;

const Footnote = styled.div`
    width: 100%;
    margin-top: 15px;
    border-top: 1px solid black;
`;

export default HaikuTitleFootnoteComp;