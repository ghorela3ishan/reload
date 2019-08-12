export default class Reload {
    constructor(config) {
        this.config = config;
    }

    setTimer = () => {
        this.timer = setInterval(() => {
            this.checkVersion();
        }, this.config.verificationPeriod);
    }

    checkVersion = () => {
        const latestVersion = this.config.getLatestVersion(this.config.url);
        latestVersion != this.config.currentVersion && window.location.reload(); 
    }


    clearTimer = () => {
        this.timer.clearInterval();
    }
}