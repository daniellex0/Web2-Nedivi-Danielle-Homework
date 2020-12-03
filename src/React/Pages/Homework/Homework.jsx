import React from 'react';
import styled from 'styled-components';

/* Components ---------------------------*/
import Essays from './Essays.jsx';
import Template from '../../Shared/Template.jsx';

const Homework = () => {

    // ... functional component logic

    return (
        <HomeworkStyled>
            <Template
                title='Welcome'
                aside={ false } 
                >
                    <Essays essays={ essays }/>
                </Template>
        </HomeworkStyled>
    );
}

export default Homework;

const HomeworkStyled = styled.div`
    padding: 20px;
    border: dashed teal 5px;
    background-color: #ccc;
    
`;

const essays = [
    {
        title: '01',
        question: 'What are Single Page Apps (SPAs)? How do they differ from traditional multi-page Web Sites?',
        AnswerComponent: () => {
            return (
                <div>
                    <p>
                    Single Page Apps (SPAs) are web applications that consist of just a single page. Instead of reloading every time a user interacts with the site 
                (communicating with the server and taking up more bandwidth), 
                this version of a web app processes all of the interactions immediately 
                without reloading the page. Many major web apps today are Single Page, 
                including Twitter, Facebook, and Gmail.                    
                    </p>
                    <p>
                    These differ from a multi-page app (MPA), which consists of several pages 
                and always needs to reload when users interact with it. SPAs are easier 
                to debug, faster, a smoother experience for users, and simple to transition 
                into a mobile app with the same backend code. However, MPAs have better SEO 
                (search engine optimization), although there has been progress on this front 
                with SPAs more recently. SPAs are also much less complex to develop than MPAs.                     
                    </p>
                    <p>
                    Ultimately, websites that are content-heavy and need many different categories/pages 
                may be better suited for MPAs, while SPAs work well for all other sites. 
                However there is now also an option for a Hybrid site - which is really a 
                Single Page App with an option for multiple pages built in.                    
                </p>
                </div>
            );
        }
    },
    {
        title: '02',
        question: 'In React, what does Prop Drillng mean? Why do they say that React has a Unidirectional Data Flow? What are the pros and cons of this feature?',
        AnswerComponent: () => {
            return (
                <div>
                    <p>
                        Prop drilling in React is the process of passing data (props) from one part of a 
                        React component to another, often by passing through other parts that often don't 
                        need the data but help in passing it along. Prop drilling is sometimes called threading, 
                        and a developer can use it to pass data from a component higher up in the component 
                        hierarchy to a 'child' further down.
                    </p>
                    <p>
                        It is said that React has unidirectional data flow because the data in it has only one way 
                        to be transferred to other parts of the application. When designing a React app, developers 
                        nest child components within higher-order parent components. This means child components are 
                        not able to update the data that is coming from the parent component. 
                    </p>
                    <p>
                        The pros of unidirectional data flow are that it creates a clean data flow architecture, and 
                        allows the developer more control over the data and makes it easier to debug, because they can 
                        know what data is coming from where more easily. It is also less prone to errors and more 
                        efficient. On the other hand, cons are that this allows less freedom, and if a developer wants 
                        to send data in the opposite direction for whichever reason they cannot do that.                  
                    </p>
                </div>
            );
        }
    },
    {
        title: '03',
        question: 'In React, what is Redux? Why do we need Redux? Is Redux the only option?',
        AnswerComponent: () => {
            return (
                <div>
                    <p>
                        Redux in React is a state management tool. Redux keeps the state of an application in a store,
                        and components of the app can access any state they need at any time. It is a central store
                        that houses the entire state of an app, and using this components can access stored states 
                        without having to pass props between components.
                    </p>
                    <p>
                        We need Redux because libraries like React have a way to manage state internally without any
                        outside tools, which is fine for smaller apps with fewer components. However in larger
                        apps, it becomes complicated to manage states that are shared among different components.
                        Developers end up having to pass data through components that do not need it if multiple
                        components that use the same data are far from each other. State management gets complicated
                        as an app grows, which makes a state management tool like Redux useful. Redux also makes debugging 
                        and testing much easier.
                    </p>
                    <p>
                        Redux isn't the only option for state management- there are also other tools like MobX, plus 
                        new options called Hooks or Context from React, which makes it possible to share state between components.              
                    </p>
                </div>
            );
        }
    },
    {
        title: '04',
        question: 'What is middleware? What does the Thunk Middleware do for Redux?',
        AnswerComponent: () => {
            return (
                <div>
                    <p>
                        Middleware is software that is like the "software glue" between an operating system and the applications 
                        that are running it, it is also known as 'plumbing' because it allows data to be
                        passed through 'pipes'. It is a hidden layer that translates/ communicates between the operating 
                        system and application, and allows data management. Middleware allows users to perform requests
                        like submitting forms, and allows web servers to return web pages based on a user's profile.
                    </p>
                    <p>
                        Redux Thunk Middleware allows developers to write 'action creators' that return a function as 
                        opposed to an action. Thunk can be used to delay an action occuring unless a condition is met. 
                        Redux Thunk looks for special functions and handles the dispatching for you. This allows you
                        to centrallize and reuse these services for different components. This is useful for larger 
                        applications where different components perform the same action- they can just reuse the same 
                        function to do so using thunk middleware. In programming, Thunks are typically used to delay an 
                        action until it is needed, or to insert operations at the beginning or end of action.
                    </p>
                </div>
            );
        }
    },
    {
        title: '05',
        question: 'In Redux, what does mutating state mean? Why is this something we would like to avoid?',
        AnswerComponent: () => {
            return (
                <div>
                    <p>
                        Mutating state in Redux means that the value of a variable or object changes over time,
                        or mutates. There are references between the old and new state at the same time.
                    </p>
                    <p>
                        Mutation is something we would like to avoid because mutating state can lead to bugs,
                        hurts the performance, and leads to testing difficulties and can make it difficult to 
                        optimize components, especially in larger apps that might have several changes of state 
                        fired off at the same time. State mutation is the cause of most bugs in apps. We prefer 
                        to have pure components that have less of a chance of mutating.
                    </p>
                </div>
            );
        }
    },
    {
        title: '06',
        question: 'What are the ingredients of a code review in Web Development?',
        AnswerComponent: () => {
            return (
                <div>
                    <p>
                        Code review is an important step in web development, which helps detect bugs early on before the testing
                        phase by having another pair of eyes on your code. Code Review can be conducted by developers, QA, 
                        peers, seniors, or juniors. Code review aims to standardize and harmonize all of the existing code by a team.
                    </p>
                    <p>
                        Code review includes checking syntax (indentation, alignment, missing semicolons, etc), code reusability/
                        duplicate code (following DRY- don't repeat yourself, so you don't reinvent the wheel and reuse existing
                        code/components), code logic/technical quality (whether the code is logical and the best way to accomplish
                        the goal), naming conventions (making sure class names, etc. follow the conventions that already exist on
                        the site to stay consistent and make sure the code is understandable for other developers), unused code
                        (remove any unecessary/superfluous code including classnames that have no use), simplicity (trying to make
                        sure code is as simple as possible is ideal- not overly complicated and convoluted), scalability and security.
                    </p>
                    <p>
                        The steps of a code review often include a preliminary demo (or demo video) to other members of the team. 
                        During the code review, the reviewer often goes through a first pass, running tests, doing an in-depth pass,
                        and finally submitting an evaluation.
                    </p>
                </div>
            );
        }
    },
    {
        title: '07',
        question: 'What is the difference between Action Types, Action Creators, and Reducers (Redux)?',
        AnswerComponent: () => {
            return (
                <div>
                    <p>
                        In Redux, actions are javascript objects (they send data from your application to your store in Redux) and they need 
                        to have a type property that describes the kinds of action being performed. Types are usually described as string 
                        constants (within quotes), which is good for troubleshooting. This is the glue between our action creators and
                        action reducers.
                    </p>
                    <p>
                        Action Creators are functions that create actions (they are functions that return an action object). Action creators 
                        simply return an action. Its main purpose is to return a piece of state that will then be reduced. That then gets
                        reduced by the reducer.
                    </p>
                    <p>
                        Reducers are functions that determine changes to an application's state. With it you can reduce multiple
                        actions and initial state to get the resulting final state. A reducer is a pure state that takes the current state 
                        and an action and returns the next state. Actions go through reducers to get to the store (reducer's main task
                        is to update the store).
                    </p>
                </div>
            );
        }
    },
    {
        title: '08',
        question: 'What does the spread operator do in Javascript? How does this help Redux reducers keep the state from mutating ?',
        AnswerComponent: () => {
            return (
                <div>
                    <p>
                        The spread operator is a new addition to the operators in Javascript ES6, and it is marked by three dots (...). It takes in 
                        an array and expands it into separate individual elements. Spread operator is typically used to make shallow
                        copies/duplicates of JS objects, making the code more concise and readable. It 'spreads' items in an array/object to a receiver.
                        It is a useful and quick syntax for adding items to arrays, combining arrays or objects, and spreading an array out into a function's 
                        arguments. However this doesn't work in deep copies (only shallow)- so it's better for simple logic, but not anything that is 
                        deeper/nested. It allows you to keep/duplicate an object and only modify certain elements of the object. 
                    </p>
                    <p>
                        This helps Redux reducers keep the state from mutating by helping make copies (new instances) of arrays/objects 
                        to prevent accidental variable overlap/mutation. It makes a shallow copy instead of reference. When you reference 
                        a variable multiple times, it can update that variable, which can be problematic if you're trying to keep the the state 
                        as pure as possible. Instead it clones / creates a completely new version. 
                    </p>
                </div>
            );
        }
    },
    {
        title: '09',
        question: 'What are some of the challenges of loading Redux state from a webserver and some of the solutions. (keyword to google for first part of q: how do we handle preloaded state in Redux?)',
        AnswerComponent: () => {
            return (
                <div>
                    <p>
                    When we use Redux with server rendering, we preload data before generating the HTML and want the client to have access to 
                    this data when they need it. 
                    </p>
                    <p>
                    A redux app is like a chicken and egg problem, in that given a state the app should render a certain action, but that state needs to come from somewhere.
                    We need to ship data to the web app in order to show it (and we don't always need to show it right away). We need to make the website as 
                    fast as possible (so we only need to load the data we need when we need them). Only when we reach an actual page do we need to pull that data and display it on the page. 
                    It's give and take- when the site first loads we can ship some data, but not all of it. Then when you are ready for certain data, you can ship that (when you're on a specific page).
                    Some challenges are: we cannot show content until it's loaded, and we use React components when they mount to request data (Ajax)
                    </p>
                </div>
            );
        }
    },
    {
        title: '10',
        question: 'In Javascript, what is the difference between const, let and var',
        AnswerComponent: () => {
            return (
                <div>
                    <p>
                    const variables maintain a constant value. Similar to let declarations, const declarations can only be accessed within the block they are declared.
                    Const cannot be updated or redeclared, meaning that the value of a const variable remains the same within its scope. If you try to change a const 
                    variable, you will get an error.
                    </p>
                    <p>
                    let is generally preferred for variable declaration. Let is block scoped (like const), meaning it is bounded by {}. A variable in a block with let is 
                    only available for us within that block. Like var, a let variable can be updated (within its block scope in let's case). However unlike var, a let variable
                    can't be re-declared within its block scope. Let is a better choice than var in many instances because you don't have to worry about reusing 
                    a variable name since let variables only exist within their block scope. Let declarations are hoisted to the top, and so if you try to use a let 
                    variable before declaration you will get an error. 
                    
                    </p>
                    <p>
                    var - before the release of JS ES6, var was the only way to declare a variable. Var declarations are globally scoped or function scoped (while let and const
                    are block scoped). Var isn't used as much now there there is const and let, but it does still have some uses. Var variables can be redeclared endlessly 
                    with no error, unlike let.
                    </p>
                    <p>
                    var variables can be updated and redeclared within its block scope; let variables can be updated but not re-declared; const variables can do 
                    neither. 
                    </p>
                </div>
            );
        }
    },
    {
        title: '11',
        question: 'What does javascript destructuring do?',
        AnswerComponent: () => {
            return (
                <div>
                    <p>
                    Object destructuring in javascript is a convenient feature from version ES6 for extracting properties from objects and binding
                    them to variables. In fact it can extract several properties in one statement, access properties from 
                    nested objects, and set a default value if the property doesn't exist. Destructuring an object into 
                    multiple properties is possible just by separating as many properties as you want by comma. It is also 
                    possible to nest objects in other objects within js destructuring syntax.
                    </p>
                    <p> 
                    Without object destructuring, you have to repeat the property name multiple times. Object destructuring allows you to use more 
                    brief and less repetitive code, and at the same time is a quick way to do multiple things- like defining 
                    variables, assigning property values to them, and applying a default value at the same time. This code 
                    is more concise, readable, and clear. This is especially useful in React where data is deeply nested in props.
                    or state   
                    </p>
                </div>
            );
        }
    },
    {
        title: '12',
        question: 'In React, what is a controlled input?',
        AnswerComponent: () => {
            return (
                <div>
                    <p>
                    A controlled input in React allows more control over form management and keeping input state through Javascript. On the other 
                    hand, uncontrolled input is the older method before React, which gave the browser control over keeping the state of the input.
                    </p>
                    <p>
                    If we didn't provide value and input, we'd be relying on the broswer to provide all of that. But when we do control, we can do 
                    validation, etc. Before with plain javascript we had to tell the browser not to do x or y. But with controlled input we say ok
                    we'll take over from here. Any time user makes a change we keep track of that etc. We can see every character a user types in. 
                    We have it in our control. Controlled input is when we use React to take over the onChange and value state of an input.
                    </p>
                </div>
            );
        }
    },
    {
        title: '13',
        question: 'Which is more important, Server-Side or Client-Side validation and why?',
        AnswerComponent: () => {
            return (
                <div>
                    <p>
                    Server-side validation is where the information input by a user is sent to the server and validated by it,
                    whereas client-side validation is where user input is sent to and validated by the web browser.
                    </p>
                    <p>
                    Server-side validation is more important than client-side validation because it is much more secure
                    against hackers and other malicious actors, since important information and validation is on a secure 
                    server that they have a harder time to access. Meanwhile with client-side validation, usually those users
                    can easily bypass client-side scripting and submit potentially dangerous input to the server.
                    </p>
                    <p>
                    Server-side validation can properly protect databases and server resources from hackers, whereas client side 
                    cannot.
                    </p>
                </div>
            );
        }
    },
    {
        title: '14',
        question: 'In React components, what are life cycle methods?',
        AnswerComponent: () => {
            return (
                <div>
                    <p>
                    React lifecycle methods can be thought of as the series of events that occur from the 
                    'birth' to the 'death' of a React component. Ever React component goes through a lifecycle 
                    of events - birth, growth, death. Mounting is the birth of the component; Update is the 
                    growth of the component; and unmount is the death of the component. 
                    </p>
                    <p>
                    The most common lifecycle method is render(). This is seen in all React classes because it 
                    is the only required method within a React class component.This renders the component to the 
                    UI, and is part of the mounting and update part of the lifecycle of the component. Render
                    has to be pure (no side effects- always return the same output when the same input is passed).
                    </p>
                    <p>
                    Other methods that aren't always used but are available for the mounting phase of the lifecycle 
                    are constructor() [every time you make a component], getDerivedStatefromProps() [right before 
                    render method], and componentDidMount() [when component is rendered]. There are similarly 
                    more methods in updating and unmounting phases of the lifecycle.
                    </p>
                </div>
            );
        }
    }
];