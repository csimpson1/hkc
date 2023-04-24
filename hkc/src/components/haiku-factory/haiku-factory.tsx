import { FC } from 'react';
import { Haiku } from '../../model/haiku/haiku';
import { HAIKU_TYPES } from '../../model/haiku/haiku-types';
import HaikuComp from '../haiku/base-haiku/haiku'
import HaikuLetterComp from '../haiku/letter-haiku/letter-haiku';

export const getHaikuComponent = (haiku: Haiku): JSX.Element => {
    switch(haiku.type){
        case HAIKU_TYPES.CHANGING:
    
        case HAIKU_TYPES.LETTER:
            
        case HAIKU_TYPES.TITLE_FOOTNOTES:
            return <HaikuLetterComp haiku={haiku}></HaikuLetterComp>
        default:
            return <HaikuComp haiku={haiku}></HaikuComp>
    }
}