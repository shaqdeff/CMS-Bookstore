const CHECK_STATUS = 'bookstore-cms/categories/CHECK_STATUS';
const initialState = [];

/* eslint-disable default-param-last */
function categoriesReducer(state = initialState, action) {
  switch (action.type) {
    case CHECK_STATUS:
      return 'Under construction';
    default:
      return state;
  }
}
export const checkStatus = () => ({ type: CHECK_STATUS });
export default categoriesReducer;
