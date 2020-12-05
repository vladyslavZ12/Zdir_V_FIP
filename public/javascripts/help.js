addItem = () => {
    const name = document.getElementById("name").value;
    const phone = document.getElementById("phone").value;
    const comments = document.getElementById("comments").value;

    if(name!=='' | phone!=='' | comments!==''){
          fetch('http://localhost:3000/addClient',{
            method: 'post',
            headers: {'Content-Type' : 'application/json'},
            body: JSON.stringify({
                name: name,
                phone:phone,
                comments: comments,
            })
          })
          .then(data=>{
            document.getElementById("statusAdd").innerHTML = "Item added!";
          })
          .catch(err=>{ 
            document.getElementById("statusAdd").innerHTML = "Oops, try again later :(";
          });
    }
  }
