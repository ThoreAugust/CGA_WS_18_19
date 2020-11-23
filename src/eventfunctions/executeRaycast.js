raycaster = new THREE.Raycaster();

function executeRaycast(event) {

    raycaster.setFromCamera(mousePosition, camera);

    var intersects = raycaster.intersectObjects(scene.children, true);

    if (intersects.length > 0) {

        var firstHit = intersects[0].object;
        if (firstHit.name === "On") {
            radioState.powerOn = !radioState.powerOn;
            firstHit.userData.toggleAnimationEndPosition();
            window.dispatchEvent(new Event('radioStateChanged'));
            console.log(radioState.powerOn);            
        } else if (firstHit.name === "Open" && radioState.powerOn) {
            firstHit.userData.forward = !firstHit.userData.forward;
            if (firstHit.userData.forward) {
                firstHit.userData.backwardTween.stop();
                firstHit.userData.forwardTween.start();
				firstHit.userData.forwardTween.onComplete(function(){
					radioState.cdClosed = true;
					window.dispatchEvent(new Event('radioStateChanged'));
				});
            } else {
                firstHit.userData.forwardTween.stop();
                firstHit.userData.backwardTween.start();
				radioState.cdClosed = false;	
				window.dispatchEvent(new Event('radioStateChanged'));			
            }
            console.log(radioState.cdClosed);
        } else if (firstHit.name === "Play" && radioState.powerOn) {
            radioState.play = !radioState.play;
            radioState.stop = false;
            window.dispatchEvent(new Event('radioStateChanged'));
            console.log(radioState.play)
        } else if(firstHit.name === "Stop" && radioState.powerOn){
            radioState.stop = true;
            radioState.play = false;
            window.dispatchEvent(new Event('radioStateChanged'));
            console.log(radioState.stop);
        }else if (firstHit.name === "Volume") {
            radioState.volumeHigh = !radioState.volumeHigh;
            window.dispatchEvent(new Event('radioStateChanged'));           
            console.log(radioState.volumeHigh);
        }
    }
}
