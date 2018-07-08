export const ACTION_CHANGE_MODAL_ACTIVITY = 'ACTION_CHANGE_MODAL_ACTIVITY';

export const changeActivity = (isActive) => {
  return {
    type: ACTION_CHANGE_MODAL_ACTIVITY,
    payload: {isActive: !isActive}
  }
}