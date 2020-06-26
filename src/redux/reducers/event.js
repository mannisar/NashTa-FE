const initialState = {
    events: [],
    paginates: []
}

const event = (state = initialState, action) => {
    switch (action.type) {
        case 'CREATE_EVENT_PENDING':
            return {
                ...state
            }
        case 'CREATE_EVENT_REJECTED':
            return {
                ...state
            }
        case 'CREATE_EVENT_FULFILLED':
            const newData = [...state.events, action.payload.data]
            return {
                ...state,
                events: newData
            }
        case 'READ_EVENT_PENDING':
            return {
                ...state
            }
        case 'READ_EVENT_REJECTED':
            return {
                ...state
            }
        case 'READ_EVENT_FULFILLED':
            return {
                ...state,
                events: action.payload.data,
                paginates: action.payload.data.length
            }
        case 'SEARCH_EVENT_PENDING':
            return {
                ...state
            }
        case 'SEARCH_EVENT_REJECTED':
            return {
                ...state
            }
        case 'SEARCH_EVENT_FULFILLED':
            return {
                ...state,
                events: action.payload.data
            }
        default:
            return state;
    }
}

export default event;