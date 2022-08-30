export enum ActionTypes {
  ADD_ITEM,
  REMOVE_ITEM,
  EDIT_ITEM,
  SAVE_EDITED_ITEM,
  CANCEL_EDITED_ITEM,
  SET_STATUS,
}

export type Action = {
  type: ActionTypes;
  payload?: any;
};

export interface Todo {
  id: number;
  title: string;
  description: string;
  status: string;
}

export type State = {
  items: Todo[];
  editingId: number | null;
};

export type TodoStatus = "pending" | "working" | "finished";
