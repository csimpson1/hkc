import { HAIKU_TYPES } from "./haiku-types";
export type Haiku = {
    id: number;
    poem: {
        line1: String[];
        line2: String[];
        line3: String[];
    },
    type?: HAIKU_TYPES;
    
}
