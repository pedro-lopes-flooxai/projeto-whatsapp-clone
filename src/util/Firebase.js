const firebase = require('firebase');
require('firebase/firestore')

export class Firebase {

    constructor(){

        this._config = {

                //////////firebase////////////

        };

        this.init();

    }

    init(){

        if (!window._initializedFirebase){
            firebase.initialize(this._config);

            firebase.firestore().settings({
                timestampInSnapshot: true

        });
            window._initializedFirebase = true;
            
        }
    }

    static db(){

        return firebase.firestore();
    }

    static hd(){

        return firebase.storage();
    }

    initAuth(){

        return new Promise((s, f)=>{

            let provider = new firebase.auth.GoogleAuthProvider();

            firebase.auth().signInWithPopup(provider)
        
            .then(result=>{
                
                let token = result.creedential.acessToken;
                let user = result.user;
                
                s({
                    user, 
                    token
                 });

            })
            .catch(err=>{
                f(err);
            });

        });

    }

}