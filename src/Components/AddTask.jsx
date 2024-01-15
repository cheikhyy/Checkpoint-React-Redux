// AddTask
import React, { useState } from 'react'
import { connect } from 'react-redux';
import { addTask } from '../JS/Actions/actions';

const mapDispatchToProps = dispatch => {
    return {
        addArticle: task => dispatch(addTask(task))
    }
}
const AddTask = (props) => {
    // comportements.......title---content
    const [title, setTitle] = useState('')
    const [content, setContent] = useState('');
    const handleSubmit = (e) => {
        e.preventDefault()
        props.addArticle({
            id: Date.now(),
            title,
            content
        })
    }
    return (
        // Form-List
        <div>
        <form onSubmit={handleSubmit}>
            <div style={{margin:'2rem'}} >
                {/* title-form */}
                <label htmlFor="Title" id='title'>Title:</label>
                <input type="text" name="title" id="title" onChange={e => setTitle(e.target.value)} />
            </div>
            <div>
                {/* content-form */}
                <label htmlFor="Content" id='lab-1'/>
                <textarea name="content" id="content" cols="30" rows="10" onChange={e => setContent(e.target.value)} />
            </div>
            {/* Add-form */}
            <div>
                <input type="submit" value="Add" id='add' />
            </div>
        </form>
        </div>
    )
}

export default connect(null, mapDispatchToProps)(AddTask)
