import { useEffect, useReducer } from 'react'

const ACTIONS = {
    CALL_API: 'call-api',
    SUCCESS: 'success',
    ERROR: 'error'
}
 
const catImageReducer = (state, action) => {
    switch (action.type) {
        case ACTIONS.CALL_API: {
            return {
                ...state,
                loading: true,
            }
        }
        case ACTIONS.SUCCESS: {
            return {
                ...state,
                loading: false,
                catImage: action.data,
            }
        }
        case ACTIONS.ERROR: {
            return {
                ...state,
                loading: false,
                error: action.error,
            }
        }
        default:
            throw new Error(`Unhandled action type: ${action.type}`)
    }
}

const initialState = {
    catImage: '',
    loading: false,
    error: null,
}

function CatImageReducer() {
    const [state, dispatch] = useReducer(catImageReducer, initialState)
    const { catImage, loading, error } = state

    useEffect(() => {
        const getCatImage = async () => {
            try {
                dispatch({ type: ACTIONS.CALL_API })
                const response = await fetch('https://api.thecatapi.com/v1/images/search')
                if (response.status === 200) {
                    const data = await response.json()
                    dispatch({ type: ACTIONS.SUCCESS, data: data[0] })
                } else {
                    const data = await response.json()
                    dispatch({ type: ACTIONS.ERROR, error: data })
                }
            } catch (error) {
                console.error("Error fetching data:", error)
                dispatch({ type: ACTIONS.ERROR, error: error.message })
            }
        }

        getCatImage()

    }, [])

    return (
        <div>
            {loading && (<p>Loading...</p>)}
            {loading && <a href="https://dribbble.com/shots/3718681-Loading-GIF/attachments/9981630?mode=media"></a>}
            {error && (<p>Error: {error}</p>)}
            {catImage && (<img src={catImage.url} width="300" height="300" alt="A random cat" />)}
        </div>

    )
}

export default CatImageReducer
