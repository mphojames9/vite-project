import "animate.css/animate.compat.css";
import ScrollAnimation from 'react-animate-on-scroll';
import chatAppNode_js from './assets/My work/chatAppNode_js.jpg';
import safeSmart from './assets/My work/safe.jpg'
import taskList from './assets/My work/taskList.jpg';
import memoryCardGame from './assets/My work/MemoryCardGame.jpg';
import weatherApp from './assets/My work/weatherApp.jpg';
import TicTacToe from './assets/My work/ticTacToe.jpg';
import battleship from './assets/My work/battleShip.jpg';



function Projects() {
   return (

      <div section className="my-work" id="myWork">
         <h2 className="section__title">My work</h2>
         <p className="section__subtitle--my-work">Portfolio highlightsk</p>


         <div className="portfolio">
            <ScrollAnimation animateIn="zoomIn" href="" className="portfolio__iteam">
               <img src={TicTacToe} className="vid">
               </img>
               <div className="portfolio_team_infor">
                  <h1>Tic_Tac_Toe</h1>
                  <p>Tic Tac Toe is a simple ruleset that flexes the basic concepts in programming.<br />
                     This game is AI powered, meaning that you can play against the computer with any difficulty level of your choice.</p>
               </div>
               <hr />
               <div className="buttons">
                  <div className="button">
                     <a href="https://github.com/mphojames9/tic-tac-toe">View code</a>
                  </div>
                  <div className="button">
                     <a href="https://mphojames9.github.io/tic-tac-toe/">View App</a>
                  </div>
               </div>
            </ScrollAnimation>
            <ScrollAnimation animateIn="zoomIn" href="" className="portfolio__iteam">
               <img src={memoryCardGame} className="vid">
               </img>
               <div className="portfolio_team_infor">
                  <h1>Memory card Game</h1>
                  <p>Memory card is a simple matching cards game in which all the cards are flipped backside on a surface, and two cards are flipped face up over each turn. The objective of this game is to match all the pairs of cards with limited moves.</p>
               </div>
               <hr />
               <div className="buttons">
                  <div className="button">
                     <a href="https://github.com/mphojames9/memory-card-game.git">View code</a>
                  </div>
                  <div className="button">
                     <a href="https://mphojames9.github.io/memory-card-game/">View App</a>
                  </div>
               </div>
            </ScrollAnimation>
            <ScrollAnimation animateIn="zoomIn" href="" className="portfolio__iteam">
               <img src={taskList} className="vid">
               </img>
               <div className="portfolio_team_infor">
                  <h1>Task List App</h1>
                  <p>Todoist is one of the most popular to-do list and productivity apps on the market. It easily doubles up as a robust project management application because it is straightforward to create, manage and track projects and tasks.</p>
               </div>
               <hr />
               <div className="buttons">
                  <div className="button">
                     <a href="https://github.com/mphojames9/taskList">View code</a>
                  </div>
                  <div className="button">
                     <a href="#">View App</a>
                  </div>
               </div>
            </ScrollAnimation>
            <ScrollAnimation animateIn="zoomIn" href="" className="portfolio__iteam">
               <img src={weatherApp} className="vid">
               </img>
               <div className="portfolio_team_infor">
                  <h1>Weather App</h1>
                  <p>This weather app can provide you with accurate and detailed weather forecast information, including, daily and weekly weather forecasts.</p>
               </div>
               <hr />
               <div className="buttons">
                  <div className="button">
                     <a href="https://github.com/mphojames9/weather-app">View code</a>
                  </div>
                  <div className="button">
                     <a href="https://weather-app-5e29.onrender.com">View App</a>
                  </div>
               </div>
            </ScrollAnimation>
            <ScrollAnimation animateIn="zoomIn" href="" className="portfolio__iteam">
               <img src={battleship} className="vid">
               </img>
               <div className="portfolio_team_infor">
                  <h1>Battleship Game</h1>
                  <p>This Battleship project was part of my self-guided education through The Odin Project JS Curriculum.
                     The intention of this was to practice the basics of testing using Jest,
                     while also refining my skills with javaScript.</p>
               </div>
               <hr />
               <div className="buttons">
                  <div className="button">
                     <a href="https://github.com/mphojames9/battleship-game.git">View code</a>
                  </div>
                  <div className="button">
                     <a href="https://battleship-game-jwqj.onrender.com">View App</a>
                  </div>
               </div>
            </ScrollAnimation>
            <ScrollAnimation animateIn="zoomIn" href="" className="portfolio__iteam">
               <img src={chatAppNode_js} className="vid">
               </img>
               <div className="portfolio_team_infor">
                  <h1>Real time chat App</h1>
                  <p>Built on a robust tech stack (HTML, CSS, JavaScript, and Node.js),
                     my chat app delivers seamless connections anywhere, anytime.
                     With a lightweight codebase, my app is easy to use and maintain,
                     allowing you to focus on building meaningful relationships.</p>
               </div>
               <hr />
               <div className="buttons">
                  <div className="button">
                     <a href="https://github.com/mphojames9/real_time-_chat_app">View code</a>
                  </div>
                  <div className="button">
                     <a href="https://real-time-chat-app-ucv3.onrender.com">View App</a>
                  </div>
               </div>
            </ScrollAnimation>
            <ScrollAnimation animateIn="zoomIn" href="" className="portfolio__iteam">
               <img src={safeSmart} className="vid">
               </img>
               <div className="portfolio_team_infor">
                  <h1>Resume Builder</h1>
                  <p>This project is a React-based resume builder that allows users to
                     create and download their resumes in PDF format. It features a user-friendly
                     interface with forms for entering personal information, education, and work experience.</p>
               </div>
               <hr />
               <div className="buttons">
                  <div className="button">
                     <a href="https://github.com/mphojames9/resume-builder">View code</a>
                  </div>
                  <div className="button">
                     <a href="https://mphojames9.github.io/resume-builder/">View App</a>
                  </div>
               </div>
            </ScrollAnimation>
         </div>
      </div>
   )
}

export default Projects