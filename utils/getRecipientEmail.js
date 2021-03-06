function getRecipientEmail(users, loggedInUser) {
  return users?.filter(
    (userToFilter) => userToFilter !== loggedInUser.email
  )[0];
}

export default getRecipientEmail;
