const mongoose = require('mongoose');
const Product = require('../models/product.model');
// const { verifiedAuth } = require('../midlewares/authToken.midleware');
const ObjectId = mongoose.Types.ObjectId;
const { createTokenAuth, verifiedToken } = require('../utils');

const readAll = async (req, res, next) =>{
    try{
        let results = [];
        let searchString = req.query.search;
        if (searchString){
            
            const regex = new RegExp(searchString, 'i');
            results = await product.find({ text: regex })

            console.log('--results--', results);
            // Para búsquedas avanzadas que utilicen palabras parciales, sinónimos y 
            // errores tipográficos, deberá utilizar soluciones de terceros como 
            // Elastic Search, Solr o Algolia.

                              
            // results = [ {message: 'no results' } ]

        }else{

            // PARA PAGINAR PODEMOS USARIO 
            // Access the provided 'page' and 'limt' query parameters
            // let page = req.query.page;
            // let limit = req.query.limit;

            // let articles = await Article.findAll().paginate({page: page, limit: limit}).exec();
            // results = await product.find({}).paginate({page: page, limit: limit});
            results = await Product.find({});

            res.status(200).json(results)
        }

    }catch (error) {
        console.log('-error-', error);
        res.status(400).json({ error: error });
    }
}
const readOne = async (req, res, next) =>{
    try{
        let id = {_id: ObjectId(req.params.id)};
        const product = await product.findById(id);
        res.status(200).json(product)

    }catch (error) {
        res.status(400).json({ error });
    }
}
const create = async (req, res, next) =>{
    try{
        console.log('--req.body-', req.body)
        const product = new Product(req.body);
        const saveproduct = await product.save(); 
        
        res.status(201).json(saveproduct)

    }catch (error) {
        console.log('--error-', error)
        res.status(400).json( error );
    }
}
const updateOne = async (req, res, next) =>{
    try{
        let { id } = req.params;
        const updateproduct = await product.update({_id: id}, req.body);
        res.status(200).json(updateproduct)

    }catch (error) {
        res.status(400).json({ error });
    }
}
const deleteOne = async (req, res, next) =>{
    try{
        let { id } = req.params;

        const deleteproduct = await product.remove({_id: id});
        res.status(200).json(deleteproduct)

    }catch (error) {
        res.status(400).json({ error });
    }
}


module.exports = {
    readAll,
    readOne,
    create,
    updateOne,
    deleteOne
}