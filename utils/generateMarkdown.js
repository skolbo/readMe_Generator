// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license == 'Apache License 2.0') {
    return `![apache](https://img.shields.io/badge/license-Apache%20License%202.0-blue)`;
  } else if (license == 'GNU GPLv3') {
    return `![gnu](https://img.shields.io/badge/license-GNU%20GPLv3-green)`;
  } else if (license == 'ISC License') { 
    return `![isc](https://img.shields.io/badge/license-ISC%20License-purple)`;
  } else {
    return `![mit](https://img.shields.io/badge/license-MIT%20License-red)`;
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license == 'Apache License 2.0') {
    return `This application is covered by the Apache v2.0 License, the terms of which can be found [here](https://www.apache.org/licenses/LICENSE-2.0.txt).`;
  } else if (license == 'GNU GPLv3') {
    return `This application is covered by the GNU General Purpose License, the terms of which can be found [here](https://www.gnu.org/licenses/gpl-3.0.en.html).`;
  } else if (license == 'ISC License') {
    return `This application is covered by the ISC License, the terms of which can be found [here](https://opensource.org/licenses/ISC).`;
  } else {
    return `This application is covered by the MIT License, the terms of which can be found [here](https://opensource.org/licenses/MIT).`;
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
${renderLicenseBadge(data.license)}
## Description
${data.description}
## Table of Contents
* [Description](#description)
* [Installation](#installation)
* [Usage](#usage)
* [License](#license)
* [Contributing](#contributing)
* [Tests](#tests)
* [Questions](#questions)
## Installation
${data.installation}
## Usage
${data.usage}
## License
${renderLicenseLink(data.license)}
## Contributing
${data.contribution}
## Tests
${data.test}
## Questions
[GitHub Profile](https://github.com/${data.userName}/)  

I can be reached at ${data.email}.
`;
}

module.exports = generateMarkdown;