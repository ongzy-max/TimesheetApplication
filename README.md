# TimesheetApplication
 Timesheet app using Springboot backend and Angular Frontend

accessing-data-mysql is the Springboot Backend, run the jar file in: "..\accessing-data-mysql\target\accessing-data-mysql-0.0.1-SNAPSHOT.jar" to start the backend server

angular-app is the Angular frontend. Go to a terminal, enter the angular-app and ng serve to start up the Frontend

Backend: http://localhost:8080/demo Frontend: http://localhost:4200

API Commands

Add User Url: http://localhost:8080/demo/addUser Parameters: name Example: http://localhost:8080/demo/addUser?name=Johnny

Add Status Url: http://localhost:8080/demo/addStatus Paramaters: status Example: http://localhost:8080/demo/addStatus?status=Open

Add Timesheet Url: http://localhost:8080/demo/addTimesheet Parameters: project, task, fromDate, toDate, statusId, userId Example: http://localhost:8080/demo/addTimesheet?project=Test Project 2&task=Testing Not Task&fromDate=08/03/2024&toDate=09/03/2024&statusId=3&userId=1

Edit Timesheet Url: http://localhost:8080/demo/editTimesheet Parameters: project, task, fromDate, toDate, statusId, userId, timesheetId Example: http://localhost:8080/demo/editTimesheet?project=Test Project&task=Testing Task&fromDate=08/03/2024&toDate=11/03/2024&statusId=2&userId=2&timesheetId=4

Delete Timesheet Url: http://localhost:8080/demo/deleteTimesheet Parameters: timesheetId Example: http://localhost:8080/demo/deleteTimesheet?timesheetId=64

Search Timesheet by Task Url: http://localhost:8080/demo/searchTask Parameters: searchTask Example: http://localhost:8080/demo/searchTask?searchTask=Not

Get All Timesheet Url: http://localhost:8080/demo/allTimeSheet

Get All User Url: http://localhost:8080/demo/allUser

Get All Status Url: http://localhost:8080/demo/allStatus