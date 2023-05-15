
# CardsApp

The cards application is based on the Angular framework that allows users to create, modify and delete cards with information about movies. Each card consists of a title, a description, and an associated movie.

The main functionality of the application is the ability to create and store new cards. Users can provide a title, description, and select a specific movie.

Once a card is created, users also have the option to modify its content. They can edit the title, description and change the associated movie. This functionality allows you to keep card information up to date as movie data changes or new ones are added.

In addition, the application offers the possibility of deleting cards. Users can select a specific card and delete it from the list of available cards. This is useful in case a card has been added incorrectly or is no longer relevant.

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 16.0.0.

## How to use and install

To launch the app, you must first make sure you have Angular CLI and npm installed. Then follow these steps:

 1- Open a terminal or command line in the root directory of your Angular project.

2- Run the following command to start the Angular development server on `local port 4200`:

```bash
"ng serve"
```

This will compile the project and launch it in your default browser. You can access the application at `http://localhost:4200/`.

3- For the card system to work correctly, you will need to run the json-server command. Open a new terminal or command line in the root directory of the project. Run the following command to start json-server and look at the "db.json" file:

```bash
json-server db.json --watch
```

This will start the json-server and set a mock REST API to `http://localhost:3000/`. The Angular application will communicate with this API to perform CRUD operations on the cards.

With these steps, the application will be up and running and you will be able to create, modify and delete cards with associated titles, descriptions and movies. The UI will be available at `http://localhost:4200/` and will communicate with the json-server at `http://localhost:3000/` to get and update card data.
