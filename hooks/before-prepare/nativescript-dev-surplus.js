const compiler = require("surplus-nativescript/compiler")

module.exports = function ($logger, $projectData, $usbLiveSyncService) {
    return compiler.compileProject($projectData.projectDir)
}