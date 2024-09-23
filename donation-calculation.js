

// Noakhali Donation
document.getElementById('donate-btn1').addEventListener('click', function () {

    const inputDonation = getInputValue('input-donation-amount');
    const donationIncrement1 = getInnerText('donation-incriment1');
    const mainAmount = getInnerText('nav-amount');

    if (!isNaN(inputDonation) && inputDonation > 0) {
        const donationAmount = donationIncrement1 + inputDonation;

        const mainAmountDecrees = mainAmount - inputDonation;
        if (mainAmountDecrees < 0) {
            alert('Insufficient balance. Please enter a smaller donation amount.');
        } else {
            document.getElementById('donation-incriment1').innerText = donationAmount;
            document.getElementById('nav-amount').innerText = mainAmountDecrees;

            // Update the money first then shows alert otherwise without setTimeout function it shows alert first
            setTimeout(function() {
                alert('Congratulations! You have donated successfully.');
            }, 100);
        }
    }
    else {
        alert('Please Enter a Integer number and try again');
    }
})


// Feni Donation
document.getElementById('donate-btn2').addEventListener('click', function () {

    const inputDonation1 = getInputValue('input-donation-amount1');
    const donationIncrement2 = getInnerText('donation-incriment2');
    const mainAmount1 = getInnerText('nav-amount');

    if (!isNaN(inputDonation1) && inputDonation1 > 0) {
        const donationAmount1 = donationIncrement2 + inputDonation1;

        const mainAmountDecrees1 = mainAmount1 - inputDonation1;
        if (mainAmountDecrees1 < 0) {
            alert('Insufficient balance. Please enter a smaller donation amount.');
        } else {
            document.getElementById('donation-incriment2').innerText = donationAmount1;
            document.getElementById('nav-amount').innerText = mainAmountDecrees1;

            // Update the money first then shows alert otherwise without setTimeout function it shows alert first
            setTimeout(function() {
                alert('Congratulations! You have donated successfully.');
            }, 100);
        }
    }
    else {
        alert('Please Enter a Integer number and try again');
    }
})


// Quota Movement Donation

document.getElementById('donate-btn3').addEventListener('click', function () {

    const inputDonation2 = getInputValue('input-donation-amount2');
    const donationIncrement3 = getInnerText('donation-incriment3');
    const mainAmount2 = getInnerText('nav-amount');

    if (!isNaN(inputDonation2) && inputDonation2 > 0) {
        const donationAmount2 = donationIncrement3 + inputDonation2;

        const mainAmountDecrees2 = mainAmount2 - inputDonation2;
        if (mainAmountDecrees2 < 0) {
            alert('Insufficient balance. Please enter a smaller donation amount.');
        } else {
            document.getElementById('donation-incriment3').innerText = donationAmount2;
            document.getElementById('nav-amount').innerText = mainAmountDecrees2;

            // Update the money first then shows alert otherwise without setTimeout function it shows alert first
            setTimeout(function() {
                alert('Congratulations! You have donated successfully.');
            }, 100);
        }
    }
    else {
        alert('Please Enter a Integer number and try again');
    }
})