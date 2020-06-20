async function update_message(){
	let url = 'https://serverpocegram.pythonanywhere.com/get_messages?after='+lasttimestamp;
	var response = await fetch(url);
	var messages = await response.json()
	messages = messages["messages"]
	var index;
	for (index = 0; index < messages.length; ++index) {
		var message = messages[index]
		var datemessages = new Date(message["timestamp"]*1000)
		var dt = datemessages.getHours()+":"+datemessages.getMinutes()+":"+datemessages.getSeconds()
		viewtext = viewtext + "["+dt+" "+message["username"]+"]\n";
		viewtext = viewtext + message["text"]+"\n\n"
		lasttimestamp=message["timestamp"]
	document.getElementById("view").innerHTML=viewtext
	}

}
var lasttimestamp = 0.0
var viewtext = ""
setInterval(update_message,1000)



