static var selectedId : int;
static var speed : double = 15;
static var takeoff = 0;
static var launch = 0;
var explosion: GameObject;

function Update () {


if (takeoff == 1)
{

var exp:GameObject = Instantiate(explosion, this.transform.position, this.transform.rotation);
Destroy(exp,2.0);
launch = 1;
takeoff = 0;


}

if (launch == 1)
{

	if (Input.GetKey (KeyCode.LeftArrow)) transform.Translate (Vector3(1,0,0) * Time.deltaTime*speed);
	
    if (Input.GetKey (KeyCode.RightArrow)) transform.Translate (Vector3(-1,0,0) * Time.deltaTime*speed);

    transform.Translate (Vector3(0,0,-1) * Time.deltaTime*speed);
    
    if (speed < 30)
    {
    speed += .1;
    }
 
    
 	
 	
 	if(transform.position.y > -193)
    {
    Application.LoadLevel("leavingearth");
 	}
 	
 	}
          

 }
 
 
function OnMouseDown () {
    selectedId = GetInstanceID();
}