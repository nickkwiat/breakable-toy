import React, { useState } from "react"
import { Link, Redirect } from "react-router-dom"
import translateServerErrors from "../../services/translateServerErrors.js"

const CookbookForm = () => {


    const [newCookbook, setNewCookbook] = useState({
        title: "",
        categoryId:"",
        author: "",
        description: ""
    })

    const [errors, setErrors] = useState({})

    const handleChange = (event) => {
        console.log("event.target.name", event.target.value)
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
            return true
        } catch (error) {
            console.error(`Error in fetch: ${error.message}`)
            return false 
        }
    }

    const [redirect, setRedirect] = useState(false)

    const handleSubmit = async (event) => {
        event.preventDefault()
        console.log("pre parseInt", newCookbook)
        newCookbook.categoryId = parseInt(newCookbook.categoryId)
        console.log("post parseInt", newCookbook)
        await postCookbook(newCookbook)
        setRedirect(true)
    }

    if (redirect){
        return <Redirect to="/" />
    }

    const clearForm = () => {
        setNewCookbook({
            title: "",
            categoryId:"",
            author: "",
            description: ""
        })
    }

    const categories = [
        {id: 1, name: "Sweet"},
        {id: 2, name: "Savory"},
        {id: 3, name: "Drinks"},
        {id: 4, name: "Miscellaneous"}
    ]

    return (
        <div>
            <h2>Add new cookbook</h2>
            <form onSubmit={handleSubmit}>
                <label htmlFor="title">Title</label>
                <input type="text" name="title" value={newCookbook.title} onChange={handleChange} />

                <label htmlFor="category">Category</label>
                <select name="categoryId" value={newCookbook.categoryId} onChange={handleChange}>
                {categories.map((category) => (
                    <option key={category.id} value={category.id}>
                    {category.name}
                    </option>
                ))}
                </select>   

                <label htmlFor="author">Author</label>
                <input type="text" name="author" value={newCookbook.value} onChange={handleChange} />
                <label htmlFor="description">Description</label>
                <input type="text" name="description" value={newCookbook.value} onChange={handleChange} />
                <input type="submit" value="Add Cookbook" className="button"/>
            </form>
            <Link className="button" to="/">Back to Cookbooks</Link>      
            {errors.Title && <p className="error">Title: {errors.Title}</p>}
            {errors.Title && <p className="error">Category: {errors.Title}</p>}
            {errors.Author && <p className="error">Author: {errors.Author}</p>}
            {errors.Description && <p className="error">Description: {errors.Description}</p>}
        </div>   
    )
}

export default CookbookForm