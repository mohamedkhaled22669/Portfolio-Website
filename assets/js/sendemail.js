(function() {
    // https://dashboard.emailjs.com/admin/account
    emailjs.init('CfKcPNHIWmYINVU6N');
})();
window.onload = function() {
    document.getElementById('contact-form').addEventListener('submit', function(event) {
        event.preventDefault();
        // generate a five digit number for the contact_number variable
        this.contact_number.value = Math.random() * 100000 | 0;
        // these IDs from the previous steps
        emailjs.sendForm('service_017og9m', 'template_4snc18o', this)
        .then(function() {
            document.getElementById('contact-form').querySelector(".success").style.display = "inline-block";
                console.log('SUCCESS!');
            }, function(error) {
                document.getElementById('contact-form').querySelector(".failed").style.display = "inline-block";
                console.log('FAILED...', error);
            });
    });
}