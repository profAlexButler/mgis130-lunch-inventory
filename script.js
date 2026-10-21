// Stock board: what's left in the kitchen, so nobody gets surprised by a sold-out item.

// ---------- DATA: where the information comes from ----------

// The shift lead enters the morning count; the register adds what's sold.
const STOCK_URL = "data/stock.json";

async function loadStock() {
  const response = await fetch(STOCK_URL, { cache: "no-store" });
  return response.json();
}

// ---------- PROCESSING: the rules ----------

// Left = counted at open minus sold so far (never below zero)
function itemsLeft(row) {
  return Math.max(row.countedAtOpen - row.soldSoFar, 0);
}

// Add the numbers the screen needs to each row
function addStatus(stock) {
  return stock.map(function (row) {
    const left = itemsLeft(row);
    return {
      item: row.item,
      counted: row.countedAtOpen,
      left: left,
      soldOut: left === 0
    };
  });
}

// ---------- PRESENTATION: what people see ----------

function showStock(rows) {
  const list = document.getElementById("stock-list");
  list.innerHTML = "";
  rows.forEach(function (row) {
    const li = document.createElement("li");
    if (row.soldOut) li.className = "soldout";
    li.innerHTML = "<span>" + row.item + "</span>" +
      "<span><span class='left'>" + row.left + "</span><span class='of'>of " + row.counted + "</span></span>";
    list.appendChild(li);
  });
}

function showError() {
  document.getElementById("message").textContent = "Can't load the stock count right now.";
}

// ---------- RUN IT ----------

async function start() {
  try {
    const stock = await loadStock();
    showStock(addStatus(stock));
  } catch (err) {
    showError();
  }
}

start();
