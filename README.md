# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.


### Connection between frontend and backend 
   make api requestion when form is submitted 
   making http post requests for sending empobj to backend 
    use effect hook:- until the initial render takes place if stops api call ( when there is competetion btw intital rendering and api calling)
CROSS:Cross origin resource sharing
   
(31-03-2026)   
### 
-Client side application and server side application can interact with each other over http protocall by making http request and recieving http response.
-To make the http request from client side application , one can use either fetch function or axios module.
-The following are the http request types:
                    GET-to read all resources
                    POST-to create a new resource
                    PUT-to update entire resource
                    DELETE-to delete a resource
                    PATCH-to update a resource partially 
-The POST,PUT PATCH request types can have body property which can hold json data whereas GET AND DELELTE request do not have body property and they can send data through URL.
{
    (-When client make http request it makes API end point which helps to identify the route , next it sets the content-type these twoare common for every request and this is specifically for POST request.
    The data recieved from route should math with schema.Rest client tool and the body sent by POST request should be same else the request will be failed. )
}

### fetch and axios
-> fetch takes two arguments-endpoint and options.Syntx is:
     GET
       fetch(endpoint,{method:"GET"}) 
    POST
       fetch(endpoint,{method:"POST",
       headers:{"Content-Type":app/json}
       body:JSON.stringfy(resource)
       })  //this is for post request
     PUT
       fetch(endpoint,{method:"PUT",
       headers:{"Content-Type":app/json}
       body:JSON.stringfy(resource)
       })
the advantage for fetch is 


-> axios syntax is:
     GET
        axios.get(endpoint)
    POST
    axios.post(endpoint,resource)
    PUT
    axios.post(endpoint,resource)

axios throws the request automatically to the chatbox 
to build the real world application for requests axios is used over fetch but is not directly available we need to install and import it.

### State Managment
     -sharing state + keeping state sync across app
     -sharing state is application should have ability to share among the states components.
     fpr small application we use pipeline mechanism and large we use storeline.To create pipeline we use context provider. Sharing state is done by Context provider.

   Contex API ----> used for small apps
   Redux/Zustand(a modern application,simplifies the process a lot has less codethis is better than redux)(advanced state managment library )-------->Larger apps 
   
  # Steps for Contex API
         1-Create context object
              -create folder named contexts in src folder
                  -create contexprovider.jsx
         2- Add state to context object(add water to pipeline)
         3-Set this context provider to a parent
         4-Consume context from components

(1-4-2026)
# Issues with Context
  -Context with use state hook is a best and simple state mangement mechanism for small applications but it creates unecessary rerendering issues when multiple state is part of a context.
  -To overcome this unecessery rerendering issues, create multiple contexts and make sure each context has a single state.
  -When the application size is huge,then maintainence of multiple context willl become an issue.For such large applications advanced state managment tools like redux or Zuststant can be used.

# Advanced State Managment with ZUSTAND

