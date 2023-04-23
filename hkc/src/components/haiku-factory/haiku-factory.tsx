import { FC } from 'react';
import { Haiku } from '../../model/haiku/haiku';
import { HAIKU_TYPES } from '../../model/haiku/haiku-types';
import HaikuComp from '../haiku/base-haiku/Haiku'

export const getHaikuComponent = (haiku: Haiku): JSX.Element => {
    switch(haiku.type){
        case HAIKU_TYPES.CHANGING:
    
        case HAIKU_TYPES.LETTER:
            
        case HAIKU_TYPES.TITLE_FOOTNOTES:
            
        default:
            return <HaikuComp haiku={haiku}></HaikuComp>
    }
}