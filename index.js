const recipientNameElement = document.getElementById('recipient-name');
const amountElement = document.getElementById('amount');
const payButton = document.getElementById('pay-button');
const paymentStatusElement = document.getElementById('payment-status');

function simulatePayment(recipient, amount) {
    return new Promise((resolve, reject) => {
        const success = Math.random() > 0.5;
        setTimeout(() => {
            if (success) {
                resolve({ message: "Payment successful!" });
            } else {
                reject({ message: "Payment failed!" });
            }
        }, 2000);
    });
}

function updateUI(state, message) {
    paymentStatusElement.textContent = message;
    paymentStatusElement.classList.remove('processing', 'success', 'failure');
    paymentStatusElement.classList.add(state);
    paymentStatusElement.style.display = 'block';
}

payButton.addEventListener('click', () => {
    const recipient = "Suraj Prasar";
    const amount = 100000000000;

    recipientNameElement.textContent = recipient;
    amountElement.textContent = `₹${amount}`;


    updateUI('processing', "Processing...");

    simulatePayment(recipient, amount)
        .then(response => {
            updateUI('success', response.message);
        })
        .catch(error => {
            updateUI('failure', error.message);
        });
});
