image_array = [
'0.gif',
'1.gif',
'2.gif',
'3.gif',
'4.gif',
'5.gif',
'6.gif'
]

function get_random_image(){
    random_index = Math.floor(Math.random() * image_array.length)


selected_image = image_array[random_index]

document.getElementById('image_shower').src = `/${selected_image}`

}