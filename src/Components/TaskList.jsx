// TastList
import React from 'react';
import { connect } from 'react-redux';

const mapStateToProps = state => {
    return {
        tasks: state.tasks
    }
}
const TaskList = (props) => {
    return (
        <div>
            {/* map-List.... */}

            {props.tasks.map((task) => <div id={task.id}>
                <h1>{task.title}</h1>
                <p>{task.content}</p>
            </div>)}
        </div>
    )
}


export default connect(mapStateToProps)(TaskList)