const CHECK_STATUS = 'bookstore-cms/src/Redux/Categories/CHECK_STATUS';
const initialState = [];

/* eslint-disable  default-param-last */
export default function categoriesReducer(state = initialState, action) {
  switch (action.type) {
    case CHECK_STATUS:
      return 'Under construction';
    default:
      return state;
  }
}

export const checkStatus = () => ({
  type: CHECK_STATUS,
});
