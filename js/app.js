'use strict';
let workingHour = [ '6AM','7Am','8Am','9Am','10Am','11Am','12Am','1pm','2pm','3pm','4pm','5pm','6pm','7pm',]
let valueOfSalesFile = document.getElementById('sales'); 
const seattle = {
    minNuOfCustomers: 23,
    maxNuOfCustomers: 65,
    locationName: 'seattle',
    totalOfCookies: 0,
    averageOfCookies: 6.3,
    simulatedAmountsOfCookies: [],
    getNuOfCustomer : function (min,max){

        let nuOfCustomers = Math.floor(Math.random() * (max - min + 1) + min);
        return nuOfCustomers;

    },
    getCookiesPerHour: function (customers, average) {
        let nuCookiesPerHour = Math.round(customers * average);
        return nuCookiesPerHour;
      },
      getFinalResult: function () {
        for (let i = 0; i < workingHours.length; i++) {
          this.simulatedAmountsOfCookies.push(this.getCookiesPerHour(this.getNumberOfCustomers(this.minNuOfCustomers, this.maxNuOfCustomers), this.averageOfCookies));
          this.totalOfCookies += this.simulatedAmountsOfCookies[i];
        }
        return this.simulatedAmountsOfCookies;
      },
      render : function(){
let H3E = document.createElement('h3');
H3E.textContent = this.locationName;
valueOfSalesFile.appendChild(H3E);
let ulE = document.createElement('ul');
valueOfSalesFile.appendChild(ulE);
for ( let i =0;i<this.simulatedAmountsOfCookies.length;i++){
let liE = document.createElement('li');
liE.textContent=workingHour[i]+' : '+ this.simulatedAmountsOfCookies[i]+'cookies';
ulE.appendChild(liE);
}
let liE = document.createElement('li');
liE.textContent=' Total is : '+ this.totalOfCookies+' cookies for today';
ulE.appendChild(liE);
      }
    };
    seattle.getFinalResult();
    seattle.render();




    const Tokyo = {
        minNumberOfCustomers: 3,
        maxNumberOfCustomers: 24,
        locationName: 'Tokyo',
        totalOfCookies: 0,
        averageOfCookies: 1.2,
        simulatedAmountsOfCookies: [],
      
        getNumberOfCustomers: function (min, max) {
          let numberOfCustomers = Math.floor(Math.random() * (max - min + 1) + min);
          return numberOfCustomers;
        },
      
        getCookiesPerHour: function (customers, average) {
          let cookiesPerHour = Math.round(customers * average);
          return cookiesPerHour;
        },
      
        getFinalResult: function () {
          for (let i = 0; i < workingHours.length; i++) {
            this.simulatedAmountsOfCookies.push(this.getCookiesPerHour(this.getNumberOfCustomers(this.minNumberOfCustomers, this.maxNumberOfCustomers), this.averageOfCookies));
            this.totalOfCookies += this.simulatedAmountsOfCookies[i];
          }
          return this.simulatedAmountsOfCookies;
        },
        render: function () {
          let h3Element = document.createElement('h3');
          h3Element.textContent = this.locationName;
          valueOfsalesFile.appendChild(h3Element);
          let ulElement = document.createElement('ul');
          valueOfsalesFile.appendChild(ulElement);
          for (let i = 0; i < this.simulatedAmountsOfCookies.length; i++) {
            let liElement = document.createElement('li');
            liElement.textContent = workingHours[i] + ' : ' + this.simulatedAmountsOfCookies[i] + ' cookies';
            ulElement.appendChild(liElement);
          }
          let liElement = document.createElement('li');
          liElement.textContent = ' Total is : ' + this.totalOfCookies + ' cookies for the today';
          ulElement.appendChild(liElement);
        }
      };
      Tokyo.getFinalResult();
      Tokyo.render();
      
      
      
      const Dubai = {
        minNumberOfCustomers: 11,
        maxNumberOfCustomers: 38,
        locationName: 'Dubai',
        totalOfCookies: 0,
        averageOfCookies: 3.7,
        simulatedAmountsOfCookies: [],
      
        getNumberOfCustomers: function (min, max) {
          let numberOfCustomers = Math.floor(Math.random() * (max - min + 1) + min);
          return numberOfCustomers;
        },
      
        getCookiesPerHour: function (customers, average) {
          let cookiesPerHour = Math.round(customers * average);
          return cookiesPerHour;
        },
      
        getFinalResult: function () {
          for (let i = 0; i < workingHours.length; i++) {
            this.simulatedAmountsOfCookies.push(this.getCookiesPerHour(this.getNumberOfCustomers(this.minNumberOfCustomers, this.maxNumberOfCustomers), this.averageOfCookies));
            this.totalOfCookies += this.simulatedAmountsOfCookies[i];
          }
          return this.simulatedAmountsOfCookies;
        },
        render: function () {
          let h3Element = document.createElement('h3');
          h3Element.textContent = this.locationName;
          valueOfsalesFile.appendChild(h3Element);
          let ulElement = document.createElement('ul');
          valueOfsalesFile.appendChild(ulElement);
          for (let i = 0; i < this.simulatedAmountsOfCookies.length; i++) {
            let liElement = document.createElement('li');
            liElement.textContent = workingHours[i] + ' : ' + this.simulatedAmountsOfCookies[i] + ' cookies';
            ulElement.appendChild(liElement);
          }
          let liElement = document.createElement('li');
          liElement.textContent = ' Total is : ' + this.totalOfCookies + ' cookies for the today';
          ulElement.appendChild(liElement);
        }
      };
      Dubai.getFinalResult();
      Dubai.render();
      
      
      
      const Paris = {
        minNumberOfCustomers: 20,
        maxNumberOfCustomers: 38,
        locationName: 'Paris',
        totalOfCookies: 0,
        averageOfCookies: 2.3,
        simulatedAmountsOfCookies: [],
      
        getNumberOfCustomers: function (min, max) {
          let numberOfCustomers = Math.floor(Math.random() * (max - min + 1) + min);
          return numberOfCustomers;
        },
      
        getCookiesPerHour: function (customers, average) {
          let cookiesPerHour = Math.round(customers * average);
          return cookiesPerHour;
        },
      
        getFinalResult: function () {
          for (let i = 0; i < workingHours.length; i++) {
            this.simulatedAmountsOfCookies.push(this.getCookiesPerHour(this.getNumberOfCustomers(this.minNumberOfCustomers, this.maxNumberOfCustomers), this.averageOfCookies));
            this.totalOfCookies += this.simulatedAmountsOfCookies[i];
          }
          return this.simulatedAmountsOfCookies;
        },
        render: function () {
          let h3Element = document.createElement('h3');
          h3Element.textContent = this.locationName;
          valueOfsalesFile.appendChild(h3Element);
          let ulElement = document.createElement('ul');
          valueOfsalesFile.appendChild(ulElement);
          for (let i = 0; i < this.simulatedAmountsOfCookies.length; i++) {
            let liElement = document.createElement('li');
            liElement.textContent = workingHours[i] + ' : ' + this.simulatedAmountsOfCookies[i] + ' cookies';
            ulElement.appendChild(liElement);
          }
          let liElement = document.createElement('li');
          liElement.textContent = ' Total is : ' + this.totalOfCookies + ' cookies for the today';
          ulElement.appendChild(liElement);
        }
      };
      Paris.getFinalResult();
      Paris.render();
      
      
      
      const Lima = {
        minNumberOfCustomers: 2,
        maxNumberOfCustomers: 16,
        locationName: 'Lima',
        totalOfCookies: 0,
        averageOfCookies: 4.6,
        simulatedAmountsOfCookies: [],
      
        getNumberOfCustomers: function (min, max) {
          let numberOfCustomers = Math.floor(Math.random() * (max - min + 1) + min);
          return numberOfCustomers;
        },
      
        getCookiesPerHour: function (customers, average) {
          let cookiesPerHour = Math.round(customers * average);
          return cookiesPerHour;
        },
      
        getFinalResult: function () {
          for (let i = 0; i < workingHours.length; i++) {
            this.simulatedAmountsOfCookies.push(this.getCookiesPerHour(this.getNumberOfCustomers(this.minNumberOfCustomers, this.maxNumberOfCustomers), this.averageOfCookies));
            this.totalOfCookies += this.simulatedAmountsOfCookies[i];
          }
          return this.simulatedAmountsOfCookies;
        },
        render: function () {
          let h3Element = document.createElement('h3');
          h3Element.textContent = this.locationName;
          valueOfsalesFile.appendChild(h3Element);
          let ulElement = document.createElement('ul');
          valueOfsalesFile.appendChild(ulElement);
          for (let i = 0; i < this.simulatedAmountsOfCookies.length; i++) {
            let liElement = document.createElement('li');
            liElement.textContent = workingHours[i] + ' : ' + this.simulatedAmountsOfCookies[i] + ' cookies';
            ulElement.appendChild(liElement);
          }
          let liElement = document.createElement('li');
          liElement.textContent = ' Total is : ' + this.totalOfCookies + ' cookies for the today';
          ulElement.appendChild(liElement);
        }
      };
      Lima.getFinalResult();
      Lima.render();



