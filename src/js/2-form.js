const checkLocalStorage = () => {
  const storedData = JSON.parse(localStorage.getItem('feedback-form-state'));
  if (storedData) {
    formData = { ...formData, ...storedData };
    email.value = formData.email;
    message.value = formData.message;
  }
};

const saveToLocalStorage = () => {
  localStorage.setItem('feedback-form-state', JSON.stringify(formData));
};

const handleInputChange = event => {
  const { name, value } = event.target;
  formData = { ...formData, [name]: value.trim() };
  saveToLocalStorage();
};

const handleSubmit = event => {
  event.preventDefault();

  const { email, message } = formData;

  if (!email || !message) {
    alert('Fill please all fields');
    return;
  }

  console.log(formData);

  formData = { email: '', message: '' };
  localStorage.removeItem('feedback-form-state');
  form.reset();
};

form.addEventListener('input', handleInputChange);
form.addEventListener('submit', handleSubmit);

checkLocalStorage();
