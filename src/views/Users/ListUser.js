import react from "react";
import axios from "axios";
import './ListUser.scss'
import { withRouter } from "react-router-dom";
class ListUser extends react.Component {

    state = {
        listUsers: []
    }

    async componentDidMount() {
        // axios.get("https://reqres.in/api/users?page=2")
        //     .then(res => {
        //         console.log(">>>> check res: ", res.data.data)
        //     })

        let res = await axios.get("https://reqres.in/api/users?page=1")
        this.setState({
            listUsers: res && res.data && res.data.data ? res.data.data : []
        })
    }
    handleViewDatailUser = (user) => {
        // console.log('>>>>>check user:', this.props)
        this.props.history.push(`/user/${user.id}`)
    }

    render() {
        let { listUsers } = this.state
        return (
            <div className="listUser-container">
                <div className="title">
                    Fetch all list users
                </div>
                <div className="list-user-content">
                    {listUsers && listUsers.length > 0 &&
                        listUsers.map((item, index) => {
                            return (
                                <div className="child" key={item.id}
                                    onClick={() => this.handleViewDatailUser(item)}
                                >
                                    {index + 1} - {item.first_name} {item.last_name}
                                </div>
                            )
                        })

                    }
                </div>
            </div>
        )
    }
}
export default withRouter(ListUser)