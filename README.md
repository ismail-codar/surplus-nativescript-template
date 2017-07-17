# surplus-nativescript-template

First time you can setup nativescript from [here](http://docs.nativescript.org/start/ns-setup-installer)

## Running this project
1. `git clone https://github.com/ismail-codar/surplus-nativescript-template.git`
2. `cd surplus-nativescript-template`
3. `npm install`
4. But there is an [issue](https://github.com/adamhaile/S/issues/2)
    1. Navigate .\node_modules\s-js folder.
    2. Open tsconfig.json and change compilerOptions\module to "commonjs"
    2. Run `npm run build` command in this folder.  (Note: You must have global rollup installation via `npm install -g rollup`)
5. Re-navigate surplus-nativescript-template folder and run `tns run android`

### Manual project configuration details
1. `tns create my-app`
2. `cd my-app`
3. `npm install --save s-js s-array surplus surplus-nativescript` 
4. create a tsconfig.json in my-app folder like [this content](https://github.com/ismail-codar/surplus-nativescript-template/blob/master/tsconfig.json)
5. Setup hooks like [this](https://github.com/ismail-codar/surplus-nativescript-template/tree/master/hooks)
6. Add the line `require("surplus-nativescript")` to the top of the ./app/app.js file
