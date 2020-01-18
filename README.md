## Developer Test: Frontend Development

**Summary**

We need you to take the following standard technical assessment to enable us to gauge the following:

 1. Speed
 2. How you write code using ReactJS. (correctness, efficiency, readable, clear).
 2. How you decompose a problem and design a solution.
 3. How you are able to maintain a consistent state throughout the application using a dedicated state management container.
 4. How you are able to conform to ECMAScript standards for JavaScript throughout the application.
 5. Are you able to consume an API to communicate with an external data source within your application?
 6. How complete and thoughtful your implementation is. Can the reviewer run it immediately?

**Quiz:**

Given the below API endpoint and attached design template, you are required to complete the following tasks:
 1. Setup a fresh web app based on ReactJS: The setup should use Webpack as the dedicated module bundler and dependency manager for your web app. It should also use either yarn or npm for package management.
 2. Implement the Browse and the Edit endpoints below.

**Hint:**

For speed, you could use CreateReactApp contains pre configured webpack settings.
  
1. Establish a stable state tree for the application using redux for ReactJS.
3. Once all is set, use the provided API endpoint to fetch data from an external server and display it in your web app, conforming a design template of your choice. 

**Note:**

It is key for your web app to use a state management container to handle all data mutations. As such, you are required to illustrate the use of the different component lifecycle hooks of the framework used as well as the following key concepts of state management container used:
   
**Redux:**
* State
* Store
* Reducers
* Actions
* Action creators

Complementing the understanding of the JavaScript framework used, the quiz focuses on knowledge of scoping, function expressions (and how they differ from function declarations), references, process of variable and function declaration, order of evaluation, and a couple more things like delete operator, object and array instantiation, assignment and mutation as used in JavaScript. 

These are all relatively simple concepts, which we think every professional JavaScript developer should know. 

Most of these are applied in practice quite often.

**API Endpoints:**

**Browse**

**Method: GET**

**Endpoint:** "[https://ti-react-test.herokuapp.com/users](https://ti-react-test.herokuapp.com/users)"

**Edit:**

**Method: PATCH** 

**Endpoint:** "[https://ti-react-test.herokuapp.com/users/{id}](https://ti-react-test.herokuapp.com/users/%7Bid%7D)"

    Parameters: {
      "user"=>{
      "bio"=>"MyText",
      "email"=>"MyString",
      "name"=>"MyString",
      "occupation"=>"MyString"
      }
    }

   ---------

**Submission:**

Extra points for pretty functionality.

Note that this task will require you to have a github/gitlab account. If you don't have either, you are required to setup one.

Once you have completed the assessment reply to this email with a link to the github repo (Please ensure that the repo is public). You can remove it once we have given you feedback.