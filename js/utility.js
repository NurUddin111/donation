let totalBalance = Number(document.getElementById('total-balance').innerText);
let totalDonationForNoakhali = Number(document.getElementById('noakhali-total-donation').innerText);
let totalDonationForFeni = Number(document.getElementById('feni-total-donation').innerText);
let totalDonationForQuotaMovementInjured = Number(document.getElementById('quota-movement-total-donation').innerText);

function donationCounterNoakhali(balance, donation) {
    let donationForNoakhali = Number(document.getElementById("noakhali-donation-amount").value);
    if (donationForNoakhali == '' || donationForNoakhali <= 0) {
        return alert('Please enter a valid amount');
    }
    donation = donation + donationForNoakhali;
    balance = balance - donationForNoakhali;
    if (balance < 0) {
        return alert('Insufficient Balance.');
    }
    document.getElementById('noakhali-total-donation').innerText = donation;
    document.getElementById('total-balance').innerText = balance;
    totalDonationForNoakhali = donation;
    document.getElementById("noakhali-donation-amount").value = '';
    totalBalance = balance;
    my_modal_5.showModal()
}

function donationCounterFeni(balance, donation) {
    let donationForFeni = Number(document.getElementById("feni-donation-amount").value);
    if (donationForFeni == '') {
        return alert('Please enter a amount');
    }
    donation = donation + donationForFeni;
    balance = balance - donationForFeni;
    if (balance < 0) {
        return alert('Insufficient Balance.');
    }
    document.getElementById('feni-total-donation').innerText = donation;
    document.getElementById('total-balance').innerText = balance;
    totalDonationForFeni = donation;
    document.getElementById("feni-donation-amount").value = '';
    totalBalance = balance;
    my_modal_5.showModal()
}

function donationCounterQuota(balance, donation) {
    let donationForQuotaMovementInjured = Number(document.getElementById("donation-amount-for-quota-movement-injured").value);
    if (donationForQuotaMovementInjured == '') {
        return alert('Please enter a amount');
    }
    donation = donation + donationForQuotaMovementInjured;
    balance = balance - donationForQuotaMovementInjured;
    if (balance < 0) {
        return alert('Insufficient Balance.');
    }
    document.getElementById('quota-movement-total-donation').innerText = donation;
    document.getElementById('total-balance').innerText = balance;
    totalDonationForQuotaMovementInjured = donation;
    document.getElementById("donation-amount-for-quota-movement-injured").value = '';
    totalBalance = balance;
    my_modal_5.showModal()
}

