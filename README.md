# CRUD-JPA

This is an example of a simple Angular front-end/Springboot backend webapp

### current state of play:

- Run ```gradle copyWebApp bootRun``` to make it work.
- frontend at http://localhost:8080
- You can get to backend DB at http://localhost:8080/h2-console (sa/password, add some persons?)

### to do:
- make copyWebApp a dependsOn of bootJar
- add DB content (its currently empty)

### Commits:
- [2 subprojects - Springboot/Gradle backend (starts, says 'hello'); 'Hello world' Angular frontend](https://github.com/jim-reespotter/CRUD-JPA/commit/99e1e5de65ee351c6ad3ec4f06281eeac2176da0)
- [Gradle now works - parent project builds angular + puts output into Springboot](https://github.com/jim-reespotter/CRUD-JPA/commit/f9de8ad91e68e6c6aac08bfcf6d1eda95b837aa6)
- [Simple Springboot-JPA - one entity in H2 DB](https://github.com/jim-reespotter/CRUD-JPA/commit/734f4da5c9e78fba9e87d4c11f05a8a508f3092d)
- [Angular material table populated from Springboot REST](https://github.com/jim-reespotter/CRUD-JPA/commit/68583f568f1485184dae2107b9f5f963d73773ed)

### Environment:
- Windows
- Corretto Java 17
- Gradle 8.7 (on PATH)
- Node.js 22.2.0 installed
- angular CLI installed (```npm install @angular/cli``` in frontend directory)

### Other points:
- ng is ```frontend/node_modules/.bin/ng```
- had to install material theme (```ng add @angular/material``` in frontend)
- If you want to debug stuff, run Springboot, then ```ng serve``` the frontend + browse to http://localhost:4200 - there's a proxy for /api through to the backend
