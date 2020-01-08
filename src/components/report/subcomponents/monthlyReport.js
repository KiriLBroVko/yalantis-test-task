import React, { Component } from "react";
import axios from "axios";
import Table from "../../table";
import Button from "../../button";
import styles from "../index.module.scss";
import {
  enrichMonthByUsersCount,
  filterUsersByMonth
} from "./monthlyReport.helper";
import {
  API_GET_USERS,
  IS_LOADING_MESSAGE,
  IS_ERROR_MESSAGE
} from "../../../constants";

const TABLE_STRUCTURE = ["Id", "Fist name", "Last Name", "DOB"];

class UserReport extends Component {
  state = {
    users: [],
    initialUsers: [],
    isLoading: false,
    isError: false
  };

  componentDidMount() {
    this.setState({ isLoading: true });

    return axios
      .get(API_GET_USERS)
      .then(({ data }) => {
        const users = JSON.parse(JSON.stringify(data));

        return this.setState({
          users,
          initialUsers: users,
          isLoading: false,
          isError: false
        });
      })
      .catch(err =>
        this.setState({
          users: [],
          initialUsers: [],
          isLoading: false,
          isError: true
        })
      );
  }

  onMouseOver = monthIndex => {
    const { initialUsers } = this.state;
    const filteredUsers = filterUsersByMonth(initialUsers, monthIndex);

    return this.setState({ ...this.state, users: filteredUsers });
  };

  showInitialState = () => {
    const { initialUsers } = this.state;
    const users = JSON.parse(JSON.stringify(initialUsers));

    return this.setState({ ...this.state, users });
  };

  render() {
    const { users, initialUsers, isError, isLoading } = this.state;

    if (isLoading) {
      return <h3 className="text-align-center">{IS_LOADING_MESSAGE}</h3>;
    }

    if (isError) {
      return <h3 className="text-align-center">{IS_ERROR_MESSAGE}</h3>;
    }

    const months = enrichMonthByUsersCount(initialUsers);

    return (
      <div className={styles.report}>
        <h2 className="text-align-center">User per month report</h2>

        <div className={styles.report__content}>
          {Object.entries(months).map(([monthIndex, month]) => {
            return (
              <div
                key={monthIndex}
                className={`${styles.report__month} ${styles[month.className]}`}
                onMouseOver={() => this.onMouseOver(monthIndex)}
              >
                {month.name}
              </div>
            );
          })}
        </div>

        <div className={styles.tableWrapper}>
          <h2 className={styles.tableWrapper__title}>Users report</h2>
          <div className={styles.tableWrapper__btn}>
            <Button
              onClick={this.showInitialState}
              onMouseOut={(event) => event.target.blur()}
            >
              <span className="font-weight-600">Show all users</span>
            </Button>
          </div>
        </div>

        {
          users.length
            ? <Table structure={TABLE_STRUCTURE} data={users} />
            : <h3 className="text-align-center">Calculating users...</h3>
        }
      </div>
    );
  }
}

export default UserReport;
