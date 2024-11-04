// Images -> Array to be filled with images
// Current -> Current image index. Can be scrolled left or right
const images = [];
let current = 0;

// Starting logic.
function main()
{
    fill_images(images, 3);
    append_element();
    add_scroll();
}

main();

// Creates an image with CSS class image. 
// Assumes images are stored in Images directory
function create_image(image_name_partial, image_class = "images")
{
    const image_name = './Images/' + image_name_partial;
    const image = document.createElement('img')
    image.setAttribute('class', image_class);
    image.setAttribute('src', image_name);

    return image;
}

// Requires created images to be stored in numerical order.
// image_array -> array to fill
// num_images -> number of images

function fill_images(image_array, num_images)
{
    for (let i = 0; i < num_images; i++)
    {
        const image_name = i + '.jpeg'
        image_array[i] = create_image(image_name);
    }
}


// Appends an element of an array, at a given index, to the target div.
function append_element(index = 0, array = images, target_div = "image_container")
{
    const container = document.getElementById(target_div);
    container.innerHTML = "";
    container.appendChild(array[index]);
}


// moves pointer (current defined at beg of file to move left over target array of images)
function scroll_left(image_array = images)
{
    if (current == 0)
    {
        current = image_array.length - 1; 
    }
    else
    {
        current --;
    }
    append_element(current);

}

// moves pointer (current defined at beg of file to move right over target array of images)
function scroll_right(image_array = images)
{
    if (current == image_array.length - 1)
    {
        current = 0; 
    }
    else
    {
        current ++;
    }
    append_element(current);
}

//add left and right event listeners to target elements. 
function add_scroll(left = 'scroll_left', right = 'scroll_right'){
    const left_button = document.getElementById(left);
    left_button.addEventListener('click', function(){
        scroll_left();
    })

    const right_button = document.getElementById(right);
    right_button.addEventListener('click', function(){
        scroll_right();
    })
}