import {Images} from './images';
import {Markets} from './markets';

export interface Card {
    id:         string;
    name:       string;
    supertype:  string;
    subtypes?:   string[];
    types?:      string[];
    setId:      string;
    number:     string;
    rarity?:    string;
    images:     Images[];
    markets:    Markets[];
}
