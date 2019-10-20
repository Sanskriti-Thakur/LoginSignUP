const signUpButton = document.getElementById('signUp');
const signInButton = document.getElementById('signIn');
const container = document.getElementById('container');

signUpButton.addEventListener('click', () => {
	container.classList.add("right-panel-active");
});

signInButton.addEventListener('click', () => {
	container.classList.remove("right-panel-active");
});
function validate() {
	var name = document.forms["RegForm"]["Name"];               
    var email = document.forms["RegForm"]["EMail"];     
    var password = document.forms["RegForm"]["Password"]; 
      
		if (name.value == "")                                  
    { 
        window.alert("Please enter your name."); 
        name.focus(); 
        return false; 
	} 
	if (email.value == "")                                   
    { 
        window.alert("Please enter a valid e-mail address."); 
        email.focus(); 
        return false; 
	} 
	if (password.value == "")                        
    { 
        window.alert("Please enter your password"); 
		password.focus();
		if(password.length<6) 
		{
			window.alert("Please enter 8 more than 8 characters in your password"); 
			password.focus();
		}
        return false; 
    } 
		return( true );
	}
	function validate1() {              
		var email = document.forms["RegForm1"]["EMail"];     
		var password = document.forms["RegForm1"]["Password"]; 
		if (email.value == "")                                   
		{ 
			window.alert("Please enter a valid e-mail address."); 
			email.focus(); 
			return false; 
		} 
		if (password.value == "" )                        
		{ 
			window.alert("Please enter your password"); 
			password.focus(); 
			return false; 
		} 
			return( true );
		}

		function showDiv()
{
document.getElementById("modal").style.display="block";
}
function hideDiv()
{
document.getElementById("modal").style.display="none";
}