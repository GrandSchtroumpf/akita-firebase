import { Injectable } from '@angular/core';
import { EntityStore, StoreConfig } from '@datorama/akita';
import { Todo } from './todo.model';
import { CollectionState } from 'akita-firebase';

export interface TodosState extends CollectionState<Todo> {
  ids: string[];
}

@Injectable({ providedIn: 'root' })
@StoreConfig({ name: 'todos', idKey: 'id' })
export class TodosStore extends EntityStore<TodosState, Todo> {

  constructor() {
    super();
  }

}

