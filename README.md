# surplus-nativescript-template

First time you can setup nativescript from [here](http://docs.nativescript.org/start/ns-setup-installer)

## Running this project
1. `git clone https://github.com/ismail-codar/surplus-nativescript-template.git`
2. `cd surplus-nativescript-template`
3. `npm install`
4. `tns run android`

### Manual project configuration details
1. `tns create my-app`
2. `cd my-app`
3. `npm install --save s-js s-array surplus surplus-nativescript` 
4. create a tsconfig.json in my-app folder like [this content](https://github.com/ismail-codar/surplus-nativescript-template/blob/master/tsconfig.json)
5. Setup hooks like [this](https://github.com/ismail-codar/surplus-nativescript-template/tree/master/hooks)
6. Add the line `require("surplus-nativescript")` to the top of the ./app/app.js file
