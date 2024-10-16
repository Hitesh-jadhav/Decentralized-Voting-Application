# 🌐 Decentralized Voting Application

![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)
![Node.js](https://img.shields.io/badge/node-%3E%3D14.0.0-brightgreen)
![React](https://img.shields.io/badge/react-v17.0.2-61DAFB?style=flat&logo=react&logoColor=black)

## 📖 Project Description

The *Decentralized Voting Application* is designed to provide a secure and transparent voting system leveraging the power of blockchain technology. Built on the Ethereum platform, this application empowers users to create, cast, and tally votes in a decentralized manner, ensuring fairness and integrity throughout the voting process.

## ⚙ Technologies Used

This project utilizes a variety of cutting-edge technologies:

- *Solidity*: Smart contract programming language for Ethereum.
- *Hardhat*: A powerful development environment for Ethereum applications.
- *Ethers.js*: A comprehensive JavaScript library for interacting with the Ethereum blockchain.
- *React*: A popular frontend library for building user interfaces.
- *JavaScript*: The programming language used for client-side scripting.

## 🌟 Features

- *User Authentication*: Secure registration and login for users.
- *Voting Sessions*: Creation of new voting sessions by authorized users.
- *Secure Voting*: Cast and track votes with complete security.
- *Real-Time Results*: Tally votes and display results instantly.

## 📦 Installation

### Prerequisites

Ensure you have the following installed on your system:

- [Node.js](https://nodejs.org/) (version 14 or higher)
- [npm](https://www.npmjs.com/) (Node package manager)
- [Hardhat](https://hardhat.org/) (Development environment)
- [MetaMask](https://metamask.io/) (Ethereum wallet extension)

### Step-by-Step Installation

1. *Clone the Repository*

   bash
   git clone https://github.com/Hitesh-jadhav/Decentralized-Voting-Application.git
   cd Decentralized-Voting-Application
   

2. *Install Dependencies*

    bash
    npm install
    

3. *Compile Smart Contracts*
     Navigate to the project directory and run:

    bash
    npx hardhat compile
    

4. *Deploy Smart Contracts*
   Ensure your Ethereum wallet is connected to the appropriate network (in our case volta network)  (e.g., Rinkeby, Ganache, Volta) and run:

    bash
    npx hardhat run scripts/deploy.js --network <network_name>
    

5. *Start the React Application*
    In a new terminal window, navigate to the client directory and run:
    bash
    cd client
    npm start
    

### 🚀 Usage
1. Open your browser and go to http://localhost:3000.
2. Connect your MetaMask wallet.
3. Register as a user.
4. Create a new voting session or participate in an existing session by casting your vote.

### 🤝 Contributing
Feel free to fork the repository and submit pull requests. Any contributions to improve the application are welcome!

### 📄 License
This project is licensed under the MIT License

### ✍ Author
Hitesh Rohidas Jadhav
[LinkedIn](https://www.linkedin.com/in/hitesh-jadhav-983b41264/) | [GitHub](https://github.com/Hitesh-jadhav)