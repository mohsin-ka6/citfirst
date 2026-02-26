        let correctUsername = "admin";
        let correctPassword = "123";
        let inputUsername = "admin";
        let inputPassword = "123";

        if (inputUsername === correctUsername && inputPassword === correctPassword) {
            console.log("Login Successful");
        } else {
            console.log("Invalid Credentials");
        }

        let age = 19;
        if (age >= 18) {
            console.log("You are eligible to vote.");
        } else {
            console.log("You are not eligible to vote.");
        }
        let number = 7;
        if (number % 2 === 0) {
            console.log("The number is even.");
        } else {
            console.log("The number is odd.");
        }

        let score = 85; 
        if (score >= 90) {
            console.log("Grade: A");
        } else if (score >= 80) {
            console.log("Grade: B");
        } else if (score >= 70) {
            console.log("Grade: C");
        } else if (score >= 60) {
            console.log("Grade: D");
        } else {
            console.log("Grade: F");
        }

        let day = "Monday";
        switch (day) {
            case "Monday":
                console.log("Today is Monday.");
                break;
            case "Tuesday":
                console.log("Today is Tuesday.");
                break;
            case "Wednesday":
                console.log("Today is Wednesday.");
                break;}