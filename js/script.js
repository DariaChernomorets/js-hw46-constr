'use strict';
(function () {
    function Student(name,surname,year){
        this.name = name;
        this.surname = surname;
        this.year = year

        this.presentData =[];
        this.presentData.length = 10;
        this.presentIndex = 0;

        this.marksData = [];
        this.marksData.length = 10;
        this.marksDataIndex = 0;

        this.averageMark = 0;



   const studentsActions = {
        present: function () {


            if (this.presentData.length > this.presentIndex) {
                this.presentData[this.presentIndex] = true;
                this.presentIndex += 1
            } else {
                throw new Error('too much data')
            }
        },
        absent: function () {
            if (this.presentData.length > this.presentIndex) {
                this.presentData[this.presentIndex] = false;
                this.presentIndex += 1
            } else {
                throw new Error('too much data')
            }
        },
        addMark: function (mark) {
            if (mark >= 0 && mark <= 12) {
                if (this.marksData.length > this.marksDataIndex) {
                    this.marksData[this.marksDataIndex] = Number(mark);
                    this.marksDataIndex += 1

                } else {
                    throw new Error('too much data')
                }
            } else {
                throw new Error('Please enter mark in range from 0 to 12')
            }

        },
        getAverageMark:function () {

            if (this.marksData.every(item=>!item)) {

                throw new Error('There is no marks in the system')
            } else{
                this.averageMark= this.marksData.reduce((sum=0,item)=>sum+=item)/ this.marksDataIndex
                return this.averageMark;

            };


        },
        getAge:function () {
            const currentYear = 2022;
            let age = 0;
            age = currentYear - this.year
            return age;
        },
        summary:function() {

            this.getAverageMark()

            let averagePresent = 0;
            averagePresent = this.presentData.reduce((sum=0,item)=>sum+=item)/ this.presentIndex

            if (this.averageMark > 9 && averagePresent > 0.9 ) return console.log('Ути какой молодчинка!');
            if (this.averageMark > 9 || averagePresent > 0.9 ) return console.log('Норм, но можно лучше');
            if (this.averageMark < 9 && averagePresent < 0.9 ) return console.log('Редиска!');

        }

    }


        for ( let key in studentsActions){

            Student.prototype[key] = studentsActions[key]
        }



    }



    let student1 = new Student('Daria', 'Chernomorets',1993)
    student1.present()
    student1.present()
    student1.present()
    student1.present()
    student1.present()
    student1.present()
    student1.addMark('12')
    student1.addMark('8')
    student1.addMark('12')
    student1.addMark('5')
    student1.addMark('10')
    student1.getAverageMark()
    console.log(student1);
    console.log(student1.summary());

})()

