var installer = [
    'camelCaser: kittenService',
    'leetMeme : cyberPortal',
    'cyberPortal : ice',
    'fraudStream : leetMeme',
    'ice: ',
    'kittenService : '
];

var output = [];

function outputString(installer) {
    for(var i = 0; i < installer.length; i++) {
        var outputArray = installer[i].trim().split(':');
        var packageName = outputArray[0].trim();
        var dependencyName = outputArray[1].trim();

        if(outputArray.length > 1 && dependencyName === '') {

            if(output.indexOf(packageName) === -1) {
                output.push(packageName);
            }
            else {
                break;
            }
        }
        else if(outputArray.length > 1 && dependencyName !== '') {
            if (output.indexOf(dependencyName) === -1) {
                output.push(dependencyName);
                if(output.indexOf(dependencyName) > -1) {
                    output.push(packageName);
                }
            }
        }
    }
    return output;
}

function buttonClick(){
    document.getElementById('outputDependencies').innerHTML = outputString(installer);
}

console.log(outputString(installer));
