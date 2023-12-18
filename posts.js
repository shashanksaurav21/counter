const { createStore, combineReducers } = require("redux");

//initial state
const initialState = {
  posts: [],
};
const initialUserState = {
  users: [],
};

const addUserAction = (user) => {
  return {
    type: "ADD_USER",
    payload: user,
  };
};
const addPostAction = (post) => {
  return {
    type: "ADD_POST",
    payload: post,
  };
};

const removePostAction = (id) => {
  return {
    type: "REMOVE_POST",
    id,
  };
};

const postReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_POST":
      return {
        posts: [...state.posts, action.payload],
      };

    case "REMOVE_POST":
      return {
        posts: state.posts.filter((post) => {
          return post.id !== action.id;
        }),
      };

    default:
      return state;
  }
};
const userReducer = (state = initialUserState, action) => {
  switch (action.type) {
    case "ADD_USER":
      return {
        users: [...state.users, action.payload],
      };

    default:
      return state;
  }
};

const rootReducer = combineReducers({
  posts: postReducer,
  users: userReducer,
});

const store = createStore(rootReducer);

store.subscribe(() => {
  const data = store.getState();
  console.log(data.posts, "posts");
  console.log(data.users, "users");
});

store.dispatch(
  addPostAction({
    id: 1,
    title: "First title",
  })
);
store.dispatch(
  addPostAction({
    id: 2,
    title: "Second title",
  })
);
store.dispatch(removePostAction(2));
store.dispatch(addUserAction({ name: "Joe Black", email: "joe@black.com" }));
