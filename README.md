# Huh?
This is the simplest service I can think of.

```
npm start
```

And you can test it with:

```
curl "http://localhost:3000/hi"
```

Which will say `hi`!

From the browser dev console:

```
var ws = new WebSocket("ws://localhost:3000");
ws.onmessage = function(e) {
  console.log(e.data);
};
ws.send("hi");
```
