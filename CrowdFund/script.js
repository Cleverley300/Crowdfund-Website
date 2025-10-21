function openModal() {
    document.getElementById("donateModal").style.display = "flex";
}

 function closeModal() {
    document.getElementById("donateModal").style.display = "none";
}

function donate() {
    const amountInput = document.getElementById("donationAmount");
    let amount = parseFloat(amountInput.value);

    if (isNaN(amount) || amount <= 0) {
        alert("Please enter a valid amount");
         return;
    }

    const current = 4500;
    const goal = 10000;
    let newAmount = current + amount;

    if (newAmount > goal) newAmount = goal;

    let percent = (newAmount / goal) * 100;
    document.getElementById("progressBar").style.width = percent + "%";

    alert("Thank you for your donation of $" + amount.toFixed(2) + "!");
    closeModal();
}
