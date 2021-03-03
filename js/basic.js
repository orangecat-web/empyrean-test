function openNav() {
  document.getElementById("mySidenav").style.width = "250px";
}
function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}
$(function () {
	var currentYear = (new Date).getFullYear();
		$(document).ready(function () {
			$(".year").text( (new Date).getFullYear() );
	});
});
// swich theme
document.querySelector('.toggle').addEventListener('click', function() {
		this.classList.add('animate');
		
		setTimeout(() => {
				this.classList.toggle('active');
				document.querySelector('.wave').classList.toggle('active');
				document.documentElement.classList.toggle('theme-dark');
		}, 150);
		
		setTimeout(() => this.classList.remove('animate'), 300);
});