import { HttpClient } from '@angular/common/http';
import { ToDo } from '../models/to-do';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class ToDoService {
    private baseURL = `/api`;

    constructor(private http: HttpClient) {
    }

    read = () => this.http.get<ToDo[]>(`${this.baseURL}/users`);

    create = (todo: ToDo) => this.http.post<ToDo[]>(`${this.baseURL}/users`, todo);

    update = (todo: ToDo) => this.http.put<ToDo[]>(`${this.baseURL}/users/${todo.id}`, todo);

    delete = (id: number) => this.http.delete<ToDo[]>(`${this.baseURL}/users/${id}`);
}
