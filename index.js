////////
const userInfo = {
  username: "user1",
  password: "password123"
};

function createLoginTracker(userInfo) {
  let attemptCount = 0;

  return (passwordAttempt) => { 
    attemptCount++;

    if (attemptCount > 3) {
      return "account locked";
    }

    if (passwordAttempt === userInfo.password) {
      return "login successful";
    }

    return `Attempt ${attemptCount}: login failed`;
  };
}

const login = createLoginTracker(userInfo);

console.log(login("wrong1"));
console.log(login("wrong2"));
console.log(login("password123"));
console.log(login("password123"));
module.exports = {
  ...(typeof createLoginTracker !== 'undefined' && { createLoginTracker })
};