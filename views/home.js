function renderPage() {
    return `<html lang="pl">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>home.js</title>
    </head>
    <body>
      <div>
        <form method="POST" action="/student">
          <input type="text" name="name" placeholder="Name" />
          <input type="text" name="lastname" placeholder="Lastname" />
          <input type="number" name="age" placeholder="Age" />
          <select name="gender">
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
          <input type="number" name="Code" placeholder="Code" />
          <input type="text" name="studyField" placeholder="Study Field" />
          <input type="submit" value="Submit">
        </form>
      </div>
    </body>
    </html>`;
  }
  
  module.exports = renderPage;