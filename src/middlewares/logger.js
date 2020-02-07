/*
 * 打印action, state
 */
const logger = ({ getState, dispatch }) => next => action => {
  console.group(action.type);
  //派发action
  console.log("dispatching:", action);
  const result = next(action);
  //获取新的state
  console.log("next state:", getState());
  console.groupEnd();
  return result;
};

export default logger;
