import React, { useState } from "react";
import translateServerErrors from "../../services/translateServerErrors.js"
import { Link, Redirect, useParams } from "react-router-dom";

const ReviewForm = ({user}) => {
    const {id: cookbookId } = useParams()

    const[newReview, setNewReview] = useState({
        title: "",
        content: "",
        cookbookId: cookbookId
    })

    const [errors, setErrors] = useState({})

    const handleChange = (event) => {
        console.log("event.target.name", event.target.value)
        setNewReview({
            ...newReview,
            [event.target.name]: event.target.value
        })
    }

    const postReview = async (review, user) => {
        try {
            const response = await fetch("/api/v1/reviews", {
                method: "POST",
                headers: new Headers({
                    "Content-Type": "application/json"
                }),
                body: JSON.stringify({
                    title: review.title,
                    content: review.content,
                    cookbookId: Number(review.cookbookId),
                    userId: Number(user.id)
                })
            })

            console.log("data",data)
            if (!response.ok) {
                if (response.status === 422) {
                    const body = await response.json()
                    const newErrors = translateServerErrors(body.errors)
                    setErrors(newErrors);
                    return false; 
                } else {
                    throw new Error(`Error: ${response.status}`);
                }
            }
            clearForm()
            return true
        
        } catch (error) {
            console.error(`Error in fetch: ${error.message}`)
            return false 
        }
    }    

    const [redirect, setRedirect] = useState(false)

    const handleSubmit = async (event) => {
        event.preventDefault()
        await postReview(newReview, user)
        setRedirect(true)
    }
    console.log(newReview)
    if(redirect) {
        return <Redirect to="/" />
    }

    const clearForm = () => {
        setNewReview({
            title: "",
            content: ""
        })
    
    }



  return (
    <div className="formContainer">
        <div className="formContent"> 
            <h1>Review Form</h1>
            <div>
            <form onSubmit={handleSubmit}>
                    <label className="formLabel" htmlFor="title">Title</label>
                    <input
                        className="formField"
                        type="text"
                        name="title"
                        onChange={handleChange}
                        value={newReview.title}
                        />
                    <label className="formLabel" htmlFor="content">Content</label>
                    <input
                        className="formDescription"
                        type="text"
                        name="content"
                        onChange={handleChange}
                        value={newReview.content}
                        />
                     <input className="formButton" type="submit" value="Add Review"/>
                </form>
                <p>{errors.title}</p>
                <p>{errors.content}</p>
                <div className="showPageNav">
                    <ul>
                        <li><Link to="/">Back to Categories</Link></li>
                        <li><Link to="/cookbooks">All Cookbooks</Link></li>
                    </ul>
                </div>  
            </div>
        </div>
    </div>
  );
}

export default ReviewForm;