
const URL1 = 'https://jsonplaceholder.typicode.com/posts';

const http = new MainLibrary;

http.get(URL1)
      .then(data => console.log(data))
      .catch(error => console.log(error));

