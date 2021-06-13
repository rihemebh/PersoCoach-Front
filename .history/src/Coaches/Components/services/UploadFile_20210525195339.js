import http from "../http-common";

class UploadFilesService {
  upload(file, onUploadProgress) {
    let formData = new FormData();

    formData.append("file", file);

    return http.post("/upload", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
      onUploadProgress,
    });
  }

  getFiles() {
    return http.get("/files");
  }
}

export default new UploadFilesService();
– First we import Axios as http from http-common.js.

– Inside upload() method, we use FormData to store key-value pairs. It helps to build an object which corresponds to HTML form using append() method.

– We pass onUploadProgress to exposes progress events. This progress event are expensive (change detection for each event), so you should only use when you want to monitor it.

– We call Axios post() to send an HTTP POST for uploading a File to Rest APIs Server and get() method for HTTP GET request to retrieve all stored files.

Create Component for Upload Files
Let’s create a File Upload UI with Progress Bar, Card, Button and Message.

First we create a React component template and import UploadFilesService:

components/upload-files.component.js

import React, { Component } from "react";
import UploadService from "../services/upload-files.service";

export default class UploadFiles extends Component {
  constructor(props) {

  }

  render() {

  }
}
Then we define the state inside constructor() method:

export default class UploadFiles extends Component {
  constructor(props) {
    super(props);
    ...

    this.state = {
      selectedFiles: undefined,
      currentFile: undefined,
      progress: 0,
      message: "",

      fileInfos: [],
    };
  }
}
Next we define selectFile() method which helps us to get the selected Files from <input type="file" > element later.

export default class UploadFiles extends Component {
  ...
  selectFile(event) {
    this.setState({
      selectedFiles: event.target.files,
    });
  }
We use selectedFiles for accessing current File as the first Item. Then we call UploadService.upload() method on the currentFile with a callback. So create following upload() method:

export default class UploadFiles extends Component {
  ...
  upload() {
    let currentFile = this.state.selectedFiles[0];

    this.setState({
      progress: 0,
      currentFile: currentFile,
    });

    UploadService.upload(currentFile, (event) => {
      this.setState({
        progress: Math.round((100 * event.loaded) / event.total),
      });
    })
      .then((response) => {
        this.setState({
          message: response.data.message,
        });
        return UploadService.getFiles();
      })
      .then((files) => {
        this.setState({
          fileInfos: files.data,
        });
      })
      .catch(() => {
        this.setState({
          progress: 0,
          message: "Could not upload the file!",
          currentFile: undefined,
        });
      });

    this.setState({
      selectedFiles: undefined,
    });
  }
The progress will be calculated basing on event.loaded and event.total.
If the transmission is done, we call UploadService.getFiles() to get the files’ information and assign the result to fileInfos state, which is an array of {name, url} objects.

We also need to do this work in componentDidMount() method:

export default class UploadFiles extends Component {
  ...
  componentDidMount() {
    UploadService.getFiles().then((response) => {
      this.setState({
        fileInfos: response.data,
      });
    });
  }
Now we implement the render function of the Upload File UI. Add the following code inside render():

export default class UploadFiles extends Component {
  ...
  render() {
    const {
      selectedFiles,
      currentFile,
      progress,
      message,
      fileInfos,
    } = this.state;

    return (
      <div>
        {currentFile && (
          <div className="progress">
            <div
              className="progress-bar progress-bar-info progress-bar-striped"
              role="progressbar"
              aria-valuenow={progress}
              aria-valuemin="0"
              aria-valuemax="100"
              style={{ width: progress + "%" }}
            >
              {progress}%
            </div>
          </div>
        )}

        <label className="btn btn-default">
          <input type="file" onChange={this.selectFile} />
        </label>

        <button className="btn btn-success"
          disabled={!selectedFiles}
          onClick={this.upload}
        >
          Upload
        </button>

        <div className="alert alert-light" role="alert">
          {message}
        </div>

        <div className="card">
          <div className="card-header">List of Files</div>
          <ul className="list-group list-group-flush">
            {fileInfos &&
              fileInfos.map((file, index) => (
                <li className="list-group-item" key={index}>
                  <a href={file.url}>{file.name}</a>
                </li>
              ))}
          </ul>
        </div>
      </div>
    );
  }
}
In the code above, we use Bootstrap Progress Bar:

.progress as a wrapper
inner .progress-bar to indicate the progress
.progress-bar requires style to set the width by percentage
.progress-bar also requires role and some aria attributes to make it accessible
label of the progress bar is the text within it
To display List of uploaded files, we iterate over fileInfos array using map() function. On each file item, we use file.url as href attribute and file.name for showing text.

Add File Upload Component to App Component
Open App.js, import and embed the UploadFiles Component tag.

import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import UploadFiles from "./components/upload-files.component";

function App() {
  return (
    <div className="container" style={{ width: "600px" }}>
      <div style={{ margin: "20px" }}>
        <h3>bezkoder.com</h3>
        <h4>React upload Files</h4>
      </div>

      <UploadFiles />
    </div>
  );
}

export default App;
Configure Port for React File Upload App
Because most of HTTP Server use CORS configuration that accepts resource sharing retricted to some sites or ports, and if you use the Project in this post for making Server, you need to configure port for our App.

In project folder, create .env file with following content:

PORT=8081
So our app will run at port 8081.

Run the App
Run Spring Boot Server with command: mvn spring-boot:run.
Refresh the project directory and you will see uploads folder inside it.

Run this React File Upload Axios: npm start.
Open Browser with url http://localhost:8081/ and check the result.

Further Reading
https://github.com/axios/axios
React Component
Bootstrap 4 Progress
React.js CRUD example to consume Web API
React JWT Authentication (without Redux) example
Conclusion
Today we’re learned how to build an example for upload Files from React Client to Spring Boot server. We also provide the ability to show list of files, upload progress using Bootstrap, and to download file from the server.

You can find Step by Step to implement the Spring Boot Server at:
Spring Boot Multipart File upload (to static folder) example

Or: Spring Boot Multipart File upload (to database) example

Similar React App using Hooks: React Hooks File Upload example with Axios & Progress Bar

If you want to upload multiple files at once like this:

react-multiple-files-upload-example-progress-bar

You can find the instruction here:
React Multiple Files upload example with Progress Bar

Image Upload: React Image Upload with Preview

Or Material UI instead of Bootstrap:
Material UI File Upload example with Axios & Progress Bar

You will want to know how to run both projects in one place:
How to integrate React.js with Spring Boot

Source Code
The source code for the React Client is uploaded to Github.

axios bootstrap file formdata multipart file react spring boot upload
5 thoughts to “React File Upload/Download example with Spring Boot Rest Api”
Angel
May 13, 2020 at 5:13 pm
Each of your tutorials are helping me a lot!! Thank you!!

Yessi
May 18, 2020 at 3:46 pm
I found this Warning;
2020-05-18 15:16:42.647 WARN 38872 — [nio-8081-exec-1] .m.m.a.ExceptionHandlerExceptionResolver : Resolved [org.springframework.web.multipart.support.MissingServletRequestPartException: Required request part ‘tutorials’ is not present]

bezkoder
May 18, 2020 at 11:53 pm
Hi, please post your code here, and the HTTP request also 🙂

I don’t see anything related to ‘tutorials’ in the tutorial 🙂

Janani
April 16, 2021 at 9:18 am
@GetMapping(“/files/{id}”)
public ResponseEntity getFile(@PathVariable String id) {
FileDB fileDB = storageService.getFile(id);

return ResponseEntity.ok()
.header(“CONTENT_DISPOSITION”, “attachment; filename=\”” + fileDB.getName() + “\””)
.body(fileDB.getData());
}

React code for this method plzz…

bezkoder
April 17, 2021 at 8:47 am
Hi, in the React render() method, you can see this:

<a href={file.url}>{file.name}</a>
Leave a Reply
Your email address will not be published. Required fields are marked *

Comment

Name *

Email *

Website


Save my name, email, and website in this browser for the next time I comment.

Post navigation
 How to upload multiple files in Java Spring Boot
Import CSV data into MySQL using Node.js 
Search for:
Search…
CATEGORIES
Android
Angular
Courses
Dart
Deployment
Django
Firebase
Flutter
Full Stack
GraphQL
Java
Javascript
Kotlin
MongoDB
Node.js
Python
React
Reactor
Security
Spring
Testing
Vue.js
FOLLOW US
TOOLS
Json Formatter
DMCA.com Protection Status
HomePrivacy PolicyContact UsAbout Us
BezKoder 2019
We use cookies to improve your experience with the site. To find out more, you can read the full Privacy & PolicyAccept

Privacy Overview
This website uses cookies to improve your experience while you navigate through the website. Out of these cookies, the cookies that are categorized as necessary are stored on your browser as they are essential for the working of basic functionalities...
Necessary
Always Enabled
Non-Necessary
'+
X