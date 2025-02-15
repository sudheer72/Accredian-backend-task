# 🚀 Refer & Earn Backend

Welcome to the backend service for the Refer & Earn application! This service handles user referrals and notifications using a robust stack of modern technologies.

## 🛠️ Technologies Used

- **TypeScript** - For type-safe JavaScript
- **Node.js** - Runtime environment
- **Express** - Web framework
- **MySQL2** - Database driver
- **Prisma ORM** - Database ORM
- **Nodemailer** - For sending emails
- **Mailgen** - For generating email templates
- **Nodemon** - For automatic server restarts
- **Dotenv** - For managing environment variables

## 📦 Setup Instructions

1. **Clone the repository**
    ```bash
    git clone https://github.com/sudheer72/Accredian-backend-task
    cd Accredian-backend-task
    ```

2. **Backend Setup**
    ```bash
    npm install
    ```

3. **Environment Variables**
    - Create a `.env` file in the root directory and add your MySQL URI, EMAIL, and other necessary environment variables.

5. **Run Prisma migrations**
    ```bash
    npx prisma migrate dev
    ``` 

6. **Start the server**
    ```bash
    npm run dev
    ``` 
    
## Folder Structure

```sh
.
├── src
│   ├── controllers
│   ├── middleware
│   ├── models
│   ├── routes
│   ├── services
│   └── utils
├── prisma
│   └── schema.prisma
├── .env
├── package.json
└── tsconfig.json
```

## Demo
- Refer Notifiction Mail Page
![Refer-Notifiction-Mail-Page](./image/mail.png)
---

## Contact
For any questions or inquiries, please contact:

- Author: Sudheer Ravi
- Email: sudheerraavi777@gmail.com
- GitHub: https://github.com/sudheer72

Feel free to reach out for any questions, suggestions, or contributions. Happy coding!
