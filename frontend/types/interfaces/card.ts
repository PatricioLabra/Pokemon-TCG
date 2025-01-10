export interface Card {
    id:         string;
    name:       string;
    supertype:  string;
    number:     string;
    rarity?:    string;
    images:     Images[];
}

export interface Images {
    id:         number;
    url:        string;
    type:       string;
}
