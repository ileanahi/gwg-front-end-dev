/*
 * Programming Quiz: Facebook Friends (7-5)
 */

// your code goes here
var facebookProfile = {
    name: "Ileana",
    friends: 981,
    messages: ["What's up?", "How are you?", "Sweeeeet!"],
    postMessage(message) {
        facebookProfile.messages.push(message);
    },
    deleteMessage(index) {
        facebookProfile.messages.splice(index, 1);
    },
    addFriend() {
        facebookProfile.friends++;
    },
    removeFriend() {
        facebookProfile.friends--;
    }

}