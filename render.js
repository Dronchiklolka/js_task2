function createCell(value) {
    const cell = document.createElement('td');
    cell.innerText=value;
    
    return cell;
}

data = distributeAmout(data);
data.forEach(function(element) {
    const tbody = document.querySelector('tbody');
    const row = createRow(element);
    tbody.appendChild(row);
  });

function createRow(object) {
    const row = document.createElement('tr');
    row.appendChild(createCell(getFormatedDate(object.date)));
    row.appendChild(createCell(getFormatedTime(object.date)));
    row.appendChild(createCell(object.type));
    row.appendChild(createCell(object.profit));
    row.appendChild(createCell(object.costs));
    return row;    
} 

function getFormatedDate(innerDate) {
    const date = new Date(innerDate);
    const year = date.getFullYear();
    const month = addZero(date.getMonth()+1);
    const day = addZero(date.getDate());
    const resultDate = day + '.' + month + '.' + year;
    return resultDate;
}

function getFormatedTime(innerDate) {
    const date = new Date(innerDate);
    const hours = addZero(date.getHours());
    const minutes = addZero(date.getMinutes());
    const seconds = date.getSeconds();
    const resulTime = hours + ':' + minutes + ':' + seconds;
    return resulTime;
}

function addZero(dateComponent) {
    if (dateComponent < 10) {
        return '0' + dateComponent;
    } 
    return dateComponent;
}

function distributeAmout(data) {
    return data.map(function (item) {
        if (item.amount >= 0 ) {
            const result = {
                ...item,
                profit: item.amount,
                costs: 0
            };
            delete result.amount;
            return result;
        }
        const result = {
            ...item,
            profit: 0,
            costs: Math.abs(item.amount)
        };
        delete result.amount;
        return result;
    });    
}
