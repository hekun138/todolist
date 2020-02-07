import { 
  ADD_TODO, 
  TOGGLE_TODO, 
  SET_FILTER, 
  SET_TODO_TEXT,
  FETCH_TODO_REQUEST,
  FETCH_TODO_SUCCESS,
  FETCH_TODO_FAILURE
 } from "./actionTypes";
let nextTodoId = 0;

const fetchTodosRequest = () => ({
  type: FETCH_TODO_REQUEST
});

const fetchTodosSuccess = (data) => ({
  type: FETCH_TODO_SUCCESS,
  data
});

const fetchTodosFailure = (error) => ({
  type: FETCH_TODO_FAILURE,
  error
});

//异步action
export const fetchTodos = () => {
  return (dispatch) => {
    dispatch(fetchTodosRequest());
    return fetch("./mock/todos.json").then(
      response => {
        response.json().then(data => {
          dispatch(fetchTodosSuccess(data))
        })
      },
      error => {
        dispatch(fetchTodosFailure(error));
        console.log("An error occurred: " + error);
      }
    )
  }
}

/*
* 新增待办事项
* @param {*} text
*/
export const addTodo = text => ({
  type: ADD_TODO,
  id: nextTodoId++,
  text
});
/*
* 更改待办事项状态
* @param {*} text
*/
export const toggleTodo = id => ({
  type: TOGGLE_TODO,
  id
})
/*
* 设置过滤状态
* @param {*} filter
*/
export const setFilter = filter => ({
  type: SET_FILTER,
  filter
})
/*
* 设置新增待办事项的文本
* @param {*} text
*/
export const setTodoText = text => ({
  type: SET_TODO_TEXT,
  text
})
