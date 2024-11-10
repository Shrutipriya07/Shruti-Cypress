# Cypress search feature Project
This project contains Cypress tests to validate the search feature across desktop and mobile views. It includes scripts for running tests in both interactive and CI modes.

## Running the Tests

To run the tests in this project, use the following npm commands. Tests can be run interactively in the Cypress Test Runner or in headless mode for CI environments, with both desktop and mobile viewport options available.

## Prerequisites

- [Node.js](https://nodejs.org/) (16.x or later) and npm installed.
- Cypress installed as a development dependency.

## Setup Instructions

1. **Clone the Repository**:
   ```bash
   git clone <repository-url>
   cd <repository-directory>
2. **Install Dependencies**:
   ```bash
   npm install
### Interactive Mode (UI)

To open the Cypress Test Runner and observe tests as they execute:

- **Desktop Viewport**:
   ```bash
   npm run cypress-desktop:ui
- **Mobile Viewport**:
   ```bash
   npm run cypress-mobile:ui
### Headless Mode (CI)

- **Desktop Viewport**:
   ```bash
   npm run cypress-desktop:ci
- **Mobile Viewport**:
   ```bash
   npm run cypress-mobile:ci