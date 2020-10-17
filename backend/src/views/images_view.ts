import Image from '../models/Image';
const { URL_SERVER } = process.env;

export default {
    render(image: Image) {
        return {
            id: image.id,
            url: `${URL_SERVER}/uploads/${image.path}`
        }
    },
    renderMany(images: Image[]) {
        return images.map(image => this.render(image));
    }
}