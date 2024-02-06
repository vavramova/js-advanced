function solve(data, criteria){
    let empl = JSON.parse(data);

    let [emplKey, emplVal] = criteria.split("-");

    function isMatch(empl){
        if(criteria == "all"){
            return true;
        }else {
            return empl[emplKey] === emplVal;
        }
    }

    let matchedEmpl = empl.filter(isMatch);

    matchedEmpl.forEach((employee, idx) => {
        console.log(`${idx}. ${employee.first_name} ${employee.last_name} - ${employee.email}`)
    })
}

solve(`[{

    "id": "1",
    
    "first_name": "Ardine",
    
    "last_name": "Bassam",
    
    "email": "abassam0@cnn.com",
    
    "gender": "Female"
    
    }, {
    
    "id": "2",
    
    "first_name": "Kizzee",
    
    "last_name": "Jost",
    
    "email": "kjost1@forbes.com",
    
    "gender": "Female"
    
    },
    
    {
    
    "id": "3",
    
    "first_name": "Evanne",
    
    "last_name": "Maldin",
    
    "email": "emaldin2@hostgator.com",
    
    "gender": "Male"
    
    }]`,
    
    'gender-Female')