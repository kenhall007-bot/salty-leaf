import "dotenv/config"
import connectDB from "A:/Fiverr/salty-leaf/src/config/mongoDB"
import GalleryImage from "A:/Fiverr/salty-leaf/src/models/Galleryimage"

async function main() {
    try {
        await connectDB()
        console.log("DB CONNECTED")
        const images = await GalleryImage.find({}).sort({ order: 1, createdAt: -1 })
        console.log("COUNT:", images.length)
        images.forEach((img) =>
            console.log(
                JSON.stringify({
                    _id: img._id,
                    url: img.url,
                    alt: img.alt,
                    category: img.category,
                    order: img.order,
                })
            )
        )
    } catch (err) {
        console.error("REPRO ERROR:")
        console.error(err)
    }
    process.exit(0)
}

main()
