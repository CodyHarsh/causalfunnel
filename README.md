
## Installation of Project:
**Here are the steps a user would follow to download the code from GitHub and run it on your machine:**  
  
1. **Clone the Repository:** Open your terminal (Command Prompt on Windows, Terminal on macOS or Linux) and navigate to the directory where you want to store the project. Then, run the following command to clone the repository:
	`git clone https://github.com/codyharsh/causalfunnel.git
`
2. **Navigate to the Project Directory:** Change your current directory to the newly cloned project:
	`cd ./causalfunnel/client`
	 

3. **Install Dependencies:** If the project has dependencies, you need to install them.
		# For Node.js projects with npm. Make sure you have npm installed.
	`npm install`
4. **Run the Application:** Execute the command to start the application.
	`npm run dev`
5. **Access the Application:** Once the application is running, open your web browser and go to the specified address (e.g., `http://localhost:5173` Mostly this is the link only. Refer your Terminal).



## Project Details:
**Tech Stack Used:**
 1. React.js
 2. Javascript
 3. HTML
 4. CSS
 5. JSX

**Overview Of Application and components:**
1. It is an quiz application.
2. You need to write the EmailId to start the quiz.
3. Your timer will start of 30 min. The quiz will be automatically submitted after 30min. There is also a submit button to submit the quiz whenever you want to submit the quiz.
4. You can click on prev and next button to navigate between the quiz question. 
5. There is an overview component which will tell you on which question you have visited, not visited or not marked the question.
6. You can also click on the overview component question number to directly jump on the particular question.
7. The submit component have two component. One is showing the correct answers, wrong answer, total questions. Second component is showing the quiz answer the user have selected and the correct options with it.
8. There is a try again button if you want to retry the quiz.
9. There are some error pages. One error page component which will take back to the quiz and retry the quiz.

**Assumption Made:**
 1. I am assuming that when you click on try again button your current ticked option will be visible on quiz pannel and need to write email id again.
 2. You have to write the email id when you click on try again.
