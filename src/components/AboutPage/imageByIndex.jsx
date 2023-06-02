import image1 from "src/assets/IMG1.jpg"
import image2 from "src/assets/IMG2.jpg"
import image3 from "src/assets/IMG3.jpg"
import image4 from "src/assets/IMG4.jpg"

export const images = [image1, image2, image3, image4]

const imageByIndex = (index) => images[index % images.length]

export default imageByIndex;