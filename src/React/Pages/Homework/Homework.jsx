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
                        Code review is an important in web development, which helps detect bugs early on before the testing
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
    }
];