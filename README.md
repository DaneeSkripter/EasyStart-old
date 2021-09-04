# ❔ What is EasyStart?
EasyStart is easy for **beginners** who want to create their own Discord robot.
# ⬇ How to install EasyStart?
1. Download and install [Node.JS](https://nodejs.org/en/download/)
2. Download [EasyStart source code (latest release)](https://github.com/daneeskripter/EasyStart/releases)
3. Go to [Discord Developer Portal](https://discord.com/developers) and create application
5. In left click on bot tab and click Add Bot
6. Click on copy button to copy token
7. Enable PRESENCE and SERVER MEMBER intents
8. Create a [MongoDB database](https://www.youtube.com/watch?v=8no3SktqagY), follow the tutorial until 2:25, then click **connect**.
9. Click **Connect your application** and select version **2.2.12 or later**
10. In database link replace ```<password>``` with your password
11. Go to the folder where you downloaded source code
12. Open config.json in text editor
13. Paste token, database link and type prefix
14. At top line of file explorer type cmd and press enter
In cmd type these commands: 
10. ```npm i discord.js gcommands keyv @keyv/mongo``` - *Install all packages*
11. node index.js - *Start your bot (type this command every time when you want to start bot)*
If in cmd shows **Ready** your bot is online
12. Go to back to [Discord Developer Portal](https://discord.com/developers) and choose your bot
13. In left click on **General Information** and copy id
14. In this link replace **ID** with **your bot ID**: ```https://discord.com/oauth2/authorize?client_id=ID&permissions=8589934591&scope=applications.commands%20bot``` and now you can invite your bot in your server

*Slash commands will load in hour*
# 📜 License
[MIT](https://github.com/DaneeSkripter/EasyStart/blob/main/LICENSE)
