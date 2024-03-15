let body = document.querySelector('body');
let splitter = document.querySelector('.splitter');

var btns = [
	document.getElementById('btnAbout'),
	document.getElementById('btnExperience'),
	document.getElementById('btnProjects'),
	document.getElementById('btnLanguage')
];

btns.forEach(element => {
	element.addEventListener('click', goToSelected);
});

window.onload = (event) => {
	updateMenuTree(0);
}

function updateMenuTree(focused)
{
	for (i = 0; i < 4; i++) {
		var child1 = btns[i].querySelector('.men_bar');
		if (focused === i) {
			child1.classList.add('active');
			btns[i].style.color = "#E2E8F0";
		} else {
			child1.classList.remove('active');
			btns[i].style.color = "#808c9c";
		}
	}
}


function goToSelected()
{
	var clickedButton = this;
	let focused;
	if (clickedButton.id === 'btnAbout')
		focused = 0;
	else if (clickedButton.id === 'btnExperience')
		focused = 1;
	else if (clickedButton.id === 'btnProjects')
		focused = 2;
	else if (clickedButton.id === 'btnLanguage')
		focused = 3;
	updateMenuTree(focused);
}

document.addEventListener("DOMContentLoaded", function()
{
	const circle = document.getElementById("circle");

	window.addEventListener("mousemove", function(event) {
		if (window.innerWidth <= 900)
		{
			circle.style.left = "50%";
			circle.style.top = "50%";
			return ;
		}
		const x = event.clientX;
		const y = event.clientY;
		circle.style.left = `${x}px`;
		circle.style.top = `${y}px`;
	});
});

function scrollToTop()
{
	updateMenuTree(0);
	if (window.innerWidth > 900)
		body.scrollTo({top: 0, behavior: 'smooth'});
	else
		splitter.scrollTo({top: 0, behavior: 'smooth'});

}

function scrollToId(idName) {
	var element = document.getElementById(idName);
	element.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

document.addEventListener('wheel', function(event)
{
	body.scrollTop += event.deltaY;

	// if (window.innerWidth > 900)
	// 	return ;

	// var elements = document.querySelectorAll('.exp_Card');
	// var windowHeight = window.innerHeight;
	// var scrollPosition = window.scrollY;

	// elements.forEach(function(element)
	// {
	// 	var elementTop = element.getBoundingClientRect().top + scrollPosition;
	// 	var elementBottom = element.getBoundingClientRect().bottom + scrollPosition;

	// 	if (elementTop <= (scrollPosition + windowHeight) && elementBottom >= (scrollPosition + windowHeight / 2))
	// 		element.classList.add('hover-effect');
	// 	else
	// 		element.classList.remove('hover-effect');
	// });
});

