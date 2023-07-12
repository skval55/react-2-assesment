### Conceptual Exercise

Answer the following questions below:

- What is the purpose of the React Router?
- to Create url routes, but they are all front-end routes so the page doesn't have to reload.

- What is a single page application?
- it is where the page doesn't have to reload to render new routes.

- What are some differences between client side and server side routing?
- client side is all on the frount end so the page doesn't have to reload. it can make the page faster in some cases because the page doesnt have to load as much data and can reuse dom elements.

- What are two ways of handling redirects with React Router? When would you use each?
- you can use <Redirect> which is good when setting routes you can make a catch all route that will redirect to a homepage or something
- 2 you can use useHistory which is good when doing like form submiting that redirect to last page or something like that.

- What are two different ways to handle page-not-found user experiences using React Router? 
- you can make a redirect to a 404 page that you make a route for 
- or can just make it to redirect to the home page.

- How do you grab URL parameters from within a component using React Router?
- use useParams hook 
- ex. const {name} = useParams()

- What is context in React? When would you use it?
- it makes it so you can easily pass items to children components 
- a good case to use it is when sending state down to children and functions that go with the state.

- Describe some differences between class-based components and function
  components in React.
- class components are obviously classes and functions are functions
- with class components there are built in hooks where as funtion componants you use useState and useEffect.
- Function components can be more performant than class-based components. This is because function components are lightweight and don't carry the overhead of class instantiation and maintaining an instance of the component.

- What are some of the problems that hooks were designed to solve?
- they were designed to solve a few problems 
- code reusabilty
- complext component logic like fetching data from apis and when to do that
- and also manage state.