<body></body>
<script src="http://gamingJS.com/Three.js"></script>
<script src="http://gamingJS.com/ChromeFixes.js"></script>
<script>
 // This is where stuff in our game will happen:
 var scene = new THREE.Scene();

 // This is what sees the stuff:
 var aspect_ratio = window.innerWidth / window.innerHeight;
 var camera = new THREE.PerspectiveCamera(75, aspect_ratio, 1, 10000);
 camera.position.z = 500;
 scene.add(camera);

 // This will draw what the camera sees onto the screen:
 var renderer = new THREE.CanvasRenderer();
 renderer.setSize(window.innerWidth, window.innerHeight);
 document.body.appendChild(renderer.domElement);

 // ******** START CODING ON THE NEXT LINE ********
 var cover = new THREE.MeshBasicMaterial();
 cover.color.setRGB(0,255,0);
 var body = new THREE.SphereGeometry(100);
 var avatar = new THREE.Mesh(body, cover);
 scene.add(avatar);
 
 var hand = new THREE.SphereGeometry(50);
 
 var right_hand = new THREE.Mesh(hand, cover);
 right_hand.position.set(-130, 0, 0);
 avatar.add(right_hand);
 
 var left_hand = new THREE.Mesh(hand, cover);
 left_hand.position.set(130, 0, 0);
 avatar.add(left_hand);
 
 var feet = new THREE.SphereGeometry(50);
 
 var right_feet = new THREE.Mesh(feet, cover);
 right_feet.position.set(-75, -125, 0);
 avatar.add(right_feet);
 
 var left_feet = new THREE.Mesh(feet, cover);
 left_feet.position.set(75, -125, 0);
 avatar.add(left_feet);
 
 avatar.add(camera);
 
 makeTreeAt( 500, 0);
 makeTreeAt(-500, 0);
 makeTreeAt( 750, -1000);
 makeTreeAt(-750, -1000);
 
 function makeTreeAt(x, z) {
   var trunk = new THREE.Mesh(
     new THREE.CylinderGeometry(50, 50, 200),
     new THREE.MeshBasicMaterial({color: 0xA0522D})
   );
   
   var top = new THREE.Mesh(
     new THREE.SphereGeometry(150),
     new THREE.MeshBasicMaterial({color: 0xF1A745})
   );
   top.position.y = 175;
   trunk.add(top);
   
   trunk.position.set(x, -75, z);
   scene.add(trunk);
 }
 
 // trunk.add(camera);
 
  // Monster
 // var monster_cover = new THREE.MeshBasicMaterial();
 // monster_cover.color.setRGB(0,100,100);
 // var monster_body = new THREE.CylinderGeometry(100, 100, 100);
 //var monster = new THREE.Mesh(monster_body, monster_cover);
// scene.add(monster);
// monster.position.set(200, 0, 0);

 
 // Now, show what the camera sees on the screen:
 // renderer.render(scene, camera);
 
 // Now, animate what the camera sees on the screen:
 function animate() {
   requestAnimationFrame(animate);
   acrobatics();
   renderer.render(scene, camera);
 }
 animate();
 var is_cartwheeling = false;
 var is_flipping = false;
 function acrobatics() {
   if (is_cartwheeling) {
     avatar.rotation.z = avatar.rotation.z + 0.05;
   }
   if (is_flipping) {
     avatar.rotation.x = avatar.rotation.x + 0.05;
   }
 }
 
 // Listen for keypress events
 document.addEventListener('keydown', function(event) {
   // alert(event.keyCode);
   var code = event.keyCode;
   var speed = 80 ;
   if (code == 65 || code == 37) avatar.position.x = avatar.position.x-speed; // left
   if (code == 87 || code == 38) avatar.position.y = avatar.position.y+speed; // up
   if (code == 68 || code == 39) avatar.position.x = avatar.position.x+speed; // right
   if (code == 83 || code == 40) avatar.position.y = avatar.position.y-speed; // down
   if (code == 81) avatar.position.z = avatar.position.z+speed; // front
   if (code == 69) avatar.position.z = avatar.position.z-speed; // back
   if (code == 67) is_cartwheeling = !is_cartwheeling; // C
   if (code == 70) is_flipping = !is_flipping; // F
 });
 
 // function walk() {}
 // 
 // function turn() {
 //   var direction = 0;
 //   if (is_moving_forward) direction = Math.PI;
 //   if (is_moving_back) direction = 0;
 //   if (is_moving_right) direction = Math.PI/2;
 //   if (is_moving_left) direction = -Math.PI/2;
 //   
 //   avator.rotation.y = direction;
 // }
 // 
 // function acrobatics() {}

</script>