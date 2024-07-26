    export const userList = (req, res)=>{
    res.send('Hello')
}
  res.status(200).json({statusText:'success',data})


  export const  newData= ()=>{
   return new Promise((resolve, reject)=>{
      resolve({otp:9000})
   })
 }
