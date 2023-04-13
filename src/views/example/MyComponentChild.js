import react from "react";
import './MyComponentChild.scss'

class MyComponentChild extends react.Component {


    //     /* 
    //     JSX => return block (1 khoi div)
    //     <react.Fragment>  cach der tra ve nhieu hown 1 div 
    //     */


    state = {
        showJobs: false
    }

    handleShowHide = () => {
        this.setState({
            showJobs: !this.state.showJobs
        })
    }

    handleOnClickDelete = (job) => {
        console.log('>>>> handelOnClickDetele: ', job)
        this.props.deleteAJob(job)
    }
    render() {
        // console.log('>>>> Check props: ', this.props)
        // var name = this.props.name
        // var age = this.props.age

        let { arrJobs } = this.props
        let { showJobs } = this.state
        return (
            <>
                {showJobs === false ?
                    <div>
                        <button className="btn-show"
                            onClick={() => this.handleShowHide()} >Show
                        </button>
                    </div>
                    :
                    <>
                        <div className="job-lists">
                            {
                                arrJobs.map((item, index) => {
                                    return (
                                        <div className="btn-row"
                                            key={item.id}>
                                            <div className="btn-list">{item.title} - {item.salary} $</div>
                                            <></>
                                            <button className="btn-delete"
                                                onClick={() => this.handleOnClickDelete(item)}>x</button>
                                        </div>
                                    )
                                })
                            }
                        </div>

                        <div>
                            <button className="btn-hide"
                                onClick={() => this.handleShowHide()}  >Hide
                            </button>
                        </div>
                    </>
                }
            </>
        )
    }
}

// const MyComponentChild = (props) => {
//     console.log('>>>> check child props: ', props)
//     var { name, age, arrJobs } = props
//     return (
//         <>
//             <div className="job-lists">
//                 {
//                     arrJobs.map((item, index) => {
//                         return (
//                             <div key={item.id}>
//                                 {item.title} - {item.salary}
//                             </div>
//                         )
//                     })
//                 }
//             </div>
//         </>
//     )
// }

export default MyComponentChild;