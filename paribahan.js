function handleBuyTicket() {
    const paribahanSection = document.getElementById('paribahan-section');
    paribahanSection.scrollIntoView({ behavior: "smooth" });

}

document.addEventListener('click', handleButtonClick);

function handleButtonClick() {
    const newButton = document.getElementById('A1');

    const seatsCount = document.getElementById('seats-count');
    const updateSeatCount = seatsCount.innerText;
    const newSeatValue = parseInt(updateSeatCount) + 1;
    seatsCount.innerText = newSeatValue;

    const totalSeats=document.getElementById('total-seats');
    const TotalSeatValue=totalSeats.innerText;
    const totalNewSeat=parseInt(TotalSeatValue)-1;
     totalSeats.innerText =totalNewSeat;


    const changeBgColor = newButton.style.background = 'red';
    const newValue = newButton.innerText;

    const sellSeatDetails = document.getElementById('sell-seat-details')
    const setSellSeat = `
<div class='flex justify-around'>
<h1>A1</h1>
<h1>Economic</h1>
<h1>550</h1>
</div>
`;
    sellSeatDetails.innerHTML = setSellSeat;

}