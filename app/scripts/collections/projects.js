let projects = [
  {
    name: 'Nerd Social',
    url: 'http://nerdsocial.jefflawlis.com',
    githubUrl: 'https://github.com/Jeff-Lawlis08/Nerd-Social',
    image: '../../assets/images/NerdSocial.png',
    description: 'My final project at The Iron Yard was Nerd Social. I wanted to create a crowdsourced video game review website, with a social aspect. This app allows users to search games and users, review games, view other user\'s reviews, and create their own profiles. I used React components, Backbone models and collections, and an MBaas called Backendless to handle my data. I used Giant Bomb\'s API for the information about the games. I would say the most difficult part of this project was using the API to allow users to search for games, and removing the html tags from the game descriptions.',
  },
  {
    name: 'Bring the Band',
    url: 'http://btb.jefflawlis.com',
    githubUrl: 'https://github.com/Jeff-Lawlis08/Bring-the-Band',
    image: '../../assets/images/Bring-the-Band.png',
    description: 'The goal of this project was to allow users to search for bands and let them vote to bring that band to play in their town. I used Spotify\'s API to search for bands. I used React components as well as Backbone models and collections to account for the logged in user, the bands, and the votes.',
  },
  {
    name: 'Jeopardy',
    url: 'http://jeopardy.jefflawlis.com',
    githubUrl: 'https://github.com/Jeff-Lawlis08/jeopardy',
    image: '../../assets/images/Jeopardy.png',
    description: 'The goal of this project was to create a playable Jeopardy game using React. I used an API called jservice to obtain the questions. I used state to manage the modal that contains the question and answer form. I used Backbone models and collections to keep track of the logged in user, the questions, and the categories. The most difficult part of this project was calling for the questions on page-load, and determining if the user\'s answer was correct.',
  }
];
export default projects;
