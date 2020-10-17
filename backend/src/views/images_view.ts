import Image from '../models/Image';

export default {
    render(image: Image) {
        const { URL_SERVER } = process.env;

        return {
            id: image.id,
            url: `${URL_SERVER}/uploads/${image.path}`
        }
    },
    renderMany(images: Image[]) {
        return images.map(image => this.render(image));
    }
}