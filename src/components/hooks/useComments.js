import { useEffect, useState } from "react"

const useComment = () => {
    const [comments, setComments] = useState([]);
    useEffect(() => {
        fetch('feckdata.json')
            .then(res => res.json())
            .then(data => setComments(data))
    }, []);
    return [comments, setComments];
}

export default useComment;