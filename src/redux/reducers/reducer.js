const initialState = {
    items: null
};

const data = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_USERS':
            return {
                ...state,
                items: action.payload,
            };

        case 'SORT_USERS_NAME':
            const newItemsName = state.items.sort((a, b) => a.name > b.name ? 1 : -1);
            return {
                ...state,
                items: newItemsName,
            };

        case 'SORT_USERS_AGE':
            const newItemsAge = state.items.sort((a, b) => a.age > b.age ? 1 : -1);
            return {
                ...state,
                items: newItemsAge,
            };

        case 'SORT_USERS_SEX':
            const newItemsSex = state.items.sort((a, b) => a.sex > b.sex ? 1 : -1);
            return {
                ...state,
                items: newItemsSex,
            };

        case 'SORT_USERS_POSITION':
            const newItemsPosition = state.items.sort((a, b) => a.position > b.position ? 1 : -1);
            return {
                ...state,
                items: newItemsPosition,
            };

        case 'REMOVE_USER_ITEM':
            const newItems = state.items.filter((item) => item.id !== action.payload);
            return {
                ...state,
                items: newItems,
            };

        default:
            return state;
    }
};

export default data;