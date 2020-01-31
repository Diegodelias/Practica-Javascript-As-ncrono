document.getElementById('button1').addEventListener('click', obtenerTexto) ;
document.getElementById('button2').addEventListener('click', obtenerJson) ;
document.getElementById('button3').addEventListener('click', obtenerDeApi) ;

function obtenerTexto(){

    fetch('test.txt').then(res => res.text())
    .then(data => {

            console.log(data);
            document.getElementById('output').innerHTML = data;

    })

    .catch(err => console.log(err));

}


//obtener información json
function obtenerJson(){
     fetch('post.json')
    .then(res => res.json())
    .then( cosa =>{
      let output = '';
      cosa.forEach(function(post){


        output += `<li>${post.title}</li>`

      });

      document.getElementById('output').innerHTML  = output;
    })

    .catch(err => console.log(err)
    );

}

function obtenerDeApi(){
    fetch('https://api.github.com/users')
    .then( res => res.json())
    .then(cosa =>{
      let output = '';
      cosa.forEach(function(usuario){


        output += `<li>${usuario.login}</li>`

      });

      document.getElementById('output').innerHTML  = output;
    })

    .catch(err => console.log(err));


}