let totalBalance = Number(document.getElementById('total-balance').innerText);
let totalDonationForNoakhali = Number(document.getElementById('noakhali-total-donation').innerText);
let totalDonationForFeni = Number(document.getElementById('feni-total-donation').innerText);
let totalDonationForQuotaMovementInjured = Number(document.getElementById('quota-movement-total-donation').innerText);

function donationHistory(amountOfDonation, atWhere) {
    let allHistory = document.getElementById('history-section');
    let newDiv = document.createElement('div');
    newDiv.setAttribute("class", "border-slate-300 border-2 border-solid p-4 w-full rounded-lg space-y-5");
    let donationTitle = document.createElement('h1');
    donationTitle.setAttribute("class", "text-xl font-bold");
    donationTitle.innerText = amountOfDonation + atWhere;
    let donationTime = document.createElement('p');
    donationTime.setAttribute("class", "text-base");
    const currentTime = new Date().toString();
    donationTime.innerText = "Date : " + currentTime;
    newDiv.appendChild(donationTitle);
    newDiv.appendChild(donationTime);
    allHistory.appendChild(newDiv);
}

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
    const atNoakhali = " Taka is Donated for flood-relief at Noakhali, Bangladesh"
    donationHistory(donationForNoakhali, atNoakhali);
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
    const atFeni = " Taka is Donated for flood-relief at Feni, Bangladesh"
    donationHistory(donationForFeni, atFeni);
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
    const atQuotaMovement = " Taka is Donated for Aid for Injured in the Quota Movement, Bangladesh"
    donationHistory(donationForQuotaMovementInjured, atQuotaMovement);
    my_modal_5.showModal()
}

// Donation History 
function showDonationHistory() {
    document.getElementById('donation-section').classList.add("hidden");
    document.getElementById('btn-donate').classList.remove("bg-bgPrimary");
    document.getElementById('history-section').classList.remove("hidden");
    document.getElementById('btn-history').classList.add("bg-bgPrimary");
}

// Donation Category

function showDonationCategory() {
    document.getElementById('donation-section').classList.remove("hidden");
    document.getElementById('btn-donate').classList.add("bg-bgPrimary");
    document.getElementById('history-section').classList.add("hidden");
    document.getElementById('btn-history').classList.remove("bg-bgPrimary");
}

