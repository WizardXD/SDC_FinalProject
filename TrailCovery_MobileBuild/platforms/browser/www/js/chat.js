

    const tokenProvider = new Chatkit.TokenProvider({
      url: "https://us1.pusherplatform.io/services/chatkit_token_provider/v1/23ff8704-1bc1-4fb8-8369-d3d3a8417af8/token"
    });
    const chatManager = new Chatkit.ChatManager({
      instanceLocator: "v1:us1:23ff8704-1bc1-4fb8-8369-d3d3a8417af8",
      userId: "Facilitator",
      tokenProvider: tokenProvider
    });

    chatManager
      .connect()
      .then(currentUser => {
        currentUser.subscribeToRoom({
          roomId: currentUser.rooms[0].id,
          hooks: {
            onMessage: message => {
              const ul = document.getElementById("message-list");
              const li = document.createElement("li");
              li.appendChild(
                document.createTextNode(`${message.senderId}: ${message.text}`)
              );
              ul.appendChild(li);
            }
          }
        });

        const form = document.getElementById("message-form");
        form.addEventListener("submit", e => {
          e.preventDefault();
          const input = document.getElementById("message-text");
          currentUser.sendMessage({
            text: input.value,
            roomId: currentUser.rooms[0].id
          });
          input.value = "";
        });
      })
      .catch(error => {
        console.error("error:", error);
      });