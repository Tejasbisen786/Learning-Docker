const express= require('express')
const app= express()

const PORT=process.env.PORT || 8000

app.get('/',(req,res)=>{
    return res.json({messgae:"Hey I'm Node js in container"})

})

app.listen(PORT,()=>{
    console.log(`server is running on port ${PORT}`);
})