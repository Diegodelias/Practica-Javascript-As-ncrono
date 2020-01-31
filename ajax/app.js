document.getElementById('button1').addEventListener('click',cargarCliente);

document.getElementById('button2').addEventListener('click',cargarClientes);


function cargarCliente(e){
    const xhr = new XMLHttpRequest();

    xhr.open('GET', 'cliente.json',true);
    xhr.onload = function(){
        if( this.status === 200){
         
            const cliente = JSON.parse(this.responseText);

            const output = `
            <ul>
                <li>ID: ${cliente.id}</li>
                <li>Nombre: ${cliente.name}</li>
                <li>Compañia: ${cliente.company}</li>
                <li>Telefono: ${cliente.phone}</li>
            </ul>
            
            `;

            document.getElementById('cliente').innerHTML = output;
        }

    }
    xhr.send();
}

function cargarClientes(e){
    const xhr = new XMLHttpRequest();

    xhr.open('GET', 'clientes.json',true);
    xhr.onload = function(){
        if( this.status === 200){
         
            const clientes = JSON.parse(this.responseText);

            let output = ''

            clientes.forEach(function(cli){
                    
                 output += `
                <ul>
                    <li>ID: ${cli.id}</li>
                    <li>Nombre: ${cli.name}</li>
                    <li>Compañia: ${cli.company}</li>
                    <li>Telefono: ${cli.phone}</li>
                </ul>
                
                `;


            })


            document.getElementById('clientes').innerHTML = output;
        }

    }
    xhr.send();
}