import axios from 'axios';
import { Country, CountryRaw } from './models';

const api = axios.create({
    baseURL: 'https://restcountries.com/v3.1',
});

const mapCountries = (countries: CountryRaw[]): Country[] =>
    countries.map(country => ({
        capital: country.capital[0],
        country: country.name.common,
        lat: country.capitalInfo.latlng[0],
        lon: country.capitalInfo.latlng[1],
        region: country.region,
    }));

export const getCountries = async () => {
    const params = new URLSearchParams({
        fields: 'capital,name,capitalInfo,region',
    });
    const response = await api.get<CountryRaw[]>('/all', {
        params: params,
    });
    return mapCountries(response.data);
};
