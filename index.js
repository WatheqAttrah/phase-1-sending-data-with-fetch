// Add your code here
function submitData(value1,value2){
    const infoData={
        name:value1,
        email:value2,
    };
    const configObject={
        method:'POST',
        headers:{
            "Content-Type":'application/json',
            "Accept":'application/json',
        },
        body: JSON.stringify(infoData),
    };
    return fetch('http://localhost:3000/users', configObject)
    .then(function(response){
        return response.json();
    })
    .then(function(data){
        let p=document.createElement('p');
        p.innerHTML=data.id;
        document.body.appendChild(p);
    })
    .catch(function (error){
        let p =document.createElement('p');
        p.innerHTML='Unauthorized Access';
        document.body.appendChild(p);
        return
    });
}
submitData('steve',"steve@steve.com")