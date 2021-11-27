import mongoose from 'mongoose'
import dotenv from 'dotenv'
dotenv.config()

mongoose.connect(
	process.env.MONGODBURI,
	{
		useNewUrlParser: true,
		useUnifiedTopology: true,
	},
	(err) => {
		if (!err) {
			console.log( 'Connected to the database')
		} else {
			console.log(err)
		}
	},
)

export default mongoose