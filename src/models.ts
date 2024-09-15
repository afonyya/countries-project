export type CountryRaw = {
    capitalInfo: {
        latlng: number[];
    };
    name: {
        common: string;
        official: string;
        nativeName: {
            eng: {
                official: string;
                common: string;
            };
        };
    };
    capital: string[];
    region: string;
};

export type Country = {
    capital: string;
    country: string;
    lat: number;
    lon: number;
    region: string;
};

export type Capital = {
    capital: string;
    country: string;
};

export type Result = {
    capital: string;
    country: string;
    distance: number;
};