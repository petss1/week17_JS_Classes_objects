const data = [
  {
    id: 1,
    type: 'car',
    brand: 'Audi',
    doors: 4,
    price: 4300000,
    image: '<https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/2020_Audi_e-Tron_Sport_50_Quattro.jpg/1200px-2020_Audi_e-Tron_Sport_50_Quattro.jpg>'
  },
  {
    id: 2,
    type: 'car',
    brand: 'Mercedes-Benz',
    doors: 4,
    price: 2800000,
    image: '<https://upload.wikimedia.org/wikipedia/commons/thumb/9/9b/2019_Mercedes-Benz_E220d_SE_Automatic_2.0_Front.jpg/300px-2019_Mercedes-Benz_E220d_SE_Automatic_2.0_Front.jpg>'
  },
	{
    id: 3,
    type: 'bike',
    brand: 'Harley-Davidson',
    maxSpeed: 210,
    price: 1300000,
    image: '<https://www.harley-davidson.com/content/dam/h-d/images/product-images/bikes/motorcycle/2022/2022-iron-883/2022-iron-883-016/2022-iron-883-016-motorcycle.jpg>'
  },
  {
    id: 4,
    type: 'bike',
    brand: 'Harley-Davidson',
    maxSpeed: 220,
    price: 1400000,
    image: '<https://cdn.dealerspike.com/imglib/products/harley-showroom/2020/livewire/main/Vivid-Black-Main.png>'
  }
];

class Transport{
  constructor(type, price, brand){
    this.type = type;
    this.price = price;
    this.brand = brand;
  }
  getInfo(){
    this.element = document.createElement('p');
    this.element.innerHTML =`Тип: ${this.type}; <br>Цена: ${this.getPrice()}; <br> Бренд: ${this.brand};`;
    document.querySelector('.container').appendChild(this.element);
  }
  getPrice(){
    return this.price.toLocaleString();
  }
}

class Car extends Transport {
  constructor(type, price, brand, doors){
    super (type, price, brand);
    this.doors = doors;
  }
  getDoorsCount(){ 
    return this.doors;
  }

  getInfo(){
    super.getInfo();
    this.element = document.createElement('p');
    this.element.innerHTML =`Количество дверей машины: ${this.doors};`;
    document.querySelector('.container').appendChild(this.element);
  }
}

class Bike extends Transport{
  constructor(type, price, brand, maxSpeed){
    super (type, price, brand);
    this.maxSpeed = maxSpeed;
  }
  getMaxSpeed(){ 
    return this.maxSpeed;
  }

  getInfo(){
    super.getInfo();
    this.element = document.createElement('p');
    this.element.innerHTML =`Максимальная скорость байка: ${this.maxSpeed};`;
    document.querySelector('.container').appendChild(this.element);
  }
}

data.forEach(item => {
  let transport;
  
  if (item.type === 'car') {
    transport = new Car(item.type, item.price, item.brand, item.doors);
  } else if (item.type === 'bike') {
    transport = new Bike(item.type, item.price, item.brand, item.maxSpeed);
  }

  if (transport) {
    transport.getInfo();
  }
});

