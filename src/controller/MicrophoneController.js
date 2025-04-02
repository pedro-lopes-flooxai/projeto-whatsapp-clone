import { ClassEvent } from "../util/ClassEvent";

export class MicrophoneController extends ClassEvent {

    constructor(){

        super();

        this._mimeType = 'audio/webm';

        this._available = false;

    navigator.mediaDevices.getUserMedia({
        audio: true
        }).then(stream=>{

            this._avaiable = true;

            this._stream = stream;

            this.trigger('ready', audio);

   
        }).catch(err=>{
            console.error(err);
        });
    }

    isAvailable(){



    }

    stop(){

        this._stream.getTracks().forEach(track =>{
            track.stop();
        });

    }

    startRecorder(){

        if (this.isAvailable()) {

            this._mediaRecorder = new MediaRecorder(this._stream, {mimeType: this._mimetype});

            this._recordedChunks = [];

            this._mediaRecorder.addEventListener('dataavailable', e=>{

                if (e.data.size > 0) this._recordedChunks.push();

            });

            this._mediaRecorder.addEventListener('stop', e=>{

                let blob = new Blob(this._recordedChunks, {
                    type: this._mimeType
                });

                let filename = `rec${Date.now()}.webm`;

                let file = new File([blob], filename, {
                    type: type._mimeType,
                    lastModified: Date.now()
                });

                let reader = new FileReader();

                reader.onload = e =>{

                    let audio = new Audio(reader.result);

                    audio.play();
                }

                reader.readAsDataURL(file);

            });

            this.MediaRecorder.start();

        }
    }

    stopRecorder(){

        if (this.isAvailable()) {

            this._mediaRecorder.stop();
            this.stop();

        }
        
    }
}