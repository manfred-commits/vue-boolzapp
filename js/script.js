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
                        status: 'sent',
                        infoBox:{
                            visibility:false,
                            index:0,
                        }
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        message: 'Ricordati di dargli da mangiare',
                        status: 'sent',
                        infoBox:{
                            visibility:false,
                            index:1
                        }
                    },
                    {
                        date: '10/01/2020 16:15:22',
                        message: 'Tutto fatto!',
                        status: 'received',
                        infoBox:{
                            visibility:false,
                            index:2
                        }
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
                    status: 'sent',
                    infoBox:{
                        visibility:false,
                        index:0
                    }
                },
                    {
                        date: '20/03/2020 16:30:55',
                        message: 'Bene grazie! Stasera ci vediamo?',
                        status: 'received',
                        infoBox:{
                            visibility:false,
                            index:1
                        }
                    },
                    {
                        date: '20/03/2020 16:35:00',
                        message: 'Mi piacerebbe ma devo andare a fare la spesa.',
                        // penso il valore fornito qui sia sbagliato
                        // status: 'received'
                        status: 'sent',
                        infoBox:{
                            visibility:false,
                            index:2
                        }
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
                    status: 'received',
                    infoBox:{
                        visibility:false,
                        index:0
                    }
                },
                    {
                        date: '28/03/2020 10:20:10',
                        message: 'Sicuro di non aver sbagliato chat?',
                        status: 'sent',
                        infoBox:{
                            visibility:false,
                            index:1
                        }
                    },
                    {
                        date: '28/03/2020 16:15:22',
                        message: 'Ah scusa!',
                        status: 'received',
                        infoBox:{
                            visibility:false,
                            index:2
                        }
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
                    status: 'sent',
                    infoBox:{
                        visibility:false,
                        index:0
                    }
                },
                    {
                        date: '10/01/2020 15:50:00',
                        message: 'Si, ma preferirei andare al cinema',
                        status: 'received',
                        infoBox:{
                            visibility:false,
                            index:1
                        }
                        

                    }
                ],
            },
        ],
        contactIndex:0,
        messageInput:"",
        response:"",
        filter:"",
        visible:false,
        popUpChecker:0,
    },
    mounted:function(){
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
        // this method changes the value of the visible boolean property(in the contacts array), switching the value to true if the user input is included into the array contacts & to false if the userinput isn't included. Then when the user input is, once again "" it resets all the visible values in contacts to true (so that all the contacts can be shown)
        filteredObj: function(){
            if(this.filter.length>0){
                
                this.contacts.forEach(contact => {

                    if(contact.name.includes(this.filter)){
                        contact.visible=true;
                    }else{
                        contact.visible=false;
                    }
                });
            }else{
                this.contacts.forEach(contact => {

                    contact.visible=true;

                });
            }
        },
        boxPopup: function(boxState,index){
            if(boxState.infoBox.visibility==false && boxState.infoBox.index==index && this.popUpChecker==0){
                console.log(boxState);
                console.log(index);
                boxState.infoBox.visibility=true;
                this.popUpChecker=1;
            }else if(boxState.infoBox.visibility==true && boxState.infoBox.index==index && this.popUpChecker==1){
                boxState.infoBox.visibility=false;
                this.popUpChecker=0;

            }
        },
        deleteMessage: function(messageIndex,state){
            console.log(messageIndex);
            this.contacts[this.contactIndex].messages.splice(messageIndex,1);
            // this.getIndex();
            this.popUpChecker=0;

        },
        getIndex: function(){

            this.contacts[this.contactIndex].messages.forEach((element,index)=> {
                console.log(`Indice ${element.infoBox.index}`);
                element.infoBox.index=index;
            });
        }
    }
});