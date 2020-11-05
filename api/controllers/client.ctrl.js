const mongoose = require('mongoose');
const Client = require('../models/client.model');
// const { verifiedAuth } = require('../midlewares/authToken.midleware');
const ObjectId = mongoose.Types.ObjectId;
const { createTokenAuth, verifiedToken } = require('../utils');

const readAll = async (req, res, next) =>{
    try{
        let results = [];
        let searchString = req.query.search;
        if (searchString){
            
            const regex = new RegExp(searchString, 'i');
            results = await Client.find({ text: regex })

            console.log('--results--', results);
            // Para búsquedas avanzadas que utilicen palabras parciales, sinónimos y 
            // errores tipográficos, deberá utilizar soluciones de terceros como 
            // Elastic Search, Solr o Algolia.

                              
            // results = [ {message: 'no results' } ]

        }else{

            // PARA PAGINAR PODEMOS USARIO 
            // Access the provided 'page' and 'limt' query parameters
            let page = req.query.page;
            let limit = req.query.limit;

            // let articles = await Article.findAll().paginate({page: page, limit: limit}).exec();
            // results = await Client.find({}).paginate({page: page, limit: limit});
            results = await Client.find({});

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
        const Client = await Client.findById(id);
        res.status(200).json(Client)

    }catch (error) {
        res.status(400).json({ error });
    }
}
const create = async (req, res, next) =>{
    try{
        console.log('--req.body-', req.body)
        const client = new Client(req.body);
        const saveClient = await client.save(); 
        
        res.status(201).json(saveClient)

    }catch (error) {
        console.log('--error-', error)
        res.status(400).json( error );
    }
}
const updateOne = async (req, res, next) =>{
    try{
        let { id } = req.params;
        const updateClient = await Client.update({_id: id}, req.body);
        res.status(200).json(updateClient)

    }catch (error) {
        res.status(400).json({ error });
    }
}
const deleteOne = async (req, res, next) =>{
    try{
        let { id } = req.params;

        const deleteClient = await Client.remove({_id: id});
        res.status(200).json(deleteClient)

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