async function fetchData(){
	const url = 'https://fun-facts1.p.rapidapi.com/api/fun-facts';
	const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '1937e3e54amsh8813ae924a1df86p137464jsn5d3080390920',
		'X-RapidAPI-Host': 'fun-facts1.p.rapidapi.com'
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


