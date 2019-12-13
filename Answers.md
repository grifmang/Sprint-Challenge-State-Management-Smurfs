1. What problem does the context API help solve?
Let's you manage state more efficiently within your component tree.

2. In your own words, describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?
Actions: File to hold actions that are sent to the reducer to manipulate state.

Reducers: Holds initial state and cases to manipulate state.
   
Store: Store is what houses all the actions and reducers to push out to components.

3. What is the difference between Application state and Component state? When would be a good time to use one over the other?
Application state would be a redux, or context, based state management system. They can be used over multiple components. Where Component state lives only in the component it is created in, and possibly passed to children through props.

4. Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?
Thunk allows you to return a function in your action file rather than just an object.

5. What is your favorite state management system you've learned and this sprint? Please explain why!
Redux definitely, though I think I need a bit of practice to get it totally down. But, the ability to manipulate and get state in any component is a very useful feature.