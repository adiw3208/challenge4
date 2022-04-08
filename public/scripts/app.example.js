class App {
  constructor() {
    this.clearButton = document.getElementById("clear-btn");
    this.loadButton = document.getElementById("load-btn");
    this.carContainerElement = document.getElementById("cars-container");
    this.driver = document.getElementById("form_driver");
    this.tanggal = document.getElementById("form_date");
    this.waktu = document.getElementById("form_time");
    this.penumpang = document.getElementById("form_pass");
  }

  async init() {
    await this.load();
    // Register click listener
    this.clearButton.onclick = this.clear;
    this.loadButton.onclick = this.run;
  }

  run = () => {
    let d = this.tanggal.value + "T" + this.waktu.value;
    let formdate = Date.parse(d);
    Car.list.forEach((car) => {
      let penumpang = this.penumpang.value;
      let driver = this.driver.value;
      let tgl = Date.parse(car.availableAt);

      if (driver == "true") {
        driver = true;
      } else driver = false;

      if (
        car.available == driver &&
        tgl >= formdate &&
        car.capacity >= penumpang
      ) {
        const node = document.createElement("div");
        node.className = "cardCars";
        node.innerHTML = car.render();
        this.carContainerElement.appendChild(node);
      }
    });
  };

  async load() {
    const cars = await Binar.listCars();
    Car.init(cars);
  }

  clear = () => {
    let child = this.carContainerElement.firstElementChild;

    while (child) {
      child.remove();
      child = this.carContainerElement.firstElementChild;
    }
  };
}
