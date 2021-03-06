class EasyHttp {

    // http GET request
   async get(url){
        const response = await fetch(url);
        const resData = await response.json();
        return resData;

    }


       // http post request

     async  post(url,data){

       
          const response = await  fetch(url, {
                method:'POST',
                headers:{

                    'Content-type':'application/json'
                },
                body: JSON.stringify(data)


            })
            const resData = await response.json();
            return resData;
    



        }
        
       



    

    //Hacer put request

    async put(url,data){

         const response = await  fetch(url, {
                method:'PUT',
                headers:{

                    'Content-type':'application/json'
                },
                body: JSON.stringify(data)


            })
              const resData = await response.json();
            return resData;
    }

    /**method delete */

 async  delete(url){
          const response = await  fetch(url, {
                method:'DELETE',
                headers:{

                    'Content-type':'application/json'
                },
           


            })



            const resData = await 'borrado...';
            return resData;

     
       



    }



}