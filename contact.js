function submitContactForm(event) {
        event.preventDefault(); 

        // data
        var formData = {
            name: document.getElementById('name').value,
            email: document.getElementById('email').value,
            message: document.getElementById('message').value
        };

        if (formData.name == '' || formData.email == '' || formData.message =='') {
            alert("Please fill all details!");
        }
        else{  alert("Form submitted successfully!");}
      
    }

    document.getElementById('contactForm').addEventListener('submit', submitContactForm);

