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
        <div className="formContainer">
            <div className="formContent"> 
                <h2>Add new cookbook</h2>
                <form onSubmit={handleSubmit}>
                    <label className="formLabel" htmlFor="title">Title</label>
                    <input className="formField" type="text" name="title" value={newCookbook.title} onChange={handleChange} />

                    <label className="formLabel" htmlFor="category">Category</label>
                    <select className="formField" name="categoryId" value={newCookbook.categoryId} onChange={handleChange}>
                    {categories.map((category) => (
                        <option key={category.id} value={category.id}>
                        {category.name}
                        </option>
                    ))}
                    </select>   
                    <label className="formLabel" htmlFor="author">Author</label>
                    <input className="formField" type="text" name="author" value={newCookbook.value} onChange={handleChange} />
                    <label className="formLabel" htmlFor="description">Description</label>
                    <textarea className="formField" id="formDescription" type="text" name="description" value={newCookbook.value} onChange={handleChange} />
                    <input id="formButton" type="submit" value="Add Cookbook" className="button"/>
                </form>
                <div className="showPageNav">
                    <ul>
                        <li><Link to="/">Back to Categories</Link></li>
                        <li><Link to="/cookbooks">All Cookbooks</Link></li>
                    </ul>
                </div>  
                {errors.Title && <p className="error">Title: {errors.Title}</p>}
                {errors.Title && <p className="error">Category: {errors.Title}</p>}
                {errors.Author && <p className="error">Author: {errors.Author}</p>}
                {errors.Description && <p className="error">Description: {errors.Description}</p>}
            </div>
        </div>   
    )
}

export default CookbookForm