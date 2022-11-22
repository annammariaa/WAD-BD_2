import { createStore } from 'vuex'


// Create a new store instance.
const store = createStore({
  state() {
    return {
      "record": [
        {
          "time": "Nov 1, 2022",
          "author": "/pp2.png",
          "body": "Sorry for not posting, been busy with school, luv and miss u guys tho <3"
        },
        {
          "time": "Oct 4, 2022",
          "author": "/profile_photo.png",
          "body": "My life is constantly under construction. There's always something to improve",
          "img": "/cat1.png"
        },
        {
          "time": "Sep 22, 2022",
          "author": "/pp3.png",
          "body": "Does anyone have any catnip in Narva mnt 25 student residence???"
        },
        {
          "time": "May 27, 2022",
          "author": "/pp2.png",
          "body": "Looking for a team in group 4!!!!"
        },
        {
          "time": "Apr 20, 2022",
          "author": "/pp4.png",
          "body": "My emotions regarding software engineering. :'(",
          "img": "/cat2.jpg"
        },
        {
          "time": "Jan 6, 2022",
          "author": "/profile_photo.png",
          "body": "Birthday celebrations on 8th @gen!"
        },
        {
          "time": "Sep 22, 2021",
          "author": "/pp3.png",
          "body": "Found this meme, thought I'd share",
          "img": "/meme.png"
        },
        {
          "time": "Sep 31, 2021",
          "author": "/pp4.png",
          "body": "REACHED CORN IN CATS AND SOUP!!!",
          "img": "/CAS.png"
        },
        {
          "time": "Sep 30, 2021",
          "author": "/pp4.png",
          "body": "Just downloaded Cats and Soup, everyone was playing it and it seems cool"
        },
        {
          "time": "July 6, 2021",
          "author": "/profile_photo.png",
          "body": "Moved back to Tallinn for the summer!",
          "img": "/chillin.png"
        }
      ],

      "likeComponents": [

      ]
    }
  },

  mutations: {
  }
})

export default store;
