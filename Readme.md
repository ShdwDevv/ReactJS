# React JS
* Normal HTML
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Namaste React</title>
</head>
<body>
    <div id="root">
        <h1>Hello All</h1>
    </div>
    <script>
        const heading = document.createElement("h1");
        heading.innerHTML = "Hello Everyone";
        const rootElement = document.getElementById("root");
        rootElement.appendChild(heading);
    </script>
</body>
</html>
```
## Shortest Program of React
```html 
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Namaste React</title>
</head>
<body>
    <div id="root"></div>
    <script crossorigin src="https://unpkg.com/react@18/umd/react.development.js"></script>
    <script crossorigin src="https://unpkg.com/react-dom@18/umd/react-dom.development.js"></script>
</body>
</html>
```
* with this cdn links we installed React
![alt text](image.png)
## To Tell Hello all in React
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Namaste React</title>
</head>
<body>
    <div id="root">Not Rendered </div>
    <script crossorigin src="https://unpkg.com/react@18/umd/react.development.js"></script>
    <script crossorigin src="https://unpkg.com/react-dom@18/umd/react-dom.development.js"></script>
    <script>
        const header = React.createElement("h1",{id:"title",className :"sana"},"Hello All");
        console.log(header); // It will print the object
        const root = ReactDOM.createRoot(document.getElementById("root"));
        root.render(header);
    </script>
</body>
</html>
```