static var selectedId : int;
static var speed : int = 3;
 
function Update () {

	if (Input.GetKey (KeyCode.LeftArrow)) transform.Translate (Vector3(1,0,0) * Time.deltaTime*speed);
	
    if (Input.GetKey (KeyCode.RightArrow)) transform.Translate (Vector3(-1,0,0) * Time.deltaTime*speed);

    if (Input.GetKey (KeyCode.UpArrow)) transform.Translate (Vector3(0,0,-1) * Time.deltaTime*speed);
    
    if (Input.GetKey (KeyCode.DownArrow)) transform.Translate (Vector3(0,0,1) * Time.deltaTime*speed);

}
 
function OnMouseDown () {
    selectedId = GetInstanceID();
}