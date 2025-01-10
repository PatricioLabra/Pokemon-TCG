export interface CardDetail {
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

export interface Images {
    id:         number;
    url:        string;
    type:       string;
}

export interface Markets {
    id:         number;
    url:        string;
    updated_at: Date;
    market:     string;
}