const allTicket = document.getElementsByClassName("seat");
let count = 0;
for (const ticket of allTicket) {
  ticket.addEventListener("click", function (event) {
    // seat number disable
    const seatCount = parseInt(document.getElementById("cart-count").innerText);
    if (seatCount >= 4) {
      alert("You can buy maximum four tickets!!!");
      return;
    }
    // seat number update
    count++;
    document.getElementById("cart-count").innerText = count;
    const totalTickets = document.getElementById("all-seat").innerText;
    const convertTotalTickets = parseInt(totalTickets);
    document.getElementById("all-seat").innerText = convertTotalTickets - 1;
    // add cart part
    const seatNumber = event.target.innerText;
    const selectedItems = document.getElementById("selected-items");
    const p = document.createElement("p");
    p.innerText = `${seatNumber} -------------------- Economy  -------------- 550 Tk.`;
    event.target.style.backgroundColor = "#1dd100";
    event.target.setAttribute("disabled", true);
    selectedItems.appendChild(p);
    // total amount part
    const perTicketPrice = 550;
    const totalAmountStr = document.getElementById("total-price").innerText;
    const totalAmountNum = parseInt(totalAmountStr);
    const totalPrice = totalAmountNum + perTicketPrice;
    document.getElementById("total-price").innerText = totalPrice;
    // grand total
    const grandTotalAmountStr =
      document.getElementById("grand-total").innerText;
    const grandTotalAmountNum = parseInt(grandTotalAmountStr);
    const grandTotalPrice = grandTotalAmountNum + perTicketPrice;
    document.getElementById("grand-total").innerText = grandTotalPrice;
  });
}
// coupon part
const btn = document.getElementById("apply-btn");
btn.addEventListener("click", function () {
  const totalPrice = parseInt(document.getElementById("grand-total").innerText);
  const couponCode = document.getElementById("input-field").value;
  if (couponCode == "NEW15") {
    const netAmount = totalPrice - totalPrice * 0.15;
    document.getElementById("grand-total").innerText = netAmount;
    const couponSection = document.getElementById("apply-part");
    couponSection.classList.add("hidden");
    return;
  } else if (couponCode == "Couple 20") {
    const netAmount = totalPrice - totalPrice * 0.2;
    document.getElementById("grand-total").innerText = netAmount;
    const couponSection = document.getElementById("apply-part");
    couponSection.classList.add("hidden");
    return;
  } else {
    alert("Invalid Coupon");
    document.getElementById("input-field").value = "";
  }
});
