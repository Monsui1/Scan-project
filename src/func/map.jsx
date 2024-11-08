function parseDate(date) {
    const dateObj = new Date(date);

    const day = (dateObj.getDate() < 10) ? `0${dateObj.getDate()}` : dateObj.getDate();
    const month = (dateObj.getMonth() + 1 < 10) ? `0${dateObj.getMonth() + 1}` : dateObj.getMonth() + 1;
    const year = dateObj.getFullYear();

    return `${day}.${month}.${year}`;
}

const mapArr = (arr) => {
    if (!arr || !arr.length) return [];

    const resArr = [];
    const histogramType = arr[0].histogramType;

    const setData = (dataItem, totalValue, riskValue) => {
        resArr.push({
            date: parseDate(dataItem.date),
            totalValue,
            riskValue
        });
    };

    arr[0].data.forEach(dataItem => {
        if (histogramType === "totalDocuments") {
            setData(dataItem, dataItem.value, 0);
        } else if (histogramType === "riskFactors") {
            setData(dataItem, 0, dataItem.value);
        }
    });

    if (arr[1]) {
        resArr.forEach((resItem, index) => {
            if (histogramType === "totalDocuments") {
                resItem.riskValue = arr[1].data[index].value;
            } else if (histogramType === "riskFactors") {
                resItem.totalValue = arr[1].data[index].value;
            }
        });
    }

    return resArr;
};

function parseXml(xml) {
    const parser = new DOMParser();
    const html = parser.parseFromString(xml, "text/xml");
    let result = '';

    Array.from(html.getElementsByTagName("scandoc")[0].childNodes).forEach((node, index) => {
        if (index < 3 && node.innerHTML.match(/[а-я ]/gi)) {
            result += node.innerHTML.match(/[а-я ]/gi).join('');
        }
    });

    return result + '...';
}

export { parseDate, mapArr, parseXml };
