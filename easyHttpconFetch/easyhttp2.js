class EasyHttp {

    // http GET request
    get(url){

        return new Promise((resolve, reject)=>{
            fetch(url)
            .then(res => res.json())
            .then(data =>resolve(data))
            .catch(err => reject(err));

        });
       



    }


       // http post request

       post(url,data){

        return new Promise((resolve, reject)=>{
            fetch(url, {
                method:'POST',
                headers:{

                    'Content-type':'application/json'
                },
                body: JSON.stringify(data)


            })




            .then(res => res.json())
            .then(data =>resolve(data))
            .catch(err => reject(err));

        });
       



    }

    //Hacer put request

    put(url,data){

        return new Promise((resolve, reject)=>{
            fetch(url, {
                method:'PUT',
                headers:{

                    'Content-type':'application/json'
                },
                body: JSON.stringify(data)


            })




            .then(res => res.json())
            .then(data =>resolve(data))
            .catch(err => reject(err));

        });
       



    }

    /**method delete */

   delete(url){

        return new Promise((resolve, reject)=>{
            fetch(url, {
                method:'DELETE',
                headers:{

                    'Content-type':'application/json'
                },
           


            })




            .then(res => res.json())
            .then(() =>resolve('Borrado'))
            .catch(err => reject(err));

        });
       



    }



}