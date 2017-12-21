{
  entities: {
    posts: {
      1: {
        id: 1,
        body: "venn is cool!",
        img_url: "",
        author_id: 3,
        likes: 3,
        liker_ids: [2, 7, 23],
        comment_ids: [8, 9, 17, 4],
        current_user_likes: false
      }
    },
    comments: {
      1: {
        id: 1,
        body: "I love it!!!",
        img_url: "",
        author_id: 11,
        post_id: 1,
        likes: 0,
        liker_ids: [],
        comment_ids: [],
        current_user_likes: false
      }
    },
    users: {
      9: {
        id: 9,
        full_name: "Brendan Higgins",
        img_url: "",
        birthday: "12/17/1991",
        post_ids: [41, 18, 79, 12, 7, 81]
      }
    },
    friend_requests: {
      1: {
        id: 1,
        requestor_id: 3
      }
    },
    notifications: {
      1: {
        id: 1,
        post_id: 9,
        related_user_id: 14,
        type: 'Like'
      }
    }
  },
  ui: {
    loading: true/false,
    modals: [],
    dropdowns: []
  },
  errors: {
    login: ["Incorrect username/password combination"],
    postForm: ["Post body cannot be blank"],
    commentForm: ["Comment body cannot be blank"]
  },
  session: {
    id: 9,
    full_name: "Brendan Higgins",
    img_url: "",
    friend_ids: [2, 8, 11, 12, 29, 33, 37, 48],
    friend_request_ids: [10, 19]
  }
}