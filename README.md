## Employee Management System (EMS)
A Full Stack Employee Management System built using Spring Boot (Backend) and React (Frontend).  
This project allows users to manage employee details with basic CRUD (Create, Read, Update, Delete) operations.

## Tech Stack
Frontend: React, Axios, Bootstrap  
Backend: Spring Boot, Spring Data JPA, MySQL  
Tools: IntelliJ IDEA, VS Code, Postman, Git, GitHub

## Project Structure
FullStack/
├── ems-backend/   
# Spring Boot backend
└── ems-frontend/ 
 # React frontend

 ##  To Run the Project
## Backend (Spring Boot)
1. Open ems-backend in IntelliJ or VS Code.
2. Update application.properties with your MySQL credentials:
   ```properties
   spring.datasource.url=jdbc:mysql://localhost:3306/ems_db
   spring.datasource.username=root
   spring.datasource.password=yourpassword
   spring.jpa.hibernate.ddl-auto=update

3. Run EmsBackendApplication.java.
4. Backend runs at: http://localhost:8080

## Frontend (React)
1. Open terminal in ems-frontend folder.
2. Run:
   npm install
   npm start
3. Frontend runs at: http://localhost:3000


## Connecting Frontend & Backend
->To connect frontend and backend,
->First in your React app, update the base URL for API calls:
const BASE_URL = "http://localhost:8080/api/employees";

### Features
- Add Employee  
- View Employee List
- Update Employee Details  
- Delete Employee  
- Update Employee Details  
- Delete Employee  
- Responsive UI
