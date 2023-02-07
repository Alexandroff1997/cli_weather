import { getArgs } from './helpers/args.js';
import { getIcon, getWeather } from './services/api.service.js';
import { printError, prinSuccess, printHelp, printWeather } from './services/log.service.js';
import { getKeyValue, saveKeyValue, TOKEN_ENUM } from './services/storage.service.js';

const saveToken = async (token) => {
	if (!token.length) {
		printError('Не передан токен');
		return;
	}
	try {
		await saveKeyValue(TOKEN_ENUM.token, token);
		prinSuccess('Токен сохранен');
	} catch (err) {
		printError(err.message);
	}
};

const saveCity = async (city) => {
	if (!city.length) {
		printError('Не передан город');
		return;
	}
	try {
		await saveKeyValue(TOKEN_ENUM.city, city);
		prinSuccess('Город сохранен');
	} catch (err) {
		printError(err.message);
	}
};

const getForcast = async () => {
	try {
		const city = process.env.CITY ?? await getKeyValue(TOKEN_ENUM.city);
		const weather = await getWeather(city);
		printWeather(weather, getIcon(weather.weather[0].icon));
	} catch (err) {
		if (err?.response?.status == 404) {
			printError('Неверный город');
		} else if (err?.response?.status == 404) {
			printError('Неверный токен');
		} else {
			printError(err.message);
		}
	}
};

const startCli = () => {
	const args = getArgs(process.argv);

	if (args.h) {
		return printHelp(); 
	}

	if (args.s) {
		return saveCity(args.s);
	}

	if (args.t) {
		return saveToken(args.t);
	}
	return getForcast();
};

startCli();