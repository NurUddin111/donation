document.getElementById('donate-now-for-noakhali').addEventListener('click', function () {
    donationCounterNoakhali(totalBalance, totalDonationForNoakhali);
});

document.getElementById('donate-now-for-feni').addEventListener('click', function () {
    donationCounterFeni(totalBalance, totalDonationForFeni);
});

document.getElementById('donate-now-for-quota-movement-injured').addEventListener('click', function () {
    donationCounterQuota(totalBalance, totalDonationForQuotaMovementInjured);
});


document.getElementById('btn-history').addEventListener('click',function(){
    showDonationHistory();
})

document.getElementById('btn-donate').addEventListener('click',function(){
    showDonationCategory();
})