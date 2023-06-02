import image1 from "/src/assets/IMG1.JPG"
import image2 from "/src/assets/IMG2.JPG"
import image3 from "/src/assets/IMG3.JPG"
import image4 from "/src/assets/IMG4.JPG"

export const images = [image1, image2, image3, image4]

const imageByIndex = (index) => images[index % images.length]

export default imageByIndex;