# Candidate Search

## Description

The Candidate Search application is a tool designed for employers to find and manage potential candidates for hiring. This application fetches user data from the GitHub API and displays it in an easy-to-navigate interface. Users can view detailed candidate profiles, save potential candidates to a list, and manage these candidates effectively.

## User Story

```md
AS AN employer
I WANT a candidate search application
SO THAT I can hire the best candidates


# Features
Fetches candidate data from the GitHub API

Displays candidate profiles including name, username, location, avatar, email, GitHub URL, and company

Allows employers to save candidates to a potential candidates list

Persist data using localStorage

View a list of saved potential candidates


## Installation

Clone the repository:


git clone <repository-url>
Navigate to the project directory:

cd candidate-search
Install dependencies:


npm install
Create a .env file in the environment folder with your GitHub API token:


VITE_GITHUB_TOKEN=<your-github-token>

## Candidate Search Page

View information for a candidate.

Click the "+" button to save the candidate to the potential candidates list.

Click the "-" button to skip the candidate.

## Potential Candidates Page

View a list of saved potential candidates.

Click the "-" button to remove a candidate from the list

## Screenshots

The candidate search page displays a candidate's information and allows the user to accept or reject the candidate and view a list of potential candidates.

The potential candidates page displays a list of potential candidates and allows the user to reject a candidate.

## Technologies Used

TypeScript

React

GitHub API

LocalStorage

Render (for deployment)

Contributing

Contributions are welcome! Please open an issue or submit a pull request for any changes.