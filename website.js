function sendmail(){
    var params = {
        name:document.getElementById("name").value,
        email: document.getElementById("email").value,
        message: document.getElementById("message").value,
        
    };


const serviceID = "service_dopfkja"
const templateID ="template_sk070l9"
emailjs.send(serviceID,templateID,params)
.then(
    res =>{
        document.getElementById("name").value= "";
        document.getElementById("email").value= "";
        document.getElementById("message").value= "";
        console.log(res);
        alert("Your message send Successfully");
     })
        .catch((err) =>console.log(err));
    
}