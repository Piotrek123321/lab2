const renderHome = require("../views/home");
const renderStudent = require("../views/student");

function handleHome() {
  return renderHome();
}

function handleStudent(data) {
  return renderStudent(data);
}

module.exports = { handleHome, handleStudent };