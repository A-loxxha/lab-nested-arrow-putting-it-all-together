////////

function createLoginTracker(userInfo) {
  let attemptCount = 0;

  return (passwordAttempt) => {
    attemptCount++;

    if (passwordAttempt === userInfo.password && attemptCount <= 3) {
      return "Login successful";
    }

    if (attemptCount >= 3) {
      return "Account locked due to too many failed login attempts";
    }

    return `Attempt ${attemptCount}: Login failed`;
  };
}


module.exports = {
  ...(typeof createLoginTracker !== 'undefined' && { createLoginTracker })
};