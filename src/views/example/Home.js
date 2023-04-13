import react from "react";
import { withRouter } from "react-router";
import Color from "../HOC/Color";
import avatar from '../../assets/images/bin.jpg'
import { connect } from "react-redux";
import ListUser from "../Users/ListUser";
import { type } from "@testing-library/user-event/dist/type";

class Home extends react.Component {

    componentDidMount() {
        setTimeout(() => {
            // console.log('check timeout')
            this.props.history.push('/todos')
        }, 3000)
    }

    handleDeleteUser = (user) => {
        this.props.deleteUserRedux(user)
    }

    handleCreateUser = () => {
        this.props.addUserRedux()
    }

    render() {
        console.log('>>>>> check props: ', this.props)
        let listUsers = this.props.dataRedux
        return (
            <>
                <div>helllo</div>
                <div>
                    <img src={avatar} style={{ width: '250px', height: '250px' }} />
                </div>
                <div>
                    {listUsers && listUsers.length > 0 &&
                        listUsers.map((item, index) => {
                            return (
                                <div key={item.id}>
                                    {index + 1}-{item.name}
                                    &nbsp; <span onClick={() => this.handleDeleteUser(item)}>x</span>
                                </div>
                            )
                        })
                    }
                    <button onClick={() => this.handleCreateUser()}>Add new</button>
                </div>
            </>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        dataRedux: state.users
    }
}

const mapDispatchToprops = (dispatch) => {
    return {
        deleteUserRedux: (userDelete) => dispatch({ type: 'DELETE_USER', payload: userDelete }),
        addUserRedux: () => dispatch({ type: 'CREATE_USER' }),
    }
}

// export default withRouter(Home)
export default connect(mapStateToProps, mapDispatchToprops)(Color(Home))