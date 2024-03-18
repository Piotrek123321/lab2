function renderPage(data) {
    return `<html lang="pl">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>student.js</title>
    </head>
    <body>
      <h1>Student profile</h1>
      ${data.map((el) => `<p>${el}</p>`).join("")}
    </body>
    </html>`;
  }
  
  module.exports = renderPage;