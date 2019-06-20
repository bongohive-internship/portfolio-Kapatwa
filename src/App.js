import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <a
          className="App-link"
          href="https://bongohive.co.zm"
          target="_blank"
          rel="noopener noreferrer"
        >
          BongoHive, Portfolio Submission.
        </a>
		<h2>Kapatwa Chama</h2>
		<img src="me.jpg" id="me" alt=""/>
		<h3>Academic information</h3>
			<p>Grade 1 - 6 : St Johns Convent(2004-2009)<br /> Grade 8 - 12: Kalulushi Trust School (2010-2014)<br />University of Zambia: Political Science 3rd Year (2017-2019)<br/></p>
		<h3>What Is My favourite Programming Language?</h3>
		  <p>My favourite programming language currently would have to be Php. Though i love to diversify depending on what gets the job quicker and better.</p>
		<h3>Software Skills</h3>
		  <p> My software skiils vary from windows software development in c# and visual basic to web development in php, python, javascript, html and css</p>
		<h3>What would i like to learn?</h3>
		  <p>How to work with other developers on the same unified project. New programming languages like Node JS and experience in a professional settup.</p>
		<h3>Hobbies</h3>
			<p>Programming, Reading, Music and Dancing</p>
		<h3>Fears</h3>
		  <p>Fear of not being successful</p>
		<h3>Contact Info</h3>
			<p>Phone: 0962893798; Email: Kapatwa96@gmail.com;</p>
      </header>
    </div>
  );
}

export default App;
