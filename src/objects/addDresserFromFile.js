function addDresserFromFile() {

    dresser = new THREE.Group();

    var fbxloader = new THREE.FBXLoader();


    // https://free3d.com/3d-model/dresser-74200.html
    fbxloader.load('src/models/Dresser.fbx', function(object) {
        dresser.add(object);

        object.traverse(function(child) {
            if (child.isMesh) {
                child.castShadow = true;
                child.receiveShadow = true;
            }
        });
    });

    scene.add(dresser);

    dresser.rotation.y = -90 * DEG_TO_RAD;
    dresser.position.set(0,30.1,0);
    

    physics.addBox(dresser, 62, 60.2, 120.2, 0);
}
