let people = [
    {
        name: 'Malika',
        age: 12,
        budget: 20000,
        rent: 12,
        expenses: [
            {
                total: 2000,
                title: 'sousages'
            },
            {
                total: 1200,
                title: 'mobile phone'
            },
            {
                total: 3000,
                title: 'car'
            },
        ]
    },
    {
        name: 'Diyor from 611 gr',
        age: 22,
        budget: 20000,
        rent: 12,
        expenses: [{
                total: 1500,
                title: 'sousages'
            },
            {
                total: 2200,
                title: 'sousages width ketchup'
            },
            {
                total: 3500,
                title: 'sousages'
            },
        ]
    },
    {
        name: 'Aziz',
        age: 19,
        budget: 20200,
        rent: 12,
        expenses: [{
                total: 100,
                title: 'girls'
            },
            {
                total: 4200,
                title: 'girls'
            },
            {
                total: 300,
                title: 'girls'
            },
        ]
    },
    {
        name: 'Amir',
        age: 34,
        budget: 27000,
        rent: 12,
        expenses: [{
                total: 2000,
                title: 'study'
            },
            {
                total: 1000,
                title: 'games'
            },
            {
                total: 5000,
                title: 'clothes'
            },
        ]
    },
    {
        name: 'Maxmudbek',
        age: 42,
        budget: 15000,
        rent: 12,
        expenses: [{
                total: 1111,
                title: 'sigarets'
            },
            {
                total: 1900,
                title: 'chilim'
            },
            {
                total: 6000,
                title: 'anasha'
            },
        ]
    },
    {
        name: 'Samir',
        age: 9,
        budget: 12000,
        rent: 12,
        expenses: [{
                total: 1200,
                title: 'food'
            },
            {
                total: 990,
                title: 'car'
            },
            {
                total: 7000,
                title: 'protain'
            },
        ]
    },
    {
        name: 'Badriddin',
        age: 24,
        budget: 2000,
        rent: 12,
        expenses: [{
                total: 1000,
                title: 'taxi'
            },
            {
                total: 8000,
                title: 'rich girls'
            },
            {
                total: 700,
                title: 'on himself'
            },
        ]
    }
]

let arr_ages = [
    {
        from: 20,
        to: 40,
        count: 0
    },
    {
        from: 10,
        to: 20,
        count: 0
    },
    {
        from: 30,
        to: 50,
        count: 0
    }
]

 let setup = () =>{
     let i = []
     let r = []
     let b = []
    
     for(let item of arr) {
         item.totalExpenses = 0
    
         for (let item2 of item.expenses) {
             item.totalExpenses += item2.total  
             item.totalMoney = item.budget - item.totalExpenses
             i.push(item.totalExpenses)
             maxNa = item.totalMoney - (item.rent * item.totalMoney / 100)
             r.push(maxNa)
             seRas = (item.totalExpenses /2)
            b.push(seRas)
         }
    }
    
     console.log(arr);
     let maxExp = Math.max(...i)
     let minExp = Math.min(...i)
     let maxRent = Math.max(...r)
     console.log('maxExp',maxExp);
     console.log('minExp',minExp);
     console.log('max Rent',maxRent);
     console.log('average',Math.max(...b));
    }
setup(people)