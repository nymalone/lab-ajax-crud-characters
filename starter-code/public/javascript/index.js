const charactersAPI = new APIHandler('http://localhost:8000/characters');

window.addEventListener('load', () => {
  document.getElementById('fetch-all').addEventListener('click', function (event) {
    charactersAPI.getFullList()
    .then(res => console.log(res.data))
    console.log(charactersAPI.getFullList())
  });

//-----------------//---------------//-----------------//---------------//-----------------//---------------//-----------------//---------------

  document.getElementById('fetch-one').addEventListener('click', function (event) {

  });

//-----------------//---------------//-----------------//---------------//-----------------//---------------//-----------------//---------------

  document.getElementById('delete-one').addEventListener('click', function (event) {

  });

//-----------------//---------------//-----------------//---------------//-----------------//---------------//-----------------//---------------

  document.getElementById('edit-character-form').addEventListener('submit', function (event) {
  event.preventDefault();
  
  const theId = document.getElementsByName('chr-id')[0].value

  const updatedCharacter = {}
  updatedCharacter.name = document.getElementsByName('name')[0].value
  updatedCharacter.occupation = document.getElementsByName('occupation')[0].value
  updatedCharacter.weapon = document.getElementsByName('weapon')[0].value
  updatedCharacter.cartoon = document.getElementsByName('cartoon')[0].checked

  charactersAPI
  .updateOneRegister(updatedCharacter)
  .then(response => response.data)
  .catch(error => {
    document.getElementById('edit-character-form').style.display="none";
    if(error.response.status === 404){
    const errorMessage = `Character nof found: ${theId}.`
    const errDiv = document.createElement("div");
    errDiv.setAttribute("id", "error");
    errDiv.innerHTML = errorMessage;
    document.body.appendChild(errDiv);
  }
});

//-----------------//---------------//-----------------//---------------//-----------------//---------------//-----------------//---------------
  document.getElementById('new-character-form').addEventListener('submit', function (event) {
  event.preventDefault();
  
  const newCharacter = {}
  newCharacter.name = document.getElementsByName('name')[0].value
  newCharacter.occupation = document.getElementsByName('occupation')[0].value
  newCharacter.weapon = document.getElementsByName('weapon')[0].value
  newCharacter.cartoon = document.getElementsByName('cartoon')[0].checked
  
  console.log(newCharacter)
  
  charactersAPI
  .createOneRegister(newCharacter)
  .then(response => response.data)
  .catch(err => console.log(err))
    });
  });
});
