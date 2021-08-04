'use strict';
   let workingHour = [ '6AM','7Am','8Am','9Am','10Am','11Am','12Am','1pm','2pm','3pm','4pm','5pm','6pm','7pm',]

    let shops =[];
function SalmonCookie (location , minNuOfCustomer,maxNuOfCustomer,averageOfCookie)  {
    this.minNuOfCustomers= minNuOfCustomer;
    this.maxNuOfCustomers= maxNuOfCustomer;
    this.locationName= location;
    this.totalOfCookies= 0;
    this.averageOfCookies= averageOfCookie;
    this.simulatedAmountsOfCookies= [];
    this.customersEachHour = [];
    shops.push(this);
  
}



function random(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min)
}

SalmonCookie.prototype.getNuOfCustomer = function() {
  for (let i = 0; i < workingHour.length; i++) {

      this.customersEachHour.push(random(this.minNuOfCustomers, this.maxNuOfCustomers))

  }
    }
    
      SalmonCookie.prototype.getFinalResult = function() {
        for (let i = 0; i < workingHour.length; i++) {
            this.simulatedAmountsOfCookies.push(Math.floor(this.customersEachHour[i] * this.averageOfCookies));
            this.totalCookieshEachHour += this.simulatedAmountsOfCookies[i]
           
        }
      }
  


  /*  const Tokyo = {
        workingHour : [ '6AM','7Am','8Am','9Am','10Am','11Am','12Am','1pm','2pm','3pm','4pm','5pm','6pm','7pm',],

        minNuOfCustomers: 3,
        maxNuOfCustomers: 24,
        locationName: 'Tokyo',
        totalOfCookies: 0,
        averageOfCookies: 1.2,
        simulatedAmountsOfCookies: [],
      
        getNumberOfCustomers: function (min, max) {
          let numberOfCustomers = Math.floor(Math.random() * (max - min + 1) + min);
          return numberOfCustomers;
        },
      
       
      
        getFinalResult: function () {
          for (let i = 0; i < this.workingHour.length; i++) {
            let cookieSold = Math.ceil(this.averageOfCookies*this.getNumberOfCustomers(this.minNuOfCustomers,this.maxNuOfCustomers));
            this.simulatedAmountsOfCookies.push(cookieSold);
            this.totalOfCookies += this.simulatedAmountsOfCookies[i];
          }
          return this.simulatedAmountsOfCookies;
        },
        render: function () {
            let valueOfsalesFile = document.getElementById('sales'); 
          let h3Element = document.createElement('h3');
          h3Element.textContent = this.locationName;
          valueOfsalesFile.appendChild(h3Element);
          let ulElement = document.createElement('ul');
          valueOfsalesFile.appendChild(ulElement);
          for (let i = 0; i < this.simulatedAmountsOfCookies.length; i++) {
            let liElement = document.createElement('li');
            liElement.textContent = this.workingHour[i] + ' : ' + this.simulatedAmountsOfCookies[i] + ' cookies';
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
        workingHour : [ '6AM','7Am','8Am','9Am','10Am','11Am','12Am','1pm','2pm','3pm','4pm','5pm','6pm','7pm',],

        minNuOfCustomers: 11,
        maxNuOfCustomers: 38,
        locationName: 'Dubai',
        totalOfCookies: 0,
        averageOfCookies: 3.7,
        simulatedAmountsOfCookies: [],
      
        getNumberOfCustomers: function (min, max) {
          let numberOfCustomers = Math.floor(Math.random() * (max - min + 1) + min);
          return numberOfCustomers;
        },
      
       
      
        getFinalResult: function () {
          for (let i = 0; i < this.workingHour.length; i++) {
            let cookieSold = Math.ceil(this.averageOfCookies*this.getNumberOfCustomers(this.minNuOfCustomers,this.maxNuOfCustomers));
            this.simulatedAmountsOfCookies.push(cookieSold);
            this.totalOfCookies += this.simulatedAmountsOfCookies[i];
          }
          return this.simulatedAmountsOfCookies;
        },
        render: function () {
            let valueOfsalesFile = document.getElementById('sales'); 
          let h3Element = document.createElement('h3');
          h3Element.textContent = this.locationName;
          valueOfsalesFile.appendChild(h3Element);
          let ulElement = document.createElement('ul');
          valueOfsalesFile.appendChild(ulElement);
          for (let i = 0; i < this.simulatedAmountsOfCookies.length; i++) {
            let liElement = document.createElement('li');
            liElement.textContent = this.workingHour[i] + ' : ' + this.simulatedAmountsOfCookies[i] + ' cookies';
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
        workingHour : [ '6AM','7Am','8Am','9Am','10Am','11Am','12Am','1pm','2pm','3pm','4pm','5pm','6pm','7pm',],

        minNuOfCustomers: 20,
        maxNuOfCustomers: 38,
        locationName: 'Paris',
        totalOfCookies: 0,
        averageOfCookies: 2.3,
        simulatedAmountsOfCookies: [],
      
        getNumberOfCustomers: function (min, max) {
          let numberOfCustomers = Math.floor(Math.random() * (max - min + 1) + min);
          return numberOfCustomers;
        },
      
       
      
        getFinalResult: function () {
          for (let i = 0; i < this.workingHour.length; i++) {
            let cookieSold = Math.ceil(this.averageOfCookies*this.getNumberOfCustomers(this.minNuOfCustomers,this.maxNuOfCustomers));
            this.simulatedAmountsOfCookies.push(cookieSold);
            this.totalOfCookies += this.simulatedAmountsOfCookies[i];
          }
          return this.simulatedAmountsOfCookies;
        },
        render: function () {
            let valueOfsalesFile = document.getElementById('sales'); 
          let h3Element = document.createElement('h3');
          h3Element.textContent = this.locationName;
          valueOfsalesFile.appendChild(h3Element);
          let ulElement = document.createElement('ul');
          valueOfsalesFile.appendChild(ulElement);
          for (let i = 0; i < this.simulatedAmountsOfCookies.length; i++) {
            let liElement = document.createElement('li');
            liElement.textContent = this.workingHour[i] + ' : ' + this.simulatedAmountsOfCookies[i] + ' cookies';
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
        workingHour : [ '6AM','7Am','8Am','9Am','10Am','11Am','12Am','1pm','2pm','3pm','4pm','5pm','6pm','7pm',],

        minNuOfCustomers: 2,
        maxNuOfCustomers: 16,
        locationName: 'Lima',
        totalOfCookies: 0,
        averageOfCookies: 4.6,
        simulatedAmountsOfCookies: [],
      
        getNumberOfCustomers: function (min, max) {
          let numberOfCustomers = Math.floor(Math.random() * (max - min + 1) + min);
          return numberOfCustomers;
        },
      
       
      
        getFinalResult: function () {
          for (let i = 0; i < this.workingHour.length; i++) {
            let cookieSold = Math.ceil(this.averageOfCookies*this.getNumberOfCustomers(this.minNuOfCustomers,this.maxNuOfCustomers));
            this.simulatedAmountsOfCookies.push(cookieSold);
            this.totalOfCookies += this.simulatedAmountsOfCookies[i];
          }
          return this.simulatedAmountsOfCookies;
        },
        render: function () {
            let valueOfsalesFile = document.getElementById('sales'); 
          let h3Element = document.createElement('h3');
          h3Element.textContent = this.locationName;
          valueOfsalesFile.appendChild(h3Element);
          let ulElement = document.createElement('ul');
          valueOfsalesFile.appendChild(ulElement);
          for (let i = 0; i < this.simulatedAmountsOfCookies.length; i++) {
            let liElement = document.createElement('li');
            liElement.textContent = this.workingHour[i] + ' : ' + this.simulatedAmountsOfCookies[i] + ' cookies';
            ulElement.appendChild(liElement);
          }
          let liElement = document.createElement('li');
          liElement.textContent = ' Total is : ' + this.totalOfCookies + ' cookies for the today';
          ulElement.appendChild(liElement);
        }
      };
      Lima.getFinalResult();
      Lima.render(); */


      let seattle = new SalmonCookie("Seattle", 23, 65, 6.3);
      
      let tokyo = new SalmonCookie("Tokyo", 3, 24, 1.2);
     
      let dubai = new SalmonCookie("Dubai", 11, 38, 3.7);
      
      let paris = new SalmonCookie("Paris", 20, 38, 2.3);
      
      let lima = new SalmonCookie("Lima", 2, 16, 4.6);
     

       let parent = document.getElementById("parent");
       let table = document.createElement("table");
       parent.appendChild(table);

       function makeHeader() {
        let headerRow = document.createElement('tr');
        table.appendChild(headerRow);
        let firstTh = document.createElement('th');
        firstTh.textContent = 'name';
        let workingHour = [ '6AM','7Am','8Am','9Am','10Am','11Am','12Am','1pm','2pm','3pm','4pm','5pm','6pm','7pm',];

        headerRow.appendChild(firstTh);
        for (let i = 0; i < workingHour.length; i++) {
            let thElement = document.createElement('th');
            headerRow.appendChild(thElement);
            thElement.textContent = workingHour[i];
        }
        let lastTh = document.createElement('th');
        headerRow.appendChild(lastTh);
        lastTh.textContent = 'daily total';
    }
    
    SalmonCookie.prototype.makeCells = function() {
      let workingHour = [ '6AM','7Am','8Am','9Am','10Am','11Am','12Am','1pm','2pm','3pm','4pm','5pm','6pm','7pm',]

        let dataRow = document.createElement('tr');

        table.appendChild(dataRow);
        // data for name 
        let nameData = document.createElement('td');
        dataRow.appendChild(nameData);
        nameData.textContent = this.locationName;
        for (let i = 0; i < workingHour.length; i++) {
            let tdElement = document.createElement('td');
            tdElement.textContent = this.simulatedAmountsOfCookies[i];
            dataRow.appendChild(tdElement);
            this.totalOfCookies+=this.simulatedAmountsOfCookies[i];
        }
        // total calls 
        let totalDataForEachShop = document.createElement('td');
        dataRow.appendChild(totalDataForEachShop);
        totalDataForEachShop.textContent = this.totalOfCookies;

        

        }
        

    
    
    let makeFooter = function() {
        let footerRow = document.createElement('tr');
        table.appendChild(footerRow);
        let footerTh = document.createElement('td');
        footerRow.appendChild(footerTh);
        footerTh.textContent = "totals";
        
        let workingHour = [ '6AM','7Am','8Am','9Am','10Am','11Am','12Am','1pm','2pm','3pm','4pm','5pm','6pm','7pm',]
        
        for (let i = 0; i <= workingHour.length; i++) {
            let totalEachHour=0;
            for (let j = 0; j < shops.length; j++) {
                totalEachHour += shops[j].simulatedAmountsOfCookies[i];
                
            }
            footerTh = document.createElement('td');
            footerRow.appendChild(footerTh);
            footerTh.textContent = totalEachHour;

           
          
        }

        

          let dataRow = document.createElement('tr');
        let totalDataForEachShop = document.createElement('td');
        dataRow.appendChild(totalDataForEachShop);
        

      }

          
        
    
    makeHeader();
 
    //this loop for call methods ,   shops[i] have name of new object after . we call function
    for (let i = 0; i < shops.length; i++) {
        shops[i].getNuOfCustomer();
        shops[i].getFinalResult();
        shops[i].makeCells();
    }
    makeFooter();
