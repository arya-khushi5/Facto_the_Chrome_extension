async function fetchData(){
	const url = 'https://fun-facts1.p.rapidapi.com/api/fun-facts';
	const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'YOUR_KEY',
		'X-RapidAPI-Host': 'YOUR HOST'
	}
};

try {
	const response = await fetch(url, options);
	
	const data = await response.json();
    const randomFact = data.fact;
	const factContainer = document.getElementById('fact_e');
	factContainer.innerHTML = `<p>${randomFact}</p>`;
} catch (error) {
	console.error(error);
	}
}
fetchData();


