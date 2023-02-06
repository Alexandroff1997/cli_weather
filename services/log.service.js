import chalk from 'chalk';
import dedent from 'dedent-js';
 
const printError = (err) => {
	console.log(`${chalk.bgRed(' ERROR ')} : ${err}`);
}

const prinSuccess = (msg) => {
	console.log(`${chalk.bgGreen(' SUCCESS ')} : ${msg}`);
}

const printHelp = () => {
	console.log(
		dedent`${chalk.bgCyan(' HELP ')}
		Без параметров - вывод города
		-s [CITY] для установки города
		-h для вывода помощи
		-t [API_KEY] для сохранения токена
		`
	);
}

export {
	prinSuccess,
	printError,
	printHelp,
}
