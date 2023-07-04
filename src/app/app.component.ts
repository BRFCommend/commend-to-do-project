import {Component, OnInit} from '@angular/core';
import {ToDo} from '../models/to-do';
import {ToDoService} from '../services/to-do.service';
import {Observable} from 'rxjs';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
    title: string;
    todos$: Observable<ToDo[]>;

    constructor(private api: ToDoService) {
    }

    ngOnInit(): void {
        this.title = 'Commend ToDo Project';
        this.todos$ = this.api.read();
    }

    createTodo = () => this.api.create({ status: 'done', description: 'Bettwäsche wechseln'}).subscribe(
        () => location.reload()
    )

    updateTodo = (toDo: ToDo) => this.api.update(toDo).subscribe(
        () => location.reload()
    )
}
