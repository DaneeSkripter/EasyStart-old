# ❔ What is EasyStart?
EasyStart is easy for **beginners** who want to create their own Discord robot.
# ⬇ How to install EasyStart?
1. Download and install [Node.JS](https://nodejs.org/en/download/)
2. Download [EasyStart source code (latest release)](https://github.com/daneeskripter/EasyStart/releases)
3. Go to [Discord Developer Portal](https://discord.com/developers) and create application
4. In left click on bot tab and click Add Bot
5. Click on copy button to copy token
6. Enable PRESENCE and SERVER MEMBER intents
7. Go to the folder where you downloaded source code
8. Open config.json in text editor
9. Paste token and type prefix
10. At top line of file explorer type cmd and press enter
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
