const renderHome = require("../views/home");
const renderStudent = require("../views/student");

function handleHome() {
  return renderHome();
}

function handleStudent() {
  return renderStudent();
}

module.exports = { handleHome, handleStudent };