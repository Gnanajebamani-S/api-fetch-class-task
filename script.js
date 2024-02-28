var res = fetch("https://restcountries.com/v3.1/all")
  .then((data) => data.json())
  .then((data1) => bar(data1));

var container = document.createElement("div");
container.className = "container";

var row = document.createElement("div");
row.className = "row";

function bar(data1) {
  for (var i = 0; i < data1.length; i++) {
    var col = document.createElement("div");
    col.className = "col-md-4";
    col.innerHTML = `<div class="card" style="width: 18rem;">
    <img src="..." class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title">${data1[i].capital}</h5>
      <p class="card-text">${data1[i].name.common}</p>
    </div>
  </div>`;
    row.append(col);
    container.append(row);
    document.body.append(container);
  }
}
