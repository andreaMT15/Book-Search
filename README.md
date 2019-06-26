# Google Books Challenge

## Developer: Andrea Minhas

This app is designed to use the Google Books API to obtain information for a particular book title that is searched by the user. Once the user has searched for a book title, the app will then display a list of results which will include the book title, author, publishing company, a short description and a link to learn more about the book.

![Book-Demo-4](https://user-images.githubusercontent.com/44379703/60147867-9870e400-9794-11e9-9e34-7baaeb0e8e11.gif)

## Setup

If you would like to run the code on your local machine, you will need a few things to get started.

- You wil need to have the latest version of Node installed on your local machine. You can download Node by visiting the Node.js website and following the installiton instructions. https://nodejs.org/en/

- Once you have Node installed you will also need to install npm. To install npm. Run the following command in your terminal.

- You will also need to obtain an API key for Google Books from the Google Developers Console. You can log in and request one here. https://console.developers.google.com

- Once you have all the steps above completed, clone the repo to your local machine, cd into the project and run npm install. This will install all the dependencies the app needs to run locally.

- Then, open the code in your text editor.

- Once you have the code open in your text editor, create an env file in the root directory.

- Paste the following line into the env and insert your API Key.
  REACT_APP_GOOGLE_BOOKS_API_KEY= YOUR API KEY HERE

**Technlogies Used:**

- React
- Google Books API https://developers.google.com/books/docs/v1/reference/volumes/list
- axios https://www.npmjs.com/package/axios
- React-Bootstrap https://react-bootstrap.github.io/getting-started/introduction/
- React-Scrollable Anchor https://www.npmjs.com/package/react-scrollable-anchor
