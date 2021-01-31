class MainLibrary {
  get(url){
      return new Promise ((resolve,reject) => {
        fetch(url)
          .then(response => response.json())
          .then(data => resolve(data))
          .catch(error => reject(error));
      })
      
  }

  post(url, data){
    return new Promise ((resolve,reject) => {
      fetch(url, {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      })
        .then(response => response.json())
        .then(data => resolve(data))
        .catch(error => reject(error));
    })
  }

  put(url, data){
    return new Promise( (resolve, reject) => {
      fetch(url, {
        method: 'PUT',
        body: JSON.stringify(data),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      })
        .then(response => response.json())
        .then(data => resolve(data))
        .catch(error => reject(error));
    })
  }

  delete(url){
    return new Promise ( (resolve, reject) => {
      fetch(url, {
        method: 'DELETE',
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      })
        .then(response => response.json())
        .then(data => resolve('Post have been deleted!'))
        .catch(error => reject(error))
    })
  }

}