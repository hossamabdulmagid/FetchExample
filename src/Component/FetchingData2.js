import React, { useReducer, useEffect } from 'react'
import Axios from 'axios'
import { FetchOne, FetchTwo} from '../Store/reducer';
import { connect } from 'redux';
function FetchingData2() {
    const [state, dispatch] = useReducer(reducer, initialState)
    useEffect(() => {
        Axios.get('https://jsonplaceholder.typicode.com/posts/22')
            .then(response => {
                dispatch({ type: 'FETCH_SUCCESS', payload: response.data })
            })
            .catch(error => {
                dispatch({ type: 'FETCH_ERROR' })
            })
    }, [])
    return (
        <div>
            {state.loading ? 'Loading' : state.post.title}
            {state.error ? state.error : null}
        </div>
    )
}
const mapDispatchToProps = (dispatch) => {
    return {

        success: () => dispatch ({type: FetchOne}),
        failed: ()
    }   
}
const mapStateToProps = (state) => {
    return {

    }
}
export default connect(mapStateToProps, mapDispatchToProps)(FetchingData2)
