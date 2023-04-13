import react from "react";
import MyComponentChild from "./MyComponentChild";

import AddComponent from "./AddComponent";

class MyComponent extends react.Component {

    state = {
        // firstName: '',
        // lastName: '',
        arrJobs: [
            { id: 'abcJob1', title: 'Developers', salary: '500' },
            { id: 'abcJob2', title: 'Testers', salary: '400' },
            { id: 'abcJob3', title: 'Project Managers', salary: '1000' }
        ]
    }

    addNewJob = (job) => {
        console.log('check job from parent: ', job)
        this.setState({
            arrJobs: [...this.state.arrJobs, job]
        })
    }

    deleteAJob = (job) => {
        let currentJobs = this.state.arrJobs
        currentJobs = currentJobs.filter(item => item.id !== job.id)
        this.setState({
            arrJobs: currentJobs
        })
    }
    /* 
    JSX => return block (1 khoi div)
    <react.Fragment>  cach der tra ve nhieu hown 1 div 
    */

    render() {

        return (
            <>
                <AddComponent
                    addNewJob={this.addNewJob}
                />
                <MyComponentChild
                    arrJobs={this.state.arrJobs}
                    deleteAJob={this.deleteAJob}
                />
            </>
        )
    }
}

export default MyComponent;