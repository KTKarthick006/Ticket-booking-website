<p align="center"><img width="40%" src=""/></p>

![Alt text](data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAeFBMVEVQ2kwYNxdR3k0XMxYWMBUtdSw6mTcXNRYfSx1FvEIULBQVLRQ9ozoUKhMkXCNN0Ek3jzNP10tJxUUmYSQygS88oDk1izJT4k4/qjwqbikhUSAcRBwjViFMzUgscyobPxpHv0MpaSdDtEASJBExfS4QHhA2jTM+qTy9M9XvAAADVklEQVR4nO3dDVOiQByAcQTsXyASvpWa5gtd3/8bHtXNze4icNzEAtvzmxpnwognqVzXXM8DAAAAAAAAAAAAAAAAgB/KH4quAi93Q3HpJtDfXqMoij/flIvyRzrfcM27uRX9aTgZhnBFIYUU9o1CCinsH4UUUtg/W4USJkmUfL7fvPjGDXHQR6HsN2trA8J50Efh/UNnY+2SwzIUtwv9xVmkh8JOvkzFFy9uRbcLPW9x/nuiOlrop8tAnC4sTtTtn1vR1cLiRN1+/bpxt9BLj4m4Xein049b0eHCIvFY/Cy6XFjcu5mG4nahlx3D2O1CL8uTgRR2NiV2yIdRmOZbzeX7jio9fduuNG0L93GoiNf2RiL/q23hvajXDmYU9o9CA4UDRKGBwgGi0EDhAFFoDJeydoWWnn1YfwwNhf7dRrV6bVN4Ws8U6+cuQyo1FT7dJ7FCnSxqLPQ3b4ni+tJpSeVRNBXutCZdU+FjrF47mHdaUnkUFFJYt28KraCQQgop7B6FTzv92WcuFoZBEMjnWyAi7hX6m6kiP9aPnh6eVRd93wMt9LJUkR1qR8DZ8XWv0r4dgy3U1T+KkZ1D0UwcLJxUo7AjFBoopLAHFBoopLAHFBqaCmMphlgfo6yvC/cK892Lau/c2MI7LFSH1SjGh7pWc8BPoxjjG1oVjuNRDAOF+r4ptIJCA4X6vim0gkIDhfq+KbSieWZGY8zMyFrfbuy7ttC4cmcaCv3ZfKnRp5Nkp22cn/RP1gvlVd9VfhhE4WMSaIw5b9E2Jvq/shmFxpXjl8UwCvWDrBc/1BbqgjmFFFJIIYUUUkghhRT+a+Ev7R97GrwZ97w3b1G16zDueXunWRvGeOi0rvOcDqKw3cICpb33slRAy8LRo3D8KBw/CsePwvGjcPwoHL/Sa7JbfD1vO0qvq7+yNa9nS6lQVnYGptaUVn+QyLHE8voWMpnamZy15MYKHhLmLv0s3lqjRMKtQyfqzVVYJHDoRL29zoyEx9SVv4sVK+mIHA+OJFatFSTJ1pETtXI1JJGznUfdu1a93tPHb1QXTtS6Fa3CpQt/NIpCqRS6cKL600h/4lqgJkbL8Sf6l9m7TnvxjvfxFzbMgPV9cAAAAAAAAAAAAAAAAADwE/wGtOKEMLNwY/wAAAAASUVORK5CYII=)

# Hacktoberfest, 2024 with IEEE-VIT Student Branch

Ticket booking website is a Node.js-powered web-based ticket booking platform that enables users to browse movies, select theaters, and make reservations seamlessly. This repository was created to help developers get started with Open Source during [Hacktoberfest](https://hacktoberfest.com/)
> NOTE: Check out `issues` labelled as `Hacktoberfest` and start contributing!

Made with ❤️ by [IEEE-VIT](https://ieeevit.com)

Support Open Source by participating in [Hacktoberfest](https://hacktoberfest.com/)💛

## Getting started

### Prerequisites
Ensure you have the following installed on your system:

- [Node.js](https://nodejs.org/en)
- [npm](https://www.npmjs.com/) (Node Package Manager)
- [MongoDB](https://www.mongodb.com/)
- [Git](https://git-scm.com/)

### Environment Setup
1. Create a `.env` file in the root of your project.
   
2. Add the required environment variables:
   ```env
   PORT=your_port_number
   DB=your_mongodb_connection_string
   GOOGLE_CLIENT_ID=your_google_client_id
   GOOGLE_CLIENT_SECRET=your_google_client_secret
   SESSION_SECRET=your_session_secret
   ```

   Replace the placeholder values with your actual credentials.
### Installation
1. Clone the repository to your local machine:
```bash
$ git clone https://github.com/
```

2. Navigate into the backend directory:
```bash
$ cd backend
```

3. Create uploads directory:
```bash
$ mkdir uploads
```

4. To setup this project, simply run the following command:
```bash
$ npm install
```

It should create a `node_modules` folder, and you're good to go! :)

5. To start the project, simply run the following command:
```bash
$ npm run dev
```

### Project Structure
The project is organized into the following key directories and files:

- **routes/** - Contains the route definitions for the API endpoints.
  - `routes/User.js` - Routes for user-related operations.
  - `routes/Movie.js` - Routes for movie-related operations.
  - `routes/Theater.js` - Routes for theater-related operations.
  - `routes/Screen.js` - Routes for screen-related operations.
  - `routes/Booking.js` - Routes for booking-related operations.

- **controller/** - Contains the logic to handle the operations for each model.
  - `controller/User.js` - Handles user operations.
  - `controller/Movie.js` - Handles movie operations.
  - `controller/Theater.js` - Handles theater operations.
  - `controller/Screen.js` - Handles screen operations.
  - `controller/Booking.js` - Handles booking operations.

## Contributing
To start contributing, check out [CONTRIBUTING.md](). New contributors are always welcome to support this project. Check out issues labelled as `Hacktoberfest` if you are up for some grabs! :)

## License
This project is licensed under [MIT]()
