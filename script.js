

const batch = {
  name: "Морс",
  volume: 80,
  status: "Готово"
};
const batch2 = {
  name: "Тоник",
  volume: 50,
  status: "В работе"
};
const batch3 = {
  name: "Лимонад",
  volume: 120,
  status: "В работе"
};

let batches = [batch, batch2, batch3];

const savedBatches = localStorage.getItem("batches");
console.log(savedBatches);

if (savedBatches) {
  batches = JSON.parse(savedBatches)
}


function saveBatches (items) {
  localStorage.setItem("batches", JSON.stringify(items));
}

function calculateTotalVolume(items) {
  let totalVolume = 0;

  for (let i = 0; i < items.length; i++) {
  totalVolume += items[i].volume;
}

  return totalVolume;
}


function getBatchesByStatus(items, status) {
  
  const workingBatches = [];

  for (let i = 0; i < items.length; i++) {
    if (items[i].status === status) {
      workingBatches.push(items[i]);
    }
  }

  return workingBatches;
}

const tableBody = document.querySelector(".main_table-form_body");

function renderBatches(items) {
  tableBody.innerHTML = "";
  for (let i = 0; i < items.length; i++) {
    const row = document.createElement("tr");

    const nameCell = document.createElement("td");
    nameCell.textContent = items[i].name;

    const volumeCell = document.createElement("td");
    volumeCell.textContent = items[i].volume;

    const statusCell = document.createElement("td");
    statusCell.textContent = items[i].status;

    const actionsCell = document.createElement("td");

    const deleteButton = document.createElement("button");
    deleteButton.type = "button";
    deleteButton.textContent = "Удалить";

    actionsCell.append(deleteButton);

    deleteButton.addEventListener("click", function () {
      const originalIndex = batches.indexOf(items[i]);
      batches.splice(originalIndex, 1);

      saveBatches(batches);

      if (statusFilter.value === "Все") {
        renderBatches(batches);
      } else {
        renderBatches(getBatchesByStatus(batches, statusFilter.value));
      }

      console.log(calculateTotalVolume(batches));
    });
    

    row.append(nameCell, volumeCell, statusCell, actionsCell);

    tableBody.append(row);
  }
}

renderBatches(batches);

const statusFilter = document.querySelector("#status_filter");

statusFilter.addEventListener("change", function () {
  if (statusFilter.value === "Все") {
    renderBatches(batches);
  } else {
    renderBatches(getBatchesByStatus(batches, statusFilter.value));
  }
})

const form = document.querySelector(".main_form-magazine");
const partyNameInput = document.querySelector("#party_name");
const partySizeInput = document.querySelector("#party_size");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const name = partyNameInput.value.trim();
  const volume = Number(partySizeInput.value);

  if (name === "" || volume <= 0 || Number.isNaN(volume)) {
    console.log("Некорректные данные");
    return;
  }

  const newBatch = {
    name: name,
    volume: volume,
    status: "В работе"
  };

  batches.push(newBatch);


  saveBatches(batches);

  renderBatches(batches);
  form.reset();


});
