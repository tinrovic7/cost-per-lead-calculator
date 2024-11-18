document.getElementById('calculator-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const organicSpend = parseFloat(document.getElementById('organic-spend').value) || 0;
    const adsSpend = parseFloat(document.getElementById('ads-spend').value) || 0;
    const leads = parseInt(document.getElementById('leads').value);

    if (leads > 0) {
        const totalSpend = organicSpend + adsSpend;
        const costPerLead = totalSpend / leads;
        document.getElementById('result').textContent = `Your Cost Per Acquisition is $${costPerLead.toFixed(2)}`;
    } else {
        document.getElementById('result').textContent = 'Please enter a valid number of leads.';
    }
});
