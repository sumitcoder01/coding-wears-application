import { connect } from 'mongoose';
const mongoURI = process.env.MONGO_URI;
const connectToMongo = async () => {
    await connect(mongoURI);
}
export default connectToMongo;