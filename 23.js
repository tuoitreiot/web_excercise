function init() {     //like main function in others language
	var html_btn = document.getElementById("btn");
	html_btn.onclick = convert_button_click;

	var h2 = document.getElementById("click_h2");
	h2.onclick = h2_click;  // h2.onclick = h2_click() will gender the return value of h2_click function it not right

	var all_h3 = document.getElementsByTagName("h3");
	var i=0;
	while (i<all_h3.length) {
		all_h3[i].onclick = convert_content_h3;
		i++
	}

}

function convert_content_h3() {
	var h3_content = document.getElementById("h3_content");
	h3_content.innerHTML = "You clicked on of the h3 element"
}
function h2_click() {
	var h2_content = document.getElementById("h2_content");
	h2_content.textContent = "You click h2"
}

function print_conversion(usd, vnd) {
	var html_message = document.getElementById("message");
	html_message.textContent = "You enter : " + usd + "USD, this is converted to " + vnd + "VND"
}
 
function convert_button_click() {
	var usd = prompt("Enter USD: ");
	var vnd = usd*23000;
	print_conversion(usd, vnd);
}

window.onload = init;   //call init function when your website is onload