const forms = (formsSelector, state) => {
    
    const forms = document.querySelectorAll(formsSelector);

    const message = {
        loading: 'loading...',
        success: "Thank you! We'll call you",
        fail: 'Something goes wrong, please try again'
    }

    forms.forEach((form => {
        
        const messageContainer = document.createElement('p');
        messageContainer.classList.add('message');
        form.append(messageContainer);

        form.addEventListener('submit', (e) => {
            e.preventDefault();
            
            const data = {};
            const formData = new FormData(form);
            if(form.getAttribute('data-anime') === 'end') {
                for (let key in state) {
                    formData.append(key, state[key]);
                }
            }
            formData.forEach((value, key) => data[key] = value);
            console.log(data);
            
            const sendData = async (url, data) => {
                messageContainer.textContent = message.loading;
                const response = await fetch(url, {
                    method: 'POST',
                    headers: {
                      'Content-Type': 'application/json;charset=utf-8'
                    },
                    body: JSON.stringify(data)
                  })

                .then (() => {
                    messageContainer.textContent = message.success;
                })

                .catch(() => {
                    messageContainer.textContent = message.fail;
                })

                .finally(() => {
                    const inputs = document.querySelectorAll('input');
                    inputs.forEach((input) => {
                        input.value = '';
                    })

                    setTimeout(() => {
                        messageContainer.textContent  = '';
                    }, 5000);
                })
            };

            sendData('https://server-for-training.onrender.com/api/data', data);
        });
    }));
};

export default forms;