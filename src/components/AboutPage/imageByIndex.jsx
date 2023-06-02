import image1 from "src/assets/img1.JPG"
import image2 from "src/assets/img2.JPG"
import image3 from "src/assets/img3.JPG"
import image4 from "src/assets/img4.JPG"

export const images = [image1, image2, image3, image4]

const imageByIndex = (index) => images[index % images.length]

export default imageByIndex;