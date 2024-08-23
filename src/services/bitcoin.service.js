export const bitcoinService = {
    getRate,
    getBitcoinChartData,
}


async function getRate(amount) {
    const res = await fetch(`https://blockchain.info/tobtc?currency=USD&value=${amount}`)
    const data = await res.json()
    return data
}

async function getBitcoinChartData() {
    try {
        const endDate = new Date().toISOString().slice(0, 10)
        const startDate = new Date(new Date().setDate(new Date().getDate() - 60)).toISOString().slice(0, 10)

        const response = await fetch(`https://api.coindesk.com/v1/bpi/historical/close.json?start=${startDate}&end=${endDate}`)
        const data = await response.json()


        const chartData = {
            labels: [],
            datasets: [{ data: [] }],
        }
        chartData.labels = Object.keys(data.bpi)
        chartData.datasets[0].data = Object.values(data.bpi)


        return chartData
    } catch (error) {
        console.error('Error fetching Bitcoin data:', error)
    }

}




