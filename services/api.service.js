import axios from 'axios';
import { getKeyValue, TOKEN_ENUM } from './storage.service.js';

const getWeather = async (city) => {
	const token = await getKeyValue(TOKEN_ENUM.token);

	if (!token) {
		throw new Error('Отсутствует ключ API, используйте команду -t [API_KEY] чтобы его задать');
	}

	const { data } = await axios.get('https://api.openweathermap.org/data/2.5/weather', {
		params: {
			q: city,
			appid: token,
			language: 'en',
			units: 'metric',
		}
	});

	return data;
};

export { getWeather };