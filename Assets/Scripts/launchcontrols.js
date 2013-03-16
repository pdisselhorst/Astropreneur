var showLaunch = true;

function OnGUI ()
{

if(GUI.Button (Rect (300,550,100,40), "Thrust Left"))
{
	transform.Translate (Vector3(1,0,0) * Time.deltaTime*launch.speed);
	}
if(GUI.Button (Rect (525,550,100,40), "Thrust Right"))
{
    transform.Translate (Vector3(-1,0,0) * Time.deltaTime*launch.speed);
    }


if(showLaunch)
if(GUI.Button (Rect (10,40,80,30), "Launch"))
{
launch.takeoff = 1;
showLaunch = false;
}




}