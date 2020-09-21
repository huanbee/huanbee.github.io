import React, { Component } from "react";
import { Table, Tag, Space } from "antd";
import { loadUsers } from "../../../actions/UsersAction";
import { connect } from "react-redux";
import PropTypes from 'prop-types';

const columns = [
    {
        title: "User name",
        dataIndex: "username",
        key: "username",
        render: (username) => <a>{username}</a>,
    },
    {
        title: "Province",
        dataIndex: "address",
        key: "address",
        render: (address) => <a>{address.province}</a>,
    },
    {
        title: "Street",
        dataIndex: "address",
        key: "address",
        render: (address) => <a>{address.street}</a>,
    },
    // {
    //     title: "Birthday",
    //     dataIndex: "birthday",
    //     key: "birthday",
    //     render: (birthday) => (
    //         <Space size="middle">
    //             <a>{birthday.birthYear}</a>
    //             <a>{birthday.birthMonth}</a>
    //         </Space>
    //     ),
    // },
];

const data = [
    {
        username: "admin",
        address: {
            province: "Hanoi",
            street: "Xuan Thuy",
        },
        birthday: {
            birthYear: "2000",
            birthMonth: "01",
        },
    },
    {
        username: "admin2",
        address: {
            province: "Hanoi",
            street: "Xuan Thuy",
        },
        // birthday: {
        //     birthYear: "2000",
        //     birthMonth: "01",
        // },
    },
];

class ViewUsers extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: false,
        };
    }

    componentDidMount() {
        this.setState({ loading: true });
        this.props.loadUsers().then(() => {
            this.setState({ loading: false });
        });
    }

    render() {
        const { users } = this.props;
        return (
            <>
                { this.state.loading ? <p>Loading....</p> : <Table columns={columns} dataSource={users} /> }
            </>
        );
    }
}

function mapStateToProps(state) {
    return {
        users: state.users.list
    }
}

ViewUsers.propTypes = {
    users: PropTypes.arrayOf(
        PropTypes.shape({
            username: PropTypes.string.isRequired,
            address: PropTypes.shape({
                province: PropTypes.string.isRequired,
                street: PropTypes.string.isRequired
            })
        })
    )
}

export default connect(mapStateToProps, { loadUsers })(ViewUsers);
