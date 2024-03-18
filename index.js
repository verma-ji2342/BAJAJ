const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.get('/', (req, res) =>{
  res.send('Hello World!');
})

app.get('/process_array', (req, res) => {
  const { array } = req.body.params;
  console.log(array);
}

app.post('/process_array', (req, res) => {
    const { array } = req.body.params;

    // Initialize response variables
    const status = "Success";
    const userId = 123; 
    const emailId = "example@example.com"; 
    const collegeRollNumber = "ABCD123"; 
    // Process the array
    const evenNumbers = array.filter(num => num % 2 === 0 && typeof num === 'number');
    const oddNumbers = array.filter(num => num % 2 !== 0 && typeof num === 'number');
    const alphabetsUppercase = array.filter(char => typeof char === 'string' && char.match(/[a-zA-Z]/))
                                    .map(char => char.toUpperCase());

    const response = {
        status,
        user_id: userId,
        email_id: emailId,
        college_roll_number: collegeRollNumber,
        even_numbers: evenNumbers,
        odd_numbers: oddNumbers,
        alphabets_uppercase: alphabetsUppercase
    };

    res.json(response);
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
