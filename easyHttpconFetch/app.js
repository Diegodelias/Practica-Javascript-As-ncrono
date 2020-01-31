const http = new EasyHttp;

//  http.get('https://jsonplaceholder.typicode.com/users')
//  .then(data => console.log(data))
//  .catch(err => console.log(err));


//DATOS DE Prueba
const data = {
    name: ' Juan Perez',
    username: 'juanperez',
    email : 'juanperez@gmail.com'

}

//  http.post('https://jsonplaceholder.typicode.com/users',data)
// .then(data => console.log(data))
// .catch(err => console.log(err));

// http.put('https://jsonplaceholder.typicode.com/users/2',data)
// .then(data => console.log(data))
// .catch(err => console.log(err));




http.delete('https://jsonplaceholder.typicode.com/users/2')
.then(data => console.log(data))
.catch(err => console.log(err));

