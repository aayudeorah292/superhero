var canvas = new fabric.canvas("mycanvas");
block_image_width = 30;
block_image_height = 30;
player_x = 10;
player_y = 10;
var player_object="";
var block_image_object="";
function player_update()
{
    fabric.image.formurl("one man.jpg",function(img)
    {
        player_object.ScaleToWidth(150);
        player_object.ScaleToheight(140);
        player_object.set({
            top:player_y,
            left:player_x
        });
        canvas.add(player_object);
    });
}
function new_image()
{
    fabric.image.formurl(get_image,function(img)
    {
        block_image_object.ScaleToWidth(block_image_width);
        block_image_object.ScaleToheight(block_image_height);
        block_image_object.set({
            top:player_y,
            left:player_x
        });
        canvas.add(block_image_object);
    });
}