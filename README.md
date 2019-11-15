# todolist-express-react-postgres
This is a to do list project with Express, React and PostgreSQL. 

1. For using this project you need to have at first **npm** and **PostgreSQL** on your machine.
1. Then should install (**Express, pg, body-parser, cors**) on *todolist-server* folder and (**axios, React, React-dom**) on *todolist-client* folder through **npm**.
1. One more thing, for running the *front-end* and *back-end* **at the same time** you need to install *concurrently* through **npm** inside the *root folder* which include the three other file and folders (package.json, todolist-server, todolist-client).
1. You need to create a database on PostgrSQL and name it **cyf_todolist** then create a table inside it and name it **tasks**.
1. **Tasks table** should include:
   1. **id** with type of `SERIAL PRIMARY KEY`.
   1. **text** with type of `TEXT` and `NOT NULL`.
   1. **status** with type of `TEXT`.
	 1. **created_date** with type of `TIMESTAMPTZ` and `NOT NULL`.

1. You should create an **USER** called **cyf**. It can function as a **Superuser** and give it a **PASSWORD** of *'password'*.
1. At last should run the project from the *root folder* which there are these three file and folders (**package.json, todolist-server, todolist-client**) inside it, with `npm start` command. 

**GOOD LUCK**
