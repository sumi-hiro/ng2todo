import { Component } from '@angular/core';
import { TodoComponent } from './todo/';

@Component({
  moduleId: module.id,
  selector: 'app-root',
  templateUrl: 'app.component.html',
  // templateUrl: 'todo/todo.component.html',
  styleUrls: ['app.component.css']
})
export class AppComponent {
  title = 'Hello Angular2 !!';
  // todos: eny;
  // constructor() {
  //   // アプリ内で利用するTodoリストオブジェクト
  //   this.todos = [];
  // }
  // // キーイベントハンドラ
  // enterTodo(newTodo) {
  //   var text = newTodo.value.trim();
  //   if(text) {
  //     this.addTodo(text);
  //     newTodo.value = '';
  //   }
  // }
  // // 新しいtodoを追加
  // addTodo(text) {
  //   this.todos.push({
  //     title: text,
  //     completed: false
  //   });
  // }
}
