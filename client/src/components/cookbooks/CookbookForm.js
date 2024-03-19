import React, { useState } from "react"
import { useHistory, Link } from "react-router-dom"
import translateServerErrors from "../../services/translateServerErrors.js"

const CookbookForm = () => {

    const history = useHistory()

    const [newCookbook, setNewCookbook] = useState({
        title: "",
        author: "",
        description: "",
        publicationDate: ""
    })

    const [errors, setErrors] = useState({})

    const handleChange = (event) => {
        setNewCookbook({
            ...newCookbook,
            [event.target.name]: event.target.value
        })
    }

    const postCookbook = async (newCookbook) => {
        try {
            const response = await fetch("/api/v1/cookbooks", {
                method: "POST",
                headers: new Headers({
                    "Content-Type": "application/json"
                }),
                body: JSON.stringify(newCookbook)
            })
            if (!response.ok) {
                if (response.status === 422) {
                    const body = await response.json()
                    const newErrors = translateServerErrors(body.errors)
                    setErrors(newErrors); // Assuming this function returns an object
                    return false; // Indicate failure
                } else {
                    throw new Error(`Error: ${response.status}`);
                }
            }
            clearForm()
            history.push("/cookbooks")
            return true
        } catch (error) {
            console.error(`Error in fetch: ${error.message}`)
            return false // Indicate failure
        }
    }

    const handleSubmit = async (event) => {
        event.preventDefault()
        const success = await postCookbook(newCookbook)
        if (success) {
            console.log
        } else {
            console.log("Failed to create cookbook")
        }
    }


    const clearForm = () => {
        setNewCookbook({
            title: "",
            author: "",
            description: "",
            publicationDate: ""
        })
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <h2>Add new cookbook</h2>
                <label htmlFor="title">Title</label>
                <input type="text" name="title" onChange={handleChange} />
                <label htmlFor="author">Author</label>
                <input type="text" name="author" onChange={handleChange} />
                <label htmlFor="description">Description</label>
                <input type="text" name="description" onChange={handleChange} />
                <label htmlFor="publicationDate">Publication Date</label>
                <input type="text" name="publicationDate" onChange={handleChange} />
                <input type="submit" value="Add Cookbook" />
                <Link to="/cookbooks">Back to Cookbooks</Link>      
            </form>
            {errors.Title && <p className="error">Title: {errors.Title}</p>}
            {errors.Author && <p className="error">Author: {errors.Author}</p>}
            {errors.Description && <p className="error">Description: {errors.Description}</p>}
            {errors.PublicationDate && <p className="error">Publication Date: {errors.PublicationDate}</p>}  
        </div>   
    )
}

export default CookbookForm