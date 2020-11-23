var sound = new Howl({
    src: ['src/audiofiles/sound_02.mp3'],
    html5: true,
    loop: true
});

function setRadioSound(event) {

    sound.pause();

    if (radioState.powerOn && radioState.cdClosed) {
        if (radioState.volumeHigh) {
            Howler.volume(0.5);
        } else {
            Howler.volume(0.1);
        }
        if (radioState.play) {
            sound.play();
        }else if(radioState.stop && !radioState.play){
            sound.stop();
        }else if (!radioState.play){
            sound.pause();
        }
    } else {
        Howler.volume(0);
    }
}
