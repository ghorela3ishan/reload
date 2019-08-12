import Reload from './reload/reload';
import { getLatestVersion, getCurrentVersion } from './reload/services';

const url = 'https://test-4b9e6.firebaseio.com/data.json';
const currentVersion = getCurrentVersion();
const config = {
    verificationPeriod: 10000,
    currentVersion: currentVersion,
    getLatestVersion: getLatestVersion,
    url: url
}

const reloadInstance = new Reload(config);
reloadInstance.setTimer();