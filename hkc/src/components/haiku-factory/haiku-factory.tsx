import { FC } from 'react';
import { Haiku } from '../../model/haiku/haiku';
import { HAIKU_TYPES } from '../../model/haiku/haiku-types';
import HaikuComp from '../haiku/base-haiku/haiku'
import HaikuLetterComp from '../haiku/letter-haiku/letter-haiku';
import HaikuTitleFootnoteComp from '../haiku/title-footnote-haiku/title-footnote-haiku';

export const getHaikuComponent = (haiku: Haiku): JSX.Element => {
    switch(haiku.type){
        case HAIKU_TYPES.LETTER:
            return <HaikuLetterComp haiku={haiku}></HaikuLetterComp>
        case HAIKU_TYPES.TITLE_FOOTNOTES:
            return <HaikuTitleFootnoteComp haiku={haiku}></HaikuTitleFootnoteComp>
        case HAIKU_TYPES.CHANGING:
            // TODO: Replace this with the component for changing haiku types once created
        default:
            return <HaikuComp haiku={haiku}></HaikuComp>
    }
}