# cats-vs-dogs
For this group project, we’re going to use all our Vanilla JavaScript skills and create a website that allows users to choose which image is better, the dog image or the cat image.  

### Requirements

- Display a random dog image next to a random cat image
- Have a way to vote which image is better
- Record the vote
- Display a scoreboard with the number of votes each has gotten
- Display a feed of the voted-on Cat images and the voted-on Dog images on the page.

### Instructions

- Spend the time to plan.
    - Create a wireframe
    - Create an ERD
    - Plan your tasks
- Have one member of your group create the repo with the basic code and share it with the group instructors.
- Work the tasks, creating and reviewing PRs before you merge.
    - Test the PR before and after you merge

### Information you need

- You will use 3 different apis in this project
    - the cat api to get a random cat image from this url `https://api.thecatapi.com/v1/images/search`
        - While you should just need the url, if you would like more information, the documentation is the best place to start [https://developers.thecatapi.com/view-account/ylX4blBYT9FaoVd6OhvR?report=bOoHBz-8t](https://developers.thecatapi.com/view-account/ylX4blBYT9FaoVd6OhvR?report=bOoHBz-8t)
    - the dog api to get a random dog image from this url `https://api.thedogapi.com/v1/images/search`
        - While you should just need the url, if you would like more information, the documentation is the best place to start: [https://docs.thedogapi.com/](https://docs.thedogapi.com/)
    - a json-server mock api to store the other information, including cat votes, dog votes, users, etc.

### Bonuses

- Create a mock authentication with a login page that allows users to log in to the site (see help below).
    - Note: Real authentication systems are much more complex and not a learning objective of this course.
- Add the Name of the user who voted on the image to the feed
- Add the date and time when the image was voted on
- Display a feed of the dogs/cats that the logged-in user has voted on
- Allow the logged-in user to favorite/un-favorite an image they voted on
- Allow users to add a title and description to every image they save/voted on
- Allow users to edit the title and description
- Add sorting by:
    - the user’s name
    - the DateTime it was voted on at
- filter by:
    - the user who voted for it
    - cat only, dog only, both