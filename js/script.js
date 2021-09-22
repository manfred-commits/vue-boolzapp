var app = new Vue({
    el:"#root",
    data:{
        contacts: [
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
                messages: [{
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
                        // penso il valore fornito qui sia sbagliato
                        // status: 'received'
                        status: 'sent'
                    }
                ],
            },
            {
                name: 'Samuele',
                avatar: '_3',
                visible: true,
                messages: [{
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
                messages: [{
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
        ],
        contactIndex:0,
        messageInput:"",
        response:"",
        filter:"",
        oldObj:[]
    },
    mounted:function(){
        this.copyArr();
    },
    methods:{
        // this method pushes the value of a selected contact, and saves it into the variable contactIndex
        selectChat: function(contactsIndex){

            this.contactIndex=contactsIndex;

        },


        // thid methos sends a reply to an input msg sent by the user, in the specific array of objects selected by contactIndex
        sendReply:function(){
            this.contacts[this.contactIndex].messages.push({
                date :'10/01/2020 15:50:00',
                message: 'ok',
                status: 'received'
              });
        },


        // this method executes the push of the reply after a specific amount of seconds
        pushReply: function(){
            this.response=setTimeout(this.sendReply, 1000); 
        },


        // this method sends the user msg, inserted through the chat input, in the specific array of objects selected by contactIndex
        sendMessage: function(){

            this.contacts[this.contactIndex].messages.push({
              date :'10/01/2020 15:50:00',
              message: this.messageInput,
              status: 'sent'
            });

            this.messageInput="";

            // calling the method pushReply() here, allows us to start the method (pushReply()) that sends the reply ìok' after x amount of time
            this.pushReply();
        },
        // this method creates a shallow copy of the original array and copies it to oldObj, then 
        // creates a newObj equal to the filtered array that includes the user input (from the filter variable)
        // if the filter length is >0 therefore the input is being used, it pushes the new filtered array into the 
        // contacts obj, so that only the filtered contacts show. Else, it restores the old array, that was saved in 
        // oldObj
        copyArr: function(){
            this.oldObj=[...this.contacts];
        },
        filteredObj: function(){
            
            if(this.filter.length>0){
                let newObj= this.contacts.filter(el => el.name.includes(this.filter));
                this.contacts=newObj;
            }else{
                this.contacts=this.oldObj;
            }

            

        },

    }
});