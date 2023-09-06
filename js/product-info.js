let localStorageValue = '50921';
const comentarios = document.getElementsByClassName('comment-section__comment-container')[0];
const commentList = document.querySelector('.comment-container__comment-list');
const btnEnviar = document.getElementById('enviar');

document.addEventListener('DOMContentLoaded', () => {
	// localStorageValue = localStorage.getItem("cardId");
	fetch(PRODUCT_INFO_COMMENTS_URL + localStorageValue + EXT_TYPE)
		.then((response) => response.json())
		.then((data) => {
			data.forEach((element) => {
				//Creación de elementos HTML
				let divCard = document.createElement('div');
				let divCardLoad = document.createElement('div');
				let divDescription = document.createElement('div');
				let pTitle = document.createElement('p');
				let pDescription = document.createElement('p');
				let image = document.createElement('img');
				//Atributos y clases
				image.src = '/img/gitlab.svg';
				pTitle.classList.add('comment-title');
				divCard.classList.add('cards');
				divCardLoad.classList.add('tarjeta_load');
				divDescription.classList.add('tarjeta_load_extreme_description');
				pTitle.innerHTML = element.user + ' ' + element.dateTime + ' ' + element.score;
				pDescription.innerHTML = element.description;
				//AppendChild's
				divDescription.appendChild(pTitle);
				divDescription.appendChild(pDescription);
				divCardLoad.appendChild(image);
				divCard.appendChild(divCardLoad);
				divCard.appendChild(divDescription);
				commentList.appendChild(divCard);
			});
		});
	btnEnviar.addEventListener('click', () => {
		agregarComentario();
	});
});

// AGREGAR COMENTARIOS //
function agregarComentario() {
	// nombre del user //
	let user = localStorage.getItem('email');
	let partesDelUser = user.split('@');
	let nombreUser = partesDelUser[0];

	// comentario del user //
	let comentario = document.getElementById('add-comment__input').value;

	// fecha y hora //
	let fechaHoraActual = new Date();

	// hora //
	let horaFormateada = fechaHoraActual.toLocaleString().split(', ');
	let hora = horaFormateada[1];
	// fecha //
	let dia = fechaHoraActual.getDay();
	let mes = fechaHoraActual.getMonth() + 1;
	if (mes <= 9) {
		mes = '0' + mes;
	}
	let anio = fechaHoraActual.getFullYear();
	let fecha = anio + '-' + mes + '-' + dia;

	// puntaje //
	let puntajes = Array.from(document.getElementsByName('star'));
	let puntaje = '';
	puntajes.forEach((element) => {
		if (element.checked) {
			puntaje = element.value;
		}
	});

	let divCard = document.createElement('div');
	let divCardLoad = document.createElement('div');
	let divTitle = document.createElement('div');
	let divDescription = document.createElement('div');
	let pTitle = document.createElement('p');
	let pDescription = document.createElement('p');
	let image = document.createElement('img');
	//Atributos y clases
	image.src = '/img/gitlab.svg';
	divCard.classList.add('cards');
	divCardLoad.classList.add('tarjeta_load');
	divTitle.classList.add('tarjeta_load_extreme_title');
	divDescription.classList.add('tarjeta_load_extreme_description');
	pTitle.innerHTML = nombreUser + ' ' + fecha + ' ' + hora + ' ' + ' ' + puntaje;
	pDescription.innerHTML = comentario;
	//AppendChild's
	divTitle.appendChild(pTitle);
	divDescription.appendChild(pDescription);
	divCardLoad.appendChild(image);
	divCard.appendChild(divCardLoad);
	divCard.appendChild(divTitle);
	divCard.appendChild(divDescription);
	commentList.appendChild(divCard);
}
