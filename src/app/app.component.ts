import {Component, OnInit} from '@angular/core';
import {ToDo} from '../models/to-do';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
    title: string;
    todos: ToDo[];

    ngOnInit(): void {
        this.title = 'Commend ToDo Project';
        this.todos = [
            {
                id: 1,
                description: 'I am a todo entry',
                status: 'open'
            }
        ];
    }
}
