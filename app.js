const http = new MainLibrary;

// http.get('https://jsonplaceholder.typicode.com/posts')
//       .then(data => console.log(data))
//       .catch(error => console.log(error));

// const data = {
//             title: 'Im a simple title',
//             body: 'Im a simple body',
//             userId: 1,
//       }

// http.post('https://jsonplaceholder.typicode.com/posts', data)
//       .then(data => console.log(data))
//       .catch(error => console.log(error));

// const data = {
//             id: 2,
//             title: 'Im just another title',
//             body: 'Im just another body',
//             userId: 1,
//       }

// http.put('https://jsonplaceholder.typicode.com/posts/2', data)
//       .then(data => console.log(data))
//       .catch(error => console.log(error));

http.delete('https://jsonplaceholder.typicode.com/posts/3')
      .then(data => console.log(data))
      .catch(error => console.log(error));