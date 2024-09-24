

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


            // Clears the input field
            document.getElementById('input-donation-amount').value ='';

                // Add to History
                const currentDateTime = new Date().toLocaleString();
                const div  = document.createElement('div');
                div.classList.add('rounded-2xl','shadow','border-[rgba(17,17,17,0.3)]','p-6','mb-5','border-[0.1px]');
                div.innerHTML =  `
                    <p class="font-bold mb-4 text-lg lg:text-xl">${donationAmount} Taka is Donated for famine-2024 at Noakhali, Bangladesh</p>
                    <p class="text-stone-500 text-[16px]">Date: ${currentDateTime} GMT +0600 (Bangladesh Standard Time)</p>
            `;
            document.getElementById('historysection').appendChild(div);

            // Show the modal 
            const modal = document.getElementById('donation-modal');
            modal.classList.remove('hidden'); 

            // listener to close the modal
            document.getElementById('close-confirmation').addEventListener('click', function () {
                modal.classList.add('hidden');  
            });
        }
    }
    else {
        alert('Please Enter a Integer number and try again');
    }
});






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
              
            // Clears the input field
            document.getElementById('input-donation-amount1').value ='';

             // Add to History
             const currentDateTime = new Date().toLocaleString();
             const div  = document.createElement('div');
             div.classList.add('rounded-2xl','shadow','border-[rgba(17,17,17,0.3)]','p-6','mb-5','border-[0.1px]');
             div.innerHTML =  `
                 <p class="font-bold mb-4 text-lg lg:text-xl">${donationAmount1} Taka is Donated for Flood Relief in Feni,Bangladesh</p>
                 <p class="text-stone-500 text-[16px]">Date: ${currentDateTime} GMT +0600 (Bangladesh Standard Time)</p>
         `;
         document.getElementById('historysection').appendChild(div);


            // Show the modal 
            const modal = document.getElementById('donation-modal');
            modal.classList.remove('hidden'); 

            // listener to close the modal
            document.getElementById('close-confirmation').addEventListener('click', function () {
                modal.classList.add('hidden');  
            });
        }
    }
    else {
        alert('Please Enter a Integer number and try again');
    }
});


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
   
            // Clears the input field
            document.getElementById('input-donation-amount2').value ='';  
            
             // Add to History
             const currentDateTime = new Date().toLocaleString();
             const div  = document.createElement('div');
             div.classList.add('rounded-2xl','shadow','border-[rgba(17,17,17,0.3)]','p-6','mb-5','border-[0.1px]');
             div.innerHTML =  `
                 <p class="font-bold mb-4 text-lg lg:text-xl">${donationAmount2} Taka is Donated for Aid for Injured in the Quota Movement, Bangladesh</p>
                 <p class="text-stone-500 text-[16px]">Date: ${currentDateTime} GMT +0600 (Bangladesh Standard Time)</p>
         `;
         document.getElementById('historysection').appendChild(div);


            // Show the modal 
            const modal = document.getElementById('donation-modal');
            modal.classList.remove('hidden'); 

            // listener to close the modal
            document.getElementById('close-confirmation').addEventListener('click', function () {
                modal.classList.add('hidden');  
            });
        }
    }
    else {
        alert('Please Enter a Integer number and try again');
    }
});


// Donation Button Click and History Remove

document.getElementById('donation-main-btn').addEventListener('click', function () {
    document.getElementById('history-btn').style.background = 'white';
    document.getElementById('donation-main-btn').style.background = 'rgb(180, 244, 97)';
    console.log('clicked')
    document.getElementById('NoakhaliSection').classList.remove('hidden');
    document.getElementById('feniSection').classList.remove('hidden');
    document.getElementById('cotaSection').classList.remove('hidden');
    document.getElementById('donation-main-btn').classList.remove('border-[rgba(17,17,17,0.3)]');
    document.getElementById('history-btn').classList.add('border-[rgba(17,17,17,0.3)]');

    document.getElementById('historysection').classList.add('hidden');
});

// History Button Click and Donation Remove
document.getElementById('history-btn').addEventListener('click', function () {
    document.getElementById('donation-main-btn').style.background = 'white';
    document.getElementById('history-btn').style.background = 'rgb(180, 244, 97)';
    document.getElementById('NoakhaliSection').classList.add('hidden');
    document.getElementById('feniSection').classList.add('hidden');
    document.getElementById('cotaSection').classList.add('hidden');
    document.getElementById('historysection').classList.remove('hidden');
    document.getElementById('donation-main-btn').classList.add('border-[rgba(17,17,17,0.3)]');
    document.getElementById('history-btn').classList.remove('border-[rgba(17,17,17,0.3)]');
});