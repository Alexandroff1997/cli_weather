import { getArgs } from './helpers/args.js';
import { printError, prinSuccess, printHelp } from './services/log.service.js';

const startCli = () => {
	const args = getArgs(process.argv);

	if (args.h) {
		printHelp(); 
	}

	if (args.s) {

	}

	if (args.t) {

	}
};

startCli();