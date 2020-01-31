const http = new easyHTTP;

// http.get('https://jsonplaceholder.typicode.com/posts1', function(error,posts){
//     if(error) {
//         console.log(error);


//     } else {
//         console.log(posts)
//     }
// });

/**un solo post */
// http.get('https://jsonplaceholder.typicode.com/posts/1', function(error,post){
//     if(error) {
//         console.log(error);


//     } else {
//         console.log(post)
//     }
// });


const data = {
    "title": 'Post personalizado saraza',
    "body": 'Este es un post personalizado saraza'

};


// http.post('https://jsonplaceholder.typicode.com/posts', data,function(error,post){

//     if(error) {
//                 console.log(error);
        
        
//             } else {
//                 console.log(post)
//             }


// });


//uPDATE POST

http.put('https://jsonplaceholder.typicode.com/posts/1',data, function(error,post){
    
    if(error) {
                console.log(error);
        
        
            } else {
                console.log(post)
            }



});


//delete


http.delete('https://jsonplaceholder.typicode.com/posts/1', function(error,respuesta){
    if(error) {
        console.log(error);


    } else {
        console.log(respuesta)
    }
});
