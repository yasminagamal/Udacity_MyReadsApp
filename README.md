# MyReads Project

To run this project start with 
    # npm install
Followed by 
    # npm start
The main Components for this app are:

1. Book.js: where the book UI (title, author & cover) is initialized
2. WantToRead.js: contains all shelves (WantToRead, CurrentlyReading & Read) + the logic of moving the book to different shelves
3. BookShelf.js: the search page component, where the search logic is located (with cases like: no input matching & no input entered) + the logic of moving books to different shelves
4. MyReads.js: is basically the app.js with all of the above components combined in one <div>
