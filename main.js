'use strict'

//! Створи об'єкт, що описує автомобіль (виробник, модель, рік випуску, середня швидкість, обсяг паливного бака, середня витрата палива на 100 км., водії), і наступні функції для роботи з цим об'єктом:

const car = {
    producer: 'Volvo',
    model: 'S40',
    graduationYear: 1996,
    averageSpeed: 120,
    tankVolume: 60,
    averageFuelConsumption: 11,
    drivers: ['Anton', 'Ivan', 'Petro'],
}

const keyCarUaText = ['виробник', 'модель', 'рік випуску', 'середня швидкість', 'обсяг паливного бака', 'середня витрата палива на 100 км.',];

//! Висновок на екран з інформацією про автомобіль.

const block = document.querySelector('.block-info');

const enterInfoCar = function (car, text) {
    const ulInfoCar = document.createElement('ul');
    ulInfoCar.classList.add('info-car');
    let counter = 0;

    for (const key in car) {
        const liInfoCar = document.createElement('li');

        if (Array.isArray(car[key])) {
            const ulDrivers = document.createElement('ul');
            ulDrivers.classList.add('drivers-name')

            for (const iterator of car[key]) {
                const liDrivers = document.createElement('li');
                liDrivers.textContent = `водій: ${iterator}`;
                ulDrivers.append(liDrivers);
            }
            liInfoCar.append(ulDrivers);
        } else {
            liInfoCar.textContent = `${text[counter]}: ${car[key]}`;
        }

        counter++;
        ulInfoCar.append(liInfoCar);
    }

    block.append(ulInfoCar);
}

enterInfoCar(car, keyCarUaText);

//! Додавання водія, який має право керувати автомобілем.

const driverName = document.querySelector('.name-driver-text');
driverName.addEventListener('change', () => {
    const driverNameValue = driverName.value.trim().toLowerCase();
    let allow = false;
    for (const iterator of car.drivers) {
        if (driverNameValue === iterator.toLowerCase()) {
            allow = true;
            break;
        }
    }

    if (!allow) {
        const toster = document.querySelector('.block-toster');
        toster.classList.toggle('toster');
    }
})
