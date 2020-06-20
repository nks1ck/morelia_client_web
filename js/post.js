
async function send_message(){
	var date = new Date();
	var user={
		"username": document.getElementById('username').value,
		"password":document.getElementById('password').value, 
		"text":document.getElementById('input').value,
		"timestamp":date.getTime()
	}
	document.getElementById('input').value=""
	let url = 'https://serverpocegram.pythonanywhere.com/send_message';
	await fetch(url,{
	method: 'POST',
	headers: {'Content-Type': 'application/json;charset=utf-8'},
	body: JSON.stringify(user)
});
}