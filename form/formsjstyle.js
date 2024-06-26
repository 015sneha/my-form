function validateForm() {

    
  let x = document.forms["myForm"]["fname"].value;
     if(x ==""){
         alert("name must be filled");
         return false;
      }

      else if(x.length < 5){
         alert("name should be more than 5 characters");
         return false;
      }

   let c = document.forms["myForm"]["Email"].value;  
      
      if((c.charAt (c.length-3)!='.') && (c.charAt(c.length-4 )!='.')){
         alert("invalid email ");
         return false;
      }

   let b = document.forms["myForm"]["phoneno"].value;

     if (b == "") {
        alert("Phone no. must be filled out");
        return false;
     }
     else if(b =="123456789"){
      alert("phone number cannot be 123456789");
      return false;
     }
     else if(b.length!=10 || b.length>10){   
      alert("phone number must contain only 10 numbers");
      return false;
     }
     else if(isNaN(b)){
       alert("phone number must contain only numbers");
       return false;
      }

  let y = document.forms["myForm"]["password"].value;

     if(y =="password"||  y=="Password"){
        alert("Password can not be password or user name ");
        return false;
     }

     else if(y.length<8){
        alert("password must be strong and of more than 8 letters ");
        return false;
     }

   let a = document.forms["myForm"]["cpassword"].value;

     if(a != y){
        alert("Password and confirm password should be same ");
        return false;
      }

     else {
        return true;
     }
}