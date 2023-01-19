lightintensity =(  3  ) ;
onload = function text3() {
	setTimeout(doSomething2, 0);
	function doSomething2() {
	  console.log("load");
scene.background = new THREE.Color(bgcl); 
scene.directionalLight = new THREE.DirectionalLight(0xffffff, lightintensity );
cl.select();
cl = event.target.value;
	setTimeout(0);
	
	return text3();
}}
/* zajmij się tym!!! 
cl=document.querySelector('color');

//rwnder kontextu render render
onload = function text3() {
	setTimeout(doSomething2, 0);
	function doSomething2() {
	  console.log("load");
scene.background = new THREE.Color(cl); 
cl.select();
cl = event.target.value;
	setTimeout(0);
	return text3();
}}
*/
//endif;
            colorinpt = document.getElementById ('color')
            
      
      // Set Scene
      var scene = new THREE.Scene();
      scene.background = new THREE.Color('#15006A'); // black background
      

      // Set Camera
      var camera = new THREE.PerspectiveCamera(100,window.innerWidth / window.innerHeight, 0.1, 1000 , 1000);
      camera.position.set(0, 0, 
      3);

      // Set Renderer
      var renderer = new THREE.WebGLRenderer();
      renderer.setSize(window.innerWidth, window.innerHeight);
      document.body.appendChild(renderer.domElement);
     
    let wartosc = 
    document.getElementById('m4');
      
 // kolory
var material2 = new THREE.MeshStandardMaterial({
   color: 'black'
 });
 var material3 = new THREE.MeshStandardMaterial({
   color: '#0E0500'
 });
      var material = new THREE.MeshStandardMaterial({
          color: '#112200' 
      });
      var treelogmaterial= new THREE.MeshStandardMaterial({
        color: '#211300'
      });
      var leavematerial = new THREE.MeshStandardMaterial({
        color: '#111800'
      });
 //objekty
 
      var floor = new THREE.BoxGeometry(100,10,100);
      var floormap2 = new THREE.BoxGeometry(100,10,100);
      var geometry = new THREE.BoxGeometry(1, 1,1);
      var treelog = new THREE.BoxGeometry(1, 8,1);
      var leaves = new THREE.SphereGeometry(5,5,5);
          //
      var cube = new THREE.Mesh(geometry, material2);
			var floor= new THREE.Mesh(floor, material);
				var floormap2 = new THREE.Mesh(floormap2, material);
			var tree = new THREE.Mesh(treelog, treelogmaterial);
						var tree3 = new THREE.Mesh(treelog, treelogmaterial);
		var leaf = new THREE.Mesh(leaves, leavematerial ) ;
									var tree2 = new THREE.Mesh(treelog, treelogmaterial);
	var leaf2 = new THREE.Mesh(leaves, leavematerial ) ;
	var leaf3 = new THREE.Mesh(leaves, leavematerial ) ;
//obtut objektu	

      cube.rotation.x = 22.5;
      cube.rotation.y = 45;
//pokaż objekt

      scene.add(cube);
			scene.add(floor);
						scene.add(floormap2);
			scene.add(tree);
			scene.add(leaf);
			scene.add(tree2);
scene.add(leaf2);
			scene.add(leaf3);
			scene.add(tree3);
			//objekty pozycja 
			
			floor.position.y -= 8
			floormap2.position.y -= 8
			floormap2.position.z -= 110
			 tree.position.z -= 10
						 tree.position.x -= 10
		 leaf.position.z -= 10
					 leaf.position.x -= 10
					 leaf.position.y += 5
			tree2.position.y -= 2
						tree2.position.z -= 6
			leaf2.position.z -= 6
			leaf2.position.y += 5
			leaf3.position.y += 5
			leaf3.position.x += 10
			tree3.position.x += 10
			leaf3.position.z -= 10
						tree3.position.z -= 10
      // Directional Light
      var directionalLight = new THREE.DirectionalLight(0xffffff, lightintensity );
       lightintensity = 2;
      directionalLight.position.x = 0;
      directionalLight.position.y = 3;
      directionalLight.position.z = 2;
      
      scene.add(directionalLight);




//pętlowanie




      // Show the scene
      renderer.render(scene, camera, directionalLight);
      var render = function() {
			requestAnimationFrame(render);
			cube.rotation.x -= 0.05;
		cube.rotation.z += 0.08;

			if (xt > 800) {
			  camera.rotation.y -= xt / 30000;
			}
if (xt < 1000) {
  camera.rotation.y += xt / 30000;
}



			if (yt < 220) {
			  camera.rotation.x += yt / 25000;
			}
if (yt > 320) {
  camera.rotation.x -= yt / 25000;
}
			
			
			
			renderer.render(scene, camera);


};	
function myFunction(event) {
  
     xt = event.touches[0].clientX;
     yt = event.touches[0].clientY;
     
     TO=1;
     
  document.getElementById("console").innerHTML = xt + ", " + yt +" ......krystian popiołek code....alpha.indev.1.0"
  
}

function go(event) {
  
     camera.position.z -= 0.1;
  
}
function back(event) {
  
     camera.position.z += 0.1;
  
}
function up(event) {
  camera.position.y  += 0.1 ;
}

function left(event) {
  camera.position.x  += 0.1 ;
}

function right(event) {
  camera.position.x  -= 0.1 ;
}
function down(event) {
  camera.position.y -= 0.1;
}

render();


if  ((event) = false) {
  xt=0;
  yt=0;
  
}
window.addEventListener('touchstart', function onFirstTouch() {
  // we could use a class
  document.body.classList.add('user-is-touching');

  // or set some global variable
  window.USER_IS_TOUCHING = true;

  // or set your app's state however you normally would
  myFrameworkOfChoice.dispatchEvent('USER_IS_TOUCHING', true);

  // we only need to know once that a human touched the screen, so we can stop listening now
  window.removeEventListener('touchstart', onFirstTouch, false);
}, false);
onload = function gmtime() {
	setTimeout(doSomething2, 1);
	function doSomething2() {
	
	      lightintensity + 1;
	document.getElementById("console2").innerHTML = ". X.cam poz" +camera.position.x+".  Z.cam poz."+camera.position.y;
	setTimeout(1  );
	return gmtime();
}}

 function menu(){
         document.getElementById('m').style.visibility ="visible ";
 }
function night(){
   bgcl = 'grey' ;
   li = 2;

  scene.background = new THREE.Color(lightintensity); 
    /*  var directionalLight = new THREE.DirectionalLight(0xffffff, 2);
          */
   scene.add(directionalLight);
 }
 
