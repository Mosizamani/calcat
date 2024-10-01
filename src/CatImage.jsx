import { useState, useEffect } from 'react'

function CatImage() {
    const [catImage, setCatImage] = useState()
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState()    
    
    useEffect(() => {
        const getCatImage = async () => {
            try {
                const response = await fetch('https://api.thecatapi.com/v1/images/search')
                    if (response.status === 200) {
                        const data = await response.json()
                        setCatImage(data[0])
                        setError(false)
                    } else {
                        const data = await response.json()
                        setError(data)
                    }
            } catch (error) {
                console.error("Error fetching data:", error)
                setError(error.message)
            } finally {
                setLoading(false)
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

export default CatImage