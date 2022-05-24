# Player experience

## Table of contents

- [Description](#Description)
  - [Flows](#Flows)
  - [Functions](#Functions)
    - [Audio functions](#Audio-functions)
    - [Queue functions](#Queue-functions)
    - [Listening history functions](#Listening-history-functions)
  - [Issues](#Issues)
  - [Extra comments](#Extra-comments)
- [Running the project](#Running-the-project)

## Description

This project is a recreation of the design mockups and wireframes as a preparation for the redesigned and reworked player for Berlingske Medias Weekendavisen. In the original Weekendavisen version, the user experiences a lot of bugs and a lack in some audio features. The main goal of this project is to test the flows and the designs for this rework.

### Flows

- Header - _component_
  - **Functionality** - open Home page
  - **Functionality** - toggle ProfileNavigation
  - **Functionality** - toggle Navigation
  - ProfileNavigation - _component_
    - **Functionality** - open Queue
  - Navigation - _component_
    - **Functionality** - open ReadArticles page
    - **Functionality** - open Podcasts page
- Home - _page_
  - **Functionality** - open Article page
  - **Functionality** - see if an article is read out loud or not
- Article - _page_
  - **Functionality** - play audio / open MiniPlayer
  - **Functionality** - add item to queue / show QueueToaster
  - **Functionality** - see whether item is already in queue
- ReadArticles - _page_
  - **Functionality** - play audio / open MiniPlayer
  - **Functionality** - add item to queue / show QueueToaster
  - **Functionality** - see whether item is already in queue
  - **Functionality** - open Article page
- Podcasts - _page_
  - **Functionality** - open PodcastItem page
- PodcastItem - _page_
  - **Functionality** - play audio / open MiniPlayer
  - **Functionality** - add item to queue / show QueueToaster
  - **Functionality** - see whether item is already in queue
- Queue - _page_
  - **Functionality** - see currently playing item
  - **Functionality** - see queue items
  - **Functionality** - open Article page
  - **Functionality** - play item from queue
  - **Functionality** - pause currently playing item
  - **Functionality** - play currently playing item
  - **Functionality** - open editing modus
  - **Functionality** - close editing modus
  - **Functionality** - remove 1 item from queue
  - **Functionality** - emtpy entire queue
  - **Functionality** - close Queue
  - **Functionality** - open ChangeQueueToaster
    - ChangeQueueToaster - _component_
      - **Functionality** - close ChangeQueueToaster
- QueueToaster - _component_
  - **Functionality** - open Queue
  - **Functionality** - close QueueToaster
- Player - _component_
  - Miniplayer - _component_
    - **Functionality** - play
    - **Functionality** - pause
    - **Functionality** - open MaxiPlayer
    - **Functionality** - close MiniPlayer
  - Maxiplayer - _component_
    - **Functionality** - play
    - **Functionality** - pause
    - **Functionality** - play previous item
    - **Functionality** - play next item
    - **Functionality** - close MaxiPlayer
    - **Functionality** - open SpeakerToaster
      - SpeakerToaster - _component_
        - **Functionality** - close SpeakerToaster
    - **Functionality** - open Queue
    - **Functionality** - open PlayerSpeed
      - PlayerSpeed - _component_
        - **Functionality** - update player speed
        - **Functionality** - close PlayerSpeed

### Functions

#### Audio functions

| Function name                     | Description                                                                                                                                                                |
| --------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| playAudio()                       | Play the HTML audio element.                                                                                                                                               |
| pauseAudio()                      | Pause the HTML audio element.                                                                                                                                              |
| onPlay( item )                    | Depending on whether some audio was already playing, reset the currently playing array and push the new item to the array. Show the player component and call playAudio(). |
| playPrev()                        | Play last item from the previouslyPlayed array.                                                                                                                            |
| playNext( nextItem )              | If there is a queue, play the first item in the queue array, else reset the player.                                                                                        |
| togglePlayingSpeed( clickedItem ) | Set the clicked item as the current playing speed. _(only visual change)_                                                                                                  |

#### Queue functions

| Function name                  | Description                                                                                                                                                                                                                     |
| ------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| addToQueue( clickedItem )      | Pushes the clicked item to the last place in the queue array.                                                                                                                                                                   |
| removeFromQueue( clickedItem ) | Finds the clicked item in the queue array and removes it from the array.                                                                                                                                                        |
| resetQueue()                   | Resets the queue array to an empty array. _(can not be undone)_                                                                                                                                                                 |
| playFromQueue( clickedItem )   | Calls onPlay( item ) and removeFromQueue( item ). Finds the clicked item in the queue array and removes it from the array. Then resets the currently playing array to an empty array and pushes the clicked item to that array. |
| checkInQueue( clickedItem )    | Returns true if the clicked item is found in the array in order to show the added_to_queue.svg icon.                                                                                                                            |

#### Listening history functions

| Function name           | Description                                                                                    |
| ----------------------- | ---------------------------------------------------------------------------------------------- |
| removeLastPlayed()      | Finds the previously playing audio by removing the last item from the previously played array. |
| resetCurrentlyplaying() | Reset the currentlyPlaying array to an empty array.                                            |

### Issues

- Drag and drop queue: multiple possible libraries and solutions have been tried out to provide the user with a possibility to change the order of the queue items with a drag and drop functionality. This currently isn't an available feature, but is being 'solved' with a pop-up modal that explains the functionality.
  Possibilities that have been tried:

  - React DnD (HTML5Backend and TouchBackend)
  - DnD Kit
  - Drag and Drop HTML

- Toggle playing speed: doesn't affect the playing speed, this merely toggles the visual design

- In the player it is currently impossible to go back and forth within the audio file that is currently playing.

### Extra comments

- This is a mobile-only project (not recommended on Safari).

---

## Running the project

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

### Available Scripts

In the project directory, you can run:

#### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.
The page will reload when you make changes.\
You may also see any lint errors in the console.

#### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

#### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.
The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!
See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

#### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**
If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.
Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.
You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

### Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).
To learn React, check out the [React documentation](https://reactjs.org/).

#### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

#### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

#### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

#### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

#### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

#### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
