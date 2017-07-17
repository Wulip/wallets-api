const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const WalletSchema = new Schema({
    name: String,
    currentAmount: Number
})

module.exports = mongoose.model('Wallet', WalletSchema);


