# User Explorer

This project is a simple web application that allows you to browse users, view individual details, and check their posts using dummy data from the public API [JSONPlaceholder](https://jsonplaceholder.typicode.com).

## Main Files

### 1. `app.html`
The main HTML file that structures and presents the user interface. It includes:

- A search input to filter users by name or city.
- A dynamically generated list of users fetched from the API.
- Sections to display selected user details (phone, website, and company).
- A list of the user's posts, with the ability to display post content on click.

It also includes embedded CSS for a clean, modern design.

### 2. `api.js`
JavaScript file that contains all the application logic. Key functions include:

- **Initial loading of users** when the page loads using `fetch` from `https://jsonplaceholder.typicode.com/users`.
- **Real-time filtering** of users as the user types in the search field.
- **Display of user details** when a user is clicked.
- **Fetching and displaying posts** for the selected user via `https://jsonplaceholder.typicode.com/posts?userId={id}`.
- Basic **error handling** for network or API issues.

## How to Use

1. Open `app.html` in your web browser.
2. A list of users will be loaded automatically.
3. Use the search field to filter users by name or city.
4. Click on a user to see more details and their posts.
5. Click on a post title to view its content.

## Requirements

- A modern browser with ES6+ and `fetch` support.
- Internet connection (data is fetched from an online API).

## License

This project is for educational and demonstration purposes only. It uses fake data provided by JSONPlaceholder.
