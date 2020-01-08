export const monthsList = {
  0: {
    name: "January",
    userAmount: 0
  },
  1: {
    name: "February",
    userAmount: 0
  },
  2: {
    name: "March",
    userAmount: 0
  },
  3: {
    name: "April",
    userAmount: 0
  },
  4: {
    name: "May",
    userAmount: 0
  },
  5: {
    name: "June",
    userAmount: 0
  },
  6: {
    name: "July",
    userAmount: 0
  },
  7: {
    name: "August",
    userAmount: 0
  },
  8: {
    name: "September",
    userAmount: 0
  },
  9: {
    name: "October",
    userAmount: 0
  },
  10: {
    name: "November",
    userAmount: 0
  },
  11: {
    name: "December",
    userAmount: 0
  }
};

export const enrichMonthByUsersCount = users => {
  const months = JSON.parse(JSON.stringify(monthsList));

  if (!users.length) {
    return months;
  }

  users.forEach(user => {
    if (!user.dob || new Date(user.dob).toString() === "Invalid Date") {
      return;
    }

    const dobIndex = new Date(user.dob).getMonth();

    if (!months[dobIndex]) {
      return;
    }

    months[dobIndex].userAmount++;
  });


  Object.values(months).forEach(month => {
    if (month.userAmount <= 2) {
      return month.className = "gray";
    }

    if (month.userAmount >= 3 && month.userAmount <= 6) {
      return month.className = "blue";
    }

    if (month.userAmount >= 7 && month.userAmount <= 10) {
      return month.className = "green";
    }

    return month.className = "red";
  });

  return months;
};


export const filterUsersByMonth = (users, monthIndex) => {
  if (!users.length) {
    return users;
  }

  return users.filter(user => {
    if (!user.dob || new Date(user.dob).toString() === "Invalid Date") {
      return false;
    }

    return new Date(user.dob).getMonth() === parseInt(monthIndex);
  });
};
