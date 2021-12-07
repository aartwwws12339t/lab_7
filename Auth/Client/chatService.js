const ChatService = {
  CreateMessageBlock (author, text, isMine = false) {
    const messageBlock = document.createElement('div');
    messageBlock.setAttribute('class', isMine ? 'messageBlock my-message' : 'messageBlock');

    const messageText = `
      <p>
        <span class="author">${author}: </span> ${text}
      </p>`;
    messageBlock.innerHTML = messageText;

    return messageBlock;
  },

  CreateActiveUsersBlock (activeUsers) {
    const messageBlock = document.createElement('h3');

    let usersListing = `${activeUsers.length} active users`;
    if (activeUsers.length) {
      if (activeUsers.length === 1) {
        usersListing = usersListing.slice(0, -1); //make 'users' singular, removing last 's'
      }

      usersListing += ':';
      for (const activeUser of activeUsers) {
        usersListing += ` ${activeUser},`;
      }

      usersListing = usersListing.slice(0, -1); //remove last comma
    }

    messageBlock.innerText = usersListing;
    return messageBlock;
  }
}
