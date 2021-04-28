var now = dayjs();
console.log(now);
var y= now.format('DD/MM/YYYY HH:mm:ss');
console.log(y);


    var app = new Vue({
        el:'#app',
        data: {
            newMess:{ //nuovo messaggio
                date: new Date,
                message: '',
                status: 'sent',
            },
            corr: '',//ricerca utente corrente
            io: { // dati utente registrato
                name:'Manuel della Gala',
                avatar: 'io',
            },            
            utenteCorrente: { // utente selezionato
                name: 'Michele',
                avatar: '_1',
                visible: true,
                messages: [
                    {
                        date: '10/01/2020 15:30:55',
                        message: 'Hai portato a spasso il cane?',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        message: 'Ricordati di dargli da mangiare',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 16:15:22',
                        message: 'Tutto fatto!',
                        status: 'received'
                    }
                ],
            },
            emojis: "😀 😃 😄 😁 😆 😅 😂 😉 😊 😇 😍 😘 😗 ☺️ 😚 😙 😋 😛 😜 😝 😐 😑 😶 😏 😒 😬 😌 😔 😪 😴 😷 😵 😎 😕 😟 😮 😯 😲 😳 😦 😧 😨 😰 😥 😢 😭 😱 😖 😣 😞 😓 😩 😫 😤 😡 😠 😈 👿 💀 💩 👹 👺 👻 👽 👾 😺 😸 😹 😻 😼 😽 🙀 😿 😾 🙈 🙉 🙊 💋 💌 💘 💝 💖 💗 💓 💞 💕 💟 💔 ❤️ 💛 💚 💙 💜 💯 💢 💥 💫 💦 💨 💣 💬 💭 💤 👋 ✋ 👌 ✌️ 👈 👉 👆 👇 ☝️ 👍 👎 ✊ 👊 👏 🙌 👐 🙏 💅 💪 👂 👃 👀 👅 👄 👶 👦 👧 👱 👨 👩 👴 👵 🙍 🙎 🙅 🙆 💁 🙋 🙇 👮 💂 👷 👸 👳 👲 👰‍♀️ 👼 🎅 💆 💇 🚶 🏃 💃 👯 🏇 🏂 🏄 🚣 🏊 🚴 🚵 🛀 👭 👫 👬 💏 💑 👪 👤 👥 👣 🐵 🐒 🐶 🐕 🐩 🐺 🐱 🐈 🐯 🐅 🐆 🐴 🐎 🐮 🐂 🐃 🐄 🐷 🐖 🐗 🐽 🐏 🐑 🐐 🐪 🐫 🐘 🐭 🐁 🐀 🐹 🐰 🐇 🐻 🐨 🐼 🐾 🐔 🐓 🐣 🐤 🐥 🐦 🐧 🐸 🐊 🐢 🐍 🐲 🐉 🐳 🐋 🐬 🐟 🐠 🐡 🐙 🐚 🐌 🐛 🐜 🐝 🐞 💐 🌸 💮 🌹 🌺 🌻 🌼 🌷 🌱 🌲 🌳 🌴 🌵 🌾 🌿 🍀 🍁 🍂 🍃 🍇 🍈 🍉 🍊 🍋 🍌 🍍 🍎 🍏 🍐 🍑 🍒 🍓 🍅 🍆 🌽 🍄 🌰 🍞 🍖 🍗 🍔 🍟 🍕 🍳 🍲 🍱 🍘 🍙 🍚 🍛 🍜 🍝 🍠 🍢 🍣 🍤 🍥 🍡 🍦 🍧 🍨 🍩 🍪 🎂 🍰 🍫 🍬 🍭 🍮 🍯 🍼 ☕ 🍵 🍶 🍷 🍸 🍹 🍺 🍻 🍴 🔪 🌍 🌎 🌏 🌐 🗾 🌋 🗻 🏠 🏡 🏢 🏣 🏤 🏥 🏦 🏨 🏩 🏪 🏫 🏬 🏭 🏯 🏰 💒 🗼 🗽 ⛪ ⛲ ⛺ 🌁 🌃 🌄 🌅 🌆 🌇 🌉 ♨️ 🎠 🎡 🎢 💈 🎪 🚂 🚃 🚄 🚅 🚆 🚇 🚈 🚉 🚊 🚝 🚞 🚋 🚌 🚍 🚎 🚐 🚑 🚒 🚓 🚔 🚕 🚖 🚗 🚘 🚙 🚚 🚛 🚜 🚲 🚏 ⛽ 🚨 🚥 🚦 🚧 ⚓ ⛵ 🚤 🚢 ✈️ 💺 🚁 🚟 🚠 🚡 🚀 ⌛ ⏳ ⌚ ⏰ 🕛 🕧 🕐 🕜 🕑 🕝 🕒 🕞 🕓 🕟 🕔 🕠 🕕 🕡 🕖 🕢 🕗 🕣 🕘 🕤 🕙 🕥 🕚 🕦 🌑 🌒 🌓 🌔 🌕 🌖 🌗 🌘 🌙 🌚 🌛 🌜 ☀️ 🌝 🌞 ⭐ 🌟 🌠 🌌 ☁️ ⛅ 🌀 🌈 🌂 ☔ ⚡ ❄️ ⛄ 🔥 💧 🌊 🎃 🎄 🎆 🎇 ✨ 🎈 🎉 🎊 🎋 🎍 🎎 🎏 🎐 🎑 🎀 🎁 🎫 🏆 ⚽ ⚾ 🏀 🏈 🏉 🎾 🎳 ⛳ 🎣 🎽 🎿 🎯 🎱 🔮 🎮 🎰 🎲 ♠️ ♥️ ♦️ ♣️ 🃏 🀄 🎴 🎭 🎨 👓 👔 👕 👖 👗 👘 👙 👚 👛 👜 👝 🎒 👞 👟 👠 👡 👢 👑 👒 🎩 🎓 💄 💍 💎 🔇 🔈 🔉 🔊 📢 📣 📯 🔔 🔕 🎼 🎵 🎶 🎤 🎧 📻 🎷 🎸 🎹 🎺 🎻 📱 📲 ☎️ 📞 📟 📠 🔋 🔌 💻 💽 💾 💿 📀 🎥 🎬 📺 📷 📹 📼 🔍 🔎 💡 🔦 🏮 📔 📕 📖 📗 📘 📙 📚 📓 📒 📃 📜 📄 📰 📑 🔖 💰 💴 💵 💶 💷 💸 💳 💹 ✉️ 📧 📨 📩 📤 📥 📦 📫 📪 📬 📭 📮 ✏️ ✒️ 📝 💼 📁 📂 📅 📆 📇 📈 📉 📊 📋 📌 📍 📎 📏 📐 ✂️ 🔒 🔓 🔏 🔐 🔑 🔨 🔫 🔧 🔩 🔗 🔬 🔭 📡 💉 💊 🚪 🚽 🚿 🛁 🚬 🗿 🏧 🚮 🚰 ♿ 🚹 🚺 🚻 🚼 🚾 🛂 🛃 🛄 🛅 ⚠️ 🚸 ⛔ 🚫 🚳 🚭 🚯 🚱 🚷 📵 🔞 ⬆️ ↗️ ➡️ ↘️ ⬇️ ↙️ ⬅️ ↖️ ↕️ ↔️ 🔃 🔄 🔙 🔚 🔛 🔜 🔝 🔯 ♈ ♉ ♊ ♋ ♌ ♍ ♎ ♏ ♐ ♑ ♒ ♓ ⛎ 🔀 🔁 🔂 ▶️ ◀️ 🔼 🔽 🎦 📶 📳 📴 ✖️ ➕ ➖ ➗ ‼️ ⁉️ ❓ ❔ ❕ ❗ 〰️ 💱 💲 ♻️ 🔱 📛 🔰 ⭕ ✅ ☑️ ❌ ❎ ➰ ➿ 〽️ ✳️ ✴️ ❇️ ©️ ®️ ™️ 🔠 🔡 🔢 🔣 🔤 🅰️ 🆎 🅱️ 🆑 🆒 🆓 🆔 Ⓜ️ 🆕 🆖 🅾️ 🆗 🅿️ 🆘 🆙 🆚 🈁 🈂️ 🈷️ 🈶 🈯 🉐 🈹 🈚 🈲 🉑 🈸 🈴 🈳 ㊗️ ㊙️ 🈺 🈵 🔴 🔵 ⚫ ⚪ ⬛ ⬜ ◼️ ◻️ ◾ ◽ ▪️ ▫️ 🔶 🔷 🔸 🔹 🔺 🔻 💠 🔘 🔳 🔲 🏁 🚩 🎌 🇨🇳 🇩🇪 🇪🇸 🇫🇷 🇬🇧 🇮🇹 🇯🇵 🇰🇷 🇷🇺 🇺🇸 📱",
            // Elenco contatti 
            yourPropNameHere: [
                {
                    name: 'Michele',
                    avatar: '_1',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Hai portato a spasso il cane?',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Ricordati di dargli da mangiare',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 16:15:22',
                            message: 'Tutto fatto!',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'Fabio',
                    avatar: '_2',
                    visible: true,
                    messages: [
                        {
                            date: '20/03/2020 16:30:00',
                            message: 'Ciao come stai?',
                            status: 'sent'
                        },
                        {
                            date: '20/03/2020 16:30:55',
                            message: 'Bene grazie! Stasera ci vediamo?',
                            status: 'received'
                        },
                        {
                            date: '20/03/2020 16:35:00',
                            message: 'Mi piacerebbe ma devo andare a fare la spesa.',
                            status: 'sent'
                        }
                    ],
                },
                {
                    name: 'Samuele',
                    avatar: '_3',
                    visible: true,
                    messages: [
                        {
                            date: '28/03/2020 10:10:40',
                            message: 'La Marianna va in campagna',
                            status: 'received'
                        },
                        {
                            date: '28/03/2020 10:20:10',
                            message: 'Sicuro di non aver sbagliato chat?',
                            status: 'sent'
                        },
                        {
                            date: '28/03/2020 16:15:22',
                            message: 'Ah scusa!',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'Luisa',
                    avatar: '_4',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Lo sai che ha aperto una nuova pizzeria?',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Si, ma preferirei andare al cinema',
                            status: 'received'
                        }
                    ],
                },
            ]
        },
        methods:{
            vs : function(usr){ // utente selezionato
                console.log(usr);
                this.utenteCorrente=usr;
            },
            echo : function(e){ //  scorre la lista contatti e confronta la stringa passata dall'input             
                for (elem of this.yourPropNameHere){                
                    elem.visible=elem.name.toLowerCase().includes(this.corr.toLowerCase().trim());                
                    }            
                },
            addMessage : function(msgs,msg,status){ // aggiunge il messaggio passo i messaggi dell'utente selezionato il messaggio da inserire e lo status
                let data = this.newMess.date;
                console.log('name',msgs);
                console.log('nuovo valore',this.newMess);
                msgs.messages.push({
                    message : msg,
                    date : (data.getDate()+"/"+(data.getMonth()+1)+"/"+(data.getFullYear())+"  "+data.getHours()+":"+data.getMinutes()+":"+data.getSeconds()), // aggiungo la data in formato IT
                    status : status,
                });
                console.log(msgs);                      
            },
            delay(msgs) { // dopo 1 secondo chiama la funzione addMessage
                var v = this;
                setTimeout(function () {
                  console.log('time',v.newMess.message);
                  v.addMessage(msgs,'ok','received');
                }, 1000);
            },
            conversation : function(msgs){ // chiamo due funzioni addMess e delay poi resetto l'input
                this.addMessage(msgs,this.newMess.message,this.newMess.status);
                this.delay(msgs);
                this.newMess.message = '';
            },
            insertEmoji: function(e){ // inserimento emoji
                //.newMess.push({message : 'prova'});
                               
                console.log(e.target.innerHTML);
                this.newMess.message = this.newMess.message+e.target.innerHTML    

            }
            
        }
    
})
