// function of show and hide 
function showSectionById(id) {
    document.getElementById('donation-list').classList.add('hidden');
    document.getElementById('history-list').classList.add('hidden');
    document.getElementById(id).classList.remove('hidden');
}
// -------------------------------------------

// add and remove background-color of button//
const buttonDonation = document.getElementById('donation-btn');
buttonDonation.addEventListener('click', function () {
    showSectionById('donation-list');
    buttonDonation.classList.add('bg-green');
    buttonHistory.classList.remove('bg-green');
})
const buttonHistory = document.getElementById('history-btn');
buttonHistory.addEventListener('click', function () {
    showSectionById('history-list');
    buttonHistory.classList.add('bg-green');
    buttonDonation.classList.remove('bg-green');
})
// toggle blog //
document.getElementById('blog-info').addEventListener('click', function (event) {
    event.preventDefault();
    console.log('blog-info')
    window.location.href = './blog.html';
})

// -------------------------------------------

const popup1 = document.getElementById('popup-1');
const popup2 = document.getElementById('popup-2');
const popup3 = document.getElementById('popup-3');

    
// -------------------------------------------

// noakhali donation//
document.getElementById('btn-noa').addEventListener('click', function (event) {
    event.preventDefault();
    const inputNoakhali = getInputAmount('input-amount-noa');
    const totalNoa = getTextValue('total-amount-noa');
    const availableAmount = getTextValue('available-balance');
    if (isNaN(inputNoakhali) || inputNoakhali < 0 || inputNoakhali > availableAmount || availableAmount <= 0) {
        document.getElementById('my_modal_1').close();
        return alert('Please provide valid data');
    }
    const newTotalNoa = totalNoa + inputNoakhali;
    document.getElementById('total-amount-noa').innerText = newTotalNoa;


    // add to history //
    const currentDate = new Date();
    const dateString = currentDate.toString();
    const div = document.createElement('div');
    div.innerHTML = `<div class="border-2 border-gray w-8/12 mx-auto p-8 rounded-lg mb-10 space-y-2">
    <p class="text-lg font-bold">${inputNoakhali} Taka is Donated for Noakhali, Bangladesh</p>
    <p class="text-sm text-gray-500">Date: ${dateString}</p>
    </div>`;
    document.getElementById('history-list').appendChild(div);
    const newAvailableAmount = availableAmount - inputNoakhali;
    document.getElementById('available-balance').innerText = newAvailableAmount;
    document.getElementById('input-amount-noa').value = "";
})

// -------------------------------------------

// feni donation //
document.getElementById('btn-feni').addEventListener('click', function (event) {
    event.preventDefault();
    const inputFeni = getInputAmount('input-amount-feni');
    const totalFeni = getTextValue('total-amount-feni');
    const availableAmount = getTextValue('available-balance');
    if (isNaN(inputFeni) || inputFeni < 0 || inputFeni > availableAmount || availableAmount <= 0) {
        document.getElementById('my_modal_2').close();
        return alert('Please provide valid data');
    }
    const newTotalFeni = totalFeni + inputFeni;
    document.getElementById('total-amount-feni').innerText = newTotalFeni;
   
    // add to history //
    const currentDate = new Date();
    const dateString = currentDate.toString();
    const div = document.createElement('div');
    div.innerHTML = `<div class="border-2 border-gray w-8/12 mx-auto p-8 rounded-lg mb-10 space-y-2">
    <p class="text-lg font-bold">${inputFeni} Taka is Donated for Feni, Bangladesh</p>
    <p class="text-sm text-gray-500">Date: ${dateString}</p>
    </div>`;
    document.getElementById('history-list').appendChild(div);
    const newAvailableAmount = availableAmount - inputFeni;
    document.getElementById('available-balance').innerText = newAvailableAmount;
    console.log('clear')
    document.getElementById('input-amount-feni').value = "";

})


// -------------------------------------------

// quota movement donation //
document.getElementById('btn-quota').addEventListener('click', function (event) {
    event.preventDefault();
    const inputQuota = getInputAmount('input-amount-quota');
    const totalQuota = getTextValue('total-amount-quota');
    const availableAmount = getTextValue('available-balance');
    if (isNaN(inputQuota) || inputQuota < 0 || inputQuota > availableAmount || availableAmount <= 0) {
        document.getElementById('my_modal_3').close();
        return alert('Please provide valid data');
    }
    const newTotalQuota = totalQuota + inputQuota;
    document.getElementById('total-amount-quota').innerText = newTotalQuota;
    
    // add to  history //
    const currentDate = new Date();
    const dateString = currentDate.toString();
    const div = document.createElement('div');
    div.innerHTML = `<div class="border-2 border-gray w-8/12 mx-auto p-8 rounded-lg mb-10 space-y-2">
    <p class="text-lg font-bold">${inputQuota} Taka is Donated for injured brave individuals in Quota Movement, Bangladesh</p>
    <p class="text-sm text-gray-500">Date: ${dateString}</p>
    </div>`;
    document.getElementById('history-list').appendChild(div);
    const newAvailableAmount = availableAmount - inputQuota;
    document.getElementById('available-balance').innerText = newAvailableAmount;
    document.getElementById('input-amount-quota').value = "";

})


// -------------------------------------------

// modal handling //

popup1.addEventListener('click', function () {
    const modal = document.getElementById('my_modal_1');
    modal.close();
});

popup2.addEventListener('click', function () {
    const modal = document.getElementById('my_modal_2');
    modal.close();
})

popup3.addEventListener('click', function () {
    const modal = document.getElementById('my_modal_3');
    modal.close();
})