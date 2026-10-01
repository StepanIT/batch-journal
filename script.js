

// const batch = {
//   name: "Морс",
//   volume: 80,
//   status: "Готово"
// };
// const batch2 = {
//   name: "Тоник",
//   volume: 50,
//   status: "В работе"
// };
// const batch3 = {
//   name: "Лимонад",
//   volume: 120,
//   status: "В работе"
// };

// let batches = [batch, batch2, batch3];

// const savedBatches = localStorage.getItem("batches");
// console.log(savedBatches);

// if (savedBatches) {
//   batches = JSON.parse(savedBatches)
// }


// function saveBatches (items) {
//   localStorage.setItem("batches", JSON.stringify(items));
// }

// function calculateTotalVolume(items) {
//   let totalVolume = 0;

//   for (let i = 0; i < items.length; i++) {
//   totalVolume += items[i].volume;
// }

//   return totalVolume;
// }


// function getBatchesByStatus(items, status) {
  
//   const workingBatches = [];

//   for (let i = 0; i < items.length; i++) {
//     if (items[i].status === status) {
//       workingBatches.push(items[i]);
//     }
//   }

//   return workingBatches;
// }

// const tableBody = document.querySelector(".main_table-form_body");

// function renderBatches(items) {
//   tableBody.innerHTML = "";
//   for (let i = 0; i < items.length; i++) {
//     const row = document.createElement("tr");

//     const nameCell = document.createElement("td");
//     nameCell.textContent = items[i].name;

//     const volumeCell = document.createElement("td");
//     volumeCell.textContent = items[i].volume;

//     const statusCell = document.createElement("td");
//     statusCell.textContent = items[i].status;

//     const actionsCell = document.createElement("td");

//     const deleteButton = document.createElement("button");
//     deleteButton.type = "button";
//     deleteButton.textContent = "Удалить";

//     actionsCell.append(deleteButton);

//     deleteButton.addEventListener("click", function () {
//       const originalIndex = batches.indexOf(items[i]);
//       batches.splice(originalIndex, 1);

//       saveBatches(batches);

//       if (statusFilter.value === "Все") {
//         renderBatches(batches);
//       } else {
//         renderBatches(getBatchesByStatus(batches, statusFilter.value));
//       }

//       console.log(calculateTotalVolume(batches));
//     });
    

//     row.append(nameCell, volumeCell, statusCell, actionsCell);

//     tableBody.append(row);
//   }
// }

// renderBatches(batches);

// const statusFilter = document.querySelector("#status_filter");

// statusFilter.addEventListener("change", function () {
//   if (statusFilter.value === "Все") {
//     renderBatches(batches);
//   } else {
//     renderBatches(getBatchesByStatus(batches, statusFilter.value));
//   }
// })

// const form = document.querySelector(".main_form-magazine");
// const partyNameInput = document.querySelector("#party_name");
// const partySizeInput = document.querySelector("#party_size");

// form.addEventListener("submit", function (e) {
//   e.preventDefault();

//   const name = partyNameInput.value.trim();
//   const volume = Number(partySizeInput.value);

//   if (name === "" || volume <= 0 || Number.isNaN(volume)) {
//     console.log("Некорректные данные");
//     return;
//   }

//   const newBatch = {
//     name: name,
//     volume: volume,
//     status: "В работе"
//   };

//   batches.push(newBatch);


//   saveBatches(batches);

//   renderBatches(batches);
//   form.reset();


// });

// function sortByVolumeAscending(items) {
//   items.sort(function (a,b) {
//     return a.volume - b.volume
//   })

//   return items;
// }

// function sortByVolumeDescending(items) {
//   items.sort(function (a,b) {
//     return b.volume - a.volume
//   })
//   return items;
// }

// const sortAscButton = document.querySelector("#sort_asc")
// const sortDescButton = document.querySelector("#sort_desc")

// sortAscButton.addEventListener("click", function() {
//   sortByVolumeAscending(batches);

//   if (statusFilter.value === "Все") {
//     renderBatches(batches);
//   } else {
//     renderBatches(getBatchesByStatus(batches, statusFilter.value));
//   }
// });

// sortDescButton.addEventListener("click", function() {
//   sortByVolumeDescending(batches);
//   if (statusFilter.value === "Все") {
//     renderBatches(batches);
//   } else {
//     renderBatches(getBatchesByStatus(batches, statusFilter.value));
//   }  
// });

// // const promise = new Promise(function (resolve, reject) {
// //   setTimeout(function () {
// //     reject("Ошибка загрузки");
// //   }, 2000);
// // });

// // async function showResult() {
// //   try {
// //     const result = await promise
// //     console.log(result);
// //   } catch (error) {
// //     console.log("Провал", error)
// //   }
// // }

// // showResult();

// // console.log("Программа продолжает работать");

// const loadStatus = document.querySelector("#load_status");
// const loadResult = document.querySelector("#load_result");
// const loadCompleted = document.querySelector("#load_completed");
// const reloadData = document.querySelector("#reload_data");

// async function loadData(id) {

//   loadStatus.textContent = "Загрузка...";
//   loadResult.textContent = "";
//   loadCompleted.textContent = "";

//   try {
//     const response = await fetch("https://jsonplaceholder.typicode.com/todos/" + id);
//     if (!response.ok) {
//       loadResult.textContent = "Ошибка HTTP: " + response.status;
//       return;
//     } 

//       const data = await response.json();
//       loadResult.textContent = data.title; 
      
//       if (data.completed === true) {
//         loadCompleted.textContent = "Выполнено"
//       } else {
//         loadCompleted.textContent = "Не выполнено"
//       }

//     } catch (error) {
//         loadResult.textContent = "Ошибка запроса: " + error.message;
//     } finally {
//       loadStatus.textContent = "Загрузка завершена"
//     }
// }

// loadData(1);

// reloadData.addEventListener("click", function () {
//   loadData(2)
// })


const batches = [
  {
  name: "Морс",
  volume: 80,
  status: "Готово"
}, 
{
  name: "Тоник",
  volume: 50,
  status: "В работе"
},
{
  name: "Лимонад",
  volume: 120,
  status: "В работе"
}];

function getBatchesNames (items) {
  const batchesName = [];
  for (let i = 0; i < items.length; i++) {
    batchesName.push(items[i].name);
  }
  return batchesName
}


function getBatchesNames (items) {
  const batchesName = items.map((item) => item.name)
  return batchesName;
};


const names = getBatchesNames(batches)
console.log(names);


// const getWorkingBatches = (items) => {
//   const result = items.filter((item) => item.status === "В работе");
//   return result;
// };
// const result = getWorkingBatches(batches)
// console.log(result);

const getLargeBatch = (items) => {
  return items.find((item) => item.volume > 60);
}

console.log(getLargeBatch(batches));

const getTotalVolume = (items) => {
  return items.filter((item) => item.status === "В работе").reduce((total, item) => {
   return total + item.volume
  }, 0);
};

console.log(getTotalVolume(batches));

// let volume = 0

// if (true) {
//   volume = 50;
//   console.log(volume);
// }

// console.log(volume);

const volume = 80;

const increaseVolume = (volume, amount) => {
  const result = volume + amount
  return result
}

const result = increaseVolume(volume, 40);

console.log(result);
console.log(volume);