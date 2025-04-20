// Function to calculate the total cost of petrol
function calculateTotal() {
    // Get the input values
    const costPerLiter = parseFloat(document.getElementById("cost").value);
    const liters = parseFloat(document.getElementById("liters").value);
  
    // Calculate the total cost
    const total = costPerLiter * liters;
  
    // Format and display the result
    document.getElementById("result").textContent = `Total cost: £${total.toFixed(2)}`;
  }
  