const configureStore = require("@reduxjs/toolkit").configureStore;
const cakeReducers = require("../features/cake/cakeSlice");

const store = configureStore({
  reducer: {
    cake: cakeReducers,
  },
});

module.exports = store;
