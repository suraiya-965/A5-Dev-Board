let time = document.getElementById("date");

function updateDate() {
    const d = new Date();
    const weekday = d.toLocaleDateString('en-US', { weekday: 'short' }); 
    const month = d.toLocaleDateString('en-US', { month: 'long' });      
    const day = d.getDate();                                             
    const year = d.getFullYear();                                        

    time.innerHTML = `${weekday}, ${month} ${day} ${year}`;
}

updateDate(); 

function scheduleNextUpdate() {
    const now = new Date();
    const tomorrow = new Date(now);
    tomorrow.setHours(24, 0, 0, 0); 
    const timeUntilMidnight = tomorrow - now;

    setTimeout(() => {
        updateDate();         
        scheduleNextUpdate(); 
    }, timeUntilMidnight);
}

scheduleNextUpdate();
