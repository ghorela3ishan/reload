export const getLatestVersion = (url) => {
    fetch(url).then((response) => {
        return response.version;
    });
}

export const getCurrentVersion = () => {
    let pageScripts = document.getElementsByTagName('script');
    let regex = /.js/;
    for (let i = 0; i < pageScripts.length; i++) {
        let scriptName = pageScripts[i].src;
        let scriptVariables = scriptName.split('/');
        for(let j = 0; j < scriptVariables.length; j++ ) {
            if(regex.test(scriptVariables[j])) {
                return (scriptVariables[j].split('.'))[0];
            } 
        }
    }
}