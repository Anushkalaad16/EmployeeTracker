import corn from "node-cron";
const startCronJob = () => {
    corn.schedule('0 11 * * *', () => {
        console.log('⏰ Submit your daily update!');
        // Add your task logic here
    });
};
export default startCronJob;