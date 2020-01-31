const posts = [
{title:'Post uno' , body: 'este es el primer post'},
{title:'Post Dos' , body: 'este es el segundo post'}
];



function crearPost(post){
    return new Promise(function(resolve,reject){
        setTimeout(function(){
            posts.push(post);
            const error = true;
            if(!error) {
                resolve();

            } else {

                reject('Error: Algo salió mal')
            }
         
        },2000);
        

    });
   
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
    

    crearPost({title: 'Post Three', body: 'este es el tercer post'})
    .then(getPosts)
    .catch(function(err){

        console.log(err)
        
    });