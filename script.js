if (window.location.href == "http://127.0.0.1:5500/tickets.html") {

function incrementGuest(inputId) {
  const input = document.getElementById(inputId);
  input.value = parseInt(input.value) + 1;
}

function decrementGuest(inputId) {
  const input = document.getElementById(inputId);
  if (parseInt(input.value) > 0) {
      input.value = parseInt(input.value) - 1;
  }
}

// Function to calculate total cost and update summary table
document.getElementById("calculatBtn").addEventListener("click", function () {
  const date = document.getElementById("input").value;
  const duration = document.getElementById("duration").value;
  const ticketTypeSr = document.getElementById("ticket").value;
  const adultSr = parseInt(document.getElementById("adultSr").value);
  const infantSr = parseInt(document.getElementById("infantSr").value);
  const childrenSr = parseInt(document.getElementById("childrenSr").value);
  const ticketTypeFr = document.getElementById("ticket").value;
  const adultFr = parseInt(document.getElementById("adultFr").value);
  const infantFr = parseInt(document.getElementById("infantFr").value);
  const childrenFr = parseInt(document.getElementById("childrenFr").value);

  const peakHours = ["10:00-11:00 (peak)", "12:00-01:00 (peak)", "02:00-03:00 (peak)", "03:00-04:00 (peak)", "05:00-06:00 (peak)"];
  let totalPayable = 0;

  if (peakHours.includes(duration)) {
      if (ticketTypeFr === "Foreign") {
          totalPayable += (adultFr * 13) + (childrenFr * 8);
      } else {
          totalPayable += (adultSr * 6) + (childrenSr * 3);
      }
  } else {
      if (ticketTypeFr === "Foreign") {
          totalPayable += (adultFr * 10) + (childrenFr * 5);
      } else {
          totalPayable += (adultSr * 4) + (childrenSr * 2);
      }
  }

  
  // Calculate duration in hours (assuming each time slot is 1 hour)
  const durationParts = duration.split("-");
  const startTime = parseInt(durationParts[0]);
  const endTime = parseInt(durationParts[1]);
  const calculatedDuration = endTime - startTime;

  document.getElementById("summary-date").textContent = date;
  document.getElementById("summary-time").textContent = duration;
  document.getElementById("summary-duration").textContent = calculatedDuration + " hour";
  document.getElementById("summary-tickets").textContent = `
      ${ticketTypeSr} Adults: ${adultSr}, Infants: ${infantSr}, Children: ${childrenSr}
      ${ticketTypeFr} Adults: ${adultFr}, Infants: ${infantFr}, Children: ${childrenFr}`;
  document.getElementById("summary-total").textContent = `$${totalPayable}`;
});


}