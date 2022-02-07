const generateMembers = teamArr => {
    return `
    <section class="my-3" id="portfolio">
      <h2 class="text-dark bg-primary p-2 display-inline-block">Team Members</h2>
      <div class="flex-row justify-space-between">
      ${teamArr
        .filter(({ role }) => `Intern`)
        .map(({ name, email, id, school}) => {
          return `
          <div class="col-12 mb-2 bg-dark text-light p-3">
            <h3 class="portfolio-item-title text-light">${name}</h3>
            <h5 class="email">
            <a href="mailto:${email}">Email</a>
            </h5>
            <h5>${id}</h5>
            <h5>School : ${school}</h5>
          </div>
        `;
        })
        .join('')}

      ${teamArr
        .filter(({ role }) => !`Engineer`)
        .map(({ name, email, id, github }) => {
          return `
          <div class="col-12 mb-2 bg-dark text-light p-3">
            <h3 class="portfolio-item-title text-light">${name}</h3>
            <h5 class="email">
            <a href="mailto:${email}">Email</a>
            </h5>
            <h5>${id}</h5>
            <h5>Github : <a href="www.github.com/${github}">${github}</h5>
          </div>
        `;
        })
        .join('')}
    
      </div>
    </section>
  `;
};

module.exports = templateData => {
  // destructure page data by section
  const members = templateData;

  return `
  <!DOCTYPE html>
  <html lang="en">
  
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Team Manager</title>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.min.css">
    <link href="https://fonts.googleapis.com/css?family=Public+Sans:300i,300,500&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="./style.css">
  </head>
  
  <body>
    <header>
      <div class="container flex-row justify-space-between align-center py-3">
        <h1 class="page-title text-secondary bg-dark py-2 px-3">Team Manager</h1>
      </div>
    </header>
    <main class="container my-5">
      ${generateMembers(members)}
    </main>
  </body>
  </html>
  `;
};