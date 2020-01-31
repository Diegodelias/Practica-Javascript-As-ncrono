const posts = [
{title:'Post uno' , body: 'este es el primer post'},
{title:'Post Dos' , body: 'este es el segundo post'}
];

// function crearPost(post){
// setTimeout(function(){
//     posts.push(post);

// },2000);

// }

// function getPosts(){
//     setTimeout(function(){

//         let output = '';
//         posts.forEach(function(post){

//             output += `<li>${post.title}</li>`
//             document.body.innerHTML = output;

//         })
//     },1000);

// }

// crearPost({title: 'Post Three', body: 'este es el tercer post'})

// getPosts();

function crearPost(post, callback){
    setTimeout(function(){
        posts.push(post);
        callback();
    
    },2000);
    
    }
    
    function getPosts(){
        setTimeout(function(){
    
            let output = '';
            posts.forEach(function(post){
    
                output += `<li>${post.title}</li>`
                document.body.innerHTML = output;
    
            })
        },1000);
    
    }
    

    crearPost({title: 'Post Three', body: 'este es el tercer post'}, getPosts)