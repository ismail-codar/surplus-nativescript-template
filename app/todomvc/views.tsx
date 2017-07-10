import { StackLayout } from "tns-core-modules/ui/layouts/stack-layout/stack-layout";
import { Button } from "tns-core-modules/ui/button/button";
import { Label } from "tns-core-modules/ui/label/label";
import { TextField } from "tns-core-modules/ui/text-field/text-field";
import { ListView } from "tns-core-modules/ui/list-view";
import { DockLayout } from "tns-core-modules/ui/layouts/dock-layout";
import { ToDosCtrl } from "./controllers";

export const TodoMvcAppView = (ctrl: ToDosCtrl) =>
    <StackLayout>
        <TextField text={ctrl.newTitle()} returnPress={e => { ctrl.newTitle(e.object.text); ctrl.create() }} />
        <Label text="Type anything and press enter " textAlignment="right"/>
        <StackLayout orientation='vertical'>
            {
                ctrl.displayed().map(todo =>
                    <Label text={todo.title()} />
                )
            } 
        </StackLayout>
    </StackLayout> 