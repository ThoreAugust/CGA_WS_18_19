function addRadio() {

    radio = new THREE.Group();
    box1 = new THREE.Group();
    box2 = new THREE.Group();

    var metallMaterial = new THREE.MeshStandardMaterial({
        color: 0xb0b0b0,
        roughness: 0.2,
        metalness: 0.5
    });
    // MainBody
    var korpusGeometry = new THREE.BoxGeometry(32,14,31);
    var korpusMaterial = new THREE.MeshLambertMaterial({
        color: 0x0a0a0a
    });
    korpusMaterial.map = new THREE.TextureLoader().load('src/images/wood.png');
    var korpus = new THREE.Mesh(korpusGeometry,korpusMaterial);
    korpus.castShadow = true;
    korpus.recieveShadow = true;    
    radio.add(korpus);
    
    //Blende
    var mainBlendeGeometry = new THREE.BoxGeometry(30,12,1);
    var mainBlendeMaterial = new THREE.MeshLambertMaterial({
        color:0x696969
    });
    mainBlendeMaterial.map = new THREE.TextureLoader().load('src/images/mainblende.png');
    var mainBlende = new THREE.Mesh(mainBlendeGeometry, mainBlendeMaterial);
    mainBlende.position.set(0,0,15.1);
    radio.add(mainBlende);
    

    //CD-Slot
    var cdSlotGeometry = new THREE.BoxGeometry(12.375,1.75,13);
    var cdSlotMaterial = new THREE.MeshLambertMaterial({
        color: 0xffffff
    });
    var cdSlotInMaterial = new THREE.MeshLambertMaterial({
        color: 0x0684FA
    });
    var cdSlotSideMaterial = new THREE.MeshLambertMaterial({
        color: 0x000000
    });
    cdSlotInMaterial.map = new THREE.TextureLoader().load('src/images/cdIn.png');
    cdSlotMaterial.map = new THREE.TextureLoader().load('src/images/cdLid.png');
    var cdSlotArray = [cdSlotSideMaterial,cdSlotSideMaterial,cdSlotInMaterial,cdSlotSideMaterial,cdSlotMaterial,cdSlotSideMaterial];
    var cdSlot = new THREE.Mesh(cdSlotGeometry,cdSlotArray);
    cdSlot.position.set(-7.25,0.2,19);
    radio.add(cdSlot);
    

    //Volume
    var volumeGeometry = new THREE.CylinderGeometry(2.75,2.75,3,12,1,false);
    var volumeMaterial = new THREE.MeshStandardMaterial({
        color: 0xb3b3b3,
        roughness: 0.2,
        metalness: 0.5
    });
    var volume = new THREE.Mesh(volumeGeometry,volumeMaterial);
    volume.position.set(11.5,0,15);
    volume.rotation.x = 90 * DEG_TO_RAD;
    volume.name = "Volume";
    radio.add(volume);
    

    //Buttons - Top
    var smallButtonGeometry = new THREE.BoxGeometry(1.5,0.5,1);
    var ButtonMaterial = new THREE.MeshStandardMaterial({
        color: 0xb3b3b3,
        roughness: 0.2,
        metalness: 0.5
    });
    var onButton = new THREE.Mesh(smallButtonGeometry, ButtonMaterial);
    onButton.position.set(-12.25,2.75,15.5);
    onButton.name = "On";

    onAnimation = new Animation(onButton, AnimationType.TRANSLATION, AnimationAxis.Z);
    onAnimation.setAmount(-0.15);
    onAnimation.setSpeed(2);
    onButton.userData = onAnimation;
    radio.add(onButton);

    var functionButton = new THREE.Mesh(smallButtonGeometry,ButtonMaterial);
    functionButton.position.set(-9.75,2.75,15.5);
    functionButton.name = "Function";
    radio.add(functionButton);

    var recButton = new THREE.Mesh(smallButtonGeometry,ButtonMaterial);
    recButton.position.set(-7.25,2.75,15.5);
    recButton.name = "Record";
    radio.add(recButton);

    var tsButton = new THREE.Mesh(smallButtonGeometry,ButtonMaterial);
    tsButton.position.set(-4.75,2.75,15.5);
    tsButton.name = "TS";
    radio.add(tsButton);

    var openButton = new THREE.Mesh(smallButtonGeometry,ButtonMaterial);
    openButton.position.set(-2.25,2.75,15.5);
    openButton.name = "Open";
    radio.add(openButton);

    var tweens = {
        forward: false,
        forwardTween: new TWEEN.Tween(cdSlot.position).to(new THREE.Vector3(cdSlot.position.x, cdSlot.position.y, cdSlot.position.z - 9.75),2000).easing(TWEEN.Easing.Quadratic.Out),
        backwardTween: new TWEEN.Tween(cdSlot.position).to(new THREE.Vector3(cdSlot.position.x, cdSlot.position.y, cdSlot.position.z),2000).easing(TWEEN.Easing.Quadratic.Out),
    };
    openButton.userData = tweens;


    //Buttons-Bottom
    var largeButtonGeometry = new THREE.BoxGeometry(2.15,0.5,1);

    var playButton = new THREE.Mesh(largeButtonGeometry,ButtonMaterial);
    playButton.position.set(-13.9,-2.9,15.5);
    playButton.name = "Play";
    radio.add(playButton);

    var stopButton = new THREE.Mesh(largeButtonGeometry,ButtonMaterial);
    stopButton.position.set(-11.7,-2.9,15.5);
    stopButton.name = "Stop";
    radio.add(stopButton);

    var backwardsButton = new THREE.Mesh(largeButtonGeometry,ButtonMaterial);
    backwardsButton.position.set(-9.5,-2.9,15.5);
    backwardsButton.name = "Back";
    radio.add(backwardsButton);

    var forwardsButton = new THREE.Mesh(largeButtonGeometry,ButtonMaterial);
    forwardsButton.position.set(-7.3,-2.9,15.5);
    forwardsButton.name = "Forward";
    radio.add(forwardsButton);

    var downButton = new THREE.Mesh(largeButtonGeometry,ButtonMaterial);
    downButton.position.set(-5.1,-2.9,15.5);
    downButton.name = "Down";
    radio.add(downButton);

    var upButton = new THREE.Mesh(largeButtonGeometry,ButtonMaterial);
    upButton.position.set(-2.9,-2.9,15.5);
    upButton.name = "Up";
    radio.add(upButton);

    var memoryButton = new THREE.Mesh(largeButtonGeometry,ButtonMaterial);
    memoryButton.position.set(-0.7,-2.9,15.5);
    memoryButton.name = "Memory";
    radio.add(memoryButton);

    var modeButton = new THREE.Mesh(largeButtonGeometry,ButtonMaterial);
    modeButton.position.set(1.5,-2.9,15.5);
    modeButton.name = "Mode";
    radio.add(modeButton);

    var sleepButton = new THREE.Mesh(largeButtonGeometry,ButtonMaterial);
    sleepButton.position.set(3.7,-2.9,15.5);
    sleepButton.name = "Sleep";
    radio.add(sleepButton);

    var eqButton = new THREE.Mesh(largeButtonGeometry,ButtonMaterial);
    eqButton.position.set(5.9,-2.9,15.5);
    eqButton.name = "EQ";
    radio.add(eqButton);


    //Input
    var inputSocketGeometry = new THREE.BoxGeometry(8.4,2,1);
    var inputSocketMaterial = new THREE.MeshStandardMaterial({
        color: 0xb0b0b0,
        roughness: 0.2,
        metalness: 0.4
    });
    inputSocketMaterial.map = new THREE.TextureLoader().load('src/images/inputSocket.png');
    var inputSocket = new THREE.Mesh(inputSocketGeometry,inputSocketMaterial);
    inputSocket.position.set(6.75,-4.5,15.15);

    radio.add(inputSocket);

    radio.position.set(0,60.2,0);

    radioState = {
        powerOn: false,
        play: false,
        stop: false,
        cdClosed: false,
        volumeHigh: false
    }

    physics.addBox(radio, 32, 14, 32, 3.5);

    scene.add(radio);

    //Box1
    var boxBodyGeometry = new THREE.BoxGeometry(14.5,22.5,15);
    var boxBodyMaterial = new THREE.MeshLambertMaterial({
        color: 0x0a0a0a
    });
    boxBodyMaterial.map = new THREE.TextureLoader().load('src/images/wood.png');
    var box1Body = new THREE.Mesh(boxBodyGeometry,boxBodyMaterial);
    box1Body.castShadow = true;
    box1Body.recieveShadow = true;

    box1.add(box1Body);
    box1.position.set(40,68.7,0);

    var boxBlendeGeometry = new THREE.BoxGeometry(10,18,1);
    var boxBlendeMaterial = new THREE.MeshStandardMaterial({
        color: 0xb0b0b0,
        roughness: 0.2,
        metalness: 0.5
    });
    boxBlendeMaterial.map = new THREE.TextureLoader().load('src/images/boxBlendeFront.png');
    var boxBlendenArray = [metallMaterial,metallMaterial,metallMaterial,metallMaterial,boxBlendeMaterial,metallMaterial]
    var box1Blende = new THREE.Mesh(boxBlendeGeometry,boxBlendenArray);
    box1Blende.position.set(0,0,7.5);
    box1Blende.castShadow = true;
    box1Blende.recieveShadow = true;
    box1.add(box1Blende);

    var boxLautsprecherGeometry = new THREE.CylinderGeometry(6,4,1,32,1,false);
    var boxLautsprecherMaterial = new THREE.MeshStandardMaterial({
        color: 0xb0b0b0,
        roughness: 0.2,
        metalness: 0.5
    });
    boxLautsprecherMaterial.map = new THREE.TextureLoader().load('src/images/box.png');
    boxMatArray = [metallMaterial,boxLautsprecherMaterial,metallMaterial];
    var box1Lautsprecher = new THREE.Mesh(boxLautsprecherGeometry,boxMatArray);
    box1Lautsprecher.position.set(0,-2,7.9);
    box1Lautsprecher.rotation.x = 90 * DEG_TO_RAD;
    box1Lautsprecher.castShadow = true;
    box1Lautsprecher.recieveShadow = true;
    box1.add(box1Lautsprecher);

    var boxHochtoenerGeometry = new THREE.CylinderGeometry(2,1.5,1,32,1,false);
    var boxHochtoenerMaterial = new THREE.MeshStandardMaterial({
        color: 0xb0b0b0,
        roughness: 0.2,
        metalness: 0.5
    });
    boxHochtoenerMaterial.map = new THREE.TextureLoader().load('src/images/hochton.png');
    boxHochtoenerArray = [metallMaterial,boxHochtoenerMaterial,metallMaterial];
    var box1Hochtoener = new THREE.Mesh(boxHochtoenerGeometry,boxHochtoenerArray);
    box1Hochtoener.position.set(0,6.5,7.7);
    box1Hochtoener.rotation.x = 90 * DEG_TO_RAD;
    box1.add(box1Hochtoener);

    physics.addBox(box1, 14.5,22.5,15,0.938);

    scene.add(box1);

    //Box2
    var box2Body = new THREE.Mesh(boxBodyGeometry,boxBodyMaterial);
    box2Body.castShadow = true;
    box2Body.recieveShadow = true;

    box2.add(box2Body);
    box2.position.set(-40,68.7,0);

    var box2Blende = new THREE.Mesh(boxBlendeGeometry,boxBlendenArray);
    box2Blende.position.set(0,0,7.5);
    box2Blende.castShadow = true;
    box2Blende.recieveShadow = true;
    box2.add(box2Blende);

    var box2Lautsprecher = new THREE.Mesh(boxLautsprecherGeometry,boxMatArray);
    box2Lautsprecher.position.set(0,-2,7.9);
    box2Lautsprecher.rotation.x = 90 * DEG_TO_RAD;
    box2Lautsprecher.castShadow = true;
    box2Lautsprecher.recieveShadow = true;
    box2.add(box2Lautsprecher);

    var box2Hochtoener = new THREE.Mesh(boxHochtoenerGeometry,boxHochtoenerArray);
    box2Hochtoener.position.set(0,6.5,7.7);
    box2Hochtoener.rotation.x = 90 * DEG_TO_RAD;
    box2.add(box2Hochtoener);

    physics.addBox(box2, 14.5,22.5,15,0.938);

    scene.add(box2);
}
