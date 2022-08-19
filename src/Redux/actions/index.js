// Action creator
export const selectedCategory = category => {
    // Return an action object
    return {
        type: 'CATEGORY_SELECTED',
        payload: category
    }
}


