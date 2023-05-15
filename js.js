
const nameclient = document.getElementById('nameclient');
const nameplace = document.getElementById('nameplace');
const phone = document.getElementById('phone');
const when = document.getElementById('when');
const to = document.getElementById('to');
const submit = document.getElementsByClassName('form-contact')[0];

submit.addEventListener('submit',(e)=>{
    e.preventDefault();
    console.log("clicked");
})