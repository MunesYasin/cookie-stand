'use strict';
let workingHour =[ '6AM','7Am','8Am','9Am','10Am','11Am','12Am','1pm','2pm','3pm','4pm','5pm','6pm','7pm'];

function Salmoncookies (location , minNuOfCustomer,maxNuOfCustomer,averageOfCookie) {

   this.minNuOfCustomers= minNuOfCustomer,
    this.maxNuOfCustomers= maxNuOfCustomer,
    this.locationName =location,
    this.totalOfCookies= 0,
    this.averageOfCookies= averageOfCookie,
    this.simulatedAmountsOfCookies= [],
    Salmoncookies.prototype.getNuOfCustomer = function (min,max){

        let nuOfCustomers = Math.ceil(Math.random() * (max - min + 1) + min);
        return nuOfCustomers;

    },
    
      Salmoncookies.prototype.getFinalResult = function () {

        for (let i = 0; i < this.workingHour; i++) {
            let cookieSold = Math.ceil(this.averageOfCookies*this.getNuOfCustomer(this.minNuOfCustomers,this.maxNuOfCustomers));
Salmoncookies.prototype.simulatedAmountsOfCookies.push(cookieSold);
          this.totalOfCookies += this.simulatedAmountsOfCookies[i];
        }
        return this.simulatedAmountsOfCookies;
      },
      this.render= function() {
        
      
        let tabElement = document.createElement('table');
        secElement.appendChild(tabElement);
      
        let trElement = document.createElement('tr');
        tabElement.appendChild(trElement);
      
        tableBottomArray.push(this.simulatedAmountsOfCookies)[0];
      
        let tdElement1 = document.createElement('td');
        trElement.appendChild(tdElement1);
        tdElement1.textContent = this.locationName;
        for(let i=0;i<=this.simulatedAmountsOfCookies.length;i++){
          let tdElement2 = document.createElement('td');
          trElement.appendChild(tdElement2);
          tdElement2.textContent = [this.simulatedAmountsOfCookies[i]];
            let tdElement3 = document.createElement('td');
            tdElement3.textContent = this.totalOfCookies;
            trElement.appendChild(tdElement3);
            };
            }
    




   /* const Tokyo = {
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
      Lima.render();
      
*/
let seattle = new salmoncookies('seattle',23,65,6.3 )
seattle.getFinalResult();
    seattle.render();

let tokyo = new salmoncookies('tokyo',3,24,1.2 )
tokyo.getFinalResult();
    tokyo.render();

    let dubai = new salmoncookies('dubai',11,38,3.7 )
dubai.getFinalResult();
    dubai.render();

    let paris = new salmoncookies('paris',20,38,2.3 )
paris.getFinalResult();
    paris.render();

    let lima = new salmoncookies('lima',2,16,4.6 )
    lima.getFinalResult();
        lima.render();


      
    let branchLocation= [seattle,tokyo,dubai,paris,lima];


let table = document.getElementById('location_table');
let branchesTable = document.createElement('table');
table.appendChild(branchesTable);


function headerTable(){

let head = document.createElement('tr');
branchesTable.appendChild(head);
let tableHeader = document.createElement('th');
head.appendChild(tableHeader);

for (let i=0 ; i <workingHour.length;i++){
  let tableHeader = document.createElement('th');
        head.appendChild(tableHeader);
        tableHeader.textContent = workingHours[i];
}
tableHeader = document.createElement('th');
head.appendChild(tableHeader)
tableHeader.textContent = 'Daily Location Total';
}

seattle.render();
tokyo.render();
dubai.render();
paris.render();
lima.render();

function footerTable(){
  let footerRaw = document.createElement('tr');
      branchesTable.appendChild(footerRaw);
  let tableFooter = document.createElement('th');
      footerRaw.appendChild(tableFooter);
      tableFooter.textContent = 'Total';
  let sum=0;
  for (let i = 0; i <workingHour.length; i++){
       for ( let j=0;j<branchLocation.length;j++){
          sum+=branchLocation[j].simulatedAmountsOfCookies[i];
          console.log(sum);
      }
       let footerData = document.createElement('th');
       footerRaw.appendChild(footerData);
       footerData.textContent=sum;
       sum=0;  
  }
  for(let y=0; y<branchLocation.length;y++){
      sum+=branchLocation[y].total;
  }
       let footerData = document.createElement('th');
       footerRaw.appendChild(footerData);
       footerData.textContent=sum;
  }

  headerTable();

footerTable();
      }
  










