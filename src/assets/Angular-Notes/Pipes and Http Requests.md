==========================================================[Pipes]======================================================================
# pipes: 
Pipes are a useful feature in Angular. They are a simple way to transform values in an Angular template. There are some built in pipes, but you can also build your own pipes. A pipe takes in a value or values and then returns a value.

# To Learn more about pipes:
https://angular.io/api?query=pipe-go this link

# Changing multiple pipes:
to implement multiple pipe simply you can add 
Eg:
<h2>{{server.status | date: 'fullDate'| uppercase}</h2>
:-colon indicates that pipes are been parameterized.

===============================================================[Http]==================================================================
# Http Req:
Descriptionlink. HttpRequest represents an outgoing request, including URL, method, headers, body, and other request configuration options. Instances should be assumed to be immutable.

The asynchronous method sends an HTTP request, and returns an Observable that emits the requested data when the response is received. The return type varies based on the observe and responseType values that you pass to the call.

# Backend Database(Firebase):
The Firebase Realtime Database lets you build rich, collaborative applications by allowing secure access to the database directly from client-side code. Data is persisted locally, and even while offline, realtime events continue to fire, giving the end user a responsive experience.Create a project as ng-angular-http after create a real time database in the build section.

# Http Requests:  The following table lists all the supported methods in HTTP.
GET
The GET method is used to retrieve information from the given server using a given URL. Requests using GET should only retrieve data and should have no other effect on the data.

HEAD:
Same as GET, but it transfers the status line and the header section only.

POST:
A POST request is used to send data to the server, for example, customer information, file upload, etc. using HTML forms.

PUT:
Replaces all the current representations of the target resource with the uploaded content.

DELETE:
Removes all the current representations of the target resource given by URI.

CONNECT:
Establishes a tunnel to the server identified by a given URI.

OPTIONS:
Describe the communication options for the target resource.

TRACE:
Performs a message loop back test along with the path to the target resource.

# Eg: to use http request for sending data  means post method needs to be used.
# Important Note: That requests are only sent when you subscribe.
syntax:
this.http.post('urlDatabaseLink/posts.json').subscribe(responseData =>{
    console.log(responseData)
})
# Delete A Request:
Removes all the posts request
Eg:
Create a method in service and return that method dont subcribe and call it in your typescript then subscribe.
deletePost(){
    return this.http.delete("urlLink")
}
In the typescript file-
clearPost(){
    this.postService.deletePost().subscribe(()=>
    //pass some message like
    confirm('Posts has been Deleted');
    )
}
# Adding Http headers and queryParams: To add httpheaders we can simple pass as an argument in any requests method same goes for params as well.Eg given below 

headers: new HttpHeaders({ "Custom-Headers": "HttpHeaders" }),
params: new HttpParams().set("params","loading"), - while using params set method needs to be used,another method for adding params is
params: newParams
let newParams = new HttpParams;
newParams = newParams.append('print','pretty');
newParams = newParams.append('custom','params');
by using this alternative we can create as many custom queryParams on our own.


# Interceptors:
The Angular HTTP Interceptor is introduced along with the new HTTPClientModule. The Interceptor helps us to modify the HTTP Request by intercepting it before the Request is sent to the back end. The Interceptor can be useful for adding custom headers to the outgoing request, logging the incoming response, etc.

# Create Intercerptor:
ng generate interceptors 
You can create multipe Interceptors and add in the providers at appModules.
Eg:
providers: [{ provide: HTTP_INTERCEPTORS, multi: true, useClass: AuthInterceptor },
    { provide: HTTP_INTERCEPTORS, multi: true, useClass: LoggingInterceptor }],
