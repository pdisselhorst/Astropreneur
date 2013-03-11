private var offsetY : float;
 
function Update () 
{
    renderer.material.mainTextureOffset = Vector3(0,offsetY);
    offsetY += 0.2 * Time.deltaTime;
}