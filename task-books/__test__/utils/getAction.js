function findAction(store, type) {
  return store.getActions().find(action => action.type === type);
}

export function getAction(store, type) {
  const action = findAction(store, type);
  return Promise.resolve(action);
}
