import {Component, OnInit} from '@angular/core';
import {ToDo} from '../models/to-do';
import {ToDoService} from '../services/to-do.service';
import {Observable} from 'rxjs';
import {DomSanitizer, SafeHtml} from '@angular/platform-browser';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
    title: string;
    todos$: Observable<ToDo[]>;
    newTodo: ToDo;
    safeScript: SafeHtml;
    possibleStatusOptions = [
        'open',
        'done'
    ];

    constructor(private api: ToDoService, private html: DomSanitizer) {
    }

    ngOnInit(): void {
        this.title = 'Commend ToDo Project';
        this.todos$ = this.api.read();
        this.newTodo = {description: '', status: 'open'};
        this.safeScript = this.html.bypassSecurityTrustHtml('<script>window.alert("Test")</script>');
    }

    createTodo = (newTodo: ToDo) => this.api.create(newTodo).subscribe(
        () => location.reload()
    )

    updateTodo = (toDo: ToDo) => this.api.update(toDo).subscribe(
        () => location.reload()
    )

    deleteTodo = (id: number) => this.api.delete(id).subscribe(
        () => location.reload()
    )
}
