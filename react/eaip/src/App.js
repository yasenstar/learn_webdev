import './App.css';
import React, { useEffect } from 'react';

function App() {
  useEffect(() => {
    document.title = "EAIP";
  }, []);

  return (
    <div className="App">
      <nav class="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
        <a class="navbar-brand" href="./index.html">EA in Practice</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExampleDefault" aria-controls="navbarsExampleDefault" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarsExampleDefault">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item active">
              <a class="nav-link" href="./index.html">Home <span class="sr-only">(current)</span></a>
            </li>
          </ul>
        </div>
      </nav>

      <br></br>
      <br></br>
      <br></br>

      <main role="main">

        
        <div class="jumbotron">
          <div class="container">
            <h1 class="display-4">Welcome to Enterprise Architecture in Practice</h1>
          </div>
        </div>

        <div class="container">
          
          <div class="row">
            <div class="col-md-4">
              <h2>Enterprise Architecture</h2>
              <p>Full landscape view on EA! </p>
              <p><a class="btn btn-secondary" href="https://github.com/yasenstar/enterprise_architecture" role="button">Learn more »</a></p>
            </div>
            <div class="col-md-4">
              <h2>Business Architecture</h2>
              <p>Linking with BizBOK, learn BA in 10 and extented domains</p>
              <p><a class="btn btn-secondary" href="https://github.com/yasenstar/enterprise_architecture/tree/master/business-architecture" role="button">Learn more »</a></p>
            </div>
            <div class="col-md-4">
              <h2>Architectural Modeling</h2>
              <p>Hands-on with Archi tool, practice in variable modelings</p>
              <p><a class="btn btn-secondary" href="https://github.com/yasenstar/archi_practice" role="button">Learn more »</a></p>
            </div>
            <div class="col-md-4">
              <h2>My Knowledge Graph</h2>
              <p></p>
              <p><a class="btn btn-secondary" href="https://github.com/yasenstar/myknowledge" role="button">Learn more »</a></p>
            </div>
          </div>

        </div> 

      </main>

      <footer class="container">
      <p>
              <a class="btn btn-primary btn-lg" href="https://www.linkedin.com/in/xiaoqi-zhao-03715614/" role="button">Xiaoqi's Profile in LinkedIn »</a>
            </p>
        <p>Xiaoqi Zhao © 2022</p>
      </footer>
    </div>
  );
}

export default App;
