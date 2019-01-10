// Example Node code. Do not copy

const chatkit = new Chatkit.default({
  instanceLocator: "v1:us1:23ff8704-1bc1-4fb8-8369-d3d3a8417af8",
  key: "1de4634a-3a98-4ced-9426-f4eecf30974d:02ptW+/hV9fBBgNafvMjU+vd9NP4190s7eZvaJQwdpI="
})

chatkit.createUser({
  id: "sdcGrouping",
  name: "Group 1"
})

chatkit.createRoom({
  id: "sdcRoom",
  name: "Room1"
})
