import { combineReducers } from "redux";

const categoriesReducers = () => {
    return null;
};

const selectedCategoryReducer = (selectedCategory = 'all', action) => {
    if (action.type === 'CATEGORY_SELECTED') {
        return action.payload;
    }
    return selectedCategory;
};


export default combineReducers({
    selectedCategory: selectedCategoryReducer,
});