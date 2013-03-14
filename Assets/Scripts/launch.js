static var selectedId : int;
static var speed : double = 10;
 
function Update () {

	if (Input.GetKey (KeyCode.LeftArrow)) transform.Translate (Vector3(1,0,0) * Time.deltaTime*speed);
	
    if (Input.GetKey (KeyCode.RightArrow)) transform.Translate (Vector3(-1,0,0) * Time.deltaTime*speed);

    transform.Translate (Vector3(0,0,-1) * Time.deltaTime*speed);
    
    if (speed < 20)
    {
    speed += .01;
    }
 
    if(transform.position.y > -193)
    {
    print(" made it");
    Application.LoadLevel("leavingearth");
 	}
          

 
}
 
function OnMouseDown () {
    selectedId = GetInstanceID();
}