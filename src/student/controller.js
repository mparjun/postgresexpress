const pool = require('../../db')
const queries =require('./queries')

const getstudents = (req,res)=>{
    pool.query(queries.getstudents,(error,results)=>{
        if (error) throw error;
        res.status(200).json(results.rows)

    })

}

const getstudentsbyid = (req,res)=>{
    const id = parseInt(req.params.id)
    pool.query(queries.getstudentsbyid,[id],(error, results)=>{
        if (error) throw error;
        res.status(200).json(results.rows);
    })
}

const addstudent = (req,res)=>{
    const {name,email,age,dob} = req.body;
    pool.query(queries.checkEmailExits,[email],(error,results)=>{
        if (results.rows.length){
            res.send('email already exits')
        }
        pool.query(queries.addstudent,[name,email,age,dob],(error,results)=>{
            if(error) throw error;
            res.status(201).send('student created successfully')
        })
    })

}

const removestudent =(req, res)=>{
    const id = parseInt(req.params.id)
    pool.query(queries.getstudentsbyid,[id],(error,results)=>{
        const nostudentfound = !results.rows.length
        if(nostudentfound){
        res.send('student does not exist')
        } else{
        pool.query(queries.removestudent,[id],(error,results)=>{
            if (error) throw error
            res.status(200).send('student is deleted')
        })}
    })

}

const updatestudent =(req,res)=>{
    const id = parseInt(req.params.id)
    const { name } = req.body
    post.query(queries.getstudentsbyid,[id],(error,results)=>{
        const nostudentfound = !results.rows.length
        if(nostudentfound){
        res.send('student does not exist')
        }else{
            pool.query(queries.updatestudent,[name,id],(error,results)=>{
                if (error) throw error
                res.status(200).send('student is updated')
            })

        }
    })
}
module.exports = {
    getstudentsbyid,
    getstudents,
    addstudent,
    removestudent,
    updatestudent,

}