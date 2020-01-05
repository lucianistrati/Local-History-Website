const express = require('express');
const router = express.Router();

//Aducem modelul articolului
let Article = require('../models/article.js');

//Add
router.get('/add',function(req,res){
    res.render('add_article',{
        title:'Add Article'
    });
});

//Submit
router.post('/add',function(req,res){
    req.checkBody('title','Title is required').notEmpty();
    req.checkBody('author','Author is required').notEmpty();
    req.checkBody('body','Body is required').notEmpty();

    //Obtinem erorile
    let errors = req.validationErrors();

    if(error){
        res.render("add_article", {
            title:'Add article',
            errors:errors
        });
    } else {
        let article = new Article();
    article.title = req.body.title;
    article.author = req.body.author;
    article.body = req.body.body;

    article.save(function(err){
        if(err){
            console.log(err);
            return;
        } else {
            req.flash("success","article added");
            res.redirect('/');
        }
    });
    }
});

//Formularul de incarcare
router.get('/edit:id',function(req,res){
    Article.findById(req.params.id,function(err,article){
        res.render('edit_article',{
            title:'Editeaza articol',
            article:article
        });
    });
});

//Formularul de submit
router.post('/edit/:id',function(req,res){
    let article = {};
    article.title = req.body.title;
    article.author = req.body.author;
    article.body = req.body.body;

    let query = {_id:req.params.id}

    Article.update(query,article,function(err){
        if(err){
            console.log(err);
            return;
        } else {
            req.flash('success','Article Updated');
            res.redirect('/');
        }
    });
});

//Stergerea unui articol
router.delete('/:id',function(req,res){
    let query={_id:req.params.id}

    Article.remove(query,function(err){
        if(err){
            console.log(err);
        }
        res.send('Success');
    });
});

//Obtinerea uni singur articol
router.get('/:id',function(req,res){
    Article.findById(req.params.id,function(err,article){
        res.render('article',{
            article:article
        });
    });
});

module.exports = router ;
