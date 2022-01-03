function validateForm(){
    const emailValue = document.getElementById("email").value;
    const passwordValue = document.getElementById("pass").value;
    var getSelectedValue = document.querySelector( 'input[name="type"]:checked'); 
    
    l=emailValue.length;
    if(getSelectedValue) 
    {
        if(emailValue =='' || passwordValue =='')
        {
            alert('Cant submit empty fields');
            return false;
        }
        else
        {
            if(emailValue.includes("@") && emailValue.includes(".com",l-4))
            {
                return true;    
            }
            else
            {
                alert('Invalid form for the e-mail address !');
                return false;
            }
        }
    }   
    else
    {
        alert('please chose a login type');
        return false;
    }
    
}