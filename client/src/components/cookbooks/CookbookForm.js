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
                    setErrors(newErrors);
                    return false; 
                } else {
                    throw new Error(`Error: ${response.status}`);
                }
            }
            clearForm()
            history.push("/cookbooks")
            return true
        } catch (error) {
            console.error(`Error in fetch: ${error.message}`)
            return false 
        }
    }

    const handleSubmit = async (event) => {
        event.preventDefault()
        await postCookbook(newCookbook)

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
            <h2>Add new cookbook</h2>
            <form onSubmit={handleSubmit}>
                <label htmlFor="title">Title</label>
                <input type="text" name="title" value={newCookbook.value} onChange={handleChange} />
                <label htmlFor="author">Author</label>
                <input type="text" name="author" value={newCookbook.value} onChange={handleChange} />
                <label htmlFor="description">Description</label>
                <input type="text" name="description" value={newCookbook.value} onChange={handleChange} />
                <label htmlFor="publicationDate">Publication Date</label>
                <input type="text" name="publicationDate" value={newCookbook.value} onChange={handleChange} />
                <input type="submit" value="Add Cookbook" className="button"/>
            </form>
            <Link className="button" to="/">Back to Cookbooks</Link>      
            {errors.Title && <p className="error">Title: {errors.Title}</p>}
            {errors.Author && <p className="error">Author: {errors.Author}</p>}
            {errors.Description && <p className="error">Description: {errors.Description}</p>}
            {errors.PublicationDate && <p className="error">Publication Date: {errors.PublicationDate}</p>}  
        </div>   
    )
}

export default CookbookForm