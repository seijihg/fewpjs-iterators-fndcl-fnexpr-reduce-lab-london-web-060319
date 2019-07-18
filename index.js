const batteryBatches = [4, 5, 3, 4, 4, 6, 5];

function reduce() {
   return batteryBatches.reduce((sum, value) => {
       return sum + value
   }, 0)
}

const totalBatteries = reduce()