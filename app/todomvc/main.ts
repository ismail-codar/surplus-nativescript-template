import { StackLayout } from 'tns-core-modules/ui/layouts/stack-layout';

import S from 's-js';

import { ToDosModel } from './models';
import { ToDosCtrl } from './controllers';
import { ToDosRouter } from './router';
import { LocalStoragePersistence } from './persistence';
import { TodoMvcAppView } from "./views";

export class TodoMvcControl extends StackLayout {
    constructor() {
        super()
        S.root(() => {
            const model = ToDosModel([]),
                ctrl = ToDosCtrl(model),
                // router = ToDosRouter(ctrl),
                // storage = LocalStoragePersistence(model),
                view = TodoMvcAppView(ctrl);

            this.addChild(view);
        });
    }
}