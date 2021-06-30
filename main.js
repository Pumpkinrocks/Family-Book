var images =
["./pics/bhargav.jpg","./pics/mokshith.jpg","./pics/ashok.jpg","./pics/sirisha.JPG"]

var names = ["Bhargav Ram Gummadi","Mokshith Gummadi","Ashok Gummadi","Sirisha Gummadi"]

var i = 0;
function update()
{
    
    var number_of_family_members_in_array =3
    if(i> number_of_family_members_in_array )
    {
        i=0;
    }
    var updatedImage = images[i];
    var updatedName = names[i];
    document.getElementById("family_member_image").src = updatedImage;
    document.getElementById("family_member_name").innerHTML = updatedName;
    i++;
}