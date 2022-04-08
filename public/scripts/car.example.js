class Car {
  static list = [];

  static init(cars) {
    this.list = cars.map((i) => new this(i));
  }

  constructor({
    id,
    plate,
    manufacture,
    model,
    image,
    rentPerDay,
    capacity,
    description,
    transmission,
    available,
    type,
    year,
    options,
    specs,
    availableAt,
  }) {
    this.id = id;
    this.plate = plate;
    this.manufacture = manufacture;
    this.model = model;
    this.image = image;
    this.rentPerDay = rentPerDay;
    this.capacity = capacity;
    this.description = description;
    this.transmission = transmission;
    this.available = available;
    this.type = type;
    this.year = year;
    this.options = options;
    this.specs = specs;
    this.availableAt = availableAt;
  }

  render() {
    return `
      
        <img class="img-fluid card-img" src="${this.image}" alt="${this.manufacture}">
        <div class="float-end  text-capitalize">
        <table class="p-3 m-2">
          <tr class="row-cols-4">
            <td class="col-2">Car Type</td>
            <td class="col-8">${this.manufacture}</td>
          </tr>
          <tr class="row-cols-4">
            <td class="col-2">model</td>
            <td class="col-8">${this.model}</td>
          </tr>
          <tr class="row-cols-4">
            <td class="col-2">plate</td>
            <td class="col-8">${this.plate}</td>
          </tr>
          <tr class="row-cols-4">
            <td class="col-2">id</td>
            <td class="col-8">${this.id}</td>
          </tr>
          <tr class="row-cols-4">
            <td class="col-2">available at</td>
            <td class="col-8">${this.availableAt}</td>
          </tr>
        </table>
          <button class="btn btn-success w-100 float-end">Pilih Mobil</button>
        </div>
    `;
  }
}
