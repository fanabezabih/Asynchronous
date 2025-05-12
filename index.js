/// 1.You are building a reminder feature for a task management app. Write an async function that sends a reminder (simulated with console.log) after a delay using setTimeout. The function should return a Promise that resolves after 3 seconds with the message "Reminder sent to user!", and you should await it to log the message.


async function sendReminder() {
    return new Promise((resolve) => {
      setTimeout(() => {
        console.log("Reminder: Your task is due!");
        resolve("Reminder sent to user!");
      }, 3000);
    });
  }

  (
    async () => {
    try {
      const message = await sendReminder();
      console.log(message);
    } catch (error) {
      console.error("Error sending reminder:", error);
    }
  })();



  //2.In a startup's DevOps dashboard, implement a setInterval function that checks server status every 5 seconds by calling an async function checkServer() that returns a Promise resolving to "Server is running" or rejecting with "Server down". Use .then() and .catch() to handle the result and stop the interval after 30 seconds using clearInterval.

  async function checkServer() {

     return new Promise((resolve, reject) => {
       setTimeout(() => {
         Math.random() > 0.2
           ? resolve("Server is running")
           : reject(new Error("Server down"));
       }, 1000);
     });
   }
   
   function monitorServer() {
  
     const intervalId = setInterval(() => {
       checkServer()
         .then((status) => {
           console.log(new Date().toISOString(), status);
         })
         .catch((error) => {
           console.error(new Date().toISOString(), error.message);
         });
     }, 5000);
   
     setTimeout(() => {
       clearInterval(intervalId);
       console.log(new Date().toISOString(), "Server monitoring stopped");
     }, 30000);
   }

   monitorServer();

   //3.You're building a system to show multiple notifications to a user. Create an async function showNotifications that takes an array of messages and shows each message 1 second apart using await and setTimeout wrapped in a Promise. After all messages are shown, log "All notifications sent".


   async function showNotifications(messages) {
  
    const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));
   
    for (const message of messages) {
      console.log(`Notification: ${message}`);
      await delay(1000);
    }
 
    console.log("All notifications sent");
  }

  const messages = [
    "Task assigned to you",
    "Meeting at 3 PM",
    "Project deadline tomorrow"
  ];
  showNotifications(messages);

  //4.In your startup’s API integration, write an async function fetchDataWithRetry() that tries to fetch data from a mock API (use Promise.reject() for failure), retries up to 3 times with a 2-second delay between attempts using setTimeout, and resolves with "Data fetched" or logs "Failed after 3 attempts" if all fail.

  async function fetchDataWithRetry() {
    const maxRetries = 3;
    const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));
  
    const mockApiCall = () => Promise.reject(new Error("API failure"));
    for (let attempt = 1; attempt <= maxRetries; attempt++) {
      try {
      
        const result = await mockApiCall();
        return result; 
      } catch (error) {
        console.log(`Attempt ${attempt} failed: ${error.message}`);
        if (attempt === maxRetries) {
          console.log("Failed after 3 attempts");
          return; 
        }
      
        await delay(2000);
      }
    }
  }

  (async () => {
    await fetchDataWithRetry();
  })();


  //5.You’re building a countdown timer for a product launch. Write a function that takes a number n and logs the countdown every second using setInterval. Once it reaches 0, stop the interval and call an async function launchProduct() that returns a resolved Promise with "Product Launched!" and logs it.


  async function fetchDataWithRetry() {
    const maxRetries = 3;
    const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));
   
    const mockApiCall = () => Promise.reject(new Error("API failure"));
    for (let attempt = 1; attempt <= maxRetries; attempt++) {
      try {
     
        const result = await mockApiCall();
        return result; 
      } catch (error) {
        console.log(`Attempt ${attempt} failed: ${error.message}`);
        if (attempt === maxRetries) {
          console.log("Failed after 3 attempts");
          return; 
        }
      
        await delay(2000);
      }
    }
  }

  (async () => {
    await fetchDataWithRetry();
  })();

