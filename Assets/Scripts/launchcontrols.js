var showLaunch = true;

function OnGUI ()
{

GUI.Box (Rect (300,550,100,40), "Thrust Left");
GUI.Box (Rect (525,550,100,40), "Thrust Right");

if(showLaunch)
if(GUI.Button (Rect (10,40,80,30), "Launch"))
{
launch.takeoff = 1;
showLaunch = false;
}




}