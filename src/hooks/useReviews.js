import { useEffect, useState } from "react";

const useReviews = () => {
    const [reviews, setReviews] = useState([]);
    useEffect(() => {
        fetch('review.json')
            .then(res => res.json())
            .then(data => {
                setReviews(data)
                console.log(data)
            });
    }, []);
    return [reviews, setReviews];

}


export default useReviews;