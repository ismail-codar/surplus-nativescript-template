import S, { DataSignal } from 's-js';
import { ToDo, ToDosModel, returnType } from './models';
import { SArray, SDataArray } from "s-array";

export type ToDosCtrl = typeof toDosCtrlType; const toDosCtrlType = returnType(ToDosCtrl);

// export interface IToDosCtrl {
//     editing: DataSignal<ToDo>
//     filter: DataSignal<boolean>
//     newTitle: DataSignal<string>
//     all: SArray<ToDo>
//     completed: SArray<ToDo>
//     remaining: SArray<ToDo>
//     displayed: SArray<ToDo>
//     allCompleted: DataSignal<boolean>
// }



function ToDoCtrl(todos: SDataArray<ToDo>, editing: DataSignal<null | ToDo>) {
    return (todo: ToDo) => {
        const title = S.data(S.sample(todo.title));
        return {
            title,
            completed: todo.completed,
            remove: () => todos.remove(todo),
            startEditing: () => editing(todo),
            editing: () => editing() === todo,
            endEditing: (commit: boolean) => {
                if (commit) {
                    var trimmed = title().trim();
                    if (trimmed) {
                        todo.title(title(trimmed));
                    } else {
                        todos.remove(todo);
                    }
                } else {
                    title(todo.title());
                }
                editing(null);
            }
        };
    }
}

export class ToDosCtrlCls {
    editing = S.data(null as null | ToDo) // the todo selected for editing, or null if none selected
    filter = S.data(null as null | boolean) // null = no filtering, true = only completed, false = only incomplete
    newTitle = S.data('')
    all = this.todos.map(ToDoCtrl(this.todos, this.editing))
    completed = this.all.filter(t => t.completed())
    remaining = this.all.filter(t => !t.completed())
    displayed = () => this.filter() === null ? this.all() : this.filter() ? this.completed() : this.remaining()
    allCompleted = () => this.all().length > 0 && this.remaining().length === 0
    setAll = (c: boolean) => S.freeze(() => this.todos().forEach(t => t.completed(c)))
    clearCompleted = () => this.todos(this.todos().filter(t => !t.completed()))
    create = () => {
        var title = this.newTitle().trim();
        if (title) {
            this.newTitle("");
            this.todos.unshift(ToDo(title, false));
        }
    }
    constructor(public todos: SDataArray<ToDo>) {
    }
}

export function ToDosCtrl({ todos }: ToDosModel) {
    const editing = S.data(null as null | ToDo), // the todo selected for editing, or null if none selected
        filter = S.data(null as null | boolean), // null = no filtering, true = only completed, false = only incomplete
        newTitle = S.data(''),
        all = todos.map(ToDoCtrl(todos, editing)),
        completed = all.filter(t => t.completed()),
        remaining = all.filter(t => !t.completed()),
        displayed = () => filter() === null ? all() : filter() ? completed() : remaining()

    return {
        filter,
        newTitle,
        all,
        completed,
        remaining,
        displayed,
        allCompleted: () => all().length > 0 && remaining().length === 0,
        setAll: (c: boolean) => S.freeze(() => todos().forEach(t => t.completed(c))),
        clearCompleted: () => todos(todos().filter(t => !t.completed())),
        create: () => {
            var title = newTitle().trim();
            if (title) {
                newTitle("");
                todos.unshift(ToDo(title, false));
            }
        }
    };
}