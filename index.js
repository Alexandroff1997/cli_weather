import { getArgs } from './helpers/args.js';
import { getWeather } from './services/api.service.js';
import { printError, prinSuccess, printHelp } from './services/log.service.js';
import { saveKeyValue, TOKEN_ENUM } from './services/storage.service.js';

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

const startCli = () => {
	const args = getArgs(process.argv);

	if (args.h) {
		printHelp(); 
	}

	if (args.s) {

	}

	if (args.t) {
		return saveToken(args.t);
	}
	getWeather('moscow');
};

startCli();