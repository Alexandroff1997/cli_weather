import { homedir } from 'os';
import { join } from 'path';
import { promises } from 'fs';

const TOKEN_ENUM = {
	token: 'token',
	city: 'city',
};

const filePath = join(homedir(), 'weather-data.json');

const readFileFunc = async () => {
	const file = await promises.readFile(filePath);

	return JSON.parse(file)
};
 
const saveKeyValue = async (key, value) => {
	let data = {};

	if (await isExist(filePath)) {
		data = await readFileFunc();
	}
	
	data[key] = value;
	await promises.writeFile(filePath, JSON.stringify(data));
};

const getKeyValue = async (key) => {
	let data = {};

	if (await isExist(filePath)) {
		data = await readFileFunc();
		return data[key];
	}
	
	return null;
};

const isExist = async (path) => {
	try {
		await promises.stat(path);
		return true;
	} catch (err) {
		return false;
	}
};

export { 
	saveKeyValue,
	getKeyValue,
	TOKEN_ENUM, 
};