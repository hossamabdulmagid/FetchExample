
const initialState = {
    loading: true,
    error: '',
    post: {}
}


export const FetchOne = 'FETCH_SUCCESS';

 export const FetchTwo = 'FETCH_ERROR';
const reducer = (state, action) => {
    switch (action.type) {
        case FetchOne:
            return {
                loading: false,
                post: action.payload,
                error: ''
            }
        case FetchTwo:
            return {
                loading: false,
                post: {},
                error: 'Something went Wrong!'
            }

        default: return state;

    }
}
export default reducer;