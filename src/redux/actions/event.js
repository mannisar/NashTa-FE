import { axios } from '../../libraries';

export const createEvent = (data) => {
    return {
        type: "CREATE_EVENT",
        payload: axios({
            method: "POST",
            url: "http://localhost:7000/events",
            data: data,
            headers: {
                "Content-Type": "application/json"
            }
        })
    }
}

export const readEvent = (data) => {
    const page = data.page || 1
    const limit = data.limit || 5
    console.log(data.page)
    return {
        type: "READ_EVENT",
        payload: axios({
            method: "GET",
            url: `http://localhost:7000/events?_page=${page}&_limit=${limit}`,
            headers: {
                "Content-Type": "application/json"
            }
        })
    }
}

export const searchEvent = (data) => {
    return {
        type: "SEARCH_EVENT",
        payload: axios({
            method: "GET",
            url: `http://localhost:7000/events?q=${data}`,
            headers: {
                "Content-Type": "application/json"
            }
        })
    }
}